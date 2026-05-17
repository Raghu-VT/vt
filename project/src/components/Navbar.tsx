import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Home } from 'lucide-react';

type Page = string;

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  {
    label: 'Tour Packages',
    page: 'packages',
    children: [
      { label: 'Domestic Packages', page: 'packages-domestic' },
      { label: 'International Packages', page: 'packages-international' },
      { label: 'Customized Packages', page: 'packages-custom' },
      { label: 'Seasonal Packages', page: 'packages-seasonal' },
    ],
  },
  {
    label: 'Services',
    page: 'services',
    children: [
      { label: 'Flight Booking', page: 'services' },
      { label: 'Hotel Booking', page: 'services' },
      { label: 'Cruise Booking', page: 'services' },
      { label: 'Visa Processing', page: 'visa' },
      { label: 'Passport Assistance', page: 'services' },
      { label: 'Travel Insurance', page: 'services' },
      { label: 'Attestation Services', page: 'services' },
      { label: 'Transport & Transfers', page: 'services' },
    ],
  },
  {
    label: 'Travel Deals',
    page: 'deals',
    children: [
      { label: 'Last-Minute Offers', page: 'deals' },
      { label: 'Early Bird Discounts', page: 'deals' },
      { label: 'Group Discounts', page: 'deals' },
      { label: 'Featured Destinations', page: 'deals' },
    ],
  },
  { label: 'Events', page: 'events' },
  {
    label: 'About Us',
    page: 'about',
    children: [
      { label: 'Company Profile', page: 'about' },
      { label: 'Mission & Vision', page: 'about' },
      { label: 'Why Choose Us', page: 'about' },
    ],
  },
  { label: 'Contact Us', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-neutral-50 text-neutral-700 text-xs py-2 px-4 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Your Journey, Our Expertise. | ISO 9001:2015 Certified | IATA Accredited</span>
          <div className="flex items-center gap-4">
            <a href="tel:+919248070008" className="flex items-center gap-1 hover:text-primary-900 transition-colors">
              <Phone size={12} />
              <span>+91-92480-70008</span>
            </a>
            <a href="mailto:info@venkitravel.com" className="hover:text-primary-900 transition-colors">
              info@venkitravel.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2 flex-shrink-0">
              <img src="/VT_Logo.png" alt="Venki Travel" className="h-12 w-auto" />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => handleNav('home')}
                title="Home"
                className={`flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                  currentPage === 'home'
                    ? 'bg-secondary-50 text-secondary-500'
                    : 'text-neutral-700 hover:text-secondary-500 hover:bg-secondary-50'
                }`}
              >
                <Home size={18} />
              </button>
              {navItems.map((item) => (
                <div
                  key={item.page + item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNav(item.page)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      currentPage === item.page
                        ? 'text-secondary-500 bg-secondary-50'
                        : 'text-neutral-700 hover:text-primary-900 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                  </button>

                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-neutral-100 rounded-xl shadow-xl py-2 animate-slide-down z-50">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNav(child.page)}
                          className="w-full text-left px-4 py-2 text-sm text-neutral-600 hover:text-primary-900 hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button onClick={() => handleNav('home')} className="flex items-center gap-2 flex-shrink-0">
                <img src="/image.png" alt="Venki Travel" className="h-12 w-auto" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[80vh] overflow-y-auto animate-slide-down">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => handleNav(item.page)}
                  className="w-full text-left px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-900 border-b border-neutral-50 transition-colors"
                >
                  {item.label}
                </button>
                {item.children && (
                  <div className="bg-neutral-50">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNav(child.page)}
                        className="w-full text-left px-10 py-2 text-xs text-neutral-500 hover:text-primary-900 hover:bg-primary-50 transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 py-4">
              <button onClick={() => handleNav('contact')} className="btn-primary w-full justify-center">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
