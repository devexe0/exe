# .exe Meme Coin React Website

A polished React version of the .exe meme coin website with dark horror theme, glitch effects, and all original functionality.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## ✨ Features

- **Dark Horror Theme** - Red accents, glitch effects, and unsettling imagery
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Interactive Elements** - Copy contract address, external links, smooth scrolling
- **Modern React** - Built with React 18 and modern hooks
- **Auto Asset Copying** - Assets automatically copied during build process

## 🎨 Visual Design

- **Background**: Dark, glitchy imagery with red-eyed meme characters
- **Logo**: Glowing red-eyed smiley face with sharp teeth
- **Colors**: Black background, white text, red accents
- **Typography**: Clean, modern sans-serif fonts
- **Animations**: Smooth fade-ins, hover effects, and transitions

## 📁 Project Structure

```
├── public/
│   ├── assets/          # All images and assets (auto-copied from assets/)
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Lore.js
│   │   ├── HowToBuy.js
│   │   ├── Links.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── index.css    # All styling
│   ├── App.js           # Main App component
│   └── index.js         # React entry point
├── assets/              # Source assets (copied to public/assets during build)
├── package.json         # Dependencies and scripts
└── README.md
```

## 🔧 Configuration

Update the configuration in `src/components/Hero.js` to change:
- Contract address
- External links (Jupiter, DexScreener, Twitter, Telegram)
- Buy links

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings
4. Assets will be automatically copied during build

### Other Platforms
The `npm run build` command creates a `build/` folder with all static files ready for deployment.

## 🎯 What's Fixed

- ✅ **Assets automatically copied** during build process
- ✅ **All styling preserved** - dark theme, red accents, glitch effects
- ✅ **Responsive design** works on all devices
- ✅ **Interactive features** - copy button, external links, smooth scrolling
- ✅ **Clean project structure** - only React files, no HTML/CSS duplicates
- ✅ **Production ready** - optimized build for deployment

## 🌐 Live Demo

After deployment, your website will have:
- Dark horror-themed background with glitchy meme characters
- Glowing red-eyed logo and smooth animations
- Interactive buttons for buying, charting, and social media
- Contract address with copy functionality
- Meme gallery in the Lore section
- Step-by-step buying guide
- Mobile-responsive hamburger menu

The website maintains 100% of the original functionality while being much more maintainable and suitable for modern web development!