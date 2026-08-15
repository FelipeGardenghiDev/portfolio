/**
 * Theme toggle system
 * Supports dark/light mode with localStorage persistence
 * Respects prefers-color-scheme as default
 */

const STORAGE_KEY = 'portfolio-theme';
const DARK = 'dark';
const LIGHT = 'light';

function getSystemPreference() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update toggle button aria-label
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    const label = theme === DARK ? 'Alternar para modo claro' : 'Alternar para modo escuro';
    toggle.setAttribute('aria-label', label);
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable — fail silently
  }
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === DARK ? LIGHT : DARK;
  applyTheme(next);
  saveTheme(next);
}

export function initTheme() {
  const saved = getSavedTheme();
  const theme = saved || getSystemPreference();
  applyTheme(theme);

  // Bind click event to theme toggle button
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn && !toggleBtn.dataset.bound) {
    toggleBtn.addEventListener('click', toggleTheme);
    toggleBtn.dataset.bound = 'true';
  }

  // Listen for system preference changes (only if no saved preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getSavedTheme()) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });
}
