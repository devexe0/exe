import React from 'react';

const HowToBuy = () => {
  const steps = [
    {
      number: 1,
      title: 'Download a Wallet',
      description: 'Get Phantom or Jupiter Wallet from your app store'
    },
    {
      number: 2,
      title: 'Add Funds',
      description: 'Buy SOL and send to your wallet'
    },
    {
      number: 3,
      title: 'Connect to DEX',
      description: 'Visit jup.ag and connect your wallet'
    },
    {
      number: 4,
      title: 'Confirm Swap',
      description: 'Enter the contract address and swap your tokens'
    }
  ];

  return (
    <section className="how-to-buy" id="how-to-buy">
      <div className="container">
        <h2 className="section-title">How to Buy</h2>
        <div className="buy-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
