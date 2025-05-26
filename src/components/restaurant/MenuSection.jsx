import React from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';
import MenuItemCard from '@/components/restaurant/MenuItemCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const MenuSection = ({ menuItems }) => {
  return (
    <section id="menu" className="menu-section section">
      <div className="container">
        <motion.h2 
          className="section-title" 
          variants={fadeIn} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <Utensils size={36} style={{ marginRight: '1rem', color: 'var(--color-cta-gold)' }} /> Our Menu
        </motion.h2>
        <motion.div 
          className="menu-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {menuItems.map(item => (
            <MenuItemCard key={item.id} item={item} variants={fadeIn} />
          ))}
        </motion.div>
      </div>
      <style jsx="true">{`
        .menu-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem; /* Space between list items */
        }
      `}</style>
    </section>
  );
};

export default MenuSection;