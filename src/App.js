import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lore from './components/Lore';
import HowToBuy from './components/HowToBuy';
import Links from './components/Links';
import Footer from './components/Footer';
import ErrorPopup from './components/ErrorPopup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Lore />
      <HowToBuy />
      <Links />
      <Footer />
      <ErrorPopup />
    </div>
  );
}

export default App;
