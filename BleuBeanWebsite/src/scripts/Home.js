// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMenuFilter();
    initScrollAnimations();
    initFormSubmission();
    initAnimations();
    
    // Add fade-in class to elements
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Success message for newsletter subscription
    function showSuccessMessage(form, message) {
        const successEl = document.createElement('div');
        successEl.classList.add('success-message');
        successEl.innerHTML = `
            <div style="
                padding: 16px;
                background-color: var(--success);
                color: white;
                border-radius: var(--radius-md);
                margin-top: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <span>${message}</span>
                <button style="
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 18px;
                ">×</button>
            </div>
        `;
        
        form.appendChild(successEl);
        
        // Add close functionality
        const closeBtn = successEl.querySelector('button');
        closeBtn.addEventListener('click', () => {
            successEl.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (successEl.parentNode) {
                successEl.remove();
            }
        }, 5000);
    }
    
    // Initialize form submission
    function initFormSubmission() {
        const newsletterForm = document.getElementById('newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                
                // Simple validation
                if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
                    return;
                }
                
                // Simulate form submission
                setTimeout(() => {
                    // Clear form
                    nameInput.value = '';
                    emailInput.value = '';
                    
                    // Show success message
                    showSuccessMessage(newsletterForm, 'Thank you for subscribing to our newsletter!');
                }, 800);
            });
        }
    }
    
    // Initialize navigation
    function initNavigation() {
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');
        const navLinks = document.querySelectorAll('#nav ul li a');
        
        // Toggle mobile menu
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                nav.classList.toggle('active');
            });
        }
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                
                // Remove active class from all links
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
            });
        });
        
        // Update active nav link based on scroll position
        window.addEventListener('scroll', function() {
            updateActiveNavLink();
        });
        
        function updateActiveNavLink() {
            const scrollPosition = window.scrollY;
            
            // Get all sections
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const id = section.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to corresponding link
                    const correspondingLink = document.querySelector(`#nav ul li a[href="#${id}"]`);
                    if (correspondingLink) {
                        correspondingLink.classList.add('active');
                    }
                }
            });
        }
        
        // Update header background on scroll
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Initialize menu functionality
    function initMenuFilter() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuItems = document.querySelectorAll('.menu-item');
        
        // Add click event to category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get selected category
                const selectedCategory = this.getAttribute('data-category');
                
                // Filter menu items
                filterMenuItems(selectedCategory);
            });
        });
        
        // Filter menu items based on selected category
        function filterMenuItems(category) {
            menuItems.forEach(item => {
                // Get item category
                const itemCategory = item.getAttribute('data-category');
                
                // Remove fade-in animation class
                item.classList.remove('fade-in');
                
                // Check if item should be shown or hidden
                if (category === 'all' || category === itemCategory) {
                    // Show item with animation
                    setTimeout(() => {
                        item.classList.remove('hidden');
                        // Re-trigger animation
                        void item.offsetWidth; // Force reflow
                        item.classList.add('fade-in');
                    }, 10);
                } else {
                    // Hide item
                    item.classList.add('hidden');
                }
            });
        }
        
        // Add hover effects to menu items
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.menu-img img').style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.menu-img img').style.transform = 'scale(1)';
            });
        });
        
        // Order button functionality
        const orderButtons = document.querySelectorAll('.order-btn');
        
        orderButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.parentElement.querySelector('h3').textContent;
                alert(`Thank you for ordering ${itemName}! This feature will be available soon.`);
            });
        });
    }
    
    // Initialize scroll animations
    function initScrollAnimations() {
        // Add animation class to elements that should animate on scroll
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id !== 'home') {
                section.querySelector('h2').classList.add('animate-on-scroll');
            }
        });
        
        // Add animation class to about section elements
        const aboutText = document.querySelector('.about-text');
        const aboutImg = document.querySelector('.about-img');
        
        if (aboutText && aboutImg) {
            aboutText.classList.add('animate-on-scroll', 'slide-in-left');
            aboutImg.classList.add('animate-on-scroll', 'slide-in-right');
        }
        
        // Add animation class to contact section elements
        const contactForm = document.querySelector('.contact-form');
        const contactInfo = document.querySelector('.contact-info');
        
        if (contactForm && contactInfo) {
            contactForm.classList.add('animate-on-scroll', 'slide-in-left');
            contactInfo.classList.add('animate-on-scroll', 'slide-in-right');
        }
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
        }
        
        // Handle scroll event
        function handleScroll() {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            animatedElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('visible')) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Initial check on page load
        handleScroll();
        
        // Smooth scroll for anchor links
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Initialize animations
    function initAnimations() {
        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero');
        
        if (heroSection) {
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                
                if (scrollPosition <= window.innerHeight) {
                    const yPos = scrollPosition * 0.4;
                    heroSection.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
                }
            });
        }
        
        // Image hover animations for gallery
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('img').style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('img').style.transform = 'scale(1)';
            });
        });
        
        // Button hover animations
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = 'var(--shadow-lg)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '';
            });
        });
        
        // Logo animation
        const logo = document.querySelector('.logo h1');
        
        if (logo) {
            logo.addEventListener('mouseenter', function() {
                this.style.color = 'var(--accent)';
                this.style.transition = 'color 0.3s ease';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.color = 'var(--primary)';
            });
        }
    }
});