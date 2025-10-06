import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        background: isScrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)',
        boxShadow: isScrolled ? '0 2px 20px rgba(220, 38, 38, 0.3)' : 'none'
      }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/assets/exelogo1.gif" alt=".exe Logo" className="logo-img" />
          <span className="logo-text">.exe</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <span 
            className="nav-link" 
            onClick={() => scrollToSection('lore')}
          >
            Lore
          </span>
          <span 
            className="nav-link" 
            onClick={() => scrollToSection('how-to-buy')}
          >
            How to Buy
          </span>
          <span 
            className="nav-link" 
            onClick={() => scrollToSection('links')}
          >
            Links
          </span>
        </div>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
