document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const logos = document.querySelectorAll('.taktik_logo_wrapper img');
    const screenshots = document.querySelectorAll('.screenshots img');
    let currentIndex = 0;
    let isAnimating = false;

    function switchContent(index) {
        if (isAnimating || currentIndex === index) return;
        isAnimating = true;
        
        // Determine animation direction
        const direction = index > currentIndex ? 'next' : 'prev';
        
        // Set up outgoing elements
        logos[currentIndex].classList.remove('active');
        screenshots[currentIndex].classList.add(direction);
        screenshots[currentIndex].classList.remove('active');
        
        // Set up incoming elements
        logos[index].classList.add('active');
        screenshots[index].classList.add(direction);
        
        // Force reflow before activating new elements
        void screenshots[index].offsetWidth;
        
        screenshots[index].classList.add('active');
        screenshots[index].classList.remove(direction);
        
        // Update dots
        dots[currentIndex].classList.remove('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
        
        // Clean up after animation
        setTimeout(() => {
            screenshots.forEach(screenshot => {
                screenshot.classList.remove('next', 'prev');
            });
            isAnimating = false;
        }, 700);
    }

    // Click handler for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            switchContent(index);
        });
    });

    // Optional auto-rotation (5 seconds)
    let autoRotate = setInterval(() => {
        const nextIndex = (currentIndex + 1) % dots.length;
        switchContent(nextIndex);
    }, 5000);

    // Pause on hover
    const taktikSection = document.querySelector('.taktik_section');
    taktikSection.addEventListener('mouseenter', () => clearInterval(autoRotate));
    taktikSection.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => {
            const nextIndex = (currentIndex + 1) % dots.length;
            switchContent(nextIndex);
        }, 5000);
    });
});