import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X as XIcon, Utensils, ShoppingBag } from 'lucide-react';

const NavItem = ({ to, children, onClick, isButton = false }) => {
  if (isButton) {
    return (
      <Link to={to} onClick={onClick} className="header-nav-button">
        {children}
      </Link>
    );
  }
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `header-nav-link ${isActive ? 'active' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/#menu' }, 
    { label: 'Daily Deal', path: '/#promotion' },
    { label: 'Contact', path: '/#contact' },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 260, damping: 20 } },
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const handleNavClick = (path) => {
    closeMobileMenu();
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="header-logo" onClick={() => handleNavClick('/')}>
          <Utensils className="logo-icon" />
          Divine Flavor
        </Link>

        <nav className="header-nav-desktop">
          {menuItems.map((item) => (
            <NavItem key={item.path} to={item.path} onClick={() => handleNavClick(item.path)}>
              {item.label}
            </NavItem>
          ))}
          <NavItem to="/#menu" onClick={() => handleNavClick('/#menu')} isButton>
            <ShoppingBag size={20} style={{ marginRight: '0.5rem' }} />
            Order Now
          </NavItem>
        </nav>

        <div className="header-mobile-menu-toggle">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="header-nav-mobile"
          >
            <nav className="mobile-nav-menu">
              {menuItems.map((item) => (
                <motion.div key={item.path} variants={mobileMenuItemVariants}>
                  <NavItem to={item.path} onClick={() => handleNavClick(item.path)}>{item.label}</NavItem>
                </motion.div>
              ))}
              <motion.div variants={mobileMenuItemVariants} className="mobile-nav-cta">
                <NavItem to="/#menu" onClick={() => handleNavClick('/#menu')} isButton>
                  <ShoppingBag size={20} style={{ marginRight: '0.5rem' }} />
                  Order Now
                </NavItem>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx="true">{`
        .site-header {
          background-color: var(--color-white);
          padding: 1rem 0;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 2px solid var(--color-light-gray);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 900;
          color: var(--color-primary-blue);
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
          color: var(--color-cta-gold);
        }
        .header-nav-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .header-nav-desktop {
            display: flex;
            align-items: center;
            gap: 0.5rem; 
          }
        }
        .header-nav-link {
          padding: 0.5rem 0.75rem; 
          font-size: 0.9rem; 
          font-weight: 500;
          color: var(--color-dark-gray);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: var(--border-radius-sm);
          transition: background-color var(--transition-fast), color var(--transition-fast);
          font-family: var(--font-body);
        }
        .header-nav-link:hover,
        .header-nav-link.active {
          background-color: var(--color-light-blue-bg);
          color: var(--color-primary-blue);
        }
        .header-nav-button {
          display: flex;
          align-items: center;
          padding: 0.6rem 1rem; 
          font-size: 0.9rem; 
          background-color: var(--color-cta-gold);
          color: var(--color-black);
          border-radius: var(--border-radius-md);
          font-weight: 700;
          text-transform: uppercase;
          transition: background-color var(--transition-fast);
          font-family: var(--font-display);
        }
        .header-nav-button:hover {
          background-color: var(--color-cta-gold-hover);
        }
        .header-mobile-menu-toggle {
          display: block;
        }
        @media (min-width: 768px) {
          .header-mobile-menu-toggle {
            display: none;
          }
        }
        .mobile-menu-button {
          background: none;
          border: none;
          color: var(--color-primary-blue);
          cursor: pointer;
        }
        .header-nav-mobile {
          position: fixed;
          top: 0;
          left: 0;
          width: 80%;
          max-width: 300px;
          height: 100vh;
          background-color: var(--color-white);
          box-shadow: var(--shadow-lg);
          padding: 4rem 1.5rem 1.5rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
        }
        .mobile-nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav-menu .header-nav-link,
        .mobile-nav-menu .header-nav-button {
          display: block;
          width: 100%;
          text-align: left;
          font-size: 1.1rem; 
          padding: 0.75rem 1rem;
        }
        .mobile-nav-cta {
          margin-top: auto; 
          padding-top: 1rem;
          border-top: 1px solid var(--color-light-gray);
        }
      `}</style>
    </header>
  );
};

export default Header;