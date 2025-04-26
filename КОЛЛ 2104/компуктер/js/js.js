document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    closeMenuBtn.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
    
    // Close menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without reload
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Update navigation links according to requirements
    function updateNavLinks() {
        const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
        
        navLinks.forEach(link => {
            const text = link.textContent.trim();
            
            if (text === 'Главная') {
                link.setAttribute('href', '#main');
            } else if (text === 'Расписание') {
                link.setAttribute('href', '#program');
            } else if (text === 'Преподаватели') {
                link.setAttribute('href', '#teachers');
            } else if (text === 'Рассылка' || text === 'Контакты') {
                link.setAttribute('href', '#newsletter');
            }
        });
    }
    
    updateNavLinks();
});