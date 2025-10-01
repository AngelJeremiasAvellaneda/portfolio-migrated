// scroll.js
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtns = document.querySelectorAll('.scroll-down');

    scrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target'); // Lee el data-target
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Sección con id="${targetId}" no encontrada.`);
            }
        });
    });
});
