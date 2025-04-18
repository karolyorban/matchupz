// Get elements
const modal = document.getElementById("matchFormModal");
const btns = document.querySelectorAll(".formular_button");
const closeBtns = document.querySelectorAll(".close_modal");
const forms = document.querySelectorAll(".match_form");
const body = document.body;
const siteContainer = document.querySelector(".site-container"); // Add this class to your main content wrapper

// Add CSS for the effects
const style = document.createElement('style');
style.textContent = `
  /* Modal styles */
  #matchFormModal {
    position: fixed;
    top: 0;
    right: 0;
    width: 35%;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 15px rgba(0,0,0,0.2);
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    z-index: 1000;
    overflow-y: auto;
  }
  
  #matchFormModal.show {
    transform: translateX(0);
  }
  
  /* Site container push */
  .site-container {
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  
  .content-push {
    transform: translateX(-35%);
  }
  
  /* Prevent scrolling when modal is open */
  body.modal-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Track state
let isModalOpen = false;
let scrollPosition = 0;

// Open modal
btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.stopPropagation();
    
    // Save scroll position
    scrollPosition = window.scrollY;
    
    // Apply effects
    body.classList.add('modal-open');
    if (siteContainer) siteContainer.classList.add('content-push');
    modal.classList.add('show');
    
    // Prevent jump by maintaining scroll position
    body.style.top = `-${scrollPosition}px`;
    
    isModalOpen = true;
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('show');
  if (siteContainer) siteContainer.classList.remove('content-push');
  
  // Restore scroll position
  const scrollY = parseInt(body.style.top || '0');
  body.classList.remove('modal-open');
  body.style.top = '';
  window.scrollTo(0, Math.abs(scrollY));
  
  isModalOpen = false;
}

// Close handlers
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    closeModal();
  });
});

document.addEventListener('click', function(event) {
  if (isModalOpen && !modal.contains(event.target)) {
    closeModal();
  }
});

forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Erfolgreich abgeschickt");
    closeModal();
    this.reset();
  });
});