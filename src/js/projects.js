/**
 * Projects Section & Accessible Modal Controller
 */

export const PROJECTS_DATA = [
  {
    id: 'nova-smar-dashboard',
    featured: true,
    title: 'Dashboard Financeiro & Automação ERP',
    subtitle: 'Sistema Corporativo em Produção · Nova Smar S/A',
    badge: 'PROJETO EM PRODUÇÃO / CASE DE SUCESSO',
    type: 'Full-Stack · Oracle PL/SQL · PHP · ERP Integration',
    shortDescription: 'Sistema web multiusuário auditável desenvolvido para substituir planilhas manuais na gestão financeira, integrado diretamente ao banco de dados do ERP TOTVS Protheus.',
    fullProblem: 'A gestão de fluxo de caixa diário e mensal dependia de controles em planilhas manuais descentralizadas, gerando risco de inconsistência de dados, retrabalho operacional e falta de auditabilidade para tomada de decisão pela gerência, diretoria e acionistas.',
    fullSolution: [
      '<strong>Desenvolvimento Full-Stack:</strong> Desenvolveu aplicação web intranet em PHP, JavaScript e Oracle PL/SQL.',
      '<strong>Automação de Banco de Dados:</strong> Implementou Triggers, Procedures e Functions em Oracle DB e MySQL, eliminando o retrabalho manual.',
      '<strong>Integração ERP:</strong> Integração com a base de dados do ERP TOTVS Protheus para captura e conciliação de dados em tempo real.',
      '<strong>Previsão & Relatórios:</strong> Módulos para fluxo de caixa, geração de relatórios dinâmicos e predição de situação financeira.',
      '<strong>Impacto de Estoque:</strong> Desenvolveu relatórios de contabilidade e controle de estoque que permitiram a realização do inventário corporativo em tempo recorde em 2025.'
    ],
    tags: ['PHP', 'Oracle PL/SQL', 'JavaScript', 'TOTVS Protheus', 'MySQL', 'Triggers & Procedures', 'Relatórios Financeiros'],
    isProprietary: true,
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: 'agrofinance-dashboard',
    featured: true,
    title: 'AgroFinance RWA Banking Dashboard',
    subtitle: 'Internet Banking & Tokenização de Commodities',
    badge: 'DESTAQUE / FINTECH RWA',
    type: 'Next.js 16 · React 19 · TypeScript · Tailwind v4 · Vitest',
    shortDescription: 'Plataforma bancária digital e custódia de Real World Assets (RWA) para o agronegócio, com liquidação de PIX em tempo real e suíte com testes automatizados.',
    fullProblem: 'Necessidade de antecipação de receitas e crédito rural seguro para produtores agrícolas através de custódia e negociação de safras tokenizadas com governança e transparência.',
    fullSolution: [
      '<strong>Arquitetura Moderna:</strong> Desenvolvido com Next.js 16 (App Router), React 19, TypeScript estrito e Tailwind CSS v4.',
      '<strong>Reatividade & Persistência:</strong> Gerenciamento de estado global com Zustand e persistência em localStorage, refletindo débitos de saldo e liquidações em tempo real.',
      '<strong>Validação Tipada com Zod:</strong> Schemas dinâmicos que validam fundos disponíveis em conta e barram operações inválidas.',
      '<strong>Qualidade & Testes:</strong> Suíte robusta de testes automatizados com Vitest e React Testing Library, integrados a pipeline de CI no GitHub Actions.'
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Vitest', 'Zod', 'RWA / Agro', 'CI/CD'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/agrofinance-dashboard',
      demo: 'https://agrofinance-dashboard-dev.vercel.app/dashboard'
    }
  },
  {
    id: 'revanche-website',
    featured: false,
    title: 'Website Banda Revanche',
    subtitle: 'Aplicação Web em Produção · Cliente Real',
    badge: 'CLIENTE REAL / PRODUÇÃO',
    type: 'Next.js 16 · React 19 · TypeScript · Tailwind v4 · SEO',
    shortDescription: 'Aplicação web oficial de alta performance desenvolvida para a banda Revanche, com agenda de shows, integração com Spotify e otimização para SEO.',
    fullProblem: 'A banda necessitava de um canal oficial de alta performance para divulgação de shows, captação de contratantes via WhatsApp formatado, download de mídia kit em alta resolução e engajamento dos fãs.',
    fullSolution: [
      '<strong>Arquitetura Moderna:</strong> Desenvolvido com Next.js 16 (App Router), React 19, TypeScript estrito e Tailwind CSS v4.',
      '<strong>SEO & Governança:</strong> Metadados estruturados Schema.org (MusicGroup) para indexação rápida no Google e OpenGraph para compartilhamento social.',
      '<strong>Recursos & Integrações:</strong> Agenda de eventos dinâmica com links oficiais de ingressos, player de mídias e fluxo de contato direto para contratantes.',
      '<strong>Entrega & Produção:</strong> Aplicação no ar e mantida em domínio próprio de alta performance (bandarevanche.com.br).'
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'SEO Schema.org', 'Produção'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/revanche-website',
      demo: 'https://bandarevanche.com.br'
    }
  },
  {
    id: 'visuchord',
    featured: true,
    title: 'VisuChord — Instrumento por IA & Visão Computacional',
    subtitle: 'Síntese Harmônica Controlada por Gestos via Webcam',
    badge: 'VISÃO COMPUTACIONAL & IA',
    type: 'React 19 · Vite 8 · Google MediaPipe Hands · Tone.js · WebGL',
    shortDescription: 'Aplicação web que transforma a webcam em um instrumento musical polifônico em tempo real, rastreando 21 pontos anatômicos das mãos para modular e tocar qualquer acorde cromático.',
    fullProblem: 'Exploração de interfaces homem-máquina inovadoras (NUI - Natural User Interfaces), sintetizando harmonia musical rica no ar sem necessidade de controladores físicos externos.',
    fullSolution: [
      '<strong>Visão Computacional na GPU:</strong> Processamento a 60 FPS com Google MediaPipe Hands Tasks Vision via WebAssembly e WebGL diretamente no navegador.',
      '<strong>Teoria Musical Cromática:</strong> Suporte integral a todas as 12 tonalidades ocidentais com modulação por altura espacial (# / ♭) e tétrades/tríades avançadas (Maior, Menor, 7ª, 7M, Meio-Diminuto m7b5, Diminuto).',
      '<strong>Motor de Áudio Tone.js:</strong> Síntese polifônica com modelagem de envelope ADSR, simulação de palhetada (strumming em cascata), Reverb espacial e Chorus analógico.',
      '<strong>Teclado Virtual & HUD Sci-Fi:</strong> Canvas dinâmico com conexões anatômicas em neon e visualizador de piano em tempo real.'
    ],
    tags: ['React 19', 'Vite 8', 'Google MediaPipe', 'Tone.js', 'Visão Computacional', 'Web Audio API', 'TypeScript', 'Tailwind CSS v4'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/visuchord',
      demo: null
    }
  }
];

