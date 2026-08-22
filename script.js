console.log('Prarambh Cottages & Camp Loaded');

// Glass Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// Smooth Scroll for anchor links with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileToggle) mobileToggle.textContent = '☰';
        }

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Image Lightbox Modal Handler
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, titleText) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = titleText || '';
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Attach click listeners to all gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const h3 = item.querySelector('h3');
        const span = item.querySelector('span');
        const title = h3 ? h3.textContent : (img ? img.alt : '');
        const tag = span ? `[${span.textContent}] ` : '';
        if (img) {
            openLightbox(img.src, `${tag}${title}`);
        }
    });
});

// Attach click listener to about image
const aboutImg = document.querySelector('.about-img');
if (aboutImg) {
    aboutImg.addEventListener('click', () => {
        openLightbox(aboutImg.src, aboutImg.alt || 'Prarambh Cottages Lodge');
    });
}

// Close lightbox events
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
