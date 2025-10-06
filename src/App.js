import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lore from './components/Lore';
import HowToBuy from './components/HowToBuy';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Lore />
      <HowToBuy />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
