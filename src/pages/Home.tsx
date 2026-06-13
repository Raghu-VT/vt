import { useState, useEffect } from 'react';
import {
  Plane, Hotel, Ship, Package, FileText, Globe, Shield, Stamp,
  Car, Home as HomeIcon, Users, Star, Award, Clock, ChevronRight,
  ArrowRight, MapPin, Calendar, TrendingDown
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Where Dreams Meet Destinations',
    subtitle: 'Your trusted travel partner for over 22 years. ISO 9001:2015 Certified.',
  },
  {
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Explore the World With Confidence',
    subtitle: 'Seamless flight bookings, visa assistance, and custom tour packages.',
  },
  {
    image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Travel Simplified, Memories Amplified',
    subtitle: 'From Hyderabad to the world — let us craft your perfect journey.',
  },
];

const services = [
  { icon: Plane, title: 'Flight Booking', desc: 'Domestic & international flights at best fares', page: 'services#flight-booking', color: 'bg-blue-50 text-blue-600' },
  { icon: Hotel, title: 'Hotel Booking', desc: 'Luxury resorts to budget stays worldwide', page: 'services#hotel-booking', color: 'bg-teal-50 text-teal-600' },
  { icon: Ship, title: 'Cruise Booking', desc: 'Unforgettable voyages on luxury liners', page: 'services#cruise-booking', color: 'bg-cyan-50 text-cyan-600' },
  { icon: Package, title: 'Tour Packages', desc: 'Domestic, international & customized packages', page: 'packages', color: 'bg-orange-50 text-orange-600' },
  { icon: FileText, title: 'Visa Processing', desc: 'Tourist, business & student visas for 50+ countries', page: 'services#visa-processing', color: 'bg-green-50 text-green-600' },
  { icon: Globe, title: 'Passport Assistance', desc: 'New applications, renewals & fast-track processing', page: 'services#passport-assistance', color: 'bg-indigo-50 text-indigo-600' },
  { icon: Shield, title: 'Travel Insurance', desc: 'Comprehensive coverage for peace of mind', page: 'services#travel-insurance', color: 'bg-red-50 text-red-600' },
  { icon: Stamp, title: 'Attestation Services', desc: 'Document attestation for all purposes', page: 'services#attestation-services', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Car, title: 'Transport & Transfers', desc: 'Airport pickups, city transfers & car rentals', page: 'services#transport-transfers', color: 'bg-purple-50 text-purple-600' },
  { icon: HomeIcon, title: 'Accommodation', desc: 'Apartments, villas, homestays & more', page: 'services#accommodation-services', color: 'bg-pink-50 text-pink-600' },
  { icon: Users, title: 'Group Bookings', desc: 'Special deals for groups of 10 or more', page: 'services#group-booking', color: 'bg-emerald-50 text-emerald-600' },
  { icon: TrendingDown, title: 'Forex Services', desc: 'Competitive currency exchange rates', page: 'services#forex-services', color: 'bg-sky-50 text-sky-600' },
];

const featuredDestinations = [
  {
    name: 'Maldives',
    tagline: 'Paradise on Earth',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹45,000',
    duration: '5 Nights',
  },
  {
    name: 'Dubai',
    tagline: 'City of Gold',
    image: 'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹35,000',
    duration: '4 Nights',
  },
  {
    name: 'Bali',
    tagline: 'Island of Gods',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹38,000',
    duration: '6 Nights',
  },
  {
    name: 'Switzerland',
    tagline: 'Alps & Charm',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹85,000',
    duration: '7 Nights',
  },
  {
    name: 'Thailand',
    tagline: 'Land of Smiles',
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹28,000',
    duration: '5 Nights',
  },
  {
    name: 'Kashmir',
    tagline: 'Heaven on Earth',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: '₹22,000',
    duration: '5 Nights',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Hyderabad',
    text: 'Venkitravel made our honeymoon in Maldives absolutely magical. Every detail was perfectly arranged. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    text: 'The visa processing was smooth and stress-free. Their team guided us through every step for our Europe trip.',
    rating: 5,
  },
  {
    name: 'Anitha Reddy',
    location: 'Hyderabad',
    text: 'Best travel agency! Our family trip to Thailand was flawless. Great accommodation and seamless transfers.',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    location: 'Vijayawada',
    text: 'Used Venkitravel for our corporate team outing. Excellent coordination and great pricing for group bookings.',
    rating: 5,
  },
];

const stats = [
  { value: '22+', label: 'Years Experience' },
  { value: '25,000+', label: 'Happy Travellers' },
  { value: '50+', label: 'Countries Covered' },
  { value: '24/7', label: 'Customer Support' },
];

