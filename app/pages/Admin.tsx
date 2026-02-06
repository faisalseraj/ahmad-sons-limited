'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogOut, Loader2, Mail, AlertCircle, Lock, Inbox, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

type Submission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

export function Admin() {
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [submissionsLoading, setSubmissionsLoading] = useState(false);
  const [submissionsError, setSubmissionsError] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !supabase) return;
    setSubmissionsLoading(true);
    setSubmissionsError(null);
    supabase
      .from('contact_submissions')
      .select('id, name, email, subject, message, created_at')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        setSubmissionsLoading(false);
        if (error) {
          setSubmissionsError(error.message);
          return;
        }
        setSubmissions((data as Submission[]) ?? []);
      });
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);
    const { error } = await signIn(email, password);
    setLoginLoading(false);
    if (error) setLoginError(error.message);
  };

  if (authLoading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center bg-brand-bg">
        <Loader2 className="text-brand-accent animate-spin" size={32} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-brand-bg py-16">
        <div className="max-w-md mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-brand-text-muted hover:text-brand-accent mb-6"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-border shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="text-brand-accent" size={24} />
              <h2 className="text-2xl font-bold text-brand-text">Admin Login</h2>
            </div>
            <p className="text-brand-text-muted text-sm mb-6">
              Sign in to view contact form submissions.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-email" className="block text-sm font-medium text-brand-text mb-1">
                  Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                  placeholder="admin@example.com"
                />
              </div>
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-brand-text mb-1">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              {loginError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-sm text-red-800">
                  <AlertCircle size={18} />
                  {loginError}
                </div>
              )}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent-hover disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loginLoading ? <Loader2 size={20} className="animate-spin" /> : null}
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-text-muted hover:text-brand-accent mb-6"
        >
          <ArrowLeft size={16} />
          Back to site
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Inbox className="text-brand-accent" size={28} />
            <h2 className="text-2xl font-bold text-brand-text">Contact submissions</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-brand-text-muted">{user.email}</span>
            <button
              onClick={() => signOut()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-text-muted hover:text-brand-text border border-brand-border rounded-lg hover:bg-brand-bg-soft"
            >
              <LogOut size={18} />
              Log out
            </button>
          </div>
        </div>

        {submissionsLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="text-brand-accent animate-spin" size={32} />
          </div>
        )}
        {submissionsError && (
          <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-red-800">
            <AlertCircle size={20} />
            {submissionsError}
          </div>
        )}
        {!submissionsLoading && !submissionsError && submissions.length === 0 && (
          <div className="bg-brand-surface rounded-xl border border-brand-border p-12 text-center text-brand-text-muted">
            <Mail size={48} className="mx-auto mb-4 opacity-50" />
            <p>No contact submissions yet.</p>
          </div>
        )}
        {!submissionsLoading && !submissionsError && submissions.length > 0 && (
          <div className="bg-brand-surface rounded-xl border border-brand-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-bg">
                    <th className="px-4 py-3 text-sm font-semibold text-brand-text">Date</th>
                    <th className="px-4 py-3 text-sm font-semibold text-brand-text">Name</th>
                    <th className="px-4 py-3 text-sm font-semibold text-brand-text">Email</th>
                    <th className="px-4 py-3 text-sm font-semibold text-brand-text">Subject</th>
                    <th className="px-4 py-3 text-sm font-semibold text-brand-text">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((row) => (
                    <tr key={row.id} className="border-b border-brand-border last:border-0">
                      <td className="px-4 py-3 text-sm text-brand-text-muted whitespace-nowrap">
                        {new Date(row.created_at).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-text">{row.name}</td>
                      <td className="px-4 py-3 text-sm">
                        <a href={`mailto:${row.email}`} className="text-brand-accent hover:underline">
                          {row.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-text">{row.subject}</td>
                      <td className="px-4 py-3 text-sm text-brand-text-muted max-w-xs truncate" title={row.message}>
                        {row.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
