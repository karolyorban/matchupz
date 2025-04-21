function initFlipCardInfoPosition() {
    function updateCardInfoPosition(card) {
      const cardInfo = card.querySelector('.card_info');
      if (!cardInfo) return;
      
      const rect = card.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      
      // Show on left if card is in right half of viewport
      cardInfo.classList.toggle('left-side', cardCenter > viewportCenter);
    }
  
    // Initialize on hover
    document.querySelectorAll('.flip_card').forEach(card => {
      card.addEventListener('mouseenter', () => updateCardInfoPosition(card));
    });
  
    // Update on resize (with debounce)
    window.addEventListener('resize', debounce(() => {
      document.querySelectorAll('.flip_card:hover').forEach(updateCardInfoPosition);
    }, 100));
  }
  
  // Debounce helper (keep this)
  function debounce(fn, delay) { /* ... */ }
  
  // Initialize
  if (document.readyState !== 'loading') {
    initFlipCardInfoPosition();
  } else {
    document.addEventListener('DOMContentLoaded', initFlipCardInfoPosition);
  }