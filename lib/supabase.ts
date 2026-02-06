import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

if (!supabaseUrl || !publishableKey) {
  console.warn(
    'Supabase env vars missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env'
  );
}

/** Browser/client Supabase client (publishable key). Use for auth and RLS-protected data. */
export const supabase =
  supabaseUrl && publishableKey ? createClient(supabaseUrl, publishableKey) : null;

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
};
