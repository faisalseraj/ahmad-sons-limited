import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client with secret key (bypasses RLS).
 * Use only in Server Components, API routes, and server actions.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const secretKey = process.env.SUPABASE_SECRET_KEY!;

export const supabaseAdmin =
  supabaseUrl && secretKey
    ? createClient(supabaseUrl, secretKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      })
    : null;
