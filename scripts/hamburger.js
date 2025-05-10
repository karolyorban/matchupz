document.addEventListener('DOMContentLoaded', function() {
    // Setup function for any menu
    function setupMenu(toggleId, btnClass, boxClass) {
        const toggle = document.getElementById(toggleId);
        const btn = document.querySelector(`.${btnClass}`);
        const box = document.querySelector(`.${boxClass}`);
        let isOpen = false;

        toggle.addEventListener('change', () => isOpen = toggle.checked);
        
        document.querySelectorAll(`.${boxClass} a`).forEach(link => {
            link.addEventListener('click', () => {
                if (isOpen) toggle.checked = false;
            });
        });

        document.addEventListener('click', (e) => {
            if (isOpen && !box.contains(e.target) && !btn.contains(e.target) && e.target !== toggle) {
                toggle.checked = false;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) toggle.checked = false;
        });
    }

    // Initialize both menus
    setupMenu('menu_toggle', 'menu_btn', 'menu_box');      // Hamburger menu
    setupMenu('language_toggle', 'language_btn', 'language_box'); // Language menu
});