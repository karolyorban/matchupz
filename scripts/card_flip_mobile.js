document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) return; // Only for mobile
    
    const flipCards = document.querySelectorAll('.flip_card');
    let activeCard = null;
    let startY = 0;
    let isScrolling = false;

    flipCards.forEach(card => {
        // Touch start - detect if it's a scroll
        card.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
            isScrolling = false;
        }, { passive: true });

        // Touch move - detect scroll intent
        card.addEventListener('touchmove', function(e) {
            const y = e.touches[0].clientY;
            if (Math.abs(y - startY) > 5) { // Threshold for scroll detection
                isScrolling = true;
            }
        }, { passive: true });

        // Touch end - handle click if not scrolling
        card.addEventListener('touchend', function(e) {
            if (isScrolling) return;
            
            e.preventDefault();
            handleCardClick(this);
        }, { passive: false });

        // Click handler for non-touch devices
        card.addEventListener('click', function(e) {
            handleCardClick(this);
        });
    });

    function handleCardClick(card) {
        // If clicking the same card that's already flipped
        if (card === activeCard) {
            card.classList.remove('is-flipped');
            activeCard = null;
            return;
        }
        
        // Unflip any previously active card
        
        
        // Flip the clicked card
        card.classList.add('is-flipped');
        activeCard = card;
    }

    // Close all cards when touching outside
    
});