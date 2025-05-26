import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const RestaurantLandingPage = lazy(() => import('@/pages/RestaurantLandingPage'));

const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
    <p>Loading Flavor...</p>
  </div>
);

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageLayout><RestaurantLandingPage /></PageLayout>} />
                <Route path="*" element={<PageLayout><RestaurantLandingPage /></PageLayout>} /> 
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;