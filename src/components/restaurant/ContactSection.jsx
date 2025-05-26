import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section section-bg-light-blue">
      <div className="container">
        <motion.h2 
          className="section-title" 
          variants={fadeIn} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.div 
          className="contact-content" 
          variants={fadeIn} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <p>We're eager to serve you! Place your order or ask any questions.</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Delightful Street - Flavor Town, FS</p>
          <p><strong>Opening Hours:</strong> Tuesday to Sunday, 11 AM - 11 PM</p>
          <motion.a 
            href="tel:5551234567"
            className="btn btn-primary contact-cta" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Call Us Now
          </motion.a>
        </motion.div>
      </div>
      <style jsx="true">{`
        .contact-section {
          text-align: center;
        }
        .contact-content p {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-family: var(--font-body);
        }
        .contact-content p strong {
          color: var(--color-primary-blue);
        }
        .contact-cta {
          margin-top: 2rem;
          font-size: 1.1rem;
          padding: 0.8rem 2rem;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;