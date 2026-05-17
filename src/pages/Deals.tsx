import { Clock, Tag, ArrowRight, Zap, TrendingDown, Users } from 'lucide-react';

interface DealsProps {
  onNavigate: (page: string) => void;
}

const lastMinuteDeals = [
  {
    title: 'Singapore City Escape',
    image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹52,000',
    salePrice: '₹38,000',
    discount: '27% OFF',
    validity: '3 days left',
    duration: '5N/6D',
    urgent: true,
  },
  {
    title: 'Manali Winter Wonderland',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹22,000',
    salePrice: '₹15,000',
    discount: '32% OFF',
    validity: '5 days left',
    duration: '4N/5D',
    urgent: true,
  },
  {
    title: 'Colombo Sri Lanka Tour',
    image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹32,000',
    salePrice: '₹24,000',
    discount: '25% OFF',
    validity: '7 days left',
    duration: '5N/6D',
    urgent: false,
  },
];

const earlyBirdDeals = [
  {
    title: 'Swiss Alps Summer Tour',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹1,20,000',
    salePrice: '₹85,000',
    discount: '29% OFF',
    validity: 'Book by June 30',
    duration: '8N/9D',
  },
  {
    title: 'Japan Cherry Blossom',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹95,000',
    salePrice: '₹68,000',
    discount: '28% OFF',
    validity: 'Book by July 15',
    duration: '7N/8D',
  },
  {
    title: 'Europe Grand Tour',
    image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600',
    originalPrice: '₹1,50,000',
    salePrice: '₹1,08,000',
    discount: '28% OFF',
    validity: 'Book by Aug 1',
    duration: '12N/13D',
  },
];

const groupDeals = [
  {
    title: 'Bali Group Getaway',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600',
    pricePerPerson: '₹28,000',
    minGroupSize: 10,
    discount: '20% OFF',
    duration: '6N/7D',
  },
  {
    title: 'Dubai Group Experience',
    image: 'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=600',
    pricePerPerson: '₹35,000',
    minGroupSize: 8,
    discount: '18% OFF',
    duration: '5N/6D',
  },
  {
    title: 'Thailand Group Special',
    image: 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=600',
    pricePerPerson: '₹22,000',
    minGroupSize: 12,
    discount: '22% OFF',
    duration: '7N/8D',
  },
];

const featuredDestinationDeals = [
  {
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600',
    from: '₹58,000',
    tag: 'Honeymoon Special',
  },
  {
    name: 'Mauritius',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
    from: '₹72,000',
    tag: 'Luxury Retreat',
  },
  {
    name: 'Vietnam',
    image: 'https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=600',
    from: '₹32,000',
    tag: 'Budget Friendly',
  },
  {
    name: 'Kenya Safari',
    image: 'https://images.pexels.com/photos/1547951/pexels-photo-1547951.jpeg?auto=compress&cs=tinysrgb&w=600',
    from: '₹95,000',
    tag: 'Wildlife Adventure',
  },
];

export default function Deals({ onNavigate }: DealsProps) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Travel Deals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Travel Deals</h1>
          <p className="text-neutral-200 text-lg">Exclusive offers on flights, hotels, and tour packages</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Last Minute */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-error-100 p-2 rounded-xl">
              <Zap size={22} className="text-error-600" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-700 text-primary-900">Last-Minute Offers</h2>
              <p className="text-neutral-500 text-sm">Book fast — limited availability!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lastMinuteDeals.map((deal) => (
              <div key={deal.title} className="card group overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {deal.urgent && (
                    <div className="absolute top-3 left-3 bg-error-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <Zap size={10} /> Urgent
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-success-500 text-white text-sm font-700 px-3 py-1 rounded-full">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-600 text-neutral-800 mb-2">{deal.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {deal.duration}</span>
                    <span className="flex items-center gap-1 text-error-500"><Clock size={11} /> {deal.validity}</span>
                  </div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-heading font-700 text-primary-900">{deal.salePrice}</span>
                    <span className="text-sm text-neutral-400 line-through">{deal.originalPrice}</span>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="w-full btn-primary justify-center py-2">
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Early Bird */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent-100 p-2 rounded-xl">
              <TrendingDown size={22} className="text-accent-600" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-700 text-primary-900">Early Bird Discounts</h2>
              <p className="text-neutral-500 text-sm">Plan ahead and save big!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyBirdDeals.map((deal) => (
              <div key={deal.title} className="card group overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Early Bird
                  </div>
                  <div className="absolute top-3 right-3 bg-primary-900 text-white text-sm font-700 px-3 py-1 rounded-full">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-600 text-neutral-800 mb-2">{deal.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {deal.duration}</span>
                    <span className="flex items-center gap-1 text-accent-600"><Tag size={11} /> {deal.validity}</span>
                  </div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-heading font-700 text-primary-900">{deal.salePrice}</span>
                    <span className="text-sm text-neutral-400 line-through">{deal.originalPrice}</span>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="w-full btn-primary justify-center py-2">
                    Book Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group Discounts */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-secondary-100 p-2 rounded-xl">
              <Users size={22} className="text-secondary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-700 text-primary-900">Group Discounts</h2>
              <p className="text-neutral-500 text-sm">Special rates for groups of 10 or more</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groupDeals.map((deal) => (
              <div key={deal.title} className="card group overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-secondary-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Users size={10} /> Group Deal
                  </div>
                  <div className="absolute top-3 right-3 bg-success-500 text-white text-sm font-700 px-3 py-1 rounded-full">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-600 text-neutral-800 mb-3">{deal.title}</h3>
                  <div className="text-xs text-neutral-500 mb-3">
                    Min. {deal.minGroupSize} persons · {deal.duration}
                  </div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-heading font-700 text-primary-900">{deal.pricePerPerson}</span>
                    <span className="text-sm text-neutral-400">per person</span>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="w-full btn-primary justify-center py-2">
                    Get Group Quote <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-700 text-primary-900">Featured Destinations</h2>
            <p className="text-neutral-500 mt-2">Handpicked destinations with exclusive pricing</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredDestinationDeals.map((dest) => (
              <div
                key={dest.name}
                className="relative rounded-2xl overflow-hidden cursor-pointer h-64 group"
                onClick={() => onNavigate('contact')}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full inline-block mb-1">{dest.tag}</p>
                  <h3 className="font-heading font-700 text-lg">{dest.name}</h3>
                  <p className="text-secondary-300 text-sm font-600">From {dest.from}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
