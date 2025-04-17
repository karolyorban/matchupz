document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // First remove 'scaled' class from all other cards
            cards.forEach(c => {
                if (c !== this) c.classList.remove('scaled');
            });
            
            // Toggle 'scaled' class on clicked card
            this.classList.toggle('scaled');
        });
    });
});