/**
 * Dual Persona Controller (Tech / Musician / Split Gateway)
 * Faithful recreation of the Dual Portfolio Figma Design.
 * Defaults strictly to 'tech' for root visits and CV/GitHub links.
 */

export function initPersona() {
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();
  
  let initialPersona = 'tech';
  if (params.get('mode') === 'music' || hash.startsWith('#music')) {
    initialPersona = 'music';
  } else if (params.get('mode') === 'split' || hash === '#split') {
    initialPersona = 'split';
  }

  setPersona(initialPersona, false);

  // Click handler for switcher tabs (navbar, buttons, split screen)
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
    let mode = 'tech';
    if (currentParams.get('mode') === 'music' || currentHash.startsWith('#music')) {
      mode = 'music';
    } else if (currentParams.get('mode') === 'split' || currentHash === '#split') {
      mode = 'split';
    }
    setPersona(mode, false);
  });
}

export function setPersona(persona, updateUrl = true) {
  const validPersona = ['tech', 'music', 'split'].includes(persona) ? persona : 'tech';
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
    if (validPersona === 'music') {
      url.searchParams.set('mode', 'music');
    } else if (validPersona === 'split') {
      url.searchParams.set('mode', 'split');
    } else {
      url.searchParams.delete('mode');
    }
    url.hash = '';
    window.history.replaceState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dispatch custom event for visualizers and other controllers
  window.dispatchEvent(new CustomEvent('persona-change', { detail: { persona: validPersona } }));
}
