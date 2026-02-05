import { Building2, MapPin, Calendar, FileText, History } from 'lucide-react';

type AboutProps = { standalone?: boolean };

export function About({ standalone = true }: AboutProps) {
  return (
    <div className={standalone ? 'min-h-screen bg-gray-50' : 'bg-gray-50'}>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            AHMAD SONS LIMITED is a UK registered private limited company with a commitment to professional excellence and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AHMAD SONS LIMITED is a private limited company incorporated in England and Wales. We operate across multiple business sectors, providing services in online retail, information technology, advertising, and general business support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our company was established with a vision to deliver professional services while maintaining the highest standards of corporate governance, transparency, and regulatory compliance.
            </p>
          </div>

          {/* Legal Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Company Details */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Building2 className="text-[#1e3a8a]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Company Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-gray-500">Legal Name</dt>
                      <dd className="text-sm font-medium text-gray-900">AHMAD SONS LIMITED</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Company Number</dt>
                      <dd className="text-sm font-medium text-gray-900">14282062</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Company Type</dt>
                      <dd className="text-sm font-medium text-gray-900">Private Limited Company</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Company Status</dt>
                      <dd className="text-sm font-medium text-green-700">Active</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Jurisdiction</dt>
                      <dd className="text-sm font-medium text-gray-900">England and Wales</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="text-[#1e3a8a]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Registered Office Address</h3>
                  <address className="text-sm text-gray-600 not-italic leading-relaxed">
                    34 Roderick Road<br />
                    Birmingham<br />
                    England<br />
                    B11 1UE<br />
                    <span className="block mt-2 text-gray-500">United Kingdom</span>
                  </address>
                </div>
              </div>
            </div>

            {/* Incorporation Details */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Calendar className="text-[#1e3a8a]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Incorporation Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-gray-500">Incorporation Date</dt>
                      <dd className="text-sm font-medium text-gray-900">8 August 2022</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Age of Company</dt>
                      <dd className="text-sm font-medium text-gray-900">Over 2 years</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Business Activities */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FileText className="text-[#1e3a8a]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">SIC Codes</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-xs text-gray-500">47910</dt>
                      <dd className="text-sm text-gray-700">Retail sale via mail order or Internet</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">62090</dt>
                      <dd className="text-sm text-gray-700">Other IT service activities</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">73110</dt>
                      <dd className="text-sm text-gray-700">Advertising agencies</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500">96090</dt>
                      <dd className="text-sm text-gray-700">Other service activities n.e.c.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <History className="text-[#1e3a8a]" size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Company History</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#1e3a8a] pl-4">
                    <div className="text-sm text-gray-500 mb-1">August 2022</div>
                    <h3 className="font-semibold text-gray-900 mb-1">Company Incorporation</h3>
                    <p className="text-sm text-gray-600">
                      AHMAD SONS LIMITED (formerly AL RAIHAN FMCG LIMITED) was incorporated on 8 August 2022 as a private limited company in England and Wales.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-4">
                    <div className="text-sm text-gray-500 mb-1">August 2025</div>
                    <h3 className="font-semibold text-gray-900 mb-1">Name Change</h3>
                    <p className="text-sm text-gray-600">
                      The company name was changed from AL RAIHAN FMCG LIMITED to AHMAD SONS LIMITED, reflecting the evolution and strategic direction of the business.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">Previous Company Name:</span> AL RAIHAN FMCG LIMITED (August 2022 – August 2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                AHMAD SONS LIMITED is committed to maintaining the highest standards of corporate governance and regulatory compliance. We operate transparently in accordance with all applicable UK business regulations and legislation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our operations are guided by principles of integrity, accountability, and ethical business conduct. We are dedicated to data protection, privacy, and the responsible management of all business activities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a registered UK company, we ensure all corporate documentation is maintained in accordance with Companies House requirements and comply with all statutory obligations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
