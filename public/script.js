document.addEventListener('DOMContentLoaded', () => {
    // Log to confirm script is running
    console.log("Static Site Spark script loaded!");

    // Smooth scroll for anchor links is handled by CSS `scroll-behavior: smooth;`
    // but we can keep this for browsers that don't support it or for more complex logic.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a valid selector and not just "#"
            if (href.length > 1) {
                try {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    console.error("Invalid selector for anchor link:", href);
                }
            }
        });
    });

    // The fade-in is handled by CSS animation, but we can add more interactive features here.
    // A simple animation on feature items as they scroll into view.
    const featureItems = document.querySelectorAll('.feature-item');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `featureFadeInUp 0.6s ${entry.target.dataset.delay || '0s'} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        featureItems.forEach((item, index) => {
            item.style.opacity = '0'; // Initially hide them
            item.dataset.delay = `${index * 0.1}s`;
            observer.observe(item);
        });

        // Add keyframes for the feature item animation to the document's head
        const style = document.createElement('style');
        style.innerHTML = `
        @keyframes featureFadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        `;
        document.head.appendChild(style);
    }
});
