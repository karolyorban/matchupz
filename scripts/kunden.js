document.addEventListener('DOMContentLoaded', function() {
    const leftLogo = document.querySelector('.clients_logo_left img');
    const rightLogo = document.querySelector('.clients_logo_right img');
    const logoBasePath = 'kunden/';
    const logoCount = 6; // Adjust to match your number of logos (logo1.png, logo2.png...)
  
    function getRandomLogo() {
      const randomNum = Math.floor(Math.random() * logoCount) + 1;
      return `${logoBasePath}logo${randomNum}.png`;
    }
  
    function updateLogos() {
        leftLogo.classList.add('hidden');
        rightLogo.classList.add('hidden');
        
        setTimeout(() => {
          leftLogo.src = getRandomLogo();
          rightLogo.src = getRandomLogo();
          leftLogo.classList.remove('hidden');
          rightLogo.classList.remove('hidden');
        }, 500); // Match this delay to the CSS transition time
      }
  
    // Change logos every 3 seconds (adjust interval as needed)
    setInterval(updateLogos, 3000);
  });