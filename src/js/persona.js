/**
 * Dual Persona Controller (Tech / Musician)
 * Manages mode switching between Software Engineering and Music personas.
 * Defaults strictly to 'tech' for root visits and direct links.
 */

export function initPersona() {
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();
  
  // Explicit request for music via query param (?mode=music) or hash (#music)
  const isMusicRequested = params.get('mode') === 'music' || hash === '#music' || hash.startsWith('#music-');
  const initialPersona = isMusicRequested ? 'music' : 'tech';

  setPersona(initialPersona, false);

  // Click handler for switcher tabs (navbar and hero)
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-persona-btn]');
    if (!tab) return;
    e.preventDefault();
    const targetPersona = tab.getAttribute('data-persona-btn');
    if (targetPersona) {
      setPersona(targetPersona, true);
    }
  });

  // Handle browser back/forward navigation
  window.addEventListener('popstate', () => {
    const currentParams = new URLSearchParams(window.location.search);
    const currentHash = window.location.hash.toLowerCase();
    const mode = currentParams.get('mode') === 'music' || currentHash.startsWith('#music') ? 'music' : 'tech';
    setPersona(mode, false);
  });
}

export function setPersona(persona, updateUrl = true) {
  const validPersona = persona === 'music' ? 'music' : 'tech';
  document.documentElement.setAttribute('data-persona', validPersona);

  // Update switcher button states
  document.querySelectorAll('.persona-tab').forEach((btn) => {
    const btnPersona = btn.getAttribute('data-persona-btn');
    const isActive = btnPersona === validPersona;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
  });

  // URL synchronization
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (validPersona === 'music') {
      url.searchParams.set('mode', 'music');
      // If previous hash was a tech section, clear it or point to music hero
      if (url.hash && !url.hash.startsWith('#music')) {
        url.hash = '';
      }
    } else {
      url.searchParams.delete('mode');
      if (url.hash.startsWith('#music')) {
        url.hash = '';
      }
    }
    window.history.replaceState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dispatch custom event for visualizers and other controllers
  window.dispatchEvent(new CustomEvent('persona-change', { detail: { persona: validPersona } }));
}
