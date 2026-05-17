import { useEffect, useState } from 'react';
import { Calendar, Tag, ArrowRight, Loader } from 'lucide-react';
import { supabase, EventOffer } from '../lib/supabase';

interface EventsProps {
  onNavigate: (page: string) => void;
}

const fallbackOffers = [
  {
    id: 'fallback-1',
    title: 'Summer Sale — Up to 40% Off',
    description: 'Book your summer holiday now and save big on flights, hotels, and packages to top destinations.',
    image_url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_active: true,
    created_at: '',
  },
  {
    id: 'fallback-2',
    title: 'Honeymoon Specials 2026',
    description: 'Exclusive romantic escapes to Maldives, Bali, and Mauritius — curated for couples.',
    image_url: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_active: true,
    created_at: '',
  },
  {
    id: 'fallback-3',
    title: 'Europe Grand Tour Packages',
    description: 'Explore 10 European countries in 14 nights — all-inclusive packages available.',
    image_url: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_active: true,
    created_at: '',
  },
  {
    id: 'fallback-4',
    title: 'Japan Cherry Blossom Tour',
    description: 'Witness the breathtaking sakura season with our specially crafted Japan tour packages.',
    image_url: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    is_active: true,
    created_at: '',
  },
];

const upcomingEvents = [
  {
    title: 'Travel Expo Hyderabad 2026',
    date: 'June 15–17, 2026',
    location: 'HICC, Hyderabad',
    description: 'Meet our travel experts and discover exclusive packages and deals at this annual travel expo.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Monsoon Escape Package Launch',
    date: 'July 1, 2026',
    location: 'Online & In-Store',
    description: 'Special early-bird monsoon packages launching with up to 35% off on Kerala, Coorg, and Goa.',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Char Dham Yatra Registration Opens',
    date: 'August 10, 2026',
    location: 'Venkitravel.com Office',
    description: 'Early registration for the 2027 Char Dham Yatra. Limited seats — register now.',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Events({ onNavigate }: EventsProps) {
  const [offers, setOffers] = useState<EventOffer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('event_offers')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      setOffers(data && data.length > 0 ? data : fallbackOffers);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Events & Offers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Events & Offers</h1>
          <p className="text-neutral-200 text-lg">Latest promotions, events, and travel opportunities</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Latest Offers */}
        <section>
          <div className="text-center mb-10">
            <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">Exclusive Promotions</span>
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900 mt-2">Latest Offers</h2>
            <p className="text-neutral-500 mt-2">Handpicked deals updated regularly — book before they expire!</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <Loader size={32} className="text-secondary-500 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="card group overflow-hidden flex flex-col md:flex-row">
                  <div className="relative md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={offer.image_url}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Tag size={10} /> Offer
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-600 text-primary-900 text-lg mb-2">{offer.title}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{offer.description}</p>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="mt-4 text-secondary-500 hover:text-secondary-600 text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      Enquire Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="text-center mb-10">
            <span className="text-secondary-500 font-medium text-sm uppercase tracking-wider">Mark Your Calendar</span>
            <h2 className="text-3xl md:text-4xl font-heading font-700 text-primary-900 mt-2">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-secondary-300 mb-1">
                      <Calendar size={11} /> {event.date}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-600 text-primary-900 mb-1">{event.title}</h3>
                  <p className="text-xs text-secondary-500 font-medium mb-3">{event.location}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{event.description}</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-4 text-secondary-500 hover:text-secondary-600 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    Register Interest <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-primary-900 to-secondary-700 rounded-3xl p-10 text-white text-center">
          <h3 className="font-heading text-2xl font-700 mb-2">Stay Updated on Exclusive Offers</h3>
          <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
            Be the first to know about flash sales, early-bird deals, and new tour packages.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary-900 font-semibold px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Subscribe to Updates
          </button>
        </section>
      </div>
    </div>
  );
}
