import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

const faqData = [
  {
    category: 'Flight Booking',
    items: [
      { q: 'How do I book a flight through Venkitravel.com?', a: 'You can book flights by contacting our team via phone, email, or visiting our office. Share your travel dates, origin, destination, and number of passengers. Our team will provide the best available options and assist with booking.' },
      { q: 'Can I book both domestic and international flights?', a: 'Yes, we handle both domestic and international flight bookings. We work with all major airlines and can offer competitive pricing with flexible seat selection options.' },
      { q: 'What is the process for group flight bookings?', a: 'For groups of 10 or more, we offer special group fares and dedicated assistance. Contact our team with your group size, travel dates, and destination for a customized quote.' },
      { q: 'Can I modify or cancel a booked flight?', a: 'Modifications and cancellations depend on the airline\'s policy and the fare type booked. Our team will guide you through the process and assist with any rebooking. Fees may apply as per the airline\'s terms.' },
      { q: 'Do you offer business class and premium economy bookings?', a: 'Yes, we can book all cabin classes including economy, premium economy, business, and first class. Let us know your preference when making an enquiry.' },
    ],
  },
  {
    category: 'Hotel Booking',
    items: [
      { q: 'What types of accommodation do you offer?', a: 'We offer a wide range of accommodation options including hotels (budget to luxury), resorts, serviced apartments, villas, guesthouses, and homestays worldwide.' },
      { q: 'Can I make special requests for my hotel stay?', a: 'Yes, we can communicate special requests such as room type preferences, early check-in/late checkout, dietary needs, anniversary or honeymoon setups, and more to the hotel.' },
      { q: 'Do you offer flight + hotel combo packages?', a: 'Yes, we offer combined flight and hotel packages which can often offer better value than booking separately. Ask our team for a bundled quote.' },
      { q: 'What is the cancellation policy for hotel bookings?', a: 'Cancellation policies vary by hotel and room type. We will clearly communicate the applicable policy at the time of booking. It is advisable to book refundable rates for flexible travel plans.' },
    ],
  },
  {
    category: 'Tour Packages',
    items: [
      { q: 'What types of tour packages do you offer?', a: 'We offer domestic, international, honeymoon, adventure, pilgrimage, seasonal, and fully customized tour packages. From quick 3-day getaways to 14-night grand tours, we cater to all travel styles.' },
      { q: 'Can I customize a tour package?', a: 'Absolutely. We specialize in creating tailor-made itineraries based on your interests, travel dates, budget, and group size. Contact our team to start planning your custom trip.' },
      { q: 'Are meals and sightseeing included in packages?', a: 'Package inclusions vary. Some packages are fully inclusive while others are room-only or B&B. We will clearly outline all inclusions and exclusions before you book.' },
      { q: 'What is the minimum group size for a tour?', a: 'Most of our packages can be arranged for couples or families of 2 or more. Group packages typically require a minimum of 10 persons for special group rates.' },
      { q: 'Do you provide a tour guide?', a: 'Yes, guided tours are available for most destinations. We can arrange English-speaking local guides or multi-lingual guides depending on your destination and requirement.' },
    ],
  },
  {
    category: 'Visa Assistance',
    items: [
      { q: 'Which countries do you provide visa assistance for?', a: 'We provide visa assistance for 50+ countries including UAE, USA, UK, Schengen (Europe), Australia, Canada, Japan, Singapore, Thailand, Malaysia, South Africa, New Zealand, and more.' },
      { q: 'What types of visas do you help with?', a: 'We assist with tourist visas, business visas, student visas, transit visas, and visa renewals. Our experts guide you through every step of the application process.' },
      { q: 'Can you guarantee visa approval?', a: 'While we ensure all documentation is accurate and complete, visa approval is at the sole discretion of the respective embassy or consulate. We cannot guarantee approval but maximize your chances through proper preparation.' },
      { q: 'How long does visa processing take?', a: 'Processing times vary by destination — from 3 days for UAE to 4-8 weeks for USA/Canada. We will provide specific timelines when you enquire about your destination.' },
      { q: 'What documents are generally required for a visa?', a: 'Typical requirements include a valid passport, visa application form, recent photographs, accommodation proof, return flight tickets, bank statements, and travel insurance. Specific requirements vary by country and visa type.' },
    ],
  },
  {
    category: 'Passport Assistance',
    items: [
      { q: 'Can you help with a new passport application?', a: 'Yes, we provide end-to-end assistance for new passport applications including form filling, document verification, and appointment scheduling at the Passport Seva Kendra.' },
      { q: 'Do you assist with passport renewals?', a: 'Yes, we assist with standard and Tatkal (fast-track) passport renewals. We guide you on the required documents, fees, and the appointment booking process.' },
      { q: 'What if there are errors in my existing passport?', a: 'We can assist with passport corrections for name, date of birth, address, and other details. Our team will advise on the appropriate procedure and required documents.' },
    ],
  },
  {
    category: 'Travel Insurance',
    items: [
      { q: 'Why do I need travel insurance?', a: 'Travel insurance protects you against unforeseen events like medical emergencies, trip cancellations, lost baggage, flight delays, and travel disruptions. It gives you peace of mind during your journey.' },
      { q: 'What does your travel insurance cover?', a: 'Our comprehensive plans cover medical emergencies, trip cancellation/interruption, baggage loss, personal liability, flight delays, and emergency evacuation. Adventure sports coverage is also available.' },
      { q: 'Is travel insurance mandatory?', a: 'Travel insurance is mandatory for Schengen visa applications and strongly recommended for all international travel. We always recommend insuring your trip regardless of destination.' },
    ],
  },
  {
    category: 'Attestation Services',
    items: [
      { q: 'What is document attestation?', a: 'Document attestation is the process of getting your documents certified by the appropriate authorities for use in another country. This is commonly required for employment, higher education, or residency abroad.' },
      { q: 'Which documents can you attest?', a: 'We assist with attestation of educational documents (degree, diploma, HSC, SSC), personal documents (birth certificate, marriage certificate), and commercial documents for overseas use.' },
      { q: 'What authorities are involved in the attestation process?', a: 'The process typically involves State Home Department / HRD, Ministry of External Affairs (MEA), and the respective country\'s Embassy. We manage all these steps on your behalf.' },
    ],
  },
  {
    category: 'Forex Services',
    items: [
      { q: 'What forex services do you provide?', a: 'We provide foreign currency exchange, forex cards (prepaid travel cards), traveler\'s cheques, and doorstep currency delivery services at competitive rates.' },
      { q: 'Which currencies do you offer?', a: 'We deal in all major currencies including USD, EUR, GBP, AED, SGD, AUD, JPY, THB, and more. Contact us for the current available currencies and rates.' },
      { q: 'What are the advantages of a forex card?', a: 'Forex cards offer locked exchange rates, are accepted worldwide, offer security benefits over cash, can be used at ATMs abroad, and some cards offer zero transaction fees.' },
    ],
  },
  {
    category: 'Group & Corporate Travel',
    items: [
      { q: 'What qualifies as a group booking?', a: 'We offer group booking services for parties of 10 or more. This includes leisure groups, corporate travel, school/educational trips, pilgrimage groups, and incentive tours.' },
      { q: 'What benefits do group bookings get?', a: 'Groups receive discounted rates on flights and hotels, dedicated relationship managers, customized itineraries, and priority support throughout the journey.' },
      { q: 'Do you handle corporate travel management?', a: 'Yes, we offer comprehensive corporate travel management including policy-compliant bookings, expense management support, preferred vendor rates, and 24/7 on-trip support.' },
    ],
  },
];

