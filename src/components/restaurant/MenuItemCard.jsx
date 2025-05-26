import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const MenuItemCard = ({ item, variants }) => {
  return (
    <motion.div className="menu-item-list-entry" variants={variants}>
      <div className="menu-item-image-wrapper-list">
        <img  alt={item.imagePlaceholder} className="menu-item-image-list" src="https://images.unsplash.com/photo-1677497238467-3004c7fab67c" />
      </div>
      <div className="menu-item-content-list">
        <h3 className="menu-item-name-list">{item.name}</h3>
        <p className="menu-item-description-list">{item.description}</p>
      </div>
      <div className="menu-item-action-list">
        <p className="menu-item-price-list">{item.price}</p>
        <button className="btn btn-secondary menu-item-cta-list">
          Order <ShoppingBag size={16} style={{ marginLeft: '0.3rem' }}/>
        </button>
      </div>
      <style jsx="true">{`
        .menu-item-list-entry {
          background-color: var(--color-white);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem;
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
        }
        .menu-item-list-entry:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .menu-item-image-wrapper-list {
          width: 100px; /* Fixed width for image */
          height: 100px; /* Fixed height for image */
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          flex-shrink: 0; /* Prevent image from shrinking */
        }
        .menu-item-image-wrapper-list :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .menu-item-content-list {
          flex-grow: 1;
        }
        .menu-item-name-list {
          font-size: 1.25rem;
          font-family: var(--font-display);
          color: var(--color-primary-blue);
          margin-bottom: 0.25rem;
        }
        .menu-item-description-list {
          font-size: 0.9rem;
          color: var(--color-medium-gray);
          margin-bottom: 0;
          font-family: var(--font-body);
        }
        .menu-item-action-list {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
          text-align: right;
        }
        .menu-item-price-list {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-secondary-blue);
          margin: 0;
          font-family: var(--font-display);
        }
        .menu-item-cta-list {
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
          display: inline-flex;
          align-items: center;
        }
        @media (max-width: 600px) {
          .menu-item-list-entry {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          .menu-item-image-wrapper-list {
            width: 100%;
            height: 180px; /* Taller image for mobile stacked view */
          }
          .menu-item-action-list {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default MenuItemCard;