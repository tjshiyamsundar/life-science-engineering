import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Placement', path: '/placement' },
    { name: 'Resources', path: '/resources' },
    { name: 'Compete', path: '/compete' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src={logo} alt="Life Science Engineering" style={{ height: '50px', objectFit: 'contain' }} />
          <span style={{ color: '#1e293b' }}>Life Science Engineering</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  style={{
                    color: isActive(item.path) ? 'var(--color-primary)' : '#555',
                    fontWeight: isActive(item.path) ? '600' : '500',
                    fontSize: '1rem',
                    position: 'relative'
                  }}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', background: 'var(--color-accent)' }}></span>
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '50px' }}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        <style>{`
          @media (min-width: 900px) {
            .desktop-nav { display: block !important; }
            .mobile-menu-btn { display: none !important; }
          }
        `}</style>

        {/* Mobile Menu Button - simple implementation for now */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'white',
          borderBottom: '1px solid #eee',
          padding: '1rem'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{ display: 'block', color: isActive(item.path) ? 'var(--color-primary)' : '#555' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
