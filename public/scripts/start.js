const slider = document.querySelector('.slider');
const items = Array.from(slider.children);
let isPaused = false;

// Duplicamos items para loop infinito
items.forEach(item => slider.appendChild(item.cloneNode(true)));

let position = 0;
const speed = 100; // pixeles por segundo
let lastTime = null;

function animateSlider(time) {
    if (!lastTime) lastTime = time;
    const deltaTime = (time - lastTime) / 1000; // segundos
    lastTime = time;

    if (!isPaused) {
        position -= speed * deltaTime;
        const totalWidth = slider.scrollWidth / 2; // mitad total, porque duplicamos
        if (position <= -totalWidth) position = 0;
        slider.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animateSlider);
}

requestAnimationFrame(animateSlider);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => isPaused = true);
sliderContainer.addEventListener('mouseleave', () => isPaused = false);
