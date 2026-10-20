/**
 * Internationalization (i18n) Engine — Bilingual PT-BR & EN
 * Altera dinamicamente os textos da interface e persiste preferência no localStorage.
 */

export const TRANSLATIONS = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      lab: 'Laboratório',
      stack: 'Stack',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato'
    },
    hero: {
      badge: 'Disponível para oportunidades sênior',
      subtitlePrefix: '//',
      description: 'Engenheiro de Software Full-Stack & Cientista de Dados. Construo microsserviços de alto desempenho em .NET 8 e Java 21, arquiteturas corporativas resilientes (DDD, Outbox Pattern, Terraform AWS), aplicações multimídia modernas e sistemas distribuídos de alta escala.',
      viewProjects: 'Ver Projetos',
      downloadCv: 'Baixar CV (PDF)',
      contact: 'Entrar em Contato'
    },
    lab: {
      tag: '// LIVE SYSTEM ARCHITECTURE & DSP PLAYGROUND',
      title: 'Laboratório de Engenharia & Simulação Interativa',
      description: 'Explore a topologia arquitetural, métricas de vazão (throughput) e execute simulações em tempo real de DSP de áudio e consistência transacional diretamente no navegador.'
    },
    projects: {
      tag: '// projetos em destaque',
      title: 'Soluções de engenharia com impacto real',
      all: 'Todos',
      backend: 'Back-End & APIs',
      fullstack: 'Full-Stack',
      dataAi: 'Dados & IA',
      mobile: 'Mobile & Mídia'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      lab: 'Lab & Sandbox',
      stack: 'Tech Stack',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available for senior engineering opportunities',
      subtitlePrefix: '//',
      description: 'Senior Full-Stack Software Engineer & Data Scientist. Designing high-throughput .NET 8 & Java 21 microservices, resilient distributed systems (DDD, Outbox Pattern, Terraform AWS), client-side multimedia engines and data platforms with proven business ROI.',
      viewProjects: 'Explore Projects',
      downloadCv: 'Download CV (PDF)',
      contact: 'Get in Touch'
    },
    lab: {
      tag: '// LIVE SYSTEM ARCHITECTURE & DSP PLAYGROUND',
      title: 'Engineering Lab & Interactive Sandbox',
      description: 'Inspect live distributed architecture topologies, real-time throughput metrics, and test audio DSP filters directly in your browser without external servers.'
    },
    projects: {
      tag: '// featured engineering works',
      title: 'High-Impact Engineering Solutions',
      all: 'All',
      backend: 'Back-End & Microservices',
      fullstack: 'Full-Stack',
      dataAi: 'Data & AI',
      mobile: 'Mobile & Media'
    }
  }
};

let currentLang = 'pt';

export function getLang() {
  return currentLang;
}

export function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('portfolio-lang', lang);
  } catch {}

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const t = TRANSLATIONS[lang];

  // Update Nav links
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 6) {
    navLinks[0].textContent = t.nav.about;
    navLinks[1].textContent = t.nav.projects;
    navLinks[2].textContent = t.nav.stack;
    navLinks[3].textContent = t.nav.experience;
    navLinks[4].textContent = t.nav.education;
    navLinks[5].textContent = t.nav.contact;
  }

  // Update Hero elements
  const statusSpan = document.querySelector('.hero-status-badge span:last-child');
  if (statusSpan) statusSpan.textContent = t.hero.badge;

  const heroDesc = document.querySelector('.hero-description');
  if (heroDesc) heroDesc.textContent = t.hero.description;

  const heroViewProj = document.querySelector('.hero-actions .btn-primary span');
  if (heroViewProj) heroViewProj.textContent = t.hero.viewProjects;

  const heroCvBtn = document.querySelector('.hero-actions .btn-secondary span');
  if (heroCvBtn) heroCvBtn.textContent = t.hero.downloadCv;

  // Update Lab section if present
  const labTag = document.querySelector('.lab-section .section-tag');
  if (labTag) labTag.textContent = t.lab.tag;

  const labTitle = document.querySelector('.lab-section .section-title');
  if (labTitle) labTitle.textContent = t.lab.title;

  const labDesc = document.querySelector('.lab-section .section-description');
  if (labDesc) labDesc.textContent = t.lab.description;

  // Update button visual state
  const ptSpan = document.getElementById('lang-pt');
  const enSpan = document.getElementById('lang-en');
  if (ptSpan && enSpan) {
    if (lang === 'pt') {
      ptSpan.classList.add('active');
      enSpan.classList.remove('active');
    } else {
      enSpan.classList.add('active');
      ptSpan.classList.remove('active');
    }
  }
}

export function initI18n() {
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') {
      currentLang = saved;
    }
  } catch {}

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  // Set initial state
  setLanguage(currentLang);
}
