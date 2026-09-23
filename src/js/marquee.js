/**
 * Infinite Logo Marquee Ribbon
 * Runs on the GPU compositor thread at a calm, constant pace.
 * Pauses on hover or touch hold so users can inspect technologies.
 */

export function initMarquee() {
  const marquee = document.getElementById('tech-marquee');
  if (!marquee) return;

  // Pause on touch start for mobile users, resume on touch end
  marquee.addEventListener('touchstart', () => {
    marquee.style.animationPlayState = 'paused';
  }, { passive: true });

  marquee.addEventListener('touchend', () => {
    marquee.style.animationPlayState = 'running';
  }, { passive: true });
}
