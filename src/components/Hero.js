import React, { useState } from 'react';

const Hero = () => {
  const [showCopyFeedback, setShowCopyFeedback] = useState(false);
  
  const config = {
    contractAddress: 'EkUABqHMatLtpU9v1pM6699Eo3f3bWdEDZfYwVUppump',
    buyLink: 'https://jup.ag/tokens/EkUABqHMatLtpU9v1pM6699Eo3f3bWdEDZfYwVUppump',
    chartLink: 'https://dexscreener.com/solana/egj5zw56ktkc3daaszebtvqxwvq7uqj6idztxtj8x8ex',
    twitterLink: 'https://x.com/solana_exe',
    telegramLink: 'https://t.me/solana_exe'
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.contractAddress);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = config.contractAddress;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setShowCopyFeedback(true);
      setTimeout(() => setShowCopyFeedback(false), 2000);
    }
  };

  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <img src="/assets/exelogo1.gif" alt=".exe Logo" className="hero-logo" />
          <h1 className="hero-title">.exe</h1>
          <p className="hero-tagline">the shadows of solana</p>
          <p className="hero-subtitle">.exe everything</p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-outline" 
              onClick={() => handleButtonClick(config.buyLink)}
            >
              Buy Now
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleButtonClick(config.chartLink)}
            >
              Chart
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => handleButtonClick(config.twitterLink)}
            >
              Twitter
            </button>
          </div>

          <div className="contract-address">
            <label htmlFor="contract-input">Contract Address:</label>
            <div className="contract-input-group">
              <input 
                type="text" 
                id="contract-input" 
                readOnly 
                value={config.contractAddress}
              />
              <button className="copy-btn" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
            <div className={`copy-feedback ${showCopyFeedback ? 'show' : ''}`}>
              Copied!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
