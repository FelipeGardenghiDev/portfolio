/**
 * Cursor Spotlight Effect
 * Adds subtle high-end radial glow tracking the mouse over cards.
 * Inspired by Linear & Vercel design systems.
 */

export function initSpotlight() {
  // Check if pointer events are supported and not reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll(
    '.project-card, .stack-card, .fact-card, .timeline-content, .cert-card, .contact-card, .terminal-window, .academic-card, .lab-card'
  );

  cards.forEach((card) => {
    card.classList.add('spotlight-card');

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}
