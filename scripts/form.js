// Get modal elements
const modal = document.getElementById("matchFormModal");
const btns = document.querySelectorAll(".formular_button"); // All buttons
const closeBtns = document.querySelectorAll(".close_modal"); // All close buttons
const forms = document.querySelectorAll(".match_form"); // All forms

// Open modal when ANY button is clicked
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

// Close modal when ANY X is clicked
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Form submission handling for ALL forms
forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Erfolgreich abgeschickt");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    this.reset(); // Reset the current form
  });
});