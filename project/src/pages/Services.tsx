import {
  Plane, Hotel, Ship, Package, FileText, Globe, Shield, Stamp,
  Car, Home as HomeIcon, Users, TrendingDown, CheckCircle, ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const servicesList = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Access the best deals on domestic and international flights. Our platform allows you to book flights quickly and securely, ensuring a hassle-free experience from takeoff to landing.',
    features: ['Domestic & International flights', 'Flexible pricing & seat selection', 'Premium class services', 'Partnerships with leading airlines', 'Group booking discounts'],
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-blue-500 to-blue-700',
    page: 'contact',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    description: 'Find the perfect accommodation to match your style and budget. From luxurious resorts to cozy bed-and-breakfasts, we ensure comfort and convenience wherever you go.',
    features: ['Hotels, resorts & guesthouses globally', 'Luxury & budget options', 'Special amenity requests', 'Partnered with global chains', 'Flight + hotel combo packages'],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-teal-500 to-teal-700',
    page: 'contact',
  },
  {
    icon: Ship,
    title: 'Cruise Booking',
    description: 'Embark on unforgettable voyages with our curated cruise options. Discover the world in style as you sail to exotic destinations with unmatched luxury and entertainment.',
    features: ['Luxury, family & adventure cruises', 'Caribbean, Mediterranean & Alaska routes', 'Honeymoon cruise packages', 'Shore excursions included', 'Onboard entertainment packages'],
    image: 'https://images.pexels.com/photos/1117448/pexels-photo-1117448.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-cyan-500 to-cyan-700',
    page: 'contact',
  },
  {
    icon: Package,
    title: 'Tour Packages',
    description: 'Whether exploring India or venturing abroad, our packages cater to all travelers. Choose from Domestic, International, Customized, or Seasonal packages.',
    features: ['Domestic & international tours', 'Honeymoon & adventure packages', 'Pilgrimage tours', 'Customized itineraries', 'Guided tours available'],
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-orange-500 to-orange-700',
    page: 'packages',
  },
  {
    icon: FileText,
    title: 'Visa Processing',
    description: 'Leave the complexities of visa applications to us. Our visa experts guide you through every step for Tourist, Business, Student Visas, and renewals.',
    features: ['Assistance for 50+ countries', 'Tourist, business & student visas', 'Visa renewals', 'Fast-track services', 'Document checklist provided'],
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-green-500 to-green-700',
    page: 'visa',
  },
  {
    icon: Globe,
    title: 'Passport Assistance',
    description: 'Renewing or applying for a passport? Venkitravel.com provides end-to-end assistance, ensuring a smooth process without unnecessary delays.',
    features: ['New passport applications', 'Passport renewals & corrections', 'Fast-track processing', 'Document assistance', 'Status tracking'],
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-indigo-500 to-indigo-700',
    page: 'contact',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Travel with peace of mind. Our comprehensive plans safeguard against trip cancellations, medical emergencies, lost luggage, and flight delays.',
    features: ['Medical emergency coverage', 'Trip cancellation protection', 'Baggage loss coverage', 'Flight delay compensation', 'Adventure sports insurance'],
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-red-500 to-red-700',
    page: 'contact',
  },
  {
    icon: Stamp,
    title: 'Attestation Services',
    description: 'Simplify your document attestation and legalization needs with our reliable services, ideal for work, study, or travel abroad.',
    features: ['Educational document attestation', 'Commercial document legalization', 'Personal document attestation', 'Embassy attestation', 'HRD & MEA attestation'],
    image: 'https://images.pexels.com/photos/6863244/pexels-photo-6863244.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-500 to-yellow-700',
    page: 'contact',
  },
  {
    icon: Car,
    title: 'Transport & Transfers',
    description: 'From airport pickups to inter-city transport, our efficient transfer services guarantee comfort and reliability every step of your journey.',
    features: ['Airport transfers 24/7', 'Luxury car rentals', 'Chauffeur-driven services', 'Corporate transportation', 'Multilingual drivers'],
    image: 'https://images.pexels.com/photos/3802509/pexels-photo-3802509.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-purple-500 to-purple-700',
    page: 'contact',
  },
  {
    icon: HomeIcon,
    title: 'Accommodation Services',
    description: 'Beyond hotels, we arrange serviced apartments, villas, and homestays — short-term and long-term stays for all preferences and budgets.',
    features: ['Hotels & luxury resorts', 'Serviced apartments', 'Villas & homestays', 'Family-friendly options', 'Long-term stays'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-pink-500 to-pink-700',
    page: 'contact',
  },
  {
    icon: Users,
    title: 'Group Booking Services',
    description: 'Planning a trip for a large group? We offer exclusive deals and seamless coordination for group bookings, ensuring everyone has an enjoyable experience.',
    features: ['Groups of 10 or more', 'Customized group itineraries', 'Corporate team trips', 'Educational group tours', 'Attractive group discounts'],
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-emerald-500 to-emerald-700',
    page: 'contact',
  },
  {
    icon: TrendingDown,
    title: 'Forex Services',
    description: 'Make currency exchange simple and hassle-free. We provide competitive rates and a secure process with forex cards, foreign cash, and traveler\'s cheques.',
    features: ['Competitive exchange rates', 'Forex cards & foreign cash', "Traveler's cheques", 'Business travel forex', 'Doorstep delivery'],
    image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-sky-500 to-sky-700',
    page: 'contact',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Our Services</h1>
          <p className="text-neutral-200 text-lg">Comprehensive travel solutions — all under one roof</p>
        </div>
      </section>

      {/* Quick services grid */}
      <section className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {servicesList.map((s) => (
              <button
                key={s.title}
                onClick={() => onNavigate(s.page)}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <s.icon size={18} className="text-white" />
                </div>
                <span className="text-xs font-medium text-neutral-700 text-center leading-tight group-hover:text-primary-900">{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {servicesList.map((service, i) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon size={22} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-700 text-primary-900 mb-3">{service.title}</h2>
                <p className="text-neutral-600 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle size={15} className="text-secondary-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate(service.page)}
                  className="btn-primary"
                >
                  Enquire Now <ArrowRight size={16} />
                </button>
              </div>

              <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
