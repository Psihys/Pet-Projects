document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const cardsWrapper = document.querySelector('.cards-wrapper');
  const cards = document.querySelectorAll('.card-item');
  const dots = document.querySelectorAll('.dot');

  const visibleCards = 3; // Number of cards visible at a time
  const totalCards = cards.length;
  let currentIndex = 0;

  function updateSlider() {
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Adding gap
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

  prevButton.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? totalCards - visibleCards : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = currentIndex === totalCards - visibleCards ? 0 : currentIndex + 1;
    updateSlider();
  });

  // Initialize the slider
  updateSlider();
});
