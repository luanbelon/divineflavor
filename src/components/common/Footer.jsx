import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Utensils } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={22} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={22} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={22} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo-area">
            <Link to="/" className="footer-logo">
              <Utensils className="logo-icon-footer" />
              Divine Flavor
            </Link>
            <p className="footer-tagline">Where every dish is a masterpiece.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#menu">Menu</Link></li>
              <li><Link to="/#promotion">Daily Deals</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>123 Delightful Street<br />Flavor Town, FS</p>
            <p>(555) 123-4567</p>
            <p>contact@divineflavor.com</p>
          </div>
          <div className="footer-social">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons-container">
              {socialLinks.map(social => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Divine Flavor. All rights reserved.</p>
        </div>
      </div>
      <style jsx="true">{`
        .site-footer {
          background-color: var(--color-primary-blue);
          color: var(--color-light-gray);
          padding: 3rem 0 1.5rem;
        }
        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .footer-logo-area .footer-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 900;
          color: var(--color-white);
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .logo-icon-footer {
          margin-right: 0.75rem;
          color: var(--color-cta-gold);
        }
        .footer-tagline {
          font-size: 0.9rem;
          color: var(--color-accent-blue);
          font-family: var(--font-body);
        }
        .footer-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .footer-links ul, .footer-contact p {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: var(--font-body);
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: var(--color-light-blue-bg);
          transition: color var(--transition-fast);
          font-size: 0.95rem;
        }
        .footer-links a:hover {
          color: var(--color-cta-gold);
        }
        .footer-contact p {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          color: var(--color-light-blue-bg);
        }
        .social-icons-container {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          color: var(--color-light-blue-bg);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }
        .social-icon:hover {
          color: var(--color-cta-gold);
          transform: scale(1.1);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-secondary-blue);
          font-size: 0.85rem;
          color: var(--color-accent-blue);
          font-family: var(--font-body);
        }
      `}</style>
    </footer>
  );
};

export default Footer;