document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.getElementById("hero-slider");
  const dotsContainer = document.getElementById("carousel-dots");

  if (heroSection) {
    const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const images = [
      `${base}/images/DSC05620.jpg`,
      `${base}/images/DSC05622.jpg`,
      `${base}/images/DSC05626.jpg`,
      `${base}/images/DSC02547.jpg`,
      `${base}/images/DSC09989.jpg`,
      `${base}/images/DSC09993.jpg`,
    ];

    let currentIndex = 0;
    let autoSlideInterval;

    heroSection.style.transition = "background-image 1.5s ease-in-out";

    function setSlide(index) {
      currentIndex = index;
      heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
          if (i === currentIndex) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSlide(nextIndex);
      }, 5000);
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          clearInterval(autoSlideInterval);
          setSlide(i);
          startAutoSlide();
        });
      });
    }

    startAutoSlide();
  }
});
