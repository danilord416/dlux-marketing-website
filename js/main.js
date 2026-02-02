// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Check if we're on Netlify (form will submit normally)
    // If not on Netlify, show success message after submission
    contactForm.addEventListener('submit', function(e) {
        // On Netlify, the form will submit automatically
        // We'll add a success message that shows after redirect
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('submitted') === 'true') {
            // Show success message if redirected from Netlify
            showFormSuccess();
        }
    });
    
    // Function to show success message
    function showFormSuccess() {
        const formWrapper = document.querySelector('.contact-form-wrapper');
        if (formWrapper) {
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = `
                <div style="background: #10b981; color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;">
                    <h3 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">✓ Message Sent Successfully!</h3>
                    <p style="margin: 0; opacity: 0.95;">Thank you for your message! We will get back to you soon.</p>
                </div>
            `;
            formWrapper.insertBefore(successMsg, contactForm);
            contactForm.style.display = 'none';
        }
    }
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
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

// Enhanced scroll animations - Updated for premium animations
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    // Original fade-in elements
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .blog-card, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) { // Skip first section (hero)
            section.classList.add('fade-in');
            enhancedObserver.observe(section);
        }
    });
    
    // Animate founder spotlight content
    const founderContent = document.querySelector('.founder-spotlight-content');
    if (founderContent) {
        const imageWrapper = founderContent.querySelector('.founder-image-wrapper');
        const textContent = founderContent.querySelector('.founder-text-content');
        
        if (imageWrapper) {
            imageWrapper.classList.add('slide-in-left');
            enhancedObserver.observe(imageWrapper);
        }
        if (textContent) {
            textContent.classList.add('slide-in-right');
            enhancedObserver.observe(textContent);
        }
    }
    
    // Animate service navigation items
    const serviceNavItems = document.querySelectorAll('.service-nav-item');
    serviceNavItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
        enhancedObserver.observe(item);
    });
    
    // Animate buttons on scroll
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        if (!btn.closest('.hero-buttons')) { // Don't animate hero buttons
            btn.classList.add('scale-in');
            enhancedObserver.observe(btn);
        }
    });
});

// Logo placeholder handling
const logoImg = document.getElementById('logo-img');
if (logoImg) {
    logoImg.addEventListener('error', function() {
        // If logo doesn't exist, hide the img and show text only
        this.style.display = 'none';
    });
}

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});