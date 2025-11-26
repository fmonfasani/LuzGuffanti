'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function Page() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero setActiveSection={setActiveSection} />;
      case 'sobre-mi':
        return <AboutMe />;
      case 'servicios':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'precios':
        return <Pricing />;
      case 'blog':
        return <Blog />;
      case 'contacto':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar setActiveSection={setActiveSection} setShowAuthModal={setShowAuthModal} activeSection={activeSection} />
      <main className="pt-16">{renderSection()}</main>
      <Footer />
      {showAuthModal && <AuthModal setShowAuthModal={setShowAuthModal} />}
    </div>
  );
}
