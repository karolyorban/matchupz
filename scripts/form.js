// Get modal elements
const modal = document.getElementById("matchFormModal");
const btn = document.querySelector(".formular_button");
const closeBtn = document.querySelector(".close_modal");
const form = document.querySelector(".match_form");

// Open modal when button is clicked
btn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Close modal when X is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Form submission handling
form.addEventListener("submit", function(e) {
  e.preventDefault();
  // Here you would typically send the form data to your server
  alert("Erfolgreich abgeschickt");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  form.reset();
});