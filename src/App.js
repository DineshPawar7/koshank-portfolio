import React from 'react';
import './App.css';
import Benefits from './components/benefits/Benefits';
import Capabilities from './components/capabilities/Capabilities';
import Header from './components/header/Header';
import Hero from './components/hero/Hero-Section';
import HowWeWork from './components/howWeWork/HowWeWork'; 
import RecentProjects from './components/recentprojects/RecentProjects';
import Testimonial from './components/testimonial/Testimonial';
import TrustedBrand from './components/trustedBrands/TrustedBrands';
import PricingSection from './components/pricingSection/PricingSection';
import BlogSection from './components/blogSection/BlogSection';
import FAQs from './components/faqs/FAQs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedBrand />
      <HowWeWork />
      <RecentProjects />
      <Capabilities />
      <Benefits />
      <Testimonial />
      <PricingSection />
      <BlogSection />
      <FAQs />
      <Footer />
      
    </div>
  );
}

export default App;
