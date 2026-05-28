import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { SiteAccessSession, SiteAccessState } from "./types";

const usersTable = "site_access_users";
const legacyTableName = "safa_cms_store";
const legacyStoreId = "site-access";

let supabaseClient: SupabaseClient | null = null;

function supabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
  return { url, key, configured: Boolean(url && key) };
}

function getSupabaseAdmin() {
  const { url, key, configured } = supabaseConfig();
  if (!configured || !url || !key) return null;

  supabaseClient ??= createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseClient;
}

function isMissingSchema(error: { code?: string; message?: string } | null | undefined) {
  const message = error?.message ?? "";
  return (
    error?.code === "PGRST205" ||
    message.includes("Could not find the table") ||
    message.includes("schema cache")
  );
}

export async function verifySiteAccessSession(session: SiteAccessSession) {
  const client = getSupabaseAdmin();
  if (!client) return true;

  const { data, error } = await client
    .from(usersTable)
    .select("status")
    .eq("id", session.id)
    .maybeSingle();

  if (!error) return data?.status === "active";
  if (!isMissingSchema(error)) return false;

  const legacy = await client
    .from(legacyTableName)
    .select("data")
    .eq("id", legacyStoreId)
    .maybeSingle();

  if (legacy.error) return false;
  const state = legacy.data?.data as SiteAccessState | undefined;
  const user = state?.users?.find((item) => item.id === session.id);
  return user?.status === "active";
}
