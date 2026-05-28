import { ChevronRight } from 'lucide-react';

interface SitemapProps {
  onNavigate: (page: string) => void;
}

const sections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', page: 'home', desc: 'Welcome to Venkitravel.com — your trusted travel partner' },
      { label: 'About Us', page: 'about', desc: 'Company profile, mission, vision, and our founder' },
      { label: 'Contact Us', page: 'contact', desc: 'Get in touch with our team for inquiries and bookings' },
      { label: 'Events', page: 'events', desc: 'Latest travel events and offers' },
      { label: 'FAQ', page: 'faq', desc: 'Frequently asked questions about our services' },
    ],
  },
  {
    title: 'Tour Packages',
    links: [
      { label: 'All Tour Packages', page: 'packages', desc: 'Browse our complete range of domestic and international packages' },
      { label: 'Domestic Packages', page: 'packages#Domestic', desc: 'Explore India — Goa, Kashmir, Rajasthan, and more' },
      { label: 'International Packages', page: 'packages#International', desc: 'Worldwide destinations — Dubai, Thailand, Europe, and more' },
      { label: 'Honeymoon Packages', page: 'packages#Honeymoon', desc: 'Romantic getaways for couples — Bali, Maldives, and more' },
      { label: 'Adventure Packages', page: 'packages#Adventure', desc: 'Thrilling adventures — treks, camping, and expeditions' },
      { label: 'Pilgrimage Packages', page: 'packages#Pilgrimage', desc: 'Sacred journeys — Char Dham Yatra and more' },
      { label: 'Customized Packages', page: 'packages#Customized', desc: 'Tailor-made travel packages designed just for you' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', page: 'services', desc: 'Comprehensive travel solutions under one roof' },
      { label: 'Flight Booking', page: 'services#flight-booking', desc: 'Domestic and international flights at best fares' },
      { label: 'Hotel Booking', page: 'services#hotel-booking', desc: 'Luxury resorts to budget stays worldwide' },
      { label: 'Cruise Booking', page: 'services#cruise-booking', desc: 'Unforgettable voyages on luxury liners' },
      { label: 'Visa Processing', page: 'services#visa-processing', desc: 'Tourist, business, and student visas for 50+ countries' },
      { label: 'Passport Assistance', page: 'services#passport-assistance', desc: 'New applications, renewals, and fast-track processing' },
      { label: 'Travel Insurance', page: 'services#travel-insurance', desc: 'Comprehensive coverage for peace of mind' },
      { label: 'Attestation Services', page: 'services#attestation-services', desc: 'Document attestation and legalization' },
      { label: 'Transport & Transfers', page: 'services#transport-transfers', desc: 'Airport pickups, city transfers, and car rentals' },
      { label: 'Accommodation Services', page: 'services#accommodation-services', desc: 'Apartments, villas, homestays, and more' },
      { label: 'Group Booking Services', page: 'services#group-booking', desc: 'Special deals for groups of 10 or more' },
      { label: 'Forex Services', page: 'services#forex-services', desc: 'Competitive currency exchange rates' },
    ],
  },
  {
    title: 'Visa Services',
    links: [
      { label: 'Visa Assistance', page: 'visa', desc: 'Expert visa services for 50+ countries worldwide' },
    ],
  },
  {
    title: 'Travel Deals',
    links: [
      { label: 'All Travel Deals', page: 'deals', desc: 'Exclusive offers on flights, hotels, and tour packages' },
      { label: 'Last-Minute Offers', page: 'deals#last-minute', desc: 'Book fast — limited availability' },
      { label: 'Early Bird Discounts', page: 'deals#early-bird', desc: 'Plan ahead and save big' },
      { label: 'Group Discounts', page: 'deals#group-discounts', desc: 'Special rates for groups of 10 or more' },
      { label: 'Featured Destinations', page: 'deals#featured-destinations', desc: 'Handpicked destinations with exclusive pricing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', page: 'privacy', desc: 'How we protect your personal information' },
      { label: 'Terms & Conditions', page: 'terms', desc: 'Terms of use for our services' },
      { label: 'Cancellation Policy', page: 'cancellation', desc: 'Cancellation and refund policies' },
    ],
  },
];

export default function Sitemap({ onNavigate }: SitemapProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-3xl md:text-5xl font-700 mb-3">Sitemap</h1>
          <p className="text-neutral-200 text-lg">A complete overview of all pages on Venkitravel.com</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-xl sm:text-2xl font-700 text-primary-900 mb-4 pb-2 border-b border-neutral-200">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.page)}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-100 hover:border-secondary-300 hover:shadow-md transition-all text-left group"
                >
                  <ChevronRight size={16} className="text-secondary-500 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <p className="font-medium text-sm text-neutral-800 group-hover:text-primary-900 transition-colors">{link.label}</p>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{link.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
