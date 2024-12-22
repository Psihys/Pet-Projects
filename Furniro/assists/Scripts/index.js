const slides = document.querySelectorAll('.slide') // All slides
const sliderContainer = document.querySelector('.slider-container') // The container of all slides
let currentIndex = 0 // Tracks the current slide

// Function to show the current slide
function showSlide(index) {
  const slideWidth = slides[0].clientWidth // Get the width of a single slide
  sliderContainer.style.transform = `translateX(-${index * slideWidth}px)` // Slide horizontally
}

// Event Listener for Next Button (on each slide)
document.querySelectorAll('.next-slide-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = (index + 1) % slides.length // Move to the next slide and loop back to the first
    showSlide(currentIndex)
  })
})

// Initialize the first slide
showSlide(currentIndex)

// Optional: Add window resize listener to handle responsiveness
window.addEventListener('resize', () => {
  showSlide(currentIndex) // Recalculate positions on window resize
})
