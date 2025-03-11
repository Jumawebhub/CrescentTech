import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={
          <div className="flex-grow flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2c2cff]"></div>
          </div>
        }>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <div className="flex-grow flex items-center justify-center min-h-[60vh]">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#2c2cff] mb-4">404</h1>
                    <p className="text-xl text-gray-600">Page not found</p>
                  </div>
                </div>
              } />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;