import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <nav className="navbar w-full bg-[#E6E6E6]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-[Polaroid_Script] text-2xl text-ink hover:text-[var(--brand)] transition-colors duration-200">
            Ameli van Zyl
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActiveLink(link.path) ? 'text-[var(--brand)]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors text-ink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#E6E6E6]">
          <nav className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 nav-link text-ink hover:text-[var(--brand)] ${
                  isActiveLink(link.path) ? 'text-[var(--brand)]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
