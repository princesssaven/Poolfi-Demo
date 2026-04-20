import { createClient } from "@supabase/supabase-js";

// This module is imported by client components, so it must only rely on
// browser-safe env vars that Next.js exposes at build time.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Storage uploads will not work."
  );
}

// We only use this client for Storage. Database and Auth have their own setup in this project.
export const supabaseStorageClient = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder"
);
