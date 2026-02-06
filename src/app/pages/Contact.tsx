import React, { useState } from 'react';
import { MapPin, Mail, Building2, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

type ContactProps = { standalone?: boolean };

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function Contact({ standalone = true }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setErrorMessage('Contact form is not configured. Please add Supabase credentials.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMessage(null);

    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status !== 'idle') {
      setStatus('idle');
      setErrorMessage(null);
    }
  };

  return (
    <div className={standalone ? 'min-h-screen bg-brand-bg' : 'bg-brand-bg'}>
      {/* Page Header */}
      <section className="bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-brand-text mb-4">Contact Us</h1>
          <p className="text-lg text-brand-text-muted max-w-3xl">
            Get in touch with AHMAD SONS LIMITED for business enquiries, information requests, or general correspondence.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Registered Office */}
              <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-icon-bg rounded-lg flex-shrink-0">
                    <MapPin className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">Registered Office</h3>
                    <address className="text-sm text-brand-text-muted not-italic leading-relaxed">
                      AHMAD SONS LIMITED<br />
                      34 Roderick Road<br />
                      Birmingham<br />
                      England<br />
                      B11 1UE<br />
                      <span className="block mt-1 text-brand-text-muted">United Kingdom</span>
                    </address>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-icon-bg rounded-lg flex-shrink-0">
                    <Mail className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">Email</h3>
                    <a
                      href="mailto:ahmadsonsltd@gmail.com"
                      className="text-sm text-brand-accent hover:underline"
                    >
                      ahmadsonsltd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-icon-bg rounded-lg flex-shrink-0">
                    <Building2 className="text-brand-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text mb-2">Company Details</h3>
                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="text-brand-text-muted">Company Number</dt>
                        <dd className="text-brand-text font-medium">14282062</dd>
                      </div>
                      <div>
                        <dt className="text-brand-text-muted">Company Type</dt>
                        <dd className="text-brand-text">Private Limited Company</dd>
                      </div>
                      <div>
                        <dt className="text-brand-text-muted">Jurisdiction</dt>
                        <dd className="text-brand-text">England and Wales</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-surface p-8 rounded-lg border border-brand-border">
                <h2 className="text-2xl font-bold text-brand-text mb-6">Send us a Message</h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-green-800">
                      Thank you for your message. We will respond as soon as possible.
                    </p>
                  </div>
                )}
                {status === 'error' && errorMessage && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-red-800">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-muted mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-muted mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-text-muted mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text-muted mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brand-border rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                      placeholder="Please provide details of your enquiry..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-brand-bg rounded border border-brand-border">
                    <p className="text-xs text-brand-text-muted leading-relaxed">
                      By submitting this form, you consent to AHMAD SONS LIMITED processing your personal data to respond to your enquiry in accordance with UK GDPR and data protection legislation. Your information will be handled confidentially and used solely for responding to your message.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-white font-medium rounded hover:bg-brand-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Response Information */}
              <div className="mt-6 p-6 bg-brand-icon-bg rounded-lg border border-brand-border">
                <h3 className="font-semibold text-brand-text mb-2 text-sm">Response Times</h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  We aim to respond to all enquiries within 2-3 business days. For urgent matters, please clearly indicate this in your message subject line. Please note that response times may vary during peak periods or public holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">Business Hours</h2>
            <div className="bg-brand-bg p-6 rounded-lg border border-brand-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Monday - Friday:</span>
                  <span className="font-medium text-brand-text">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Saturday:</span>
                  <span className="font-medium text-brand-text">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Sunday:</span>
                  <span className="font-medium text-brand-text">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-muted">Bank Holidays:</span>
                  <span className="font-medium text-brand-text">Closed</span>
                </div>
              </div>
              <p className="text-xs text-brand-text-muted mt-4">
                All times are in GMT/BST (United Kingdom Time)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
