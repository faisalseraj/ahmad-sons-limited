/**
 * Environment values from .env (project root).
 * Valid variables: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, SUPABASE_SECRET_KEY.
 * NEXT_PUBLIC_* are exposed to the client; SUPABASE_SECRET_KEY is server-side only.
 */
const env = {
  get NEXT_PUBLIC_SUPABASE_URL() {
    return import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
  },
  get NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY() {
    return import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  },
  get SUPABASE_SECRET_KEY() {
    return import.meta.env.SUPABASE_SECRET_KEY;
  },
} as const;

export default env;
