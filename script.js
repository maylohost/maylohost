// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking (optional)
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics here if needed
            console.log('Link clicked:', this.href);
        });
    });

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});


