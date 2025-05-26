import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import burgerImg from '../../../src/assets/images/close-up-hamburger-isolated.png'


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const HeroSection = ({ promotion }) => {
  return (
    <motion.section
      id="promotion"
      className="hero-section section section-bg-dark"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container hero-container">
        <motion.div className="hero-content" variants={fadeIn}>
          <h1 className="hero-title">{promotion.title}</h1>
          <p className="hero-description">{promotion.description}</p>
          <p className="hero-price">Only {promotion.price}!</p>
          <motion.button 
            className="btn btn-primary hero-cta" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Order Now <ShoppingBag size={20} style={{ marginLeft: '0.5rem' }} />
          </motion.button>
        </motion.div>
        <motion.div className="hero-image-container" variants={fadeIn}>
          <img  alt={promotion.imagePlaceholder} className="hero-image" src={burgerImg} />
        </motion.div>
      </div>
      <style jsx="true">{`
        .hero-section {
          padding-top: 5rem;
          padding-bottom: 5rem;
          overflow: hidden;
        }
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero-container {
            flex-direction: row;
            text-align: left;
            gap: 3rem;
          }
        }
        .hero-content {
          max-width: 550px;
        }
        .hero-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          margin-bottom: 1rem;
          font-weight: 900;
          line-height: 1.1;
        }
        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          max-width: 500px;
          font-family: var(--font-body);
        }
        .hero-price {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-cta-gold);
          margin-bottom: 2rem;
        }
        .hero-cta {
          font-size: 1.1rem;
          padding: 0.8rem 2rem;
        }
        .hero-image-container {
          flex-shrink: 0;
          width: 100%;
          max-width: 450px;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          position: relative;
        }
        .hero-image-container :global(img) {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
          .hero-image-container img{
            width: 112%;
          }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;