export default function FAQ({ onNavigate }: FAQProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...faqData.map((f) => f.category)];

  const toggle = (key: string) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  const filteredData = faqData
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          !searchQuery ||
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="FAQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-700 mb-3">Frequently Asked Questions</h1>
          <p className="text-neutral-200 text-lg">Everything you need to know about our services</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Search */}
        <div className="relative mb-8">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-neutral-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent bg-white shadow-sm"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
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

        {/* FAQ Accordion */}
        <div className="space-y-8">
          {filteredData.length === 0 ? (
            <div className="text-center py-16 text-neutral-500">
              <Search size={40} className="mx-auto mb-3 text-neutral-300" />
              <p>No results found for "{searchQuery}"</p>
            </div>
          ) : (
            filteredData.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-heading font-700 text-primary-900 text-xl mb-4 pb-3 border-b border-neutral-200">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.category}-${idx}`;
                    const isOpen = openItem === key;
                    return (
                      <div key={key} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
                        >
                          <span className="font-medium text-neutral-800 text-sm pr-4">{item.q}</span>
                          {isOpen
                            ? <ChevronUp size={16} className="text-secondary-500 flex-shrink-0" />
                            : <ChevronDown size={16} className="text-neutral-400 flex-shrink-0" />
                          }
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                            <p className="pt-3">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-primary-900 rounded-2xl p-8 text-white text-center">
          <h3 className="font-heading text-xl font-700 mb-2">Still Have Questions?</h3>
          <p className="text-neutral-300 mb-5 text-sm">Our travel experts are ready to help you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
              Contact Us
            </button>
            <a href="tel:+914023411234" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm border border-white/20">
              Call: +91-40-2341 1234
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
