import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path || (path === '/work' && location.pathname.startsWith('/work'));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg border-b border-hairline shadow-sm' : 'bg-bg'
      }`}
    >
      <div className="mx-auto px-6 sm:px-12 lg:px-24 max-w-[1440px]">
        <div className="flex justify-between items-center py-5">
          <Link
            to="/"
            className="font-display text-2xl text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4"
          >
            Ameli van Zyl
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[17px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 rounded-sm ${
                  isActiveLink(link.path)
                    ? 'text-accent underline decoration-1 underline-offset-4'
                    : 'text-ink hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-hairline/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent text-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-hairline">
            <nav className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActiveLink(link.path)
                      ? 'text-accent bg-accent/5'
                      : 'text-ink hover:bg-hairline/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}