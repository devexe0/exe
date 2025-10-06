import React from 'react';

const Links = () => {
  const links = [
    {
      icon: '🪐',
      name: 'Jupiter',
      url: 'https://jup.ag/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=0x1234567890abcdef1234567890abcdef12345678'
    },
    {
      icon: '📊',
      name: 'DexScreener',
      url: 'https://dexscreener.com/solana/0x1234567890abcdef1234567890abcdef12345678'
    },
    {
      icon: '🐦',
      name: 'Twitter',
      url: 'https://x.com/solana_exe'
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="links" id="links">
      <div className="container">
        <h2 className="section-title">launch .exe</h2>
        <div className="links-grid">
          {links.map((link, index) => (
            <div 
              key={index} 
              className="link-btn"
              onClick={() => handleLinkClick(link.url)}
            >
              <span className="link-icon">{link.icon}</span>
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
