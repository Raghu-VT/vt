import { useState } from 'react';
import { Clock, Users, Star, ArrowRight, Filter } from 'lucide-react';

interface PackagesProps {
  onNavigate: (page: string) => void;
  initialCategory?: string;
}

const categories = ['All', 'Domestic', 'International', 'South Africa', 'Honeymoon', 'Adventure', 'Pilgrimage', 'Customized'];

const packages = [
  // Domestic
  {
    title: 'Goa Beach Paradise',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '4 Nights / 5 Days',
    groupSize: '2-6',
    rating: 4.8,
    tags: ['Beach', 'Party', 'Relaxation'],
    highlights: ['Calangute Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Night Markets'],
  },
  {
    title: 'Kashmir Valley Dream',
    category: 'Domestic',
    image: '/Package_Images/Kashmir_Valley_Dream.png',
    duration: '6 Nights / 7 Days',
    groupSize: '2-8',
    rating: 4.9,
    tags: ['Mountains', 'Snow', 'Scenic'],
    highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Mughal Gardens'],
  },
  {
    title: 'Rajasthan Royal Tour',
    category: 'Domestic',
    image: '/Package_Images/Rajasthan_Royal_Tour.png',
    duration: '7 Nights / 8 Days',
    groupSize: '2-10',
    rating: 4.7,
    tags: ['Heritage', 'Culture', 'Desert'],
    highlights: ['Jaipur Pink City', 'Udaipur Lakes', 'Jaisalmer Fort', 'Pushkar Fair'],
  },
  {
    title: 'Kerala Backwaters Bliss',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5 Nights / 6 Days',
    groupSize: '2-6',
    rating: 4.8,
    tags: ['Backwaters', 'Ayurveda', 'Nature'],
    highlights: ['Alleppey Houseboat', 'Munnar Tea Gardens', 'Kumarakom', 'Kochi Fort'],
  },
  {
    title: 'Himachal Himalayan Escape',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2-8',
    rating: 4.7,
    tags: ['Mountains', 'Adventure', 'Scenic'],
    highlights: ['Shimla Ridge', 'Manali Solang Valley', 'Kullu', 'Rohtang Pass'],
  },
  // International
  {
    title: 'Dubai Gold Experience',
    category: 'International',
    image: '/Package_Images/Dubai_Gold_Experience.png',
    duration: '5 Nights / 6 Days',
    groupSize: '2-6',
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
    rating: 4.7,
    tags: ['Culture', 'Beach', 'Food'],
    highlights: ['Bangkok Temples', 'Phuket Islands', 'Floating Markets', 'Muay Thai Show'],
  },
  {
    title: 'Singapore & Malaysia',
    category: 'International',
    image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2-6',
    rating: 4.7,
    tags: ['City', 'Theme Parks', 'Shopping'],
    highlights: ['Sentosa Island', 'Gardens by the Bay', 'Kuala Lumpur Twin Towers', 'Genting Highlands'],
  },
  {
    title: 'Europe Grand Tour',
    category: 'International',
    image: '/Package_Images/Europe_Grand_Tour.png',
    duration: '10 Nights / 11 Days',
    groupSize: '2-12',
    rating: 4.9,
    tags: ['Culture', 'Heritage', 'Scenic'],
    highlights: ['Paris Eiffel Tower', 'Swiss Alps', 'Rome Colosseum', 'Amsterdam Canals'],
  },
  {
    title: 'Australia Adventure',
    category: 'International',
    image: '/Package_Images/Australia_Adventure.png',
    duration: '8 Nights / 9 Days',
    groupSize: '2-8',
    rating: 4.8,
    tags: ['Wildlife', 'Nature', 'Adventure'],
    highlights: ['Sydney Opera House', 'Great Barrier Reef', 'Melbourne', 'Gold Coast'],
  },
  // Maldives
  {
    title: 'Maldives Paradise Escape',
    category: 'International',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5 Nights / 6 Days',
    groupSize: '2',
    rating: 5.0,
    tags: ['Luxury', 'Beach', 'Overwater Villa'],
    highlights: ['Overwater Bungalow', 'Snorkeling', 'Sunset Cruise', 'Underwater Restaurant'],
  },
  // Mauritius
  {
    title: 'Mauritius Island Bliss',
    category: 'International',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2-6',
    rating: 4.9,
    tags: ['Beach', 'Water Sports', 'Romance'],
    highlights: ['Belle Mare Beach', 'Seven Coloured Earth', 'Black River Gorges', 'Ile aux Cerfs'],
  },
  // Vietnam
  {
    title: 'Vietnam Discovery',
    category: 'International',
    image: 'https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '7 Nights / 8 Days',
    groupSize: '2-8',
    rating: 4.8,
    tags: ['Culture', 'History', 'Nature'],
    highlights: ['Ha Long Bay Cruise', 'Hanoi Old Quarter', 'Ho Chi Minh City', 'Mekong Delta'],
  },
  // Kenya Safari
  {
    title: 'Kenya Safari Experience',
    category: 'International',
    image: 'https://images.pexels.com/photos/1547951/pexels-photo-1547951.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2-6',
    rating: 5.0,
    tags: ['Safari', 'Wildlife', 'Big Five'],
    highlights: ['Masai Mara', 'Amboseli National Park', 'Lake Nakuru', 'Nairobi'],
  },
  // South Africa - Cape Town
  {
    title: 'Cape Town & Peninsula',
    category: 'South Africa',
    image: '/Package_Images/Cape_Town_&_Peninsula.png',
    duration: '5 Nights / 6 Days',
    groupSize: '2-6',
    rating: 4.8,
    tags: ['Coastal', 'Wine', 'Scenic'],
    highlights: ['Table Mountain', 'Cape of Good Hope', 'Stellenbosch Winelands', 'V&A Waterfront'],
  },
  // South Africa - Kruger
  {
    title: 'Kruger National Park Safari',
    category: 'South Africa',
    image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '4 Nights / 5 Days',
    groupSize: '2-6',
    rating: 5.0,
    tags: ['Safari', 'Big Five', 'Wildlife'],
    highlights: ['Game Drives', 'Bush Walks', 'Sundowner Experiences', 'Luxury Safari Lodge'],
  },
  // South Africa - Pilanesberg
  {
    title: 'Pilanesberg & Sun City',
    category: 'South Africa',
    image: '/Package_Images/Pilanesberg_&_Sun_City.png',
    duration: '3 Nights / 4 Days',
    groupSize: '2-6',
    rating: 4.7,
    tags: ['Safari', 'Resort', 'Entertainment'],
    highlights: ['Pilanesberg Game Reserve', 'Sun City Resort', 'Valley of Waves', 'Casino'],
  },
  // South Africa - Garden Route
  {
    title: 'Garden Route Journey',
    category: 'South Africa',
    image: '/Package_Images/Garden_Route_Journey.png',
    duration: '6 Nights / 7 Days',
    groupSize: '2-8',
    rating: 4.8,
    tags: ['Scenic', 'Coastal', 'Adventure'],
    highlights: ['Tsitsikamma National Park', 'Knysna Lagoon', 'Oudtshoorn Caves', 'Mossel Bay'],
  },
  // South Africa - Johannesburg
  {
    title: 'Johannesburg & Pretoria',
    category: 'South Africa',
    image: '/Package_Images/Johannesburg_&_Pretoria.png',
    duration: '3 Nights / 4 Days',
    groupSize: '2-6',
    rating: 4.6,
    tags: ['City', 'History', 'Culture'],
    highlights: ['Apartheid Museum', 'Soweto Tour', 'Voortrekker Monument', 'Constitution Hill'],
  },
  // South Africa - Durban
  {
    title: 'Durban Beach Escape',
    category: 'South Africa',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '4 Nights / 5 Days',
    groupSize: '2-6',
    rating: 4.5,
    tags: ['Beach', 'Surfing', 'Family'],
    highlights: ['Golden Mile Beach', 'uShaka Marine World', 'Moses Mabhida Stadium', 'Indian Market'],
  },
  // South Africa - Complete Tour
  {
    title: 'Best of South Africa Tour',
    category: 'South Africa',
    image: '/Package_Images/Best_of_South_Africa_Tour.png',
    duration: '10 Nights / 11 Days',
    groupSize: '2-8',
    rating: 5.0,
    tags: ['Complete Tour', 'Safari', 'Scenic'],
    highlights: ['Cape Town', 'Kruger Safari', 'Garden Route', 'Sun City', 'Johannesburg'],
  },
  // Honeymoon
  {
    title: 'Bali Romance Escape',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2',
    rating: 4.9,
    tags: ['Honeymoon', 'Beach', 'Spa'],
    highlights: ['Ubud Rice Terraces', 'Seminyak Beach', 'Temple Hopping', 'Couple Spa'],
  },
  {
    title: 'Maldives Luxury Retreat',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '5 Nights / 6 Days',
    groupSize: '2',
    rating: 5.0,
    tags: ['Luxury', 'Overwater Villa', 'Diving'],
    highlights: ['Overwater Bungalow', 'Snorkeling', 'Sunset Cruise', 'Underwater Restaurant'],
  },
  {
    title: 'Mauritius Honeymoon Special',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '6 Nights / 7 Days',
    groupSize: '2',
    rating: 4.9,
    tags: ['Romance', 'Beach', 'Luxury'],
    highlights: ['Private Beach Dinner', 'Catamaran Cruise', 'Couple Spa', 'Island Hopping'],
  },
  // Adventure
  {
    title: 'Himalayan Adventure Trek',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '8 Nights / 9 Days',
    groupSize: '4-12',
    rating: 4.8,
    tags: ['Trek', 'Camping', 'Mountains'],
    highlights: ['Valley of Flowers', 'Roopkund Trek', 'Camping at Altitude', 'River Rafting'],
  },
  {
    title: 'Ladakh Motorcycle Expedition',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/2901212/pexels-photo-2901212.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '10 Nights / 11 Days',
    groupSize: '4-10',
    rating: 4.9,
    tags: ['Motorcycle', 'Mountains', 'Thrill'],
    highlights: ['Leh City', 'Khardung La Pass', 'Pangong Lake', 'Nubra Valley'],
  },
  {
    title: 'Andaman Island Adventure',
    category: 'Adventure',
    image: '/Package_Images/Andaman_Island_Adventure.png',
    duration: '6 Nights / 7 Days',
    groupSize: '2-8',
    rating: 4.8,
    tags: ['Scuba', 'Beach', 'Island'],
    highlights: ['Scuba Diving', 'Havelock Island', 'Radhanagar Beach', 'Cellular Jail'],
  },
  // Pilgrimage
  {
    title: 'Char Dham Yatra',
    category: 'Pilgrimage',
    image: '/Package_Images/Char_Dham_Yatra.png',
    duration: '12 Nights / 13 Days',
    groupSize: '4-20',
    rating: 4.9,
    tags: ['Spiritual', 'Pilgrimage', 'Sacred'],
    highlights: ['Yamunotri Temple', 'Gangotri Temple', 'Kedarnath Temple', 'Badrinath Temple'],
    description: 'The sacred Char Dham Yatra covers the four holy shrines of Uttarakhand. Experience divine energy at Yamunotri (source of Yamuna), Gangotri (source of Ganga), Kedarnath (one of 12 Jyotirlingas), and Badrinath (abode of Lord Vishnu).',
  },
  {
    title: 'Amarnath Yatra',
    category: 'Pilgrimage',
    image: '/Package_Images/Amarnath_Yatra.png',
    duration: '5 Nights / 6 Days',
    groupSize: '2-15',
    rating: 5.0,
    tags: ['Sacred', 'Shiva', 'Himalayas'],
    highlights: ['Amarnath Cave', 'Pahalgam', 'Chandanwari', 'Sheshnag Lake'],
    description: 'The holy Amarnath Yatra takes you to the sacred cave housing the naturally formed ice Shiva Lingam. Trek through stunning Himalayan terrain from Pahalgam via Sheshnag Lake to the cave at 3,888 meters. Helicopter services available.',
  },
  {
    title: 'Vaishno Devi Pilgrimage',
    category: 'Pilgrimage',
    image: '/Package_Images/Vaishno_Devi_Pilgrimage.png',
    duration: '3 Nights / 4 Days',
    groupSize: '2-10',
    rating: 4.9,
    tags: ['Goddess', 'Trek', 'Holy'],
    highlights: ['Vaishno Devi Temple', 'Ardhkuwari', 'Bhairon Temple', 'Katra'],
  },
  {
    title: 'Kashi Vishwanath & Gaya',
    category: 'Pilgrimage',
    image: '/Package_Images/Kashi_Vishwanath_&_Gaya.png',
    duration: '5 Nights / 6 Days',
    groupSize: '2-10',
    rating: 4.8,
    tags: ['Shiva', 'Ganga', 'Pind Daan'],
    highlights: ['Kashi Vishwanath Temple', 'Ganga Aarti', 'Bodh Gaya', 'Vishnupad Temple'],
  },
  {
    title: 'Tirupati Balaji Darshan',
    category: 'Pilgrimage',
    image: '/Package_Images/Tirupati_Balaji_Darshan.jpg',
    duration: '3 Nights / 4 Days',
    groupSize: '2-10',
    rating: 4.9,
    tags: ['Balaji', 'Tirumala', 'Divine'],
    highlights: ['Tirumala Temple', 'Padmavathi Temple', 'Kapila Theertham', 'Sri Kalahasti'],
  },
  {
    title: 'Golden Temple & Hemkund Sahib',
    category: 'Pilgrimage',
    image: '/Package_Images/Golden_Temple_&_Hemkund_Sahib.png',
    duration: '6 Nights / 7 Days',
    groupSize: '2-10',
    rating: 4.9,
    tags: ['Sikh', 'Holy', 'Mountains'],
    highlights: ['Golden Temple Amritsar', 'Hemkund Sahib', 'Valley of Flowers', 'Jallianwala Bagh'],
  },
  {
    title: 'Rameswaram & Kanyakumari',
    category: 'Pilgrimage',
    image: '/Package_Images/Rameswaram_&_Kanyakumari.png',
    duration: '4 Nights / 5 Days',
    groupSize: '2-10',
    rating: 4.8,
    tags: ['Rama', 'Jyotirlinga', 'Southern'],
    highlights: ['Ramanathaswamy Temple', 'Dhanushkodi', 'Vivekananda Rock Memorial', 'Kanyakumari Temple'],
  },
  {
    title: 'Jagannath Puri Yatra',
    category: 'Pilgrimage',
    image: '/Package_Images/Jagannath_Puri_Yatra.png',
    duration: '5 Nights / 6 Days',
    groupSize: '2-10',
    rating: 4.8,
    tags: ['Jagannath', 'Char Dham', 'Puri'],
    highlights: ['Jagannath Temple', 'Puri Beach', 'Konark Sun Temple', 'Chilika Lake'],
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
                {'description' in pkg && pkg.description && (
                  <p className="text-xs text-neutral-600 mb-4 leading-relaxed">{pkg.description}</p>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div>
                    <span className="text-xs text-neutral-400">Contact for details</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                  >
                    Enquire Now <ArrowRight size={14} />
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
