const card = document.getElementById('hover_card');
const container = document.querySelector('.logo_container');
const hoverScale = 1.33;

card.addEventListener('mousemove', (e) => {
  // Get card dimensions and mouse position
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;
  
  // 1. Tilt Effect (Existing)
  const tiltX = (0.5 - y) * 8;
  const tiltY = (x - 0.5) * 8;
  
  card.style.transform = `
    rotateX(${tiltX}deg)
    rotateY(${tiltY}deg)
    scale(${hoverScale})
  `;
  
  // 2. Mask Positioning (Pixel-perfect)
  const mouseX = e.clientX - left;
  const mouseY = e.clientY - top;
  container.style.setProperty('--mouse-x', `${mouseX}px`);
  container.style.setProperty('--mouse-y', `${mouseY}px`);
  
  // 3. Dynamic Glare (Follows mouse + tilt)
  const glareIntensity = 0.7 + Math.abs(tiltY) * 0.1;
  container.style.setProperty('--flare-x', `${x * 100}%`);
  container.style.setProperty('--flare-y', `${y * 100}%`);
  document.querySelector('.card_flare').style.opacity = glareIntensity;
});

card.addEventListener('mouseleave', () => {
  // Reset all effects
  card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  container.style.setProperty('--mouse-x', '50%');
  container.style.setProperty('--mouse-y', '50%');
  document.querySelector('.card_flare').style.opacity = '0';
});