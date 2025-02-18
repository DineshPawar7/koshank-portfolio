import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero-Section';
import HowWeWork from './components/howWeWork/HowWeWork'; 
// import TabsComponent from './components/tabscomponent/TabsComponent';
import TrustedBrand from './components/trustedBrands/TrustedBrands';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedBrand />
      <HowWeWork />
      {/* <TabsComponent /> */}
      
    </div>
  );
}

export default App;
