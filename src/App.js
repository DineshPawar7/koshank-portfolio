import './App.css';
import Capabilities from './components/capabilities/Capabilities';
import Header from './components/header/Header';
import Hero from './components/hero/Hero-Section';
import HowWeWork from './components/howWeWork/HowWeWork'; 
import RecentProjects from './components/recentprojects/RecentProjects';
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
      
    </div>
  );
}

export default App;
