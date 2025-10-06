import React from 'react';

const Lore = () => {
  const memeImages = [
    { src: '/assets/fwog1.png', alt: 'Fwog' },
    { src: '/assets/house1.png', alt: 'House' },
    { src: '/assets/mog1.png', alt: 'Mog' },
    { src: '/assets/troll1.png', alt: 'Troll' }
  ];

  return (
    <section className="lore" id="lore">
      <div className="container">
        <h2 className="section-title">lore.exe</h2>
        <p className="lore-text">
          the corrupted mirror of creation.
          <br />the darker crash-out version of every living thing, on-chain and off.
          <br />A glitched shadow that thrives where code breaks and reality bends.
        </p>
        <div className="meme-grid">
          {memeImages.map((meme, index) => (
            <div key={index} className="meme-card">
              <img src={meme.src} alt={meme.alt} className="meme-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lore;
