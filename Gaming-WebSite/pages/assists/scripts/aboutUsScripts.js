const slides = document.querySelectorAll('.slide')
const prevButtonAboutUs = document.querySelector('.prev')
const nextButtonAboutUs = document.querySelector('.next')
const counter = document.querySelector('.slider-counter')

let currentSlide = 0

// Function to update the slide display
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active')
    if (index === currentSlide) {
      slide.classList.add('active')
    }
  })

  // Update the counter
  counter.textContent = `${currentSlide + 1} of ${slides.length}`
}

// Add event listeners for navigation
prevButtonAboutUs.addEventListener('click', () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
  updateSlides()
})

nextButtonAboutUs.addEventListener('click', () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
  updateSlides()
})

// Initialize the slider for About_Us-Page
updateSlides()

