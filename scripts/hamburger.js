document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu_toggle');
    const menuBtn = document.querySelector('.menu_btn');
    const menuBox = document.querySelector('.menu_box');

    // Track menu state
    let menuOpen = false;

    // Update state when menu is toggled via checkbox
    menuToggle.addEventListener('change', function() {
        menuOpen = this.checked;
    });

    // NEW: Close when clicking any menu link
    document.querySelectorAll('.menu_box a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                menuToggle.checked = false;
                menuToggle.dispatchEvent(new Event('change'));
            }
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = menuBox.contains(event.target) || 
                            menuBtn.contains(event.target) ||
                            event.target === menuToggle;

        if (menuOpen && !isClickInside) {
            menuToggle.checked = false;
            menuToggle.dispatchEvent(new Event('change'));
        }
    });

    // Close when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && menuOpen) {
            menuToggle.checked = false;
            menuToggle.dispatchEvent(new Event('change'));
        }
    });
});