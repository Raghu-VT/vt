import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home } from 'lucide-react';

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
      { label: 'Domestic Packages', page: 'packages#Domestic' },
      { label: 'International Packages', page: 'packages#International' },
      { label: 'Customized Packages', page: 'packages#Customized' },
      { label: 'Seasonal Packages', page: 'packages' },
    ],
  },
  {
    label: 'Services',
    page: 'services',
    children: [
      { label: 'Flight Booking', page: 'services#flight-booking' },
      { label: 'Hotel Booking', page: 'services#hotel-booking' },
      { label: 'Cruise Booking', page: 'services#cruise-booking' },
      { label: 'Visa Processing', page: 'services#visa-processing' },
      { label: 'Passport Assistance', page: 'services#passport-assistance' },
      { label: 'Travel Insurance', page: 'services#travel-insurance' },
      { label: 'Attestation Services', page: 'services#attestation-services' },
      { label: 'Transport & Transfers', page: 'services#transport-transfers' },
      { label: 'Visa Services', page: 'visa' },
    ],
  },
  {
    label: 'Travel Deals',
    page: 'deals',
    children: [
      { label: 'Last-Minute Offers', page: 'deals#last-minute' },
      { label: 'Early Bird Discounts', page: 'deals#early-bird' },
      { label: 'Group Discounts', page: 'deals#group-discounts' },
      { label: 'Featured Destinations', page: 'deals#featured-destinations' },
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
      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-2 flex-shrink-0">
              <img src="/VT_Logo.png" alt="Venki Travel" className="h-10 w-auto" />
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
                <img src="/image.png" alt="Venki Travel" className="h-10 w-auto" />
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
