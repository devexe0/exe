# .exe Meme Coin React Website

A React version of the .exe meme coin website with all the original functionality and styling.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Assets**
   Copy all files from the `assets/` folder to `public/assets/` folder:
   - banner.png
   - exelogo1.gif
   - favicon.svg
   - fwog1.png
   - hero-doge.svg
   - house1.png
   - logo.svg
   - mog1.png
   - troll1.png

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Elements**: Copy contract address, external links
- **Mobile Menu**: Hamburger menu for mobile devices
- **Modern React**: Built with React 18 and modern hooks
- **Original Styling**: Maintains the exact look and feel of the original HTML version

## Components

- `Navbar`: Navigation with mobile menu
- `Hero`: Main hero section with logo, buttons, and contract address
- `Lore`: Meme gallery section
- `HowToBuy`: Step-by-step buying instructions
- `Links`: External links to Jupiter, DexScreener, and Twitter
- `Footer`: Footer with disclaimer

## Configuration

Update the configuration object in `src/components/Hero.js` to change:
- Contract address
- External links (Jupiter, DexScreener, Twitter, Telegram)
- Buy links

## Original Features Preserved

- Dark horror theme with red accents
- Glitchy aesthetic and animations
- All original functionality
- Responsive design
- Smooth scrolling navigation
- Copy to clipboard functionality
- External link handling
