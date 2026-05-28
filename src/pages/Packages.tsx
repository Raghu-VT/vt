import { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Filter } from 'lucide-react';

interface PackagesProps {
  onNavigate: (page: string) => void;
  initialCategory?: string;
}

const categories = ['All', 'Domestic', 'International', 'Honeymoon', 'Adventure', 'Pilgrimage', 'Customized'];

const categoryMap: Record<string, string> = {
  'packages-domestic': 'Domestic',
  'packages-international': 'International',
  'packages-custom': 'Customized',
  'packages-seasonal': 'All',
};

const packages = [
  {
    title: 'Goa Beach Paradise',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '4 Nights / 5 Days',
    groupSize: '2-6',
    price: '₹18,000',
    rating: 4.8,
    tags: ['Beach', 'Party', 'Relaxation'],
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Night Markets'],
  },
  {
    title: 'Kashmir Valley Dream',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2-8',
    price: '₹25,000',
    rating: 4.9,
    tags: ['Mountains', 'Snow', 'Scenic'],
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
  },
  {
    title: 'Rajasthan Royal Tour',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/3581932/pexels-photo-3581932.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '7 Nights / 8 Days',
    groupSize: '2-10',
    price: '₹32,000',
    rating: 4.7,
    tags: ['Heritage', 'Culture', 'Desert'],
    highlights: ['Jaipur Pink City', 'Udaipur Lakes', 'Jaisalmer Fort', 'Pushkar Fair'],
  },
  {
    title: 'Bali Romance Escape',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2',
    price: '₹42,000',
    rating: 4.9,
    tags: ['Honeymoon', 'Beach', 'Spa'],
    highlights: ['Ubud Rice Terraces', 'Seminyak Beach', 'Temple Hopping', 'Couple Spa'],
  },
  {
    title: 'Dubai Gold Experience',
    category: 'International',
    image: 'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5 Nights / 6 Days',
    groupSize: '2-6',
    price: '₹48,000',
    rating: 4.8,
    tags: ['Luxury', 'Shopping', 'Adventure'],
    highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
  },
  {
    title: 'Thailand Explorer',
    category: 'International',
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '7 Nights / 8 Days',
    groupSize: '2-8',
    price: '₹35,000',
    rating: 4.7,
    tags: ['Culture', 'Beach', 'Food'],
    highlights: ['Bangkok Temples', 'Phuket Islands', 'Floating Markets', 'Muay Thai Show'],
  },
  {
    title: 'Maldives Luxury Retreat',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5 Nights / 6 Days',
    groupSize: '2',
    price: '₹65,000',
    rating: 5.0,
    tags: ['Luxury', 'Overwater Villa', 'Diving'],
    highlights: ['Overwater Bungalow', 'Snorkeling', 'Sunset Cruise', 'Underwater Restaurant'],
  },
  {
    title: 'Himalayan Adventure Trek',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8 Nights / 9 Days',
    groupSize: '4-12',
    price: '₹28,000',
    rating: 4.8,
    tags: ['Trek', 'Camping', 'Mountains'],
    highlights: ['Valley of Flowers', 'Roopkund Trek', 'Camping at Altitude', 'River Rafting'],
  },
  {
    title: 'Char Dham Yatra',
    category: 'Pilgrimage',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '12 Nights / 13 Days',
    groupSize: '4-20',
    price: '₹38,000',
    rating: 4.9,
    tags: ['Spiritual', 'Pilgrimage', 'Sacred'],
    highlights: ['Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri'],
  },
];

export default function Packages({ onNavigate, initialCategory }: PackagesProps) {
  const [activeCategory, setActiveCategory] = useState(() => {
    if (initialCategory && categories.includes(initialCategory)) return initialCategory;
    return 'All';
  });

  const filtered = activeCategory === 'All'
    ? packages
    : packages.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Tour Packages"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Tour Packages</h1>
          <p className="text-neutral-200 text-lg">Discover curated journeys for every type of traveller</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10 items-center">
          <div className="flex items-center gap-2 text-neutral-500 mr-2">
            <Filter size={16} /> <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div key={pkg.title} className="card group overflow-hidden">
              <div className="relative overflow-hidden h-52">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary-900 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {pkg.category}
                </div>
                <div className="absolute top-3 right-3 bg-white text-primary-900 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                  <Star size={10} className="fill-accent-500 text-accent-500" /> {pkg.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-600 text-neutral-800 mb-2 text-lg">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                  <span className="flex items-center gap-1"><Clock size={12} /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {pkg.groupSize} pax</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {pkg.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary-50 text-secondary-600 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="text-xs text-neutral-500 space-y-1 mb-4">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div>
                    <span className="text-xs text-neutral-400">Starting from</span>
                    <div className="font-heading font-700 text-primary-900 text-xl">{pkg.price}</div>
                    <span className="text-xs text-neutral-400">per person</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                  >
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom package CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-900 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="font-heading text-2xl font-700 mb-2">Can't Find What You're Looking For?</h3>
          <p className="text-neutral-200 mb-6">We specialize in creating custom travel packages tailored just for you.</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-primary-900 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors">
            Request Custom Package
          </button>
        </div>
      </div>
    </div>
  );
}
