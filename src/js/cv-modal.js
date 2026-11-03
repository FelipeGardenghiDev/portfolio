/**
 * CV Previewer Modal Controller
 * Allows recruiters to inspect the exact 2-page curriculum vitae directly on page.
 */
import { getLang } from './i18n.js';

export function initCvModal() {
  const modal = document.getElementById('cv-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-open-cv]');
  const closeBtn = document.getElementById('cv-modal-close-btn');

  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    updateModalLang();
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close when clicking backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });
}

export function updateModalLang() {
  const isEn = getLang() === 'en';
  const title = document.getElementById('cv-modal-title');
  const badge = document.getElementById('cv-modal-badge');
  const downloadText = document.getElementById('cv-modal-download-text');

  if (title) {
    title.textContent = isEn
      ? 'Curriculum Vitae — Felipe Gardenghi'
      : 'Currículo Profissional — Felipe Gardenghi';
  }
  if (badge) {
    badge.textContent = isEn
      ? '2-Page Verified PDF · Backend & Full-Stack'
      : '2 Páginas Verificadas · Backend & Full-Stack';
  }
  if (downloadText) {
    downloadText.textContent = isEn ? 'Download PDF' : 'Baixar PDF';
  }
}
