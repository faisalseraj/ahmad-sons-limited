
  # Ahmad sons limited

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Contact form & Admin (Supabase)

  The Contact Us form saves submissions to Supabase. Admins can log in and view all submissions.

  1. Create a project at [supabase.com](https://supabase.com) and get your project URL and anon key (Settings → API).
  2. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
  3. In the Supabase SQL Editor, run the script in `supabase/contact_submissions.sql` to create the `contact_submissions` table and RLS policies.
  4. Create an admin user: Supabase Dashboard → Authentication → Users → Add user (email + password). Sign in at **/admin** (navigate to `your-site.com/admin`).
  5. The **/admin** page requires authentication: visitors see a login form; after signing in they see all contact submissions. The main site has no Admin link; only the URL `/admin` shows the admin area.
  6. Contact submissions appear in Table Editor → `contact_submissions`; signed-in admins can also view them on the Admin page.

