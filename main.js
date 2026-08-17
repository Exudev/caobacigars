document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.getElementById('hero-slider');
  
  if (heroSection) {
    const images = [
      '/images/DSC05620.jpg',
      '/images/DSC05622.jpg',
      '/images/DSC05626.jpg',
      '/images/DSC02547.jpg',
      '/images/DSC09989.jpg',
      '/images/DSC09993.jpg'
    ];
    
    let currentIndex = 0;
    
    // Add CSS transition for smooth cross-fading
    heroSection.style.transition = 'background-image 2s ease-in-out';
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }, 5000); // Change image every 5 seconds
  }
});
