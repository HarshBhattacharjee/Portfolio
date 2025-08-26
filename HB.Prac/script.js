const cursor = document.querySelector('.custom-cursor');
const cursorInner = document.querySelector('.cursor-inner');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Hover effects
document.querySelectorAll('.cursor-hover-effect').forEach(el => {
  el.addEventListener('mouseenter', () => cursorInner.classList.add('name-hover'));
  el.addEventListener('mouseleave', () => cursorInner.classList.remove('name-hover'));
});

// Hide effect
document.querySelectorAll('.pointer-normal').forEach(el => {
  el.addEventListener('mouseenter', () => cursorInner.classList.add('hidden'));
  el.addEventListener('mouseleave', () => cursorInner.classList.remove('hidden'));
});


const elements = document.querySelectorAll('.cursor-hover-effect');

function updateFade() {
    const triggerVH = window.innerHeight * 0.2;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        let opacity = 1;

        if (top <= triggerVH) {
            // Fade out after crossing 32vh from top
            const fadeDistance = triggerVH; // same as 32vh in px
            const progress = Math.min(Math.max((triggerVH - top) / fadeDistance, 0), 1);
            opacity = 1 - progress; 
        }

        el.style.opacity = opacity;
    });

    requestAnimationFrame(updateFade);
}

updateFade();


const quotes = document.querySelectorAll('.quote');

// Wrap each letter in spans
quotes.forEach(quote => {
  const letters = quote.textContent.split('');
  quote.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
});

function animateQuotes() {
  const vh = window.innerHeight;

  quotes.forEach(quote => {
    const rect = quote.getBoundingClientRect();
    const letters = quote.querySelectorAll('.letter');
    const totalLetters = letters.length;

    // --- Fade-in range ---
    const fadeInStartY = vh;         // just entering
    const fadeInEndY = vh * 0.8;     // top hits 20vh from bottom
    let fadeInProgress = (fadeInStartY - rect.top) / (fadeInStartY - fadeInEndY);
    fadeInProgress = Math.min(Math.max(fadeInProgress, 0), 1);

      // Fade-in normal order
    letters.forEach((letter, i) => {
      const delay = i / totalLetters;
      let localProgress = (fadeInProgress - delay) * totalLetters;
      localProgress = Math.min(Math.max(localProgress, 0), 1);

      letter.style.opacity = localProgress;
      letter.style.transform = `translateY(${20 * (1 - localProgress)}px)`;
    });
  });

  requestAnimationFrame(animateQuotes);
}

animateQuotes();
