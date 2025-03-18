const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dotsContainer = document.querySelector(".dots");
let index = 0;
let currentSlide = 0;
const slideInterval = 5000; // Change slide every 3 seconds

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function createDots() {
    items.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
    updateCarousel();
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

prevButton.addEventListener("click", () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, slideInterval);
});

createDots();