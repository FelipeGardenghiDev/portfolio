/**
 * CV Previewer Modal Controller
 * Features:
 * - Profile Switcher: Developer (Full-Stack/Backend) vs Systems Support & Operations (N2/ERP)
 * - Modern WebP image rendering with PNG fallback
 * - Complete keyboard focus trapping (A11y)
 * - Bilingual PT/EN synchronization
 */
import { getLang } from './i18n.js';

let lastActiveElement = null;
let currentProfile = 'dev'; // 'dev' | 'suporte'
let activeOpenCvModalFn = null;

export function openCvModal(profile = 'dev') {
  if (activeOpenCvModalFn) {
    activeOpenCvModalFn(profile);
  }
}

export function initCvModal() {
  const modal = document.getElementById('cv-modal');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-open-cv]');
  const closeBtn = document.getElementById('cv-modal-close-btn');
  const profileTabButtons = document.querySelectorAll('[data-cv-profile]');

  function openModal() {
    lastActiveElement = document.activeElement;
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
    updateModalView();
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  activeOpenCvModalFn = (profile = 'dev') => {
    if (profile && (profile === 'dev' || profile === 'suporte')) {
      currentProfile = profile;
      profileTabButtons.forEach((b) => {
        const isActive = b.getAttribute('data-cv-profile') === profile;
        b.classList.toggle('cv-tab-btn--active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
    openModal();
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Handle profile switching tabs (Dev vs Suporte)
  profileTabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetProfile = btn.getAttribute('data-cv-profile');
      if (targetProfile && (targetProfile === 'dev' || targetProfile === 'suporte')) {
        currentProfile = targetProfile;
        profileTabButtons.forEach((b) => {
          b.classList.remove('cv-tab-btn--active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('cv-tab-btn--active');
        btn.setAttribute('aria-selected', 'true');
        updateModalView();
      }
    });
  });

  // Close when clicking backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Focus trap & Escape key
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });
}

export function updateModalLang() {
  updateModalView();
}

function updateModalView() {
  const isEn = getLang() === 'en';
  const isDev = currentProfile === 'dev';

  const title = document.getElementById('cv-modal-title');
  const badge = document.getElementById('cv-modal-badge');
  const downloadLink = document.querySelector('#cv-modal a[download]');
  const downloadText = document.getElementById('cv-modal-download-text');
  const closeBtn = document.getElementById('cv-modal-close-btn');
  const subtitle = document.querySelector('#cv-modal .modal-title-group .text-muted');

  const tabDev = document.getElementById('cv-tab-dev');
  const tabSuporte = document.getElementById('cv-tab-suporte');

  const page1Webp = document.getElementById('cv-page-1-webp');
  const page1Img = document.getElementById('cv-page-1-img');
  const page2Webp = document.getElementById('cv-page-2-webp');
  const page2Img = document.getElementById('cv-page-2-img');

  const page1Label = document.getElementById('cv-page-1-label');
  const page2Label = document.getElementById('cv-page-2-label');

  // 1. Tab buttons label
  if (tabDev) {
    tabDev.textContent = isEn
      ? '🚀 Backend / Full-Stack Engineer'
      : '🚀 Desenvolvedor Backend / Full-Stack';
  }
  if (tabSuporte) {
    tabSuporte.textContent = isEn
      ? '🛠️ IT Technical Support & Systems Operations (L2)'
      : '🛠️ Suporte Técnico / Sustentação N2 & ERP';
  }

  // 2. Titles, Badges & Subtitles
  if (title) {
    title.textContent = isEn
      ? (isDev ? 'Curriculum Vitae — Felipe Gardenghi (Developer)' : 'Curriculum Vitae — Felipe Gardenghi (IT Operations)')
      : (isDev ? 'Currículo Profissional — Felipe Gardenghi (Desenvolvedor)' : 'Currículo Profissional — Felipe Gardenghi (Suporte N2 / TI)');
  }

  if (badge) {
    if (isDev) {
      badge.textContent = isEn
        ? '2-Page Verified PDF · Backend & Full-Stack'
        : '2 Páginas Verificadas · Backend & Full-Stack';
    } else {
      badge.textContent = isEn
        ? '2-Page Verified PDF · Systems Support & ERP'
        : '2 Páginas Verificadas · Suporte N2 & Sustentação ERP';
    }
  }

  if (subtitle) {
    if (isDev) {
      subtitle.textContent = isEn
        ? 'BACKEND / FULL-STACK DEVELOPER | SOFTWARE ENGINEERING, DATA SCIENCE & AI'
        : 'DESENVOLVEDOR BACKEND / FULL-STACK | ENGENHARIA DE SOFTWARE, CIÊNCIA DE DADOS & IA';
    } else {
      subtitle.textContent = isEn
        ? 'TECHNICAL SUPPORT ANALYST & SYSTEMS OPERATIONS (IT / L2) | TOTVS PROTHEUS & ORACLE DB'
        : 'ANALISTA DE SUPORTE TÉCNICO & SUSTENTAÇÃO DE SISTEMAS (TI / N2) | TOTVS PROTHEUS & ORACLE';
    }
  }

  // 3. Download link destination & filename
  if (downloadLink) {
    if (isDev) {
      downloadLink.setAttribute('href', './resume/felipe-gardenghi-cv.pdf');
      downloadLink.setAttribute('download', 'felipe-gardenghi-cv.pdf');
    } else {
      downloadLink.setAttribute('href', './resume/felipe-gardenghi-suporte.pdf');
      downloadLink.setAttribute('download', 'felipe-gardenghi-suporte-n2.pdf');
    }
  }

  if (downloadText) {
    downloadText.textContent = isEn ? 'Download PDF' : 'Baixar PDF';
  }

  if (closeBtn) {
    closeBtn.setAttribute('aria-label', isEn ? 'Close resume dialog' : 'Fechar janela do currículo');
  }

  // 4. Page Labels & Image Sources (WebP + PNG)
  if (page1Label) {
    page1Label.textContent = isEn
      ? '// PAGE 1 — PROFILE, SKILLS & EXPERIENCE'
      : '// PÁGINA 1 — PERFIL, HABILIDADES & EXPERIÊNCIA';
  }
  if (page2Label) {
    page2Label.textContent = isEn
      ? '// PAGE 2 — PROJECTS, EDUCATION & COURSES'
      : '// PÁGINA 2 — PROJETOS, FORMAÇÃO & CURSOS';
  }

  if (isDev) {
    if (page1Webp) page1Webp.setAttribute('srcset', './resume/page-1.webp');
    if (page1Img) {
      page1Img.setAttribute('src', './resume/page-1.png');
      page1Img.setAttribute('alt', isEn ? "Page 1 of Felipe Gardenghi's Developer CV" : 'Página 1 do Currículo de Desenvolvedor de Felipe Gardenghi');
    }
    if (page2Webp) page2Webp.setAttribute('srcset', './resume/page-2.webp');
    if (page2Img) {
      page2Img.setAttribute('src', './resume/page-2.png');
      page2Img.setAttribute('alt', isEn ? "Page 2 of Felipe Gardenghi's Developer CV" : 'Página 2 do Currículo de Desenvolvedor de Felipe Gardenghi');
    }
  } else {
    if (page1Webp) page1Webp.setAttribute('srcset', './resume/suporte-page-1.webp');
    if (page1Img) {
      page1Img.setAttribute('src', './resume/suporte-page-1.png');
      page1Img.setAttribute('alt', isEn ? "Page 1 of Felipe Gardenghi's IT Support CV" : 'Página 1 do Currículo de Suporte Técnico de Felipe Gardenghi');
    }
    if (page2Webp) page2Webp.setAttribute('srcset', './resume/suporte-page-2.webp');
    if (page2Img) {
      page2Img.setAttribute('src', './resume/suporte-page-2.png');
      page2Img.setAttribute('alt', isEn ? "Page 2 of Felipe Gardenghi's IT Support CV" : 'Página 2 do Currículo de Suporte Técnico de Felipe Gardenghi');
    }
  }
}
