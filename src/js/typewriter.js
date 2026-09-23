/**
 * Typewriter Effect with Rotating Erasable Words
 * Matches the interactive visual style of modern engineering portfolios.
 */

export function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    target.textContent = 'Engenheiro de Software & Full-Stack';
    return;
  }

  const phrases = [
    'Desenvolvedor Full-Stack',
    'Engenheiro de Software',
    'Especialista Backend Java & Spring',
    'Cloud & Microsserviços Resilientes',
    'Ciência de Dados & Machine Learning',
    'Soluções Corporativas de Alta Performance'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId = null;

  const TYPE_SPEED = 75;      // ms per char typing
  const DELETE_SPEED = 40;    // ms per char deleting
  const HOLD_AFTER_TYPE = 2200; // ms to pause after word is typed
  const HOLD_AFTER_DELETE = 450; // ms to pause before typing next word

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    // Add subtle humanized timing variation
    delay += Math.floor(Math.random() * 20);

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Completed typing phrase -> pause, then start deleting
      delay = HOLD_AFTER_TYPE;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Completed deleting -> move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = HOLD_AFTER_DELETE;
    }

    timeoutId = setTimeout(tick, delay);
  }

  // Start initial typing
  tick();

  // Cleanup handler if needed
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
}
