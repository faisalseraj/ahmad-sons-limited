import { Building2, MapPin, Calendar, FileText, History } from 'lucide-react';

type AboutProps = { standalone?: boolean };

export function About({ standalone = true }: AboutProps) {
  return (
    <div className={standalone ? 'min-h-screen bg-brand-bg' : 'bg-brand-bg'}>
      {/* Page Header */}
      <section className="bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-brand-text mb-4">About Us</h1>
          <p className="text-lg text-brand-text-muted max-w-3xl">
            AHMAD SONS LIMITED is a UK registered private limited company with a commitment to professional excellence and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface p-8 rounded-lg border border-brand-border mb-8">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Company Overview</h2>
            <p className="text-brand-text-muted leading-relaxed mb-4">
              AHMAD SONS LIMITED is a private limited company incorporated in England and Wales. We operate across multiple business sectors, providing services in online retail, information technology, advertising, and general business support.
            </p>
            <p className="text-brand-text-muted leading-relaxed">
              Our company was established with a vision to deliver professional services while maintaining the highest standards of corporate governance, transparency, and regulatory compliance.
            </p>
          </div>

          {/* Legal Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Company Details */}
            <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-brand-icon-bg rounded-lg">
                  <Building2 className="text-brand-icon" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-text mb-3">Company Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-brand-text-muted">Legal Name</dt>
                      <dd className="text-sm font-medium text-brand-text">AHMAD SONS LIMITED</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-brand-text-muted">Company Number</dt>
                      <dd className="text-sm font-medium text-brand-text">14282062</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-brand-text-muted">Company Type</dt>
                      <dd className="text-sm font-medium text-brand-text">Private Limited Company</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-brand-text-muted">Company Status</dt>
                      <dd className="text-sm font-medium text-brand-accent">Active</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-brand-text-muted">Jurisdiction</dt>
                      <dd className="text-sm font-medium text-brand-text">England and Wales</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-brand-icon-bg rounded-lg">
                  <MapPin className="text-brand-icon" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-text mb-3">Registered Office Address</h3>
                  <address className="text-sm text-brand-text-muted not-italic leading-relaxed">
                    34 Roderick Road<br />
                    Birmingham<br />
                    England<br />
                    B11 1UE<br />
                    <span className="block mt-2 text-brand-text-muted">United Kingdom</span>
                  </address>
                </div>
              </div>
            </div>

            {/* Incorporation Details */}
            <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-brand-icon-bg rounded-lg">
                  <Calendar className="text-brand-icon" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-text mb-3">Incorporation Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm text-brand-text-muted">Incorporation Date</dt>
                      <dd className="text-sm font-medium text-brand-text">8 August 2022</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-brand-text-muted">Age of Company</dt>
                      <dd className="text-sm font-medium text-brand-text">Over 2 years</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Business Activities */}
            <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-brand-icon-bg rounded-lg">
                  <FileText className="text-brand-icon" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-text mb-3">SIC Codes</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-xs text-brand-text-muted">47910</dt>
                      <dd className="text-sm text-brand-text-muted">Retail sale via mail order or Internet</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-brand-text-muted">62090</dt>
                      <dd className="text-sm text-brand-text-muted">Other IT service activities</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-brand-text-muted">73110</dt>
                      <dd className="text-sm text-brand-text-muted">Advertising agencies</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-brand-text-muted">96090</dt>
                      <dd className="text-sm text-brand-text-muted">Other service activities n.e.c.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="bg-brand-surface p-8 rounded-lg border border-brand-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-brand-icon-bg rounded-lg">
                <History className="text-brand-icon" size={24} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-brand-text mb-4">Company History</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-brand-accent pl-4">
                    <div className="text-sm text-brand-text-muted mb-1">August 2022</div>
                    <h3 className="font-semibold text-brand-text mb-1">Company Incorporation</h3>
                    <p className="text-sm text-brand-text-muted">
                      AHMAD SONS LIMITED (formerly AL RAIHAN FMCG LIMITED) was incorporated on 8 August 2022 as a private limited company in England and Wales.
                    </p>
                  </div>
                  <div className="border-l-2 border-brand-border pl-4">
                    <div className="text-sm text-brand-text-muted mb-1">August 2025</div>
                    <h3 className="font-semibold text-brand-text mb-1">Name Change</h3>
                    <p className="text-sm text-brand-text-muted">
                      The company name was changed from AL RAIHAN FMCG LIMITED to AHMAD SONS LIMITED, reflecting the evolution and strategic direction of the business.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-brand-bg rounded border border-brand-border">
                  <p className="text-sm text-brand-text-muted">
                    <span className="font-medium text-brand-text">Previous Company Name:</span> AL RAIHAN FMCG LIMITED (August 2022 – August 2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">Our Commitment</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-brand-text-muted leading-relaxed mb-4">
                AHMAD SONS LIMITED is committed to maintaining the highest standards of corporate governance and regulatory compliance. We operate transparently in accordance with all applicable UK business regulations and legislation.
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-4">
                Our operations are guided by principles of integrity, accountability, and ethical business conduct. We are dedicated to data protection, privacy, and the responsible management of all business activities.
              </p>
              <p className="text-brand-text-muted leading-relaxed">
                As a registered UK company, we ensure all corporate documentation is maintained in accordance with Companies House requirements and comply with all statutory obligations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
