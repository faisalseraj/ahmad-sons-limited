import { Link } from 'react-router';
import { Building2, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#1e3a8a] text-sm font-medium rounded-full mb-6">
              UK Registered Private Limited Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AHMAD SONS LIMITED
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A professionally managed UK private limited company, incorporated in 2022 and operating in online retail, information technology services, advertising, and business support activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1e3a8a] text-white font-medium rounded hover:bg-[#1e40af] transition-colors"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Building2 className="text-[#1e3a8a]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Company Number</h3>
                  <p className="text-gray-600 text-sm">14282062</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="text-[#1e3a8a]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Company Status</h3>
                  <p className="text-gray-600 text-sm">Active</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Shield className="text-[#1e3a8a]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Incorporated</h3>
                  <p className="text-gray-600 text-sm">8 August 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Overview</h2>
            <p className="text-lg text-gray-600">
              AHMAD SONS LIMITED operates across multiple sectors, providing comprehensive services in accordance with our registered business activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-medium text-[#1e3a8a] mb-2">SIC 47910</div>
              <h3 className="font-semibold text-gray-900 mb-2">Online Retail</h3>
              <p className="text-sm text-gray-600">
                Retail sale via mail order houses or via Internet
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-medium text-[#1e3a8a] mb-2">SIC 62090</div>
              <h3 className="font-semibold text-gray-900 mb-2">IT Services</h3>
              <p className="text-sm text-gray-600">
                Other information technology service activities
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-medium text-[#1e3a8a] mb-2">SIC 73110</div>
              <h3 className="font-semibold text-gray-900 mb-2">Advertising</h3>
              <p className="text-sm text-gray-600">
                Advertising agencies
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm font-medium text-[#1e3a8a] mb-2">SIC 96090</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Services</h3>
              <p className="text-sm text-gray-600">
                Other service activities not elsewhere classified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Trust</h2>
              <p className="text-lg text-gray-600 mb-8">
                AHMAD SONS LIMITED is committed to operating with the highest standards of corporate governance and regulatory compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <CheckCircle className="text-[#1e3a8a]" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">UK Registered</h3>
                  <p className="text-sm text-gray-600">
                    Registered private limited company in England and Wales
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <Shield className="text-[#1e3a8a]" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                  <p className="text-sm text-gray-600">
                    Operating in accordance with UK business regulations
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <Building2 className="text-[#1e3a8a]" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Ethical Operations</h3>
                  <p className="text-sm text-gray-600">
                    Commitment to data protection and ethical business practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
