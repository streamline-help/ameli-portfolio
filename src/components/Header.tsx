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
    <header style={{ background: '#E9E6E0', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
        <Link to="/" style={{ fontFamily: 'Polaroid Script', fontSize: '28px', textDecoration: 'none', color: 'inherit' }}>
          Ameli van Zyl
        </Link>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'Helvetica Neue',
                fontSize: '15px',
                textDecoration: 'none',
                color: isActiveLink(link.path) ? 'var(--bg-red)' : 'inherit',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (!isActiveLink(link.path)) e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          style={{ display: 'none', padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer' }}
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div style={{ background: '#E9E6E0', borderTop: '1px solid var(--border)' }} className="md:hidden">
          <nav style={{ padding: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '8px 16px',
                  fontFamily: 'Helvetica Neue',
                  fontSize: '15px',
                  textDecoration: 'none',
                  color: isActiveLink(link.path) ? 'var(--bg-red)' : 'inherit',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
