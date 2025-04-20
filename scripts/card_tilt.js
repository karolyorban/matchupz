const card = document.getElementById('hover_card');
const hoverScale = 1.3; // 10% scale-up on hover (adjust as needed)

card.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;
  
  const tiltX = (0.5 - y) * 8;
  const tiltY = (x - 0.5) * 8;
  
  // Combine tilt + scale
  card.style.transform = `
    rotateX(${tiltX}deg) 
    rotateY(${tiltY}deg) 
    scale(${hoverScale})
  `;
});

card.addEventListener('mouseleave', () => {
  // Reset to default (no tilt, normal scale)
  card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});