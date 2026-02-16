import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpecialtySection from './components/SpecialtySection';
import AboutSection from './components/AboutSection';
import AnimatedBanner from './components/AnimatedBanner';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <SpecialtySection />
        <AboutSection />
        <AnimatedBanner />
        <TestimonialSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;