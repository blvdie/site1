document.addEventListener('DOMContentLoaded', function() {
    // Обработка переключения кнопок ролей
    const roleButtons = document.querySelectorAll('.role-button');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Сначала деактивируем все кнопки
            roleButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.fontWeight = '400';
                btn.style.color = '#A8A8A8';
                btn.style.background = 'transparent';
            });
            
            // Активируем только нажатую кнопку
            this.classList.add('active');
            
            // Специфичные стили для активной кнопки
            if (this.textContent === 'Блогер') {
                this.style.background = '#FFFFFF';
                this.style.color = '#000000';
                this.style.fontWeight = '600';
            } else {
                this.style.background = '#FF3F62';
                this.style.color = '#FFFFFF';
                this.style.fontWeight = '600';
            }
        });
    });
    
    // Устанавливаем первую кнопку активной по умолчанию
    if (roleButtons.length > 0) {
        roleButtons[0].click();
    }
});

// Бургер меню
// Бургер меню
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu-overlay');

burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Блокировка скролла при открытом меню
    if (this.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Закрытие меню при клике на ссылку
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Закрытие меню при клике вне его области
mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Плавный скролл для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.mobile-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});