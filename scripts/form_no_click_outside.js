// Get modal elements
const modal = document.getElementById("matchFormModal");
const btns = document.querySelectorAll(".formular_button"); // All buttons
const closeBtns = document.querySelectorAll(".close_modal"); // All close buttons
const forms = document.querySelectorAll(".match_form"); // All forms

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
  
  #matchFormModal .modal-content {
    height: 100%;
    padding: 20px;
  }
  
  body.modal-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Open modal when ANY button is clicked
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    modal.classList.add('show');
    document.body.classList.add('modal-open');
  });
});

// Close modal when ANY X is clicked
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", function() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  });
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
});

// Form submission handling for ALL forms
forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Erfolgreich abgeschickt");
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    this.reset(); // Reset the current form
  });
});