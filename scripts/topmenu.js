// topmenu.js - Controls sticky menu background appearance on scroll
document.addEventListener('DOMContentLoaded', function() {
    const stickyMenu = document.querySelector('.sticky_menu');
    const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport height
    
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            stickyMenu.classList.add('scrolled');
        } else {
            stickyMenu.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
});