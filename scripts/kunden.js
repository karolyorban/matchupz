document.addEventListener('DOMContentLoaded', function() {
    function positionLogos() {
        const bgImg = document.querySelector('.kunden_backgr img');
        const logos = document.querySelectorAll('[data-x][data-y]');
        
        if (!bgImg.complete) {
            bgImg.onload = positionLogos;
            return;
        }

        const bgNaturalWidth = bgImg.naturalWidth;
        const bgNaturalHeight = bgImg.naturalHeight;
        const bgAspect = bgNaturalWidth / bgNaturalHeight;
        const viewportAspect = window.innerWidth / window.innerHeight;

        logos.forEach(logo => {
            const xPercent = parseFloat(logo.dataset.x);
            const yPercent = parseFloat(logo.dataset.y);
            
            // Convert image coordinates to viewport coordinates
            if (viewportAspect > bgAspect) {
                // Wider viewport: image is cropped vertically
                const visibleHeight = window.innerWidth / bgAspect;
                const verticalCrop = (visibleHeight - window.innerHeight) / 2;
                const yPos = (yPercent / 100) * visibleHeight - verticalCrop;
                
                logo.style.left = `${xPercent}%`;
                logo.style.top = `${(yPos / window.innerHeight) * 100}%`;
            } else {
                // Taller viewport: image is cropped horizontally
                const visibleWidth = window.innerHeight * bgAspect;
                const horizontalCrop = (visibleWidth - window.innerWidth) / 2;
                const xPos = (xPercent / 100) * visibleWidth - horizontalCrop;
                
                logo.style.left = `${(xPos / window.innerWidth) * 100}%`;
                logo.style.top = `${yPercent}%`;
            }
        });
    }

    positionLogos();
    window.addEventListener('resize', positionLogos);
});