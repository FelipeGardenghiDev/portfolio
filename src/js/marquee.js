/**
 * Infinite Logo Marquee Ribbon with Scroll Velocity Reactivity
 * Moves continuously in an infinite horizontal loop and dynamically responds
 * to page scrolling (accelerating with scroll velocity).
 */

export function initMarquee() {
  const marquee = document.getElementById('tech-marquee');
  if (!marquee) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let targetBoost = 0;
  let currentBoost = 0;
  let ticking = false;
  let dampTimer = null;

  function updateVelocity() {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const deltaY = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;

    // Scale delta into a boost multiplier (max ~3.5x normal speed)
    targetBoost = Math.min(deltaY * 0.07, 3.5);

    clearTimeout(dampTimer);
    dampTimer = setTimeout(() => {
      targetBoost = 0;
    }, 120);

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(renderBoost);
    }
  }

  function renderBoost() {
    // Lerp towards targetBoost for buttery smooth transitions
    currentBoost += (targetBoost - currentBoost) * 0.2;

    if (Math.abs(currentBoost) < 0.01 && targetBoost === 0) {
      currentBoost = 0;
      marquee.style.setProperty('--scroll-boost', '0');
      ticking = false;
      return;
    }

    marquee.style.setProperty('--scroll-boost', currentBoost.toFixed(3));
    requestAnimationFrame(renderBoost);
  }

  window.addEventListener('scroll', updateVelocity, { passive: true });
}
