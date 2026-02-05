import { Briefcase, Mail, Users, Award } from 'lucide-react';

type CareersProps = { standalone?: boolean };

export function Careers({ standalone = true }: CareersProps) {
  const positions = [
    {
      title: 'IT Support Specialist',
      department: 'Information Technology',
      type: 'Full-time',
      description: 'Supporting our IT services operations with technical expertise and client-focused service delivery.',
    },
    {
      title: 'Digital Operations Coordinator',
      department: 'Operations',
      type: 'Full-time',
      description: 'Coordinating digital retail operations and ensuring smooth business processes.',
    },
    {
      title: 'Business Services Assistant',
      department: 'Business Support',
      type: 'Part-time',
      description: 'Providing administrative and operational support across various business activities.',
    },
    {
      title: 'Marketing & Advertising Support',
      department: 'Advertising Services',
      type: 'Contract',
      description: 'Supporting advertising and promotional service delivery to clients.',
    },
  ];

  return (
    <div className={standalone ? 'min-h-screen bg-gray-50' : 'bg-gray-50'}>
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Join AHMAD SONS LIMITED and be part of a professionally managed UK company committed to ethical operations and employee development.
          </p>
        </div>
      </section>

      {/* Equal Opportunity Statement */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-50 rounded-lg flex-shrink-0">
                <Users className="text-[#1e3a8a]" size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Equal Opportunity Employer
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AHMAD SONS LIMITED is an equal opportunity employer. We are committed to creating a diverse and inclusive workplace where all employees are valued and respected.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We do not discriminate on the basis of race, religion, colour, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. All employment decisions are based on qualifications, merit, and business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-[#1e3a8a]" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Development</h3>
              <p className="text-sm text-gray-600">
                Opportunities for skills development and career progression in a growing organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#1e3a8a]" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inclusive Environment</h3>
              <p className="text-sm text-gray-600">
                A respectful workplace that values diversity and promotes equal opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-[#1e3a8a]" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ethical Operations</h3>
              <p className="text-sm text-gray-600">
                Work for a company committed to integrity, compliance, and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Opportunities
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#1e3a8a] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm text-gray-600">
                        {position.department}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="inline-block px-3 py-1 bg-blue-50 text-[#1e3a8a] text-xs font-medium rounded">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {position.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#application"
                      className="inline-flex items-center px-4 py-2 bg-[#1e3a8a] text-white text-sm font-medium rounded hover:bg-[#1e40af] transition-colors"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section id="application" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg flex-shrink-0">
                  <Mail className="text-[#1e3a8a]" size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    How to Apply
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To apply for any of the positions listed above, please submit your application via email with the following information:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Current CV or resume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Cover letter stating the position you are applying for</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">Brief statement of your relevant qualifications and experience</span>
                    </li>
                  </ul>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium text-gray-900">Email your application to:</span>
                    </p>
                    <p className="text-sm font-medium text-[#1e3a8a]">
                      careers@ahmadsons.co.uk
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Please include the position title in your email subject line
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Application Process</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All applications will be reviewed in accordance with our equal opportunity employment policy. Shortlisted candidates will be contacted for interview. We aim to respond to all applications within 2-3 weeks. Please note that only candidates selected for interview will be contacted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection Notice */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                Data Protection Notice
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                By submitting your application, you consent to AHMAD SONS LIMITED processing your personal data for recruitment purposes in accordance with UK GDPR and data protection legislation. Your information will be handled confidentially and used solely for recruitment evaluation. We will retain your data only for as long as necessary for the recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
