// ============================================
// Premium Animations & Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. CUSTOM CURSOR
    // ============================================
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow with spring effect
    function animateCursor() {
        const diffX = mouseX - cursorX;
        const diffY = mouseY - cursorY;
        
        cursorX += diffX * 0.15;
        cursorY += diffY * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .service-card, input, textarea, select');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // ============================================
    // 2. GLASSMORPHISM NAVBAR ON SCROLL
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // 3. ROTATING HERO TEXT
    // ============================================
    const rotatingWrapper = document.querySelector('.rotating-text-wrapper');
    
    if (rotatingWrapper) {
        const phrases = ['Done Right', 'Web Design', 'SEO Strategy', 'Social Growth', 'Brand Identity'];
        let currentIndex = 0;
        
        // Create the rotating container
        const rotatingContainer = document.createElement('span');
        rotatingContainer.className = 'rotating-text';
        rotatingContainer.style.position = 'absolute';
        rotatingContainer.style.left = '0';
        rotatingContainer.style.top = '0';
        rotatingContainer.style.width = '100%';
        
        phrases.forEach(phrase => {
            const span = document.createElement('span');
            span.textContent = phrase;
            span.style.display = 'block';
            span.style.height = '1.2em';
            rotatingContainer.appendChild(span);
        });
        
        rotatingWrapper.innerHTML = '';
        rotatingWrapper.appendChild(rotatingContainer);
        
        // Set initial text
        rotatingWrapper.style.display = 'inline-block';
        rotatingWrapper.style.minWidth = '400px';
        rotatingWrapper.style.textAlign = 'left';
    }

    // ============================================
    // 4. 3D TILT EFFECT ON SERVICE CARDS
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ============================================
    // 5. ENTRANCE REVEAL ANIMATIONS
    // ============================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Add reveal classes to elements
    const revealElements = document.querySelectorAll(`
        .section-header,
        .service-card,
        .feature-item,
        .about-text,
        .about-visual,
        .blog-card,
        .founder-spotlight-content,
        .testimonial-content,
        .cta-content
    `);
    
    revealElements.forEach((el, index) => {
        el.classList.add('reveal-element');
        el.style.animationDelay = `${index * 0.1}s`;
        revealObserver.observe(el);
    });

    // ============================================
    // 6. SMOOTH SCROLL (LENIS-STYLE)
    // ============================================
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    
    window.addEventListener('scroll', () => {
        targetScrollY = window.scrollY;
    });
    
    function smoothScroll() {
        scrollY += (targetScrollY - scrollY) * 0.1;
        
        // Apply smooth transform to body content
        document.body.style.transform = `translateY(${-(targetScrollY - scrollY) * 0.05}px)`;
        
        requestAnimationFrame(smoothScroll);
    }
    
    // Disabled by default to avoid conflicts - enable if needed
    // smoothScroll();

    // ============================================
    // 7. ENHANCED BUTTON HOVER EFFECTS
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // 8. SERVICE CARD MAGNETIC EFFECT
    // ============================================
    serviceCards.forEach(card => {
        const link = card.querySelector('.service-link');
        if (link) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                link.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                link.style.transform = 'translate(0, 0)';
            });
        }
    });

    // ============================================
    // 9. PARALLAX SCROLL FOR IMAGES
    // ============================================
    const parallaxElements = document.querySelectorAll('.hero-image img, .about-visual img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ============================================
    // 10. TYPING TITLE ENHANCEMENT
    // ============================================
    const typingTitle = document.getElementById('typing-title');
    if (typingTitle) {
        typingTitle.style.overflow = 'hidden';
        typingTitle.style.borderRight = '2px solid var(--secondary-color)';
        typingTitle.style.whiteSpace = 'nowrap';
        typingTitle.style.animation = 'typing 2s steps(20) 1s both, blink 1s step-end infinite';
    }
});

// Add CSS for button ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-ripple {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-effect {
        to {
            transform: scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
