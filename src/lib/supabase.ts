import { createClient } from '@supabase/supabase-js';
import env from '../env';

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const secretKey = env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !publishableKey) {
  console.warn(
    'Supabase env vars missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env'
  );
}

/** Browser/client Supabase client (publishable key). Use for auth, contact form, and RLS-protected data. */
export const supabase =
  supabaseUrl && publishableKey ? createClient(supabaseUrl, publishableKey) : null;

/**
 * Server-side Supabase client with secret key (bypasses RLS).
 * Only use in server/API code – never in browser. Null in client because SUPABASE_SECRET_KEY is not exposed.
 */
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

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
};
