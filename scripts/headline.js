document.addEventListener('DOMContentLoaded', function() {
    const stickyMenu = document.querySelector('.sticky_menu');
    const scrollThreshold = window.innerHeight * 0.1;
    const sectionTitle = document.querySelector('.active_section_title');
    
    // Map section IDs to their display titles
    const sectionTitles = {
        'staff': '#UNSER TEAM',
        'taktik': '#UNSERE TAKTIK',
        'kunden': '#UNSERE FANS',
        'anpfiff': '#DER ANPFIFF'
    };

    // Track active section on scroll
    function handleScroll() {
        // Sticky menu background logic (existing)
        if (window.scrollY > scrollThreshold) {
            stickyMenu.classList.add('scrolled');
        } else {
            stickyMenu.classList.remove('scrolled');
            sectionTitle.textContent = ''; // Clear title when at top
        }
        
        // New: Find which section is in view with stricter conditions
        const sections = document.querySelectorAll('section[id]');
        let activeSection = null;
        const triggerOffset = window.innerHeight * 0.15; // Only trigger when section reaches 30% of viewport
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Only consider section active when its top is above 30% of viewport
            // and its bottom is still visible
            if (rect.top <= triggerOffset && rect.bottom >= triggerOffset) {
                activeSection = section.id;
            }
        });
        
        // Update the displayed title
        if (activeSection && sectionTitles[activeSection]) {
            sectionTitle.textContent = sectionTitles[activeSection];
        } else if (!activeSection) {
            sectionTitle.textContent = ''; // Clear if no section is active
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
});