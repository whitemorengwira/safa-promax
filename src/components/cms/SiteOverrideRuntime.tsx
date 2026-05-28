"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { SiteOverrideRecord } from "@/lib/cms/site-overrides-types";

type RuntimeMode = "public" | "editor";

const textSelector = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "a",
  "button",
  "li",
  "td",
  "th",
  "blockquote",
  "figcaption",
  "span",
].join(",");

const editorParam = "cms-editor";
const previewParam = "cms-preview";
const previewTokenParam = "cms-token";

function normaliseRoute(route: string) {
  const clean = String(route || "/").split("?")[0].split("#")[0].trim() || "/";
  const withSlash = clean.startsWith("/") ? clean : `/${clean}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, "") : "/";
}

function fingerprint(value: string) {
  let hash = 5381;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 33) ^ value.charCodeAt(index);
  }
  return (hash >>> 0).toString(36);
}

function isVisible(element: Element) {
  const style = window.getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
}

function cssPath(element: Element) {
  const parts: string[] = [];
  let current: Element | null = element;

  while (current && current !== document.body && current !== document.documentElement) {
    const tag = current.tagName.toLowerCase();
    const parentElement: Element | null = current.parentElement;
    if (!parentElement) break;

    const siblings = Array.from(parentElement.children).filter((child): child is Element => child.tagName === current?.tagName);
    const nth = siblings.indexOf(current) + 1;
    parts.unshift(`${tag}:nth-of-type(${nth})`);

    if (tag === "main" || tag === "header" || tag === "footer") break;
    current = parentElement;
  }

  return parts.join(">");
}

function textValue(element: Element) {
  return (element.getAttribute("aria-label") || element.textContent || "").replace(/\s+/g, " ").trim();
}

function imageTarget(element: Element) {
  if (element instanceof HTMLImageElement) return element;
  return element.querySelector("img");
}

function isEditableTextElement(element: Element) {
  if (!(element instanceof HTMLElement)) return false;
  if (element.closest("[data-cms-editor-ui]")) return false;
  if (element.closest("[data-cms-hidden-in-editor]")) return false;
  if (element.closest("[data-cms-nav-link]")) return false;
  if (!isVisible(element)) return false;

  const tag = element.tagName.toLowerCase();
  if (tag === "span") {
    const parentText = element.parentElement?.closest("h1,h2,h3,h4,h5,h6,p,a,button,li,td,th,blockquote,figcaption");
    if (parentText) return false;
  }

  const value = textValue(element);
  if (value.length < 2) return false;
  if (/^[•·|\-–—]+$/.test(value)) return false;

  return true;
}

function overrideId(route: string, elementType: SiteOverrideRecord["elementType"], selector: string) {
  return `${route}:${elementType}:${selector}`;
}

export function SiteOverrideRuntime() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const route = normaliseRoute(pathname || "/");
  const mode: RuntimeMode = searchParams.get(editorParam) === "true" ? "editor" : "public";
  const previewToken = searchParams.get(previewTokenParam) || "";
  const isPreview = searchParams.get(previewParam) === "true" && Boolean(previewToken);
  const overridesRef = useRef<Map<string, SiteOverrideRecord>>(new Map());
  const originalsRef = useRef<Map<string, { text?: string; src?: string; srcset?: string; alt?: string }>>(new Map());

  useEffect(() => {
    let cancelled = false;

    function rememberOriginal(selector: string, element: Element, elementType: SiteOverrideRecord["elementType"]) {
      if (originalsRef.current.has(selector)) return;
      if (elementType === "text") {
        originalsRef.current.set(selector, { text: textValue(element) });
        return;
      }
      const image = imageTarget(element);
      if (!image) return;
      originalsRef.current.set(selector, {
        src: image.getAttribute("src") || image.currentSrc || "",
        srcset: image.getAttribute("srcset") || "",
        alt: image.getAttribute("alt") || element.getAttribute("data-cms-image-alt") || "",
      });
    }

    function recordFor(element: Element, elementType: SiteOverrideRecord["elementType"], value?: string): SiteOverrideRecord {
      const selector = cssPath(element);
      const image = elementType === "image" ? imageTarget(element) : null;
      const source =
        elementType === "text"
          ? textValue(element)
          : `${image?.currentSrc || image?.src || element.getAttribute("data-cms-image-src") || ""}|${image?.alt || element.getAttribute("data-cms-image-alt") || ""}`;

      return {
        id: overrideId(route, elementType, selector),
        route,
        elementType,
        selector,
        originalFingerprint: fingerprint(source),
        value,
        altText: elementType === "image" ? image?.alt || element.getAttribute("data-cms-image-alt") || "" : undefined,
        deleted: false,
        updatedAt: new Date().toISOString(),
      };
    }

    function applyOverride(record: SiteOverrideRecord) {
      const element = document.querySelector(record.selector);
      if (!element) return;
      rememberOriginal(record.selector, element, record.elementType);

      if (record.elementType === "text") {
        if (record.value !== undefined) {
          element.textContent = record.value;
          if (element.hasAttribute("aria-label")) element.setAttribute("aria-label", record.value);
        }
        return;
      }

      const image = imageTarget(element);
      if (!image) return;
      if (record.deleted) {
        if (mode === "editor") {
          image.style.opacity = "0.22";
          image.style.filter = "grayscale(1)";
          image.dataset.cmsDeleted = "true";
        } else {
          image.style.display = "none";
        }
      } else {
        image.style.opacity = "";
        image.style.filter = "";
        image.style.display = "";
        delete image.dataset.cmsDeleted;
      }

      if (record.value) {
        image.removeAttribute("srcset");
        image.src = record.value;
      }
      if (record.altText !== undefined) image.alt = record.altText;
      if (record.value) element.setAttribute("data-cms-image-src", record.value);
      if (record.altText !== undefined) element.setAttribute("data-cms-image-alt", record.altText);
    }

    function restoreOriginal(selector: string) {
      const element = document.querySelector(selector);
      const original = originalsRef.current.get(selector);
      if (!element || !original) return;

      const image = imageTarget(element);
      if (image) {
        image.style.opacity = "";
        image.style.filter = "";
        image.style.display = "";
        delete image.dataset.cmsDeleted;
        if (original.srcset) image.setAttribute("srcset", original.srcset);
        else image.removeAttribute("srcset");
        if (original.src) image.src = original.src;
        image.alt = original.alt ?? "";
        element.setAttribute("data-cms-image-src", original.src ?? "");
        element.setAttribute("data-cms-image-alt", original.alt ?? "");
      } else if (original.text !== undefined) {
        element.textContent = original.text;
      }
    }

    function applyAllOverrides() {
      for (const record of overridesRef.current.values()) applyOverride(record);
    }

    function postChange() {
      window.parent.postMessage(
        {
          type: "safa-cms-overrides-changed",
          route,
          overrides: Array.from(overridesRef.current.values()),
        },
        window.location.origin,
      );
    }

    function upsertOverride(record: SiteOverrideRecord, apply = true) {
      overridesRef.current.set(record.selector, { ...record, updatedAt: new Date().toISOString() });
      if (apply) applyOverride(record);
      postChange();
    }

    function removeOverride(selector: string) {
      overridesRef.current.delete(selector);
      restoreOriginal(selector);
      postChange();
    }

    function scanText() {
      const elements = Array.from(document.querySelectorAll(textSelector)).filter(isEditableTextElement) as HTMLElement[];
      for (const element of elements) {
        const selector = cssPath(element);
        if (!selector) continue;
        element.dataset.cmsSelector = selector;
        rememberOriginal(selector, element, "text");

        if (mode !== "editor" || element.dataset.cmsTextReady === "true") continue;
        element.dataset.cmsTextReady = "true";
        element.classList.add("cms-editable-text");
        element.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          document.querySelectorAll("[contenteditable='true']").forEach((candidate) => {
            if (candidate !== element) candidate.removeAttribute("contenteditable");
          });
          element.setAttribute("contenteditable", "true");
          element.focus();
          showTextToolbar(element);
        });
        element.addEventListener("input", () => {
          upsertOverride({ ...recordFor(element, "text", element.innerText.trim()), value: element.innerText.trim() }, false);
        });
        element.addEventListener("blur", () => {
          window.setTimeout(() => {
            if (!document.querySelector("[data-cms-editor-ui]:hover")) element.removeAttribute("contenteditable");
          }, 180);
        });
      }
    }

    function showTextToolbar(element: HTMLElement) {
      document.querySelectorAll("[data-cms-text-toolbar]").forEach((toolbar) => toolbar.remove());
      const rect = element.getBoundingClientRect();
      const toolbar = document.createElement("div");
      toolbar.dataset.cmsEditorUi = "true";
      toolbar.dataset.cmsTextToolbar = "true";
      toolbar.className = "cms-text-toolbar";
      toolbar.style.top = `${Math.max(12, rect.top + window.scrollY - 48)}px`;
      toolbar.style.left = `${Math.max(12, rect.left + window.scrollX)}px`;

      const commands: Array<[string, string, string?]> = [
        ["B", "bold"],
        ["I", "italic"],
        ["U", "underline"],
        ["H2", "formatBlock", "h2"],
        ["H3", "formatBlock", "h3"],
        ["•", "insertUnorderedList"],
        ["1.", "insertOrderedList"],
        ["←", "justifyLeft"],
        ["↔", "justifyCenter"],
        ["→", "justifyRight"],
      ];

      for (const [label, command, value] of commands) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.addEventListener("mousedown", (event) => {
          event.preventDefault();
          document.execCommand(command, false, value);
          upsertOverride({ ...recordFor(element, "text", element.innerText.trim()), value: element.innerText.trim() }, false);
        });
        toolbar.append(button);
      }

      const link = document.createElement("button");
      link.type = "button";
      link.textContent = "Link";
      link.addEventListener("mousedown", (event) => {
        event.preventDefault();
        const href = window.prompt("Link URL");
        if (href) document.execCommand("createLink", false, href);
        upsertOverride({ ...recordFor(element, "text", element.innerText.trim()), value: element.innerText.trim() }, false);
      });
      toolbar.append(link);
      document.body.append(toolbar);
    }

    async function uploadImage(file: File) {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch("/api/admin/cms/media", { method: "POST", body: form });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.error || "Image upload failed.");
      return payload.media?.url as string;
    }

    function installImageControls(element: Element, host: HTMLElement, selector: string) {
      const marker = element as HTMLElement;
      if (mode !== "editor" || marker.dataset.cmsImageReady === "true") return;
      const image = imageTarget(element);
      if (!image) return;
      marker.dataset.cmsImageReady = "true";
      element.classList.add("cms-editable-image");
      if (window.getComputedStyle(host).position === "static") host.style.position = "relative";

      const controls = document.createElement("div");
      controls.dataset.cmsEditorUi = "true";
      controls.className = "cms-image-controls";

      const makeButton = (label: string, title: string, onClick: () => void | Promise<void>) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.title = title;
        button.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          void onClick();
        });
        controls.append(button);
      };

      makeButton("Upload", "Replace from upload", async () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async () => {
          const file = input.files?.[0];
          if (!file) return;
          const url = await uploadImage(file);
          upsertOverride({ ...recordFor(element, "image", url), value: url, altText: image.alt, deleted: false });
        };
        input.click();
      });
      makeButton("URL", "Replace from URL", () => {
        const url = window.prompt("Image URL", image.currentSrc || image.src);
        if (!url) return;
        upsertOverride({ ...recordFor(element, "image", url), value: url, altText: image.alt, deleted: false });
      });
      makeButton("Alt", "Edit alt text", () => {
        const altText = window.prompt("Alt text", image.alt);
        if (altText === null) return;
        const current = overridesRef.current.get(selector) ?? recordFor(element, "image", image.currentSrc || image.src);
        upsertOverride({ ...current, altText });
      });
      makeButton("Delete", "Delete image", () => {
        const current = overridesRef.current.get(selector) ?? recordFor(element, "image", image.currentSrc || image.src);
        upsertOverride({ ...current, deleted: true });
      });
      makeButton("Restore", "Restore original image", () => removeOverride(selector));

      host.append(controls);
    }

    function scanImageSlots() {
      const slots = Array.from(document.querySelectorAll("[data-cms-image-slot]")).filter(isVisible) as HTMLElement[];
      for (const slot of slots) {
        const selector = cssPath(slot);
        if (!selector || !imageTarget(slot)) continue;
        slot.dataset.cmsSelector = selector;
        rememberOriginal(selector, slot, "image");
        const host = (slot.closest(".page-hero") as HTMLElement | null) ?? slot;
        installImageControls(slot, host, selector);
      }
    }

    function scanImages() {
      const images = Array.from(document.querySelectorAll("img")).filter((image) => {
        if (!(image instanceof HTMLImageElement)) return false;
        if (image.closest("[data-cms-editor-ui]")) return false;
        if (image.closest("[data-cms-image-slot]")) return false;
        return isVisible(image);
      }) as HTMLImageElement[];

      for (const image of images) {
        const selector = cssPath(image);
        if (!selector) continue;
        image.dataset.cmsSelector = selector;
        rememberOriginal(selector, image, "image");
        const host = image.parentElement;
        if (!host) continue;
        installImageControls(image, host, selector);
      }
    }

    function installEditorChrome() {
      if (mode !== "editor") return;
      document.documentElement.dataset.cmsEditorMode = "true";
      document.querySelectorAll('a[href="/admin"], a[href^="/admin?"]').forEach((element) => {
        (element as HTMLElement).dataset.cmsHiddenInEditor = "true";
        (element as HTMLElement).style.display = "none";
      });
      document.addEventListener(
        "click",
        (event) => {
          const anchor = (event.target as HTMLElement | null)?.closest("a[href]");
          if (!anchor) return;
          const href = anchor.getAttribute("href") || "";
          if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
          event.preventDefault();
          event.stopPropagation();
          window.parent.postMessage(
            { type: "safa-cms-navigate", route: normaliseRoute(new URL(href, window.location.origin).pathname) },
            window.location.origin,
          );
        },
        true,
      );
    }

    async function loadPublishedOrPreviewOverrides() {
      if (mode === "editor") return;
      const params = new URLSearchParams({ route });
      if (isPreview) {
        params.set("preview", "true");
        params.set("token", previewToken);
      }
      const response = await fetch(`/api/cms/site-overrides?${params.toString()}`);
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.overrides) return;
      overridesRef.current = new Map(
        (payload.overrides as SiteOverrideRecord[]).map((record) => [record.selector, record]),
      );
      applyAllOverrides();
    }

    function rescan() {
      scanText();
      scanImageSlots();
      scanImages();
      applyAllOverrides();
    }

    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "safa-cms-load-overrides") {
        overridesRef.current = new Map(
          ((event.data.overrides ?? []) as SiteOverrideRecord[]).map((record) => [record.selector, record]),
        );
        rescan();
      }
    }

    installRuntimeStyles();
    installEditorChrome();
    window.addEventListener("message", handleMessage);
    void loadPublishedOrPreviewOverrides();

    const timers = [120, 800, 1800].map((delay) => window.setTimeout(() => !cancelled && rescan(), delay));
    const observer =
      mode === "editor"
        ? new MutationObserver(() => {
            window.setTimeout(() => !cancelled && rescan(), 50);
          })
        : null;
    observer?.observe(document.body, { childList: true, subtree: true });

    if (mode === "editor") {
      window.parent.postMessage({ type: "safa-cms-editor-ready", route }, window.location.origin);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("message", handleMessage);
      timers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
    };
  }, [isPreview, mode, previewToken, route]);

  return null;
}

function installRuntimeStyles() {
  if (document.getElementById("safa-cms-runtime-styles")) return;
  const style = document.createElement("style");
  style.id = "safa-cms-runtime-styles";
  style.textContent = `
    html[data-cms-editor-mode="true"] .cms-editable-text {
      cursor: text;
      outline: 1px solid transparent;
      outline-offset: 4px;
      transition: outline-color 160ms ease, background-color 160ms ease;
    }
    html[data-cms-editor-mode="true"] .cms-editable-text:hover,
    html[data-cms-editor-mode="true"] .cms-editable-text[contenteditable="true"] {
      outline-color: rgba(224, 194, 104, 0.85);
      background: rgba(224, 194, 104, 0.08);
    }
    html[data-cms-editor-mode="true"] .cms-editable-image {
      outline: 1px solid transparent;
      outline-offset: -1px;
      transition: outline-color 160ms ease;
    }
    html[data-cms-editor-mode="true"] .cms-editable-image:hover {
      outline-color: rgba(224, 194, 104, 0.9);
    }
    .cms-text-toolbar {
      position: absolute;
      z-index: 2147483000;
      display: flex;
      gap: 4px;
      border: 1px solid rgba(224, 194, 104, 0.35);
      background: rgba(10, 10, 10, 0.94);
      padding: 6px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    }
    .cms-text-toolbar button,
    .cms-image-controls button {
      border: 1px solid rgba(224, 194, 104, 0.25);
      background: rgba(224, 194, 104, 0.12);
      color: #f6df95;
      font: 700 11px/1.1 system-ui, sans-serif;
      padding: 7px 8px;
      cursor: pointer;
    }
    .cms-text-toolbar button:hover,
    .cms-image-controls button:hover {
      background: #e0c268;
      color: #0b0b0b;
    }
    .cms-image-controls {
      position: absolute;
      z-index: 2147482000;
      top: 10px;
      right: 10px;
      display: none;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 5px;
      max-width: min(96%, 360px);
      pointer-events: auto;
    }
    *:hover > .cms-image-controls,
    .cms-image-controls:hover {
      display: flex;
    }
  `;
  document.head.append(style);
}
