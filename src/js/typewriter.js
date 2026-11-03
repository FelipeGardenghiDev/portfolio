/**
 * Dynamic Typewriter Effect with Multi-Language Support
 */
import { getLang } from './i18n.js';

const PHRASES_BY_LANG = {
  pt: [
    'Desenvolvedor Backend / Full-Stack',
    'Engenharia de Software & Arquitetura',
    'Microsserviços C# .NET 8 & Java 21',
    'Oracle PL/SQL & PostgreSQL',
    'Ciência de Dados & Machine Learning',
    'React 19, Next.js 16 & Angular 19'
  ],
  en: [
    'Backend / Full-Stack Developer',
    'Software Engineering & Architecture',
    'C# .NET 8 & Java 21 Microservices',
    'Oracle PL/SQL & PostgreSQL',
    'Data Science & Machine Learning',
    'React 19, Next.js 16 & Angular 19'
  ]
};

let timeoutId = null;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

export function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    target.textContent = getLang() === 'en' ? 'Backend / Full-Stack Software Engineer' : 'Desenvolvedor Backend / Full-Stack';
    return;
  }

  const TYPE_SPEED = 70;
  const DELETE_SPEED = 35;
  const HOLD_AFTER_TYPE = 2400;
  const HOLD_AFTER_DELETE = 400;

  function tick() {
    const lang = getLang();
    const phrases = PHRASES_BY_LANG[lang] || PHRASES_BY_LANG.pt;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    delay += Math.floor(Math.random() * 15);

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = HOLD_AFTER_TYPE;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = HOLD_AFTER_DELETE;
    }

    timeoutId = setTimeout(tick, delay);
  }

  if (timeoutId) clearTimeout(timeoutId);
  tick();
}

export function resetTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  if (timeoutId) clearTimeout(timeoutId);
  charIndex = 0;
  isDeleting = false;
  initTypewriter();
}
