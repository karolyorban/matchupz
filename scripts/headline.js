document.addEventListener('DOMContentLoaded', function() {
    const stickyMenu = document.querySelector('.sticky_menu');
    const scrollThreshold = window.innerHeight * 0.1;
    const sectionTitle = document.querySelector('.active_section_title');
    const navLinks = document.querySelectorAll('.sticky_menu a');
    
    // Map section IDs to their display titles
    const sectionTitles = {
        'staff': '#UNSER TEAM',
        'taktik': '#UNSERE TAKTIK',
        'kunden': '#UNSERE FANS',
        'anpfiff': '#DER ANPFIFF'
    };

    // Track active section on scroll
    function handleScroll() {
        // Sticky menu background logic
        if (window.scrollY > scrollThreshold) {
            stickyMenu.classList.add('scrolled');
        } else {
            stickyMenu.classList.remove('scrolled');
            sectionTitle.textContent = ''; // Clear title when at top
        }
        
        // Find which section is in view
        const sections = document.querySelectorAll('section[id]');
        let activeSection = null;
        const triggerOffset = window.innerHeight * 0.15;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
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
        
        // Update active menu item
        navLinks.forEach(link => {
            link.classList.remove('active-section');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active-section');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
});