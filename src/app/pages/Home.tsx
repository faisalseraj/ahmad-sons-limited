import { Building2, Shield, CheckCircle, ArrowRight } from 'lucide-react';

type HomeProps = { standalone?: boolean };

export function Home({ standalone = true }: HomeProps) {
  return (
    <div className={standalone ? 'min-h-screen bg-brand-bg' : 'bg-brand-bg'}>
      {/* Hero Section */}
      <section className="relative brand-hero-bg overflow-hidden min-h-[28rem] flex items-center">
        <div className="absolute inset-0 brand-hero-glow" aria-hidden />
        <div className="absolute inset-0 brand-hero-pattern" aria-hidden />
        <div className="brand-hero-blob brand-hero-blob-1" aria-hidden />
        <div className="brand-hero-blob brand-hero-blob-2" aria-hidden />
        <div className="brand-hero-blob brand-hero-blob-3" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 text-teal-200 text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-white/10">
              UK Registered Private Limited Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              AHMAD SONS LIMITED
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              A professionally managed UK private limited company, incorporated in 2022 and operating in online retail, information technology services, advertising, and business support activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent-hover transition-colors shadow-lg shadow-black/10"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/60 transition-colors backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="py-16 section-bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="info-card-wrap">
              <div className="info-card-inner flex items-start gap-4">
                <div className="p-3 bg-brand-icon-bg rounded-xl flex-shrink-0">
                  <Building2 className="text-brand-icon" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Company Number</h3>
                  <p className="text-brand-text-muted text-sm">14282062</p>
                </div>
              </div>
            </div>
            <div className="info-card-wrap">
              <div className="info-card-inner flex items-start gap-4">
                <div className="p-3 bg-brand-icon-bg rounded-xl flex-shrink-0">
                  <CheckCircle className="text-brand-icon" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Company Status</h3>
                  <p className="text-brand-text-muted text-sm">Active</p>
                </div>
              </div>
            </div>
            <div className="info-card-wrap">
              <div className="info-card-inner flex items-start gap-4">
                <div className="p-3 bg-brand-icon-bg rounded-xl flex-shrink-0">
                  <Shield className="text-brand-icon" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-text mb-1">Incorporated</h3>
                  <p className="text-brand-text-muted text-sm">8 August 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 section-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-text mb-4">Business Overview</h2>
            <p className="text-lg text-brand-text-muted">
              AHMAD SONS LIMITED operates across multiple sectors, providing comprehensive services in accordance with our registered business activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="info-block-accent p-6 py-7">
              <div className="text-sm font-medium text-brand-accent mb-2">SIC 47910</div>
              <h3 className="font-semibold text-brand-text mb-2">Online Retail</h3>
              <p className="text-sm text-brand-text-muted">
                Retail sale via mail order houses or via Internet
              </p>
            </div>
            <div className="info-block-accent p-6 py-7">
              <div className="text-sm font-medium text-brand-accent mb-2">SIC 62090</div>
              <h3 className="font-semibold text-brand-text mb-2">IT Services</h3>
              <p className="text-sm text-brand-text-muted">
                Other information technology service activities
              </p>
            </div>
            <div className="info-block-accent p-6 py-7">
              <div className="text-sm font-medium text-brand-accent mb-2">SIC 73110</div>
              <h3 className="font-semibold text-brand-text mb-2">Advertising</h3>
              <p className="text-sm text-brand-text-muted">
                Advertising agencies
              </p>
            </div>
            <div className="info-block-accent p-6 py-7">
              <div className="text-sm font-medium text-brand-accent mb-2">SIC 96090</div>
              <h3 className="font-semibold text-brand-text mb-2">Business Services</h3>
              <p className="text-sm text-brand-text-muted">
                Other service activities not elsewhere classified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="py-16 section-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="highlight-box p-8 md:p-12 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-brand-text mb-4">Compliance & Trust</h2>
              <p className="text-lg text-brand-text-muted mb-8">
                AHMAD SONS LIMITED is committed to operating with the highest standards of corporate governance and regulatory compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2 info-card-wrap">
                  <div className="info-card-inner space-y-2">
                    <div className="w-12 h-12 bg-brand-icon-bg rounded-xl flex items-center justify-center">
                      <CheckCircle className="text-brand-icon" size={24} />
                    </div>
                    <h3 className="font-semibold text-brand-text">UK Registered</h3>
                    <p className="text-sm text-brand-text-muted">
                      Registered private limited company in England and Wales
                    </p>
                  </div>
                </div>
                <div className="space-y-2 info-card-wrap">
                  <div className="info-card-inner space-y-2">
                    <div className="w-12 h-12 bg-brand-icon-bg rounded-xl flex items-center justify-center">
                      <Shield className="text-brand-icon" size={24} />
                    </div>
                    <h3 className="font-semibold text-brand-text">Regulatory Compliance</h3>
                    <p className="text-sm text-brand-text-muted">
                      Operating in accordance with UK business regulations
                    </p>
                  </div>
                </div>
                <div className="space-y-2 info-card-wrap">
                  <div className="info-card-inner space-y-2">
                    <div className="w-12 h-12 bg-brand-icon-bg rounded-xl flex items-center justify-center">
                      <Building2 className="text-brand-icon" size={24} />
                    </div>
                    <h3 className="font-semibold text-brand-text">Ethical Operations</h3>
                    <p className="text-sm text-brand-text-muted">
                      Commitment to data protection and ethical business practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
