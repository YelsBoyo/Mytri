// Custom JavaScript for MYTRI Enterprises Website

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission alert (placeholder - replace with actual service like Formspree)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon. (Note: This is a static site - integrate with Formspree for real submissions.)');
    this.reset();
});

// Optional: Add any additional interactivity here