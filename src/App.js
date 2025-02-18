// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero-Section';
import HowWeWork from './components/howWeWork/HowWeWork';
import TrustedBrand from './components/trustedBrands/TrustedBrands';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedBrand />
      <HowWeWork />
    </div>
  );
}

export default App;
