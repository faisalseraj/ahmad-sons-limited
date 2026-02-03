import { MapPin, Mail, Building2, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your message. We will respond as soon as possible.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
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
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                    <MapPin className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Registered Office</h3>
                    <address className="text-sm text-gray-600 not-italic leading-relaxed">
                      AHMAD SONS LIMITED<br />
                      34 Roderick Road<br />
                      Birmingham<br />
                      England<br />
                      B11 1UE<br />
                      <span className="block mt-1 text-gray-500">United Kingdom</span>
                    </address>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                    <Mail className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-sm text-gray-600 mb-1">General enquiries:</p>
                    <a
                      href="mailto:info@ahmadsons.co.uk"
                      className="text-sm text-[#1e3a8a] hover:underline"
                    >
                      info@ahmadsons.co.uk
                    </a>
                    <p className="text-sm text-gray-600 mt-3 mb-1">Business enquiries:</p>
                    <a
                      href="mailto:business@ahmadsons.co.uk"
                      className="text-sm text-[#1e3a8a] hover:underline"
                    >
                      business@ahmadsons.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                    <Building2 className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Company Details</h3>
                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="text-gray-500">Company Number</dt>
                        <dd className="text-gray-900 font-medium">14282062</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Company Type</dt>
                        <dd className="text-gray-900">Private Limited Company</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Jurisdiction</dt>
                        <dd className="text-gray-900">England and Wales</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent resize-none"
                      placeholder="Please provide details of your enquiry..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded border border-gray-200">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      By submitting this form, you consent to AHMAD SONS LIMITED processing your personal data to respond to your enquiry in accordance with UK GDPR and data protection legislation. Your information will be handled confidentially and used solely for responding to your message.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white font-medium rounded hover:bg-[#1e40af] transition-colors"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Response Information */}
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Response Times</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We aim to respond to all enquiries within 2-3 business days. For urgent matters, please clearly indicate this in your message subject line. Please note that response times may vary during peak periods or public holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Hours</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium text-gray-900">9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank Holidays:</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                All times are in GMT/BST (United Kingdom Time)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
