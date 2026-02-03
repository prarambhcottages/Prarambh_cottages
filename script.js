console.log('Prarambh Camp Loaded');

// Sticky Header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(45, 74, 62, 0.95)'; // Forest Green transparent
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)';
        header.style.boxShadow = 'none';
    }
});



// Mobile Menu (Simple placeholder if needed later, but nav is simple)

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
