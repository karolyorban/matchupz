const composite = document.querySelector('.card_composite');
const hoverScale = 1.1; // Scale multiplier (adjust as needed)

composite.addEventListener('mousemove', (e) => {
  const rect = composite.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  
  // Tilt values
  const tiltX = (0.5 - y) * 15;
  const tiltY = (x - 0.5) * 15;
  
  // Apply transform with scale
  composite.style.transform = `
    rotateX(${tiltX}deg)
    rotateY(${tiltY}deg)
    scale(${hoverScale})
  `;
});

composite.addEventListener('mouseleave', () => {
  composite.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});