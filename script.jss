// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

// Game filter functionality
function filterGames(category) {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    // Update button active class
    document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="filterGames('${category}')"]`).classList.add('active');
}
