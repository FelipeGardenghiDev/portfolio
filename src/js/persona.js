/**
 * Dual Persona Controller (Split Gateway / Tech / Musician)
 * Defaults to 'split' for root visits (felipegardenghi.com.br).
 * Supports deep linking (?mode=tech, ?mode=music, ?mode=split).
 */

export function initPersona() {
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();
  
  // Default to 'split' when visiting felipegardenghi.com.br directly
  let initialPersona = 'split';
  if (params.get('mode') === 'tech' || hash === '#tech') {
    initialPersona = 'tech';
  } else if (params.get('mode') === 'music' || hash.startsWith('#music')) {
    initialPersona = 'music';
  } else if (params.get('mode') === 'split' || hash === '#split') {
    initialPersona = 'split';
  }

  setPersona(initialPersona, false);

  // Click handler for all persona triggers (navbar, split sides, buttons)
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
    let mode = 'split';
    if (currentParams.get('mode') === 'tech' || currentHash === '#tech') {
      mode = 'tech';
    } else if (currentParams.get('mode') === 'music' || currentHash.startsWith('#music')) {
      mode = 'music';
    } else if (currentParams.get('mode') === 'split' || currentHash === '#split') {
      mode = 'split';
    }
    setPersona(mode, false);
  });
}

export function setPersona(persona, updateUrl = true) {
  const validPersona = ['tech', 'music', 'split'].includes(persona) ? persona : 'split';
  document.documentElement.setAttribute('data-persona', validPersona);

  // Update switcher buttons state
  document.querySelectorAll('[data-persona-btn]').forEach((btn) => {
    const btnPersona = btn.getAttribute('data-persona-btn');
    const isActive = btnPersona === validPersona;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
  });

  // URL synchronization
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (validPersona === 'tech') {
      url.searchParams.set('mode', 'tech');
    } else if (validPersona === 'music') {
      url.searchParams.set('mode', 'music');
    } else {
      url.searchParams.delete('mode'); // Clean URL on root for split mode
    }
    url.hash = '';
    window.history.replaceState({}, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dispatch custom event for visualizers and other controllers
  window.dispatchEvent(new CustomEvent('persona-change', { detail: { persona: validPersona } }));
}
