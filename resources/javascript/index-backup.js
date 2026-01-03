// JavaScript Document

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    // Set header height if header element exists
    const header = document.querySelector(".header");
    if (header) {
        header.style.height = window.innerHeight + "px";
    }

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const body = document.body;

    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            // Switch to dark theme
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Dark';
            localStorage.setItem('theme', 'light');
        }
    });

    // Enhanced smooth scrolling for full-screen sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Improved smooth scroll navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                // Get navbar height for offset
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate target position
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active section highlighting in navigation
    function updateActiveNavItem() {
        const scrollPosition = window.scrollY + 100; // Offset for navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Throttled scroll listener for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                updateActiveNavItem();
                scrollTimeout = null;
            }, 10);
        }
    });

    // Keyboard navigation for sections
    document.addEventListener('keydown', (e) => {
        const currentScrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Page Down or Arrow Down - go to next section
        if (e.key === 'PageDown' || e.key === 'ArrowDown') {
            const nextSectionTop = Math.ceil(currentScrollY / viewportHeight) * viewportHeight;
            if (nextSectionTop > currentScrollY) {
                e.preventDefault();
                window.scrollTo({
                    top: nextSectionTop,
                    behavior: 'smooth'
                });
            }
        }
        
        // Page Up or Arrow Up - go to previous section
        if (e.key === 'PageUp' || e.key === 'ArrowUp') {
            const prevSectionTop = Math.floor(currentScrollY / viewportHeight) * viewportHeight;
            if (prevSectionTop < currentScrollY) {
                e.preventDefault();
                window.scrollTo({
                    top: Math.max(0, prevSectionTop),
                    behavior: 'smooth'
                });
            }
        }
    });

    // Initial call to set active nav item
    updateActiveNavItem();
});