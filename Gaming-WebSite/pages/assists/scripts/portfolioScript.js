document.addEventListener('DOMContentLoaded', () => {
  const prevButtonPortfolio = document.querySelector('.prev-button');
  const nextButtonPortfolio = document.querySelector('.next-button');
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const cards = document.querySelectorAll('.card-item');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function updateSlider() {
    if (!cardsWrapper || !cards.length) {
      console.error('Cards wrapper or card items are missing!');
      return;
    }

    const cardWidth = cards[0].getBoundingClientRect().width;
    cardsWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('activeDots', index === currentIndex);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  prevButtonPortfolio.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButtonPortfolio.addEventListener('click', () => {
    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  // Initialize the slider
  updateSlider();
});
