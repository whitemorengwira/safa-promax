import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const publicDir = path.join(projectRoot, "public");
const publicImagesDir = path.join(publicDir, "images");
const outputFile = path.join(projectRoot, "src", "generated", "media-gallery-manifest.json");
const outputDir = path.dirname(outputFile);

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const textExtensions = new Set([".css", ".json", ".md", ".mdx", ".ts", ".tsx", ".js", ".jsx"]);
const usageRoots = [
  path.join(projectRoot, "src"),
  path.join(projectRoot, "content"),
  path.join(projectRoot, "data"),
];

function normalizeUrlKey(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url, "https://safa.local");
    return parsed.pathname;
  } catch {
    return url.split("?")[0].split("#")[0];
  }
}

function titleFromUrl(url) {
  const filename = decodeURIComponent((url.split("?")[0].split("#")[0].split("/").pop() || "Image").trim());
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function assetIdFromUrl(url) {
  return `public-${url.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 96)}`;
}

function extensionFor(url) {
  const pathname = normalizeUrlKey(url);
  const filename = pathname.split("/").pop() || "";
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex >= 0 ? filename.slice(dotIndex + 1).toLowerCase() : "";
}

function readUInt24LE(buffer, offset) {
  return buffer[offset] + (buffer[offset + 1] << 8) + (buffer[offset + 2] << 16);
}

function svgDimensions(buffer) {
  const source = buffer.toString("utf8", 0, Math.min(buffer.length, 4096));
  const width = source.match(/\bwidth=["']?([\d.]+)/i);
  const height = source.match(/\bheight=["']?([\d.]+)/i);
  if (width && height) return { width: Math.round(Number(width[1])), height: Math.round(Number(height[1])) };

  const viewBox = source.match(/\bviewBox=["']\s*-?[\d.]+\s+-?[\d.]+\s+([\d.]+)\s+([\d.]+)["']/i);
  if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };

  return { width: 0, height: 0 };
}

function imageDimensions(buffer, extension) {
  try {
    if (extension === "png" && buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
      return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    }

    if ((extension === "jpg" || extension === "jpeg") && buffer[0] === 0xff && buffer[1] === 0xd8) {
      let offset = 2;
      while (offset + 9 < buffer.length) {
        if (buffer[offset] !== 0xff) {
          offset += 1;
          continue;
        }
        const marker = buffer[offset + 1];
        const length = buffer.readUInt16BE(offset + 2);
        if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
          return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
        }
        offset += 2 + length;
      }
    }

    if (extension === "gif" && buffer.length >= 10 && buffer.toString("ascii", 0, 3) === "GIF") {
      return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
    }

    if (extension === "webp" && buffer.length >= 30 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP") {
      const chunk = buffer.toString("ascii", 12, 16);
      if (chunk === "VP8X") {
        return { width: readUInt24LE(buffer, 24) + 1, height: readUInt24LE(buffer, 27) + 1 };
      }
      if (chunk === "VP8L" && buffer.length >= 25) {
        const b0 = buffer[21];
        const b1 = buffer[22];
        const b2 = buffer[23];
        const b3 = buffer[24];
        return {
          width: 1 + (((b1 & 0x3f) << 8) | b0),
          height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
        };
      }
      const startCode = buffer.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
      if (startCode >= 0 && startCode + 7 < buffer.length) {
        return {
          width: buffer.readUInt16LE(startCode + 3) & 0x3fff,
          height: buffer.readUInt16LE(startCode + 5) & 0x3fff,
        };
      }
    }

    if (extension === "svg") return svgDimensions(buffer);
  } catch {
    return { width: 0, height: 0 };
  }

  return { width: 0, height: 0 };
}

async function walkFiles(root, predicate, options = {}) {
  const files = [];
  const skipDirectories = options.skipDirectories ?? [];

  async function walk(directory) {
    if (skipDirectories.some((skip) => path.resolve(directory) === path.resolve(skip))) return;

    const entries = await fs.readdir(directory, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && predicate(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  await walk(root);
  return files.sort((a, b) => a.localeCompare(b));
}

function usageLabel(file) {
  const relative = path.relative(projectRoot, file).replace(/\\/g, "/");
  if (relative === "src/app/page.tsx") return "/";
  const pageMatch = relative.match(/^src\/app\/(.+)\/page\.(tsx|ts|jsx|js)$/);
  if (pageMatch) {
    return `/${pageMatch[1].replace(/\/\([^)]+\)/g, "").replace(/\/page$/, "")}`.replace(/\/+/g, "/");
  }
  return relative;
}

async function buildUsageByUrl() {
  const usage = new Map();

  for (const root of usageRoots) {
    const files = await walkFiles(
      root,
      (file) => textExtensions.has(path.extname(file).toLowerCase()),
      { skipDirectories: [outputDir] },
    );

    for (const file of files) {
      const content = await fs.readFile(file, "utf8").catch(() => "");
      const matches = content.match(/\/images\/[A-Za-z0-9/_@.\-]+/g) ?? [];
      for (const match of matches) {
        const key = normalizeUrlKey(match);
        if (!usage.has(key)) usage.set(key, new Set());
        usage.get(key).add(usageLabel(file));
      }
    }
  }

  return usage;
}

async function buildStaticAssets(usageByUrl) {
  const files = await walkFiles(publicImagesDir, (file) => imageExtensions.has(path.extname(file).toLowerCase()));
  const assets = [];

  for (const file of files) {
    const relative = path.relative(publicDir, file).replace(/\\/g, "/");
    const url = `/${relative}`;
    const extension = extensionFor(url);
    const stat = await fs.stat(file);
    const buffer = await fs.readFile(file);
    const dimensions = imageDimensions(buffer, extension);
    const usedOn = Array.from(usageByUrl.get(normalizeUrlKey(url)) ?? []).sort();

    assets.push({
      id: assetIdFromUrl(url),
      url,
      title: titleFromUrl(url),
      source: "SAFA public image library",
      tags: [
        "public",
        usedOn.length ? "used" : "unused",
        url.includes("/ai/") ? "generated" : "static",
      ],
      locked: true,
      width: dimensions.width,
      height: dimensions.height,
      size: stat.size,
      extension,
      usedOn,
      origin: "public",
      type: "image",
    });
  }

  return assets.sort((a, b) => a.url.localeCompare(b.url));
}

function usageObject(usageByUrl) {
  return Object.fromEntries(
    Array.from(usageByUrl.entries())
      .map(([url, labels]) => [url, Array.from(labels).sort()])
      .sort(([a], [b]) => a.localeCompare(b)),
  );
}

const usageByUrl = await buildUsageByUrl();
const assets = await buildStaticAssets(usageByUrl);
const manifest = {
  version: 1,
  assets,
  usageByUrl: usageObject(usageByUrl),
};

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(outputFile, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Generated ${path.relative(projectRoot, outputFile)} with ${assets.length} assets.`);
