import { Target, Compass, Shield, CheckCircle, Scale, Users } from 'lucide-react';

type VisionValuesProps = { standalone?: boolean };

export function VisionValues({ standalone = true }: VisionValuesProps) {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct all business activities with honesty, transparency, and ethical principles. Our commitment to integrity guides every decision and interaction.',
    },
    {
      icon: Scale,
      title: 'Compliance',
      description: 'Strict adherence to UK business regulations and industry standards. We ensure all operations meet legal and regulatory requirements.',
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Open and honest communication with all stakeholders. We maintain clear records and provide accurate information in all business dealings.',
    },
    {
      icon: Users,
      title: 'Reliability',
      description: 'Consistent and dependable service delivery. We build trust through professional conduct and commitment to our obligations.',
    },
  ];

  return (
    <div className={standalone ? 'min-h-screen bg-brand-bg' : 'bg-brand-bg'}>
      {/* Page Header */}
      <section className="bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-brand-text mb-4">Vision & Values</h1>
          <p className="text-lg text-brand-text-muted max-w-3xl">
            Our vision and values define who we are as a company and guide our approach to business operations and stakeholder relationships.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface p-8 md:p-12 rounded-lg border border-brand-border mb-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-brand-icon-bg rounded-lg flex-shrink-0">
                <Target className="text-brand-icon" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Our Vision</h2>
                <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                  To establish AHMAD SONS LIMITED as a professionally managed, compliant, and ethically operated UK company that delivers sustainable value across our registered business activities.
                </p>
                <p className="text-brand-text-muted leading-relaxed">
                  We aspire to build a reputation for reliability, integrity, and responsible business practices while contributing positively to the sectors in which we operate. Our vision encompasses sustainable growth achieved through ethical operations and strict adherence to regulatory frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-brand-surface p-8 md:p-12 rounded-lg border border-brand-border">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-brand-icon-bg rounded-lg flex-shrink-0">
                <Compass className="text-brand-icon" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-brand-text mb-4">Our Mission</h2>
                <p className="text-lg text-brand-text-muted leading-relaxed mb-4">
                  To operate responsibly across our registered business sectors—online retail, information technology services, advertising, and business support—while maintaining the highest standards of corporate governance and regulatory compliance.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-brand-text-muted">
                      Deliver professional services in accordance with UK business regulations and industry standards
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-brand-text-muted">
                      Maintain transparency and accountability in all business operations and stakeholder relationships
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-brand-text-muted">
                      Ensure data protection, privacy, and ethical conduct across all service delivery activities
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-brand-text-muted">
                      Foster sustainable and responsible business growth guided by principles of integrity and compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-text mb-4">Our Core Values</h2>
            <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
              The fundamental principles that guide our operations and define our corporate culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-bg p-8 rounded-lg border border-brand-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-surface rounded-lg border border-brand-border flex-shrink-0">
                      <Icon className="text-brand-icon" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-text mb-2">
                        {value.title}
                      </h3>
                      <p className="text-brand-text-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-text mb-6 text-center">
              Corporate Governance & Ethics
            </h2>
            <div className="bg-brand-surface p-8 rounded-lg border border-brand-border">
              <p className="text-brand-text-muted leading-relaxed mb-4">
                AHMAD SONS LIMITED is committed to maintaining robust corporate governance structures and ethical business practices. We recognize that good governance is fundamental to building trust with stakeholders and ensuring long-term sustainability.
              </p>
              <p className="text-brand-text-muted leading-relaxed mb-4">
                Our approach to corporate governance includes:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-icon flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-text-muted">
                    Compliance with Companies Act 2006 and all applicable UK legislation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-icon flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-text-muted">
                    Accurate and timely filing of all statutory documentation with Companies House
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-icon flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-text-muted">
                    Adherence to data protection regulations including UK GDPR
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-icon flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-text-muted">
                    Ethical decision-making processes and accountability structures
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-brand-icon flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-text-muted">
                    Transparent communication with all stakeholders
                  </span>
                </li>
              </ul>
              <p className="text-brand-text-muted leading-relaxed">
                We believe that responsible corporate conduct and ethical business operations are not just regulatory obligations, but fundamental to our identity and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
