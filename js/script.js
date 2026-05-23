// ===== Theme Management =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg) scale(1.1)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 300);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// ===== Sidebar Management =====
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mainContent = document.getElementById('mainContent');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle sidebar
sidebarToggle.addEventListener('click', () => {
    toggleSidebar();
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', () => {
    closeSidebar();
});

// Close sidebar when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// ===== Active Navigation Link on Scroll =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Smooth Scroll for Navigation Links =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 20;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Advanced Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .cert-card, .about-text');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ===== Parallax Effect for Hero Section =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Interactive Skill Tags =====
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect
    tag.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// ===== Certificate/Award Card 3D Tilt Effect =====
const cards = document.querySelectorAll('.cert-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// ===== Typing Effect for Hero Subtitle =====
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// ===== Contact Form Handling with Validation =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message
    showNotification(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`, 'success');
    
    // Reset form
    contactForm.reset();
    
    // Add submit button animation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitBtn.style.transform = 'scale(1)';
    }, 200);
});

// ===== Custom Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 3s;
        font-weight: 500;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3500);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// ===== Back to Top Button =====
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Back to top');
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #ec4899);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 998;
    backdrop-filter: blur(10px);
    opacity: 0;
`;

document.body.appendChild(backToTopButton);

// Show/hide back to top button with animation
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
        setTimeout(() => {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'scale(1)';
        }, 10);
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'scale(0.8)';
        scrollTimeout = setTimeout(() => {
            backToTopButton.style.display = 'none';
        }, 300);
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 12px 30px rgba(99, 102, 241, 0.6)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
});

// ===== Sidebar Toggle Button Animation on Scroll =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        sidebarToggle.style.transform = 'scale(0.9)';
    } else {
        sidebarToggle.style.transform = 'scale(1)';
    }
    
    lastScroll = currentScroll;
});

// ===== Easter Egg: Konami Code =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        showNotification('🎉 Konami Code Activated! You found the easter egg!', 'success');
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.id = 'rainbow-style';
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            body { animation: rainbow 2s linear infinite; }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            const style = document.getElementById('rainbow-style');
            if (style) style.remove();
        }, 5000);
    }
});

// ===== Performance: Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== Detect System Theme Preference =====
if (window.matchMedia) {
    const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only apply system theme if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = systemThemeQuery.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', systemTheme);
        updateThemeIcon(systemTheme);
    }
    
    // Listen for system theme changes
    systemThemeQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

// ===== Console Art =====
console.log('%c👋 Welcome to my portfolio!', 'color: #6366f1; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(99, 102, 241, 0.3);');
console.log('%c🚀 Built with modern web technologies', 'color: #ec4899; font-size: 16px; font-weight: bold;');
console.log('%c💼 Workday Integration & Reporting Consultant', 'color: #10b981; font-size: 14px;');
console.log('%c📧 molinajohnmiguel@gmail.com', 'color: #8b5cf6; font-size: 14px;');
console.log('%c\n🎨 Features:', 'color: #f59e0b; font-size: 14px; font-weight: bold;');
console.log('%c  • Collapsible Sidebar Navigation', 'color: #9ca3af; font-size: 12px;');
console.log('%c  • Light/Dark Theme Toggle', 'color: #9ca3af; font-size: 12px;');
console.log('%c  • 3D Card Tilt Effects', 'color: #9ca3af; font-size: 12px;');
console.log('%c  • Smooth Scroll Animations', 'color: #9ca3af; font-size: 12px;');
console.log('%c  • Easter Egg: Try the Konami Code!', 'color: #9ca3af; font-size: 12px;');
console.log('%c\n💻 Interested in the code? Check out the repository on GitHub!', 'color: #6b7280; font-size: 12px;');

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    // Add loaded class to body for any load-specific animations
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.animation = 'fadeInUp 1s ease';
    }
    
    // Show welcome notification after a delay
    setTimeout(() => {
        showNotification('Welcome! Toggle between light and dark themes using the button in the top right.', 'success');
    }, 2000);
});

// Made with ❤️ by Bob - Modern Interactive Portfolio with Sidebar & Theme Switcher

// Made with Bob
