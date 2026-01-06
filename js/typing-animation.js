// Typing Animation for "Our Services" Title
document.addEventListener('DOMContentLoaded', function() {
    const typingTitle = document.getElementById('typing-title');
    
    if (typingTitle) {
        const text = typingTitle.textContent;
        typingTitle.textContent = '';
        typingTitle.classList.add('typing');
        
        let i = 0;
        const typeSpeed = 100; // milliseconds per character
        
        function typeWriter() {
            if (i < text.length) {
                typingTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // Remove the cursor after typing is complete
                setTimeout(() => {
                    typingTitle.classList.remove('typing');
                }, 500);
            }
        }
        
        // Start typing animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(typingTitle);
    }
});

