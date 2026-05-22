import { CheckCircle, Clock, FileText, Globe, ArrowRight, HelpCircle, Download } from 'lucide-react';

interface VisaProps {
  onNavigate: (page: string) => void;
}

const visaTypes = [
  {
    title: 'Tourist Visa',
    icon: '✈️',
    description: 'Perfect for leisure travel and holidays. Valid for single or multiple entries.',
    processing: '3-10 working days',
    validity: 'Up to 180 days',
    popular: true,
  },
  {
    title: 'Business Visa',
    icon: '💼',
    description: 'For business meetings, conferences, trade fairs, and corporate travel.',
    processing: '5-7 working days',
    validity: 'Up to 1 year',
    popular: false,
  },
  {
    title: 'Student Visa',
    icon: '🎓',
    description: 'For students pursuing education or research abroad.',
    processing: '7-15 working days',
    validity: 'Course duration',
    popular: false,
  },
  {
    title: 'Visa Renewal',
    icon: '🔄',
    description: 'Extend your existing visa before expiry with our expert assistance.',
    processing: '5-10 working days',
    validity: 'As per approval',
    popular: false,
  },
];

const popularCountries = [
  { name: 'UAE / Dubai', flag: '🇦🇪', type: 'Tourist/Business', processing: '3-5 days' },
  { name: 'USA', flag: '🇺🇸', type: 'Tourist/Business/Student', processing: '4-8 weeks' },
  { name: 'UK', flag: '🇬🇧', type: 'Tourist/Student/Work', processing: '3-4 weeks' },
  { name: 'Schengen (Europe)', flag: '🇪🇺', type: 'Tourist/Business', processing: '10-15 days' },
  { name: 'Australia', flag: '🇦🇺', type: 'Tourist/Student', processing: '4-6 weeks' },
  { name: 'Canada', flag: '🇨🇦', type: 'Tourist/Student', processing: '4-8 weeks' },
  { name: 'Singapore', flag: '🇸🇬', type: 'Tourist/Business', processing: '3-5 days' },
  { name: 'Thailand', flag: '🇹🇭', type: 'Tourist', processing: '3-5 days' },
  { name: 'Malaysia', flag: '🇲🇾', type: 'Tourist', processing: '3-5 days' },
  { name: 'Japan', flag: '🇯🇵', type: 'Tourist/Business', processing: '5-7 days' },
  { name: 'South Africa', flag: '🇿🇦', type: 'Tourist/Business', processing: '5-10 days' },
  { name: 'New Zealand', flag: '🇳🇿', type: 'Tourist/Student', processing: '3-4 weeks' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Our visa experts assess your requirements and advise on the best visa type.' },
  { step: '02', title: 'Document Checklist', desc: 'We provide a detailed checklist of documents required for your visa application.' },
  { step: '03', title: 'Application Submission', desc: 'We prepare and submit your complete visa application on your behalf.' },
  { step: '04', title: 'Status Tracking', desc: 'We track your application and keep you updated throughout the process.' },
  { step: '05', title: 'Visa Collection', desc: 'Once approved, we notify you immediately for visa collection or delivery.' },
];

const faqs = [
  {
    q: 'Which types of visas do you assist with?',
    a: 'We assist with tourist, business, student, transit visas, and visa renewals for 50+ countries worldwide.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Processing time varies by country and visa type — from 3 days to several weeks. Our team provides specific timelines based on your destination.',
  },
  {
    q: 'Can you guarantee visa approval?',
    a: 'While we guide you through the entire process and ensure all documentation is correct, visa approval is at the discretion of the respective embassy.',
  },
  {
    q: 'What documents are required?',
    a: 'Required documents depend on visa type and destination. We provide a comprehensive checklist upon inquiry.',
  },
];

export default function Visa({ onNavigate }: VisaProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Visa Assistance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Visa Assistance</h1>
          <p className="text-neutral-200 text-lg">Expert visa services for 50+ countries worldwide</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Visa Types */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-700 text-primary-900">Types of Visas We Handle</h2>
            <p className="text-neutral-500 mt-2">Expert guidance for all categories of travel visas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((v) => (
              <div key={v.title} className={`card p-6 relative ${v.popular ? 'border-2 border-secondary-400' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-heading font-600 text-primary-900 mb-2">{v.title}</h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{v.description}</p>
                <div className="space-y-1 text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-secondary-500" />
                    Processing: {v.processing}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={12} className="text-secondary-500" />
                    Validity: {v.validity}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-4 w-full text-center text-sm font-medium text-secondary-500 hover:text-secondary-600 flex items-center justify-center gap-1"
                >
                  Apply Now <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-700">Our Visa Process</h2>
            <p className="text-neutral-300 mt-2">Simple, transparent, and hassle-free</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center font-heading font-700 text-lg mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="font-heading font-600 text-white mb-2 text-sm">{p.title}</h4>
                <p className="text-neutral-300 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

                      {/* Required Documents */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-heading font-700 text-primary-900 mb-4">General Document Requirements</h2>
            <p className="text-neutral-600 mb-6">
              While requirements vary by country, the following documents are generally needed for most visa applications.
              Our experts will provide a country-specific checklist.
            </p>
            <ul className="space-y-3">
              {[
                'Valid passport (minimum 6 months validity)',
                'Completed visa application form',
                'Recent passport-size photographs',
                'Proof of accommodation / hotel bookings',
                'Confirmed return flight tickets',
                'Bank statements (last 3-6 months)',
                'Travel insurance certificate',
                'Proof of employment / sponsorship letter',
                'Income tax returns (for business visa)',
              ].map((doc) => (
                <li key={doc} className="flex items-center gap-3 text-sm text-neutral-700">
                  <FileText size={14} className="text-secondary-500 flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-heading font-700 text-primary-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={16} className="text-secondary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm text-neutral-800 mb-2">{faq.q}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Checklists Download */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-700 text-primary-900">Visa Document Checklists</h2>
            <p className="text-neutral-500 mt-2">Download country-specific document checklists for your visa application</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { country: 'Australia', label: 'Australia Tourist Visa Checklist', file: 'AUSTRALIA TOURIST VISA CHECKLSIT.pdf' },
              { country: 'Brazil', label: 'Brazil Tourist Visa Checklist', file: 'BRAZIL TORUIST VISA CHECKLIST.pdf' },
              { country: 'Canada', label: 'Canada Checklist', file: 'CANADA CHECKLIST.pdf' },
              { country: 'Gibraltar', label: 'Gibraltar Tourist Visa Details', file: 'GIBRALTAR TOURIST VISA DETAILS.pdf' },
              { country: 'New Zealand', label: 'New Zealand Tourist & Visit Visa Checklist', file: 'NEWZELAND TOURIST AND VISIT VISA CHECKLIST.pdf' },
              { country: 'Saudi Arabia', label: 'Saudi Arabia Tourist Visa Checklist', file: 'SAUDI ARABIA TOURIS VISA CHECKLIST.pdf' },
              { country: 'Schengen', label: 'Schengen Tourist Visa Required Documents', file: 'SCHENGEN TOURIST VISA REQUIRED DOCUMENTS (2) (1).pdf' },
              { country: 'Singapore', label: 'Singapore Tourist & Visit Visa Checklist', file: 'SINGAPORE TOURIST AND VISIT VISA CHECKLIST.pdf' },
              { country: 'South Africa', label: 'South Africa Tourist Visa Checklist', file: 'SOUTH AFRICA TOURIST VISA CHECKLIST.pdf' },
         { country: 'Vietnam', label: 'Vietnam Tourist Visa Checklist', file: 'VIETNAM TOURIST VISA CHECKLIST.pdf' },
            ].map((doc) => (
              <a
                key={doc.country}
                href={`/static/${doc.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-neutral-100 hover:border-secondary-400 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <FileText size={20} className="text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-800 leading-snug group-hover:text-primary-900 transition-colors">{doc.label}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">PDF Document</p>
                </div>
                <Download size={16} className="text-neutral-400 group-hover:text-secondary-500 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-900 to-secondary-600 rounded-2xl p-10 text-white">
          <Globe size={40} className="mx-auto mb-4 text-secondary-300" />
          <h3 className="font-heading text-2xl font-700 mb-2">Ready to Apply for Your Visa?</h3>
          <p className="text-neutral-200 mb-6">Our visa experts are ready to guide you through every step.</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-primary-900 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors">
            Start Visa Application
          </button>
        </div>
      </div>
    </div>
  );
}
