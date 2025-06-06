document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const modal = document.getElementById("partnerModal");
    const btn = document.querySelector(".partner_button");
    const closeBtn = document.querySelector(".close");
    const hearAboutSelect = document.getElementById("hearAbout");
    const partnerForm = document.getElementById("partnerForm"); // Removed: otherSourceContainer

    // Functions
    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
        resetForm();
    }

    function resetForm() {
        partnerForm.reset();
        // Removed: otherSourceContainer.style.display = "none";
    }

    // Removed: handleHearAboutChange() function (no longer needed)

    function handleFormSubmit(e) {
        e.preventDefault();
        alert("Thank you for your application! We'll contact you soon.");
        closeModal();
    }

    // Event Listeners
    btn.addEventListener("click", function() {
        resetForm();
        openModal();
    });
    
    closeBtn.addEventListener("click", closeModal);
    // Removed: hearAboutSelect.addEventListener("change", handleHearAboutChange);
    partnerForm.addEventListener("submit", handleFormSubmit);

    // Close modal when clicking outside content
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});