export function initProjects() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('[data-project-target]');
  let lastActiveElement = null;

  if (!modalBackdrop) return;

  function openModal(projectId) {
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project) return;

    lastActiveElement = document.activeElement;

    // Populate modal content
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalTags = document.getElementById('modal-tags');
    const modalLinks = document.getElementById('modal-links');

    if (modalBadge) modalBadge.textContent = project.badge;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
    if (modalProblem) modalProblem.textContent = project.fullProblem;

    if (modalSolution) {
      modalSolution.innerHTML = project.fullSolution
        .map((item) => `<li class="modal-list-item">${item}</li>`)
        .join('');

      // If proprietary, insert architecture diagram placeholder
      if (project.isProprietary) {
        modalSolution.innerHTML += `
          <div class="architecture-diagram-box" role="img" aria-label="Espaço reservado para diagrama de arquitetura">
            <span class="diagram-icon">🏗️</span>
            <span class="diagram-title">[ Diagrama de Arquitetura — Em breve ]</span>
            <span class="diagram-desc">Diagrama visual ilustrando a integração entre PHP, Oracle PL/SQL e ERP TOTVS Protheus será disponibilizado em breve.</span>
          </div>
        `;
      }
    }

    if (modalTags) {
      modalTags.innerHTML = project.tags
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join('');
    }

    if (modalLinks) {
      let linksHTML = '';
      if (project.links.github) {
        linksHTML += `
          <a href="${project.links.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>Ver no GitHub</span>
          </a>
        `;
      }
      if (project.links.demo) {
        linksHTML += `
          <a href="${project.links.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span>Acessar Demo</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
          </a>
        `;
      }
      if (project.isProprietary) {
        linksHTML = `
          <span class="text-muted font-mono" style="font-size: 0.8rem;">🔒 Código proprietário (Nova Smar S/A)</span>
        `;
      }
      modalLinks.innerHTML = linksHTML;
    }

    // Show modal & disable background scroll
    modalBackdrop.classList.add('modal--open');
    document.body.style.overflow = 'hidden';

    // Set focus inside modal
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove('modal--open');
    document.body.style.overflow = '';

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  // Bind click to detail buttons
  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-project-target');
      openModal(targetId);
    });
  });

  // Close modal events
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('modal--open')) {
      closeModal();
    }
  });
}
