const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Track mouse movement
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animate() {
    cursorX += (mouseX - cursorX) * 0.4;
    cursorY += (mouseY - cursorY) * 0.4;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${cursor.classList.contains('name-hover') ? 10 : 1})`;
    requestAnimationFrame(animate);
}
animate();

// Apply effect to ALL elements with the class 'cursor-hover-effect'
const hoverElements = document.querySelectorAll('.cursor-hover-effect');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('name-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('name-hover'));
});

// Apply effect to ALL elements with the class 'pointer-normal'
document.querySelectorAll('.pointer-normal').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hidden'));  // fade out
    el.addEventListener('mouseleave', () => cursor.classList.remove('hidden')); // fade in
});

