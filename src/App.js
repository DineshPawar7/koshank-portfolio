import './App.css';
import Benefits from './components/benefits/Benefits';
import Capabilities from './components/capabilities/Capabilities';
import Header from './components/header/Header';
import Hero from './components/hero/Hero-Section';
import HowWeWork from './components/howWeWork/HowWeWork'; 
import RecentProjects from './components/recentprojects/RecentProjects';
import Testimonial from './components/testimonial/Testimonial';
import TrustedBrand from './components/trustedBrands/TrustedBrands';

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
      
    </div>
  );
}

export default App;
