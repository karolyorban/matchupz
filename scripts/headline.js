document.addEventListener('DOMContentLoaded', function() {
    const stickyMenu = document.querySelector('.sticky_menu');
    const scrollThreshold = window.innerHeight * 0.1;
    const sectionTitle = document.querySelector('.active_section_title');
    
    // Map section IDs to their display titles
    const sectionTitles = {
        'staff': '#UNSER TEAM',
        'taktik': '#UNSERE TAKTIK',
        'kunden': '#UNSERE FANS',
        'anpfiff': '#KONTAKT'
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
        
        // New: Find which section is in view
        const sections = document.querySelectorAll('section[id]');
        let activeSection = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSection = section.id;
            }
        });
        
        // Update the displayed title
        if (activeSection && sectionTitles[activeSection]) {
            sectionTitle.textContent = sectionTitles[activeSection];
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
});