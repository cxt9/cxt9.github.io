// ==========================================
// Main JavaScript for Portfolio Site
// ==========================================

(function() {
    'use strict';

    // ==========================================
    // Smooth Scrolling for Navigation Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Active Navigation Link Highlighting
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call on load

    // ==========================================
    // Navbar Background on Scroll
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);

    // ==========================================
    // Intersection Observer for Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.ai-card, .timeline-item, .tech-category, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // ==========================================
    // Typing Effect for Hero Title
    // ==========================================
    const greetingElement = document.querySelector('.greeting');
    const nameElement = document.querySelector('.name');
    
    if (greetingElement && nameElement) {
        const greetingText = greetingElement.textContent;
        const nameText = nameElement.textContent;
        
        greetingElement.textContent = '';
        nameElement.textContent = '';
        
        function typeText(element, text, delay = 50) {
            return new Promise(resolve => {
                let index = 0;
                const interval = setInterval(() => {
                    if (index < text.length) {
                        element.textContent += text[index];
                        index++;
                    } else {
                        clearInterval(interval);
                        resolve();
                    }
                }, delay);
            });
        }
        
        // Start typing animation after page load
        window.addEventListener('load', async () => {
            await typeText(greetingElement, greetingText, 50);
            await typeText(nameElement, nameText, 80);
        });
    }

    // ==========================================
    // Particle Animation in Hero
    // ==========================================
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00d4ff;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            animation: particleFloat 3s ease-out forwards;
        `;
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        const heroSection = document.querySelector('.hero-background');
        if (heroSection) {
            heroSection.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            20% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0.5);
            }
        }
        
        .nav-link.active {
            color: var(--primary) !important;
        }
        
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: all 0.6s ease !important;
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // Mobile Menu Toggle (for future implementation)
    // ==========================================
    function createMobileMenu() {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create hamburger menu
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        hamburger.style.cssText = `
            display: none;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;
            z-index: 1001;
        `;
        
        // Style hamburger lines
        const hamburgerStyle = document.createElement('style');
        hamburgerStyle.textContent = `
            .hamburger span {
                width: 25px;
                height: 2px;
                background: var(--text-primary);
                transition: all 0.3s ease;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
            
            @media (max-width: 768px) {
                .hamburger {
                    display: flex !important;
                }
                
                .nav-menu {
                    display: none;
                    position: fixed;
                    top: 60px;
                    left: 0;
                    width: 100%;
                    background: var(--bg-primary);
                    flex-direction: column;
                    padding: var(--spacing-xl);
                    border-bottom: 1px solid var(--border-color);
                    box-shadow: var(--shadow-lg);
                }
                
                .nav-menu.active {
                    display: flex !important;
                }
            }
        `;
        document.head.appendChild(hamburgerStyle);
        
        navContainer.appendChild(hamburger);
        
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    createMobileMenu();

    // ==========================================
    // Performance Optimization
    // ==========================================
    let ticking = false;
    
    function requestTick(callback) {
        if (!ticking) {
            window.requestAnimationFrame(callback);
            ticking = true;
        }
    }
    
    function handleScrollEvents() {
        requestTick(() => {
            highlightNavigation();
            handleNavbarScroll();
            ticking = false;
        });
    }
    
    // Replace scroll listeners with optimized version
    window.removeEventListener('scroll', highlightNavigation);
    window.removeEventListener('scroll', handleNavbarScroll);
    window.addEventListener('scroll', handleScrollEvents, { passive: true });

    // ==========================================
    // Initialize on DOM Content Loaded
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('Portfolio site initialized');
        
        // Add any additional initialization code here
        
        // Preload images for better performance
        const imagesToPreload = [
            'images/me.jpg'
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

})();