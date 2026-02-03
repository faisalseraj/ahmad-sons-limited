import { ShoppingCart, Monitor, Megaphone, Briefcase } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      code: '47910',
      title: 'Online & Internet-Based Retail Services',
      description: 'Retail sale via mail order houses or via Internet',
      details: [
        'E-commerce and online marketplace operations',
        'Digital retail platform management',
        'Mail order and catalogue distribution services',
        'Online product merchandising and fulfilment',
      ],
    },
    {
      icon: Monitor,
      code: '62090',
      title: 'Information Technology & Digital Services',
      description: 'Other information technology service activities',
      details: [
        'IT consulting and technical advisory services',
        'Digital infrastructure support',
        'Technology implementation and integration',
        'Software and systems management services',
      ],
    },
    {
      icon: Megaphone,
      code: '73110',
      title: 'Advertising & Promotional Services',
      description: 'Advertising agencies',
      details: [
        'Marketing and promotional campaign development',
        'Digital advertising strategy and execution',
        'Brand positioning and communication services',
        'Media planning and buying consultancy',
      ],
    },
    {
      icon: Briefcase,
      code: '96090',
      title: 'General Business & Support Services',
      description: 'Other service activities not elsewhere classified',
      details: [
        'Business support and administrative services',
        'Corporate services and consultancy',
        'Operational support activities',
        'General business facilitation services',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            AHMAD SONS LIMITED provides professional services across multiple business sectors, operating in strict accordance with our registered Standard Industrial Classification (SIC) codes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#1e3a8a] transition-colors"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                      <Icon className="text-[#1e3a8a]" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-2">
                        SIC Code: {service.code}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm text-gray-600 italic">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-16">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Service Standards & Compliance
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-sm text-gray-600">
                  All services are delivered in accordance with professional industry standards and UK business regulations. We maintain strict quality control and operational procedures across all service categories.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-gray-600">
                  AHMAD SONS LIMITED operates in full compliance with all applicable UK legislation, including data protection, consumer rights, and industry-specific regulations governing our registered business activities.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Ethical Operations</h3>
                <p className="text-sm text-gray-600">
                  We are committed to ethical business practices, transparency, and accountability in all our service delivery. Our operations prioritize integrity and responsible conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Enquiries */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Enquiries</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For information about our services or business collaboration opportunities, please contact us through our official channels.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#1e3a8a] text-white font-medium rounded hover:bg-[#1e40af] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
