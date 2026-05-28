import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="./VT_Logo.png" alt="Venki Travel" className="h-12 w-auto mb-4" />
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Your trusted travel partner for over 25 years. ISO 9001:2015 Certified & IATA Accredited.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            
                           </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-600 text-white mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Tour Packages', page: 'packages' },
                { label: 'Services', page: 'services' },
                { label: 'Visa Assistance', page: 'visa' },
                { label: 'Travel Deals', page: 'deals' },
                { label: 'Events', page: 'events' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => nav(item.page)}
                    className="text-neutral-300 hover:text-secondary-300 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-600 text-white mb-4 text-base">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Flight Booking',
                'Hotel Booking',
                'Cruise Booking',
                'Visa Processing',
                'Passport Assistance',
                'Travel Insurance',
                'Attestation Services',
                'Forex Services',
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => nav('services')}
                    className="text-neutral-300 hover:text-secondary-300 text-sm transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div>
            <h4 className="font-heading font-600 text-white mb-4 text-base">Contact Us</h4>
               <h4 className="font-heading font-600 text-white mb-4 text-base">India</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-neutral-300">
                <MapPin size={16} className="text-secondary-400 flex-shrink-0 mt-0.5" />
                <span>8-2-293/82/A/22/A, G-3, Road No.5,
Jubilee Hills, Pillar No. 1572
Hyderabad - 500033, Telangana, India</span>
              </li>
              <li className="flex gap-3 text-sm text-neutral-300">
                <Phone size={16} className="text-secondary-400 flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-secondary-300 transition-colors">
                  +91-92480-70008
                </a>
              </li>
              <li className="flex gap-3 text-sm text-neutral-300">
                <Mail size={16} className="text-secondary-400 flex-shrink-0" />
                <a href="mailto:info@venkitravel.com" className="hover:text-secondary-300 transition-colors">
                  info@venkitravel.com
                </a>
              </li>
            </ul>
          </div>
<div class="pt-2"> 
            <h4 className="font-heading font-600 text-white mb-4 text-base">South Africa</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-neutral-300">
                <MapPin size={16} className="text-secondary-400 flex-shrink-0 mt-0.5" />
                <span>VENKI TRAVEL PTY LTD
@ Sandton, CW-12, Cowork Space, 5 Benmore Rd,
Benmore Gardens, Johannesburg, 2196, South Africa
E-mail:venkitravelsa@gmail.com, website: www.venkitravel.com
</span>
              </li>
              <li className="flex gap-3 text-sm text-neutral-300">
                <Phone size={16} className="text-secondary-400 flex-shrink-0" />
                <a href="tel:+27823126688" className="hover:text-secondary-300 transition-colors">
                 +27 823126688   +27 609610102
                </a>
              </li>
              <li className="flex gap-3 text-sm text-neutral-300">
                <Mail size={16} className="text-secondary-400 flex-shrink-0" />
                <a href="mailto:info@venkitravel.com" className="hover:text-secondary-300 transition-colors">
                  info@venkitravel.com
                </a>
              </li>
            </ul>
</div>
            <div className="mt-6">
              <h5 className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">Policies</h5>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Privacy Policy', page: 'privacy' },
                  { label: 'Terms', page: 'terms' },
                  { label: 'Cancellation', page: 'cancellation' },
                  { label: 'FAQ', page: 'faq' },
                  { label: 'Sitemap', page: 'sitemap' },
                ].map((p) => (
                  <button
                    key={p.page}
                    onClick={() => nav(p.page)}
                    className="text-xs text-neutral-400 hover:text-secondary-300 transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-neutral-400 text-xs">
          &copy; {new Date().getFullYear()} Venkitravel.com. All rights reserved. | ISO 9001:2015 Certified Travel Solutions Provider
        </p>
      </div>
    </footer>
  );
}
