"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublicEnv } from "./env";
import type { Database } from "./database.types";

export function createSupabaseBrowserClient() {
  const { anonKey, url } = getSupabasePublicEnv();

  return createBrowserClient<Database>(url, anonKey);
}
