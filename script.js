// Configuration - Load from environment variables or use defaults
const config = {
    contractAddress: 'ca.exe',
    buyLink: 'https://jup.ag/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=0x1234567890abcdef1234567890abcdef12345678',
    chartLink: 'https://dexscreener.com/solana/0x1234567890abcdef1234567890abcdef12345678',
    twitterLink: 'https://x.com/solana_exe',
    jupiterLink: 'https://jup.ag/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=0x1234567890abcdef1234567890abcdef12345678',
    dexscreenerLink: 'https://dexscreener.com/solana/0x1234567890abcdef1234567890abcdef12345678'
};

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const contractInput = document.getElementById('contract-input');
const copyBtn = document.getElementById('copy-btn');
const copyFeedback = document.getElementById('copy-feedback');

// Mobile Navigation Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth scrolling for navigation links
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Copy to clipboard functionality
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(contractInput.value);
        showCopyFeedback();
    } catch (err) {
        // Fallback for older browsers
        contractInput.select();
        document.execCommand('copy');
        showCopyFeedback();
    }
}

function showCopyFeedback() {
    copyFeedback.classList.add('show');
    setTimeout(() => {
        copyFeedback.classList.remove('show');
    }, 2000);
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(220, 38, 38, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.meme-card, .tokenomics-card, .roadmap-phase, .step, .link-btn');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Update external links with configuration
function updateExternalLinks() {
    // Update contract address
    contractInput.value = config.contractAddress;
    
    // Update buy button
    const buyBtn = document.getElementById('buy-btn');
    if (buyBtn) buyBtn.href = config.buyLink;
    
    // Update chart button
    const chartBtn = document.getElementById('chart-btn');
    if (chartBtn) chartBtn.href = config.chartLink;
    
    // Update social buttons
    const twitterBtn = document.getElementById('twitter-btn');
    if (twitterBtn) twitterBtn.href = config.twitterLink;
    
    // Update link section buttons
    const jupiterLink = document.getElementById('jupiter-link');
    if (jupiterLink) jupiterLink.href = config.jupiterLink;
    
    const dexscreenerLink = document.getElementById('dexscreener-link');
    if (dexscreenerLink) dexscreenerLink.href = config.dexscreenerLink;
    
    const twitterLink = document.getElementById('twitter-link');
    if (twitterLink) twitterLink.href = config.twitterLink;
}

// Add click handlers for external links to open in new tab
function setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
            closeMobileMenu();
        });
    });
    
    // Copy to clipboard functionality
    copyBtn.addEventListener('click', copyToClipboard);
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Update external links
    updateExternalLinks();
    
    // Setup external links to open in new tabs
    setupExternalLinks();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn, .link-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to copy button
    copyBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Console easter egg
console.log(`
🚀 .exe - The Ultimate Meme Coin 🚀
Much wow, very moon, such gains!

Website built with ❤️ for the community
To the moon! 🌙
`);

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);
