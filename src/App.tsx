import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Visa from './pages/Visa';
import Deals from './pages/Deals';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cancellation from './pages/Cancellation';
import Sitemap from './pages/Sitemap';
import AdminApp from './pages/admin/AdminApp';

type Page =
  | 'home' | 'packages' | 'packages-domestic' | 'packages-international'
  | 'packages-custom' | 'packages-seasonal' | 'services' | 'visa'
  | 'deals' | 'events' | 'about' | 'contact' | 'faq'
  | 'privacy' | 'terms' | 'cancellation' | 'sitemap';

const isAdminRoute = () =>
  window.location.pathname.startsWith('/admin') ||
  window.location.hash === '#/admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [isAdmin] = useState(isAdminRoute);

  const navigate = (page: string) => {
    const [basePage, section] = page.split('#');
    setCurrentPage(basePage as Page);
    if (section) {
      if (basePage === 'packages') {
        setActiveFilter(section);
        setPendingSection(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveFilter('');
        setPendingSection(section);
      }
    } else {
      setActiveFilter('');
      setPendingSection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (pendingSection) {
      requestAnimationFrame(() => {
        const el = document.getElementById(pendingSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setPendingSection(null);
      });
    }
  }, [currentPage, pendingSection]);

  if (isAdmin) {
    return <AdminApp />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'packages':
      case 'packages-domestic':
      case 'packages-international':
      case 'packages-custom':
      case 'packages-seasonal':
        return <Packages onNavigate={navigate} initialCategory={activeFilter} />;
      case 'services':
        return <Services onNavigate={navigate} />;
      case 'visa':
        return <Visa onNavigate={navigate} />;
      case 'deals':
        return <Deals onNavigate={navigate} />;
      case 'events':
        return <Events onNavigate={navigate} />;
      case 'about':
        return <About onNavigate={navigate} />;
      case 'contact':
        return <Contact onNavigate={navigate} />;
      case 'faq':
        return <FAQ onNavigate={navigate} />;
      case 'privacy':
        return <Privacy onNavigate={navigate} />;
      case 'terms':
        return <Terms onNavigate={navigate} />;
      case 'cancellation':
        return <Cancellation onNavigate={navigate} />;
      case 'sitemap':
        return <Sitemap onNavigate={navigate} />;
      case 'home':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
