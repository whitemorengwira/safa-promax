import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";
import process from "process";
import { createClient } from "@supabase/supabase-js";

const owner = {
  email: "hello@nwhite.systems",
  name: "Whitemore Ngwira",
  organisation: "NWhite Systems",
  cmsRole: "super_admin",
  siteRole: "executive",
};

const cmsStoreTable = "safa_cms_store";
const cmsStoreId = "default";
const siteUsersTable = "site_access_users";
const siteAuditTable = "site_access_audit_log";
const cwd = process.cwd();
const cmsStorePath = path.join(cwd, "data", "cms", "content-store.json");
const siteStorePath = path.join(cwd, "data", "site-access", "store.json");

function now() {
  return new Date().toISOString();
}

function normaliseEmail(email) {
  return String(email || "").toLowerCase().trim();
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function parseEnvValue(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function loadEnvFile(filename) {
  const filePath = path.join(cwd, filename);
  try {
    const contents = await fs.readFile(filePath, "utf8");
    const env = {};
    for (const rawLine of contents.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;

      const separator = line.indexOf("=");
      if (separator < 0) continue;

      const key = line.slice(0, separator).trim();
      const value = parseEnvValue(line.slice(separator + 1));
      if (key) env[key] = value;
    }
    return env;
  } catch (error) {
    if (error?.code === "ENOENT") return {};
    throw error;
  }
}

async function loadEnv() {
  return {
    ...(await loadEnvFile(".env")),
    ...(await loadEnvFile(".env.local")),
    ...process.env,
  };
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8").trim();
}

async function resolvePassword(env, args) {
  if (args.has("--password-stdin")) return readStdin();
  if (env.SAFA_OWNER_PASSWORD) return env.SAFA_OWNER_PASSWORD;

  const adminEmail = normaliseEmail(env.SAFA_ADMIN_EMAIL || env.ADMIN_EMAIL);
  if (adminEmail === owner.email && env.SAFA_ADMIN_PASSWORD) return env.SAFA_ADMIN_PASSWORD;

  return "";
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function emptyCmsStore(timestamp) {
  return {
    updatedAt: timestamp,
    siteSettings: {
      siteName: "SA Film Academy",
      publicUrl: "",
      brandLine: "",
      cmsMode: "file-store",
      requiresApproval: false,
    },
    pages: [],
    media: [],
    users: [],
    approvals: [],
    auditLog: [],
  };
}

function emptySiteStore(timestamp) {
  return {
    updatedAt: timestamp,
    users: [],
    auditLog: [],
  };
}

function ensureCmsOwner(store, passwordHash, timestamp, source) {
  const next = {
    ...emptyCmsStore(timestamp),
    ...store,
    siteSettings: {
      ...emptyCmsStore(timestamp).siteSettings,
      ...(store?.siteSettings || {}),
    },
    pages: Array.isArray(store?.pages) ? store.pages : [],
    media: Array.isArray(store?.media) ? store.media : [],
    users: Array.isArray(store?.users) ? store.users : [],
    approvals: Array.isArray(store?.approvals) ? store.approvals : [],
    auditLog: Array.isArray(store?.auditLog) ? store.auditLog : [],
  };

  const user = next.users.find((item) => normaliseEmail(item.email) === owner.email);
  const createdAt = user?.createdAt || timestamp;
  const approvedAt = user?.approvedAt || timestamp;

  if (user) {
    user.email = owner.email;
    user.name = user.name || owner.name;
    user.role = owner.cmsRole;
    user.status = "active";
    user.passwordHash = passwordHash;
    user.createdAt = createdAt;
    user.approvedAt = approvedAt;
  } else {
    next.users.push({
      id: `user-owner-${crypto.createHash("sha1").update(owner.email).digest("hex").slice(0, 16)}`,
      email: owner.email,
      name: owner.name,
      role: owner.cmsRole,
      status: "active",
      passwordHash,
      createdAt,
      approvedAt,
    });
  }

  next.auditLog.unshift({
    id: id("owner-cms-access-ensured"),
    action: "owner_cms_access_ensured",
    actor: "owner-provisioning",
    summary: `Owner CMS super admin access ensured for ${owner.email}.`,
    createdAt: timestamp,
  });
  next.updatedAt = timestamp;
  if (source === "supabase") next.siteSettings.cmsMode = "supabase";

  return {
    store: next,
    action: user ? "updated" : "created",
  };
}

function ensureSiteOwner(state, passwordHash, timestamp) {
  const next = {
    ...emptySiteStore(timestamp),
    ...state,
    users: Array.isArray(state?.users) ? state.users : [],
    auditLog: Array.isArray(state?.auditLog) ? state.auditLog : [],
  };

  const user = next.users.find((item) => normaliseEmail(item.email) === owner.email);
  const createdAt = user?.createdAt || timestamp;
  const approvedAt = user?.approvedAt || timestamp;

  if (user) {
    user.email = owner.email;
    user.name = user.name || owner.name;
    user.organisation = user.organisation || owner.organisation;
    user.role = owner.siteRole;
    user.status = "active";
    user.passwordHash = passwordHash;
    user.createdAt = createdAt;
    user.updatedAt = timestamp;
    user.approvedAt = approvedAt;
    user.approvedBy = user.approvedBy || "owner-provisioning";
    delete user.revokedAt;
  } else {
    next.users.unshift({
      id: `site-user-owner-${crypto.createHash("sha1").update(owner.email).digest("hex").slice(0, 16)}`,
      email: owner.email,
      name: owner.name,
      organisation: owner.organisation,
      role: owner.siteRole,
      status: "active",
      passwordHash,
      createdAt,
      updatedAt: timestamp,
      approvedAt,
      approvedBy: "owner-provisioning",
    });
  }

  next.auditLog.unshift({
    id: id("owner-site-access-ensured"),
    action: "owner_site_access_ensured",
    actor: "owner-provisioning",
    summary: `Owner presentation access approved for ${owner.email}.`,
    createdAt: timestamp,
  });
  next.updatedAt = timestamp;

  return {
    state: next,
    action: user ? "updated" : "created",
  };
}

function supabaseClient(env) {
  const url = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY;
  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function ensureSupabaseCms(client, passwordHash, timestamp) {
  const { data, error } = await client
    .from(cmsStoreTable)
    .select("data")
    .eq("id", cmsStoreId)
    .maybeSingle();

  if (error) throw new Error(`Supabase CMS read failed: ${error.message}`);

  const localSeed = await readJson(cmsStorePath, emptyCmsStore(timestamp));
  const currentStore = data?.data && typeof data.data === "object" ? data.data : localSeed;
  const { store, action } = ensureCmsOwner(currentStore, passwordHash, timestamp, "supabase");

  const { error: saveError } = await client
    .from(cmsStoreTable)
    .upsert(
      {
        id: cmsStoreId,
        data: store,
        updated_at: timestamp,
      },
      { onConflict: "id" },
    );

  if (saveError) throw new Error(`Supabase CMS save failed: ${saveError.message}`);
  return action;
}

async function ensureSupabaseSiteAccess(client, passwordHash, timestamp) {
  const { data: existing, error: readError } = await client
    .from(siteUsersTable)
    .select("id,created_at,approved_at,approved_by")
    .eq("email", owner.email)
    .maybeSingle();

  if (readError) throw new Error(`Supabase site-access read failed: ${readError.message}`);

  const row = {
    id: existing?.id || `site-user-owner-${crypto.createHash("sha1").update(owner.email).digest("hex").slice(0, 16)}`,
    email: owner.email,
    name: owner.name,
    organisation: owner.organisation,
    role: owner.siteRole,
    status: "active",
    password_hash: passwordHash,
    created_at: existing?.created_at || timestamp,
    updated_at: timestamp,
    approved_at: existing?.approved_at || timestamp,
    revoked_at: null,
    approved_by: existing?.approved_by || "owner-provisioning",
  };

  const { error: saveError } = await client
    .from(siteUsersTable)
    .upsert(row, { onConflict: "email" });

  if (saveError) throw new Error(`Supabase site-access save failed: ${saveError.message}`);

  const { error: auditError } = await client.from(siteAuditTable).insert({
    id: id("owner-site-access-ensured"),
    action: "owner_site_access_ensured",
    actor: "owner-provisioning",
    summary: `Owner presentation access approved for ${owner.email}.`,
    created_at: timestamp,
  });

  if (auditError) {
    console.warn(`Live presentation audit warning: ${auditError.message}`);
  }

  return existing ? "updated" : "created";
}

async function ensureLocalStores(cmsPasswordHash, sitePasswordHash, timestamp) {
  const cmsStore = await readJson(cmsStorePath, emptyCmsStore(timestamp));
  const siteStore = await readJson(siteStorePath, emptySiteStore(timestamp));

  const cms = ensureCmsOwner(cmsStore, cmsPasswordHash, timestamp, "local");
  const site = ensureSiteOwner(siteStore, sitePasswordHash, timestamp);

  await writeJson(cmsStorePath, cms.store);
  await writeJson(siteStorePath, site.state);

  return {
    cms: cms.action,
    site: site.action,
  };
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const env = await loadEnv();
  const password = await resolvePassword(env, args);

  if (!password) {
    throw new Error(
      "Owner password is required. Set SAFA_OWNER_PASSWORD for this run or pipe it with --password-stdin.",
    );
  }

  if (password.length < 8) {
    throw new Error("Owner password must be at least 8 characters.");
  }

  const timestamp = now();
  const cmsPasswordHash = hashPassword(password);
  const sitePasswordHash = hashPassword(password);

  const client = args.has("--local-only") ? null : supabaseClient(env);
  if (!client && !args.has("--local-only")) {
    throw new Error("Supabase service role configuration is missing.");
  }

  if (client) {
    const cmsAction = await ensureSupabaseCms(client, cmsPasswordHash, timestamp);
    const siteAction = await ensureSupabaseSiteAccess(client, sitePasswordHash, timestamp);
    console.log(`Live CMS owner ${cmsAction}.`);
    console.log(`Live presentation owner ${siteAction}.`);
  }

  if (!args.has("--skip-local")) {
    const local = await ensureLocalStores(cmsPasswordHash, sitePasswordHash, timestamp);
    console.log(`Local CMS owner ${local.cms}.`);
    console.log(`Local presentation owner ${local.site}.`);
  }

  console.log("Owner access provisioning complete.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
