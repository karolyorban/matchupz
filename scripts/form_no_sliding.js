// Get modal elements
const modal = document.getElementById("matchFormModal");
const btns = document.querySelectorAll(".formular_button");
const closeBtns = document.querySelectorAll(".close_modal");
const forms = document.querySelectorAll(".match_form");

// Add CSS for the sliding effect
const style = document.createElement('style');
style.textContent = `
  #matchFormModal {
    position: fixed;
    top: 0;
    right: -50%;
    width: 50%;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease-out;
    overflow-y: auto;
    z-index: 1000;
  }
  
  #matchFormModal.show {
    right: 0;
  }
  
  #matchFormModal .modal_content {
    height: 100%;
    padding: 20px;
    position: relative;
  }
  
  body.modal-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Track if modal is open
let isModalOpen = false;

// Open modal
btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent this click from triggering the document click handler
    modal.classList.add('show');
    document.body.classList.add('modal-open');
    isModalOpen = true;
  });
});

// Close modal
function closeModal() {
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
  isModalOpen = false;
}

// Close when clicking X
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    closeModal();
  });
});

// Close when clicking outside
document.addEventListener('click', function(event) {
  if (isModalOpen && !modal.contains(event.target)) {
    closeModal();
  }
});

// Form submission
forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Erfolgreich abgeschickt");
    closeModal();
    this.reset();
  });
});