const deals = [
  {
    title: 'Early Bird Dubai Deal',
    discount: '30% OFF',
    image: 'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=600',
    validity: 'Valid till June 30',
    tag: 'Early Bird',
  },
  {
    title: 'Bali Honeymoon Special',
    discount: '25% OFF',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
    validity: 'Valid till July 15',
    tag: 'Honeymoon',
  },
  {
    title: 'Thailand Group Discount',
    discount: '20% OFF',
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=600',
    validity: 'Limited Seats',
    tag: 'Group',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const [heroIndex, setHeroIndex] = useState(0);
  const [tripType, setTripType] = useState<'oneway' | 'roundtrip'>('roundtrip');

  const hero = heroSlides[heroIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt="Hero"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/40 to-primary-950/80" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <div className="animate-fade-in">
            <p className="text-secondary-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">
              ISO 9001:2015 Certified · IATA Accredited · 22+ Years of Trust
            </p>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl font-700 mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              {hero.title}
            </h1>
            <p className="text-neutral-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 sm:mb-8">
              {hero.subtitle}
            </p>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mb-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === heroIndex ? 'w-8 bg-secondary-400' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => onNavigate('packages')} className="btn-primary">
              Explore Packages <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Flight Search Bar */}
      
      {/* Stats */}
      <section className="bg-primary-900 py-8 sm:py-12 mt-4 sm:mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-700 text-secondary-400 mb-1">{s.value}</div>
                <div className="text-neutral-300 text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-700 text-primary-900">Our Services</h2>
            <p className="text-neutral-500 mt-2 sm:mt-3 text-sm sm:text-lg max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to every need — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <button
                key={s.title}
                onClick={() => onNavigate(s.page)}
                className="card p-3 sm:p-5 text-left hover:-translate-y-1 transition-transform duration-200 group"
              >
                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 ${s.color}`}>
                  <s.icon size={18} className="sm:hidden" />
                  <s.icon size={22} className="hidden sm:block" />
                </div>
                <h3 className="font-heading font-600 text-xs sm:text-sm text-neutral-800 mb-1 group-hover:text-primary-900 transition-colors">{s.title}</h3>
                <p className="text-[10px] sm:text-xs text-neutral-500 leading-relaxed hidden sm:block">{s.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900">Featured Destinations</h2>
              <p className="text-neutral-500 mt-2">Handpicked destinations for unforgettable experiences</p>
            </div>
            <button onClick={() => onNavigate('packages')} className="hidden sm:flex items-center gap-2 text-secondary-500 font-medium hover:gap-3 transition-all">
              View All <ChevronRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((dest) => (
              <div
                key={dest.name}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-52 sm:h-72"
                onClick={() => onNavigate('packages')}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-heading font-700 text-xl">{dest.name}</h3>
                  <p className="text-neutral-300 text-sm mb-2">{dest.tagline}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-300">
                      <Clock size={12} /> {dest.duration}
                    </div>
                    <div className="bg-secondary-500 text-white text-sm font-600 px-3 py-1 rounded-full">
                      From {dest.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Deals */}
      <section className="py-12 sm:py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900">Latest Travel Deals</h2>
            <p className="text-neutral-500 mt-2">Exclusive offers — book now before they're gone!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.title} className="card group cursor-pointer" onClick={() => onNavigate('deals')}>
                <div className="relative overflow-hidden h-48">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-700 px-3 py-1 rounded-full">
                    {deal.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-error-500 text-white text-sm font-700 px-3 py-1 rounded-full">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-600 text-neutral-800 mb-1">{deal.title}</h3>
                  <p className="text-xs text-neutral-400 flex items-center gap-1">
                    <Clock size={12} /> {deal.validity}
                  </p>
                  <button className="mt-3 text-secondary-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => onNavigate('deals')} className="btn-primary">
              View All Deals
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-white">Why Choose Venkitravel?</h2>
            <p className="text-neutral-300 mt-2">A legacy built on trust, expertise, and customer satisfaction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Legacy of Trust', desc: '25 years of industry expertise — synonymous with reliability and quality.' },
              { icon: Globe, title: 'Global Reach', desc: 'Worldwide network ensuring world-class experiences tailored to your preferences.' },
              { icon: Shield, title: 'ISO 9001:2015 Certified', desc: 'Certified quality management — delivering excellence in every service.' },
              { icon: Users, title: 'Customer-First Approach', desc: 'Dedicated team available at every step to ensure your satisfaction.' },
              { icon: Package, title: 'Comprehensive Services', desc: 'From planning to execution — every aspect of your travel under one roof.' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer support for any travel assistance you need.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-secondary-400" />
                </div>
                <h3 className="font-heading font-600 text-white mb-2">{item.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900">What Our Travellers Say</h2>
            <p className="text-neutral-500 mt-2">Real experiences from real travellers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-600 text-sm text-neutral-800">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-12 sm:py-20 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B2A6B 0%, #00AEEF 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-700 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Discover the world with Venkitravel.com. Your journey begins here!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => onNavigate('packages')} className="bg-white text-primary-900 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors">
              Explore Packages
            </button>
            <button onClick={() => onNavigate('contact')} className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
