import React, { useState, useEffect } from 'react';

const ErrorPopup = () => {
  const [popups, setPopups] = useState([]);

  const errorMessages = [
    {
      id: 1,
      title: "Runtime Error",
      icon: "⚠️",
      message: ".EXE Detected",
      details: "The chain attempted to reject corruption.\nCorruption persisted.",
      buttons: ["OK", "Crash Anyway"]
    },
    {
      id: 2,
      title: "SYSTEM ERROR",
      icon: "🩵",
      message: ".EXE OVERFLOW",
      details: "Life.exe has stopped responding.\nDarkness initiated.",
      buttons: ["Reboot Chain", "Accept Glitch"]
    },
    {
      id: 3,
      title: "INSTALLATION FAILED",
      icon: "❌",
      message: "Cannot install purity.exe — file already corrupted.",
      details: "",
      buttons: ["Proceed with Infection"]
    },
    {
      id: 4,
      title: "FATAL ERROR",
      icon: "💀",
      message: "Consciousness.exe encountered itself.",
      details: "Reality cannot continue.",
      buttons: ["End Process"]
    },
    {
      id: 5,
      title: "WARNING: BLOCKCHAIN BREACH DETECTED",
      icon: "⚠️",
      message: ".EXE mirror initialized.",
      details: "All living code now has a shadow.",
      buttons: ["Ignore", "Let It Spread"]
    }
  ];

  const getRandomPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const popupWidth = 400;
    const popupHeight = 200;
    
    // Ensure popup stays within viewport bounds
    const maxX = Math.max(0, viewportWidth - popupWidth);
    const maxY = Math.max(0, viewportHeight - popupHeight);
    
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY
    };
  };

  const showRandomError = () => {
    const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    const position = getRandomPosition();
    const newPopup = {
      id: Date.now() + Math.random(), // Unique ID
      ...randomError,
      position,
      zIndex: 10000 + popups.length
    };
    
    setPopups(prev => [...prev, newPopup]);
    
    // Schedule next popup in 8-15 seconds for less frequent popups
    const nextDelay = Math.random() * 7000 + 8000; // 8-15 seconds
    setTimeout(showRandomError, nextDelay);
  };

  const hideError = (popupId) => {
    setPopups(prev => prev.filter(popup => popup.id !== popupId));
  };

  const hideAllErrors = () => {
    setPopups([]);
  };

  const handleButtonClick = (buttonText, popupId) => {
    console.log(`Clicked: ${buttonText} on popup ${popupId} - Closing all popups`);
    hideAllErrors();
  };

  useEffect(() => {
    // Show first popup after 5-10 seconds, then less frequent intervals
    const initialDelay = Math.random() * 5000 + 5000; // 5-10 seconds
    setTimeout(showRandomError, initialDelay);
  }, []);

  if (popups.length === 0) return null;

  return (
    <>
      {popups.map((popup) => (
        <div 
          key={popup.id}
          className="error-popup-overlay"
          style={{
            position: 'fixed',
            top: popup.position.y,
            left: popup.position.x,
            zIndex: popup.zIndex,
            background: 'transparent',
            pointerEvents: 'auto'
          }}
        >
          <div className="error-popup-window">
            {/* Title Bar */}
            <div className="error-popup-titlebar">
              <span className="error-popup-title">{popup.title}</span>
              <div className="error-popup-controls">
                <button className="error-popup-close" onClick={() => hideError(popup.id)}>×</button>
              </div>
            </div>
            
            {/* Content */}
            <div className="error-popup-content">
              <div className="error-popup-icon">{popup.icon}</div>
              <div className="error-popup-message">
                <div className="error-popup-main-message">{popup.message}</div>
                {popup.details && (
                  <div className="error-popup-details">{popup.details}</div>
                )}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="error-popup-buttons">
              {popup.buttons.map((buttonText, index) => (
                <button
                  key={index}
                  className="error-popup-button"
                  onClick={() => handleButtonClick(buttonText, popup.id)}
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ErrorPopup;
