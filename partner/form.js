document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const modal = document.getElementById("partnerModal");
    const btn = document.querySelector(".partner_button");
    const closeBtn = document.querySelector(".close");
    const hearAboutSelect = document.getElementById("hearAbout");
    const otherSourceContainer = document.getElementById("otherSourceContainer");
    const partnerForm = document.getElementById("partnerForm");

    // Functions
    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent body scrolling
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Restore body scrolling
        resetForm();
    }

    function resetForm() {
        partnerForm.reset();
        otherSourceContainer.style.display = "none";
    }

    function handleHearAboutChange() {
        otherSourceContainer.style.display = 
            this.value === "other" ? "block" : "none";
    }

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
    hearAboutSelect.addEventListener("change", handleHearAboutChange);
    partnerForm.addEventListener("submit", handleFormSubmit);

    // Close modal when clicking outside content
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});