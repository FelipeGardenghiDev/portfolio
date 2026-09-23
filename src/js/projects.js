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
    id: 'fraud-detection-api',
    featured: true,
    title: 'Fraud Detection & Risk Engine API',
    subtitle: 'Prevenção de Fraudes, DDD & Arquitetura Orientada a Eventos',
    badge: 'FINTECH / MICROSSERVIÇOS & IaC',
    type: 'Java 21 · Spring Boot 3 · AWS Terraform · DDD · Outbox Pattern · RabbitMQ · Redis · JaCoCo',
    shortDescription: 'API corporativa de alta performance para análise de risco em tempo real em transações PIX, Cartão e Boletos. Arquitetura Hexagonal com DDD, Transactional Outbox Pattern, mensageria com RabbitMQ, Redis Sliding Window, cobertura de testes JaCoCo (>80%) e IaC modular em AWS Terraform.',
    fullProblem: 'Instituições financeiras e fintechs enfrentam perdas substanciais por fraudes transacionais, ataques de força bruta/burst e sequestros relâmpagos (golpes do PIX noturno), necessitando de análise com latência inferior a 100ms, integridade transacional sem perda de eventos e auditoria completa.',
    fullSolution: [
      '<strong>Domain-Driven Design (DDD) & Specification:</strong> Value Objects imutáveis (Cpf com validação de dígitos e mascaramento LGPD, RiskScore, TransactionAmount) e Specification Pattern combinando regras de fraude sem acoplamento.',
      '<strong>Transactional Outbox Pattern:</strong> Publicação garantida de eventos no RabbitMQ com persistência transacional ACID prévia no PostgreSQL e scheduler de polling com deduplicação, prevenindo dual-write problem.',
      '<strong>Velocity Burst Check com Redis:</strong> Monitoramento de rajadas de tentativas consecutivas com Redis Sliding Window Cache e fallback resiliente.',
      '<strong>Infraestrutura como Código (AWS Terraform):</strong> Provisionamento 100% automatizado e modular de VPC, Security Groups, RDS PostgreSQL, ElastiCache Redis, Amazon MQ e ECS Fargate.',
      '<strong>Qualidade & Cobertura JaCoCo:</strong> 32 testes automatizados (unitários e integração) com validação de cobertura mínima no CI/CD via GitHub Actions e documentação interativa Swagger OpenAPI 3.'
    ],
    tags: ['Java 21', 'Spring Boot 3', 'Terraform AWS', 'Outbox Pattern', 'DDD / Clean Arch', 'RabbitMQ', 'Redis', 'JaCoCo (>80%)', 'Docker', 'OpenAPI 3', 'PostgreSQL'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/fraud-detection-api',
      demo: null
    }
  },
  {
    id: 'agrofinance-dashboard',
    featured: true,
    title: 'AgroFinance RWA Banking Dashboard',
    subtitle: 'Internet Banking & Tokenização de Commodities',
    badge: 'DESTAQUE / FINTECH RWA · 123 TESTES',
    type: 'Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Vitest & Playwright (123 Tests)',
    shortDescription: 'Plataforma bancária digital e custódia de Real World Assets (RWA) para o agronegócio, com liquidação de PIX em tempo real e suíte robusta com 123 testes automatizados (98 Vitest + 25 Playwright E2E com 85.8% de cobertura) e ADRs arquiteturais documentadas.',
    fullProblem: 'Necessidade de antecipação de receitas e crédito rural seguro para produtores agrícolas através de custódia e negociação de safras tokenizadas com governança, alta testabilidade e transparência regulatória.',
    fullSolution: [
      '<strong>Arquitetura Moderna & ADRs:</strong> Desenvolvido com Next.js 16 (App Router), React 19, TypeScript estrito, Tailwind CSS v4 e decisões de engenharia registradas em Architecture Decision Records (ADRs).',
      '<strong>Reatividade & Persistência:</strong> Gerenciamento de estado global com Zustand e persistência em localStorage, refletindo débitos de saldo, cotações de commodities e liquidações em tempo real.',
      '<strong>Validação Tipada com Zod:</strong> Schemas dinâmicos que validam fundos disponíveis em conta e barram operações inválidas com mensagens acessíveis.',
      '<strong>Qualidade & 123 Testes Automatizados:</strong> Suíte completa com 98 testes unitários/integração no Vitest e 25 testes End-to-End no Playwright (85.8% de cobertura de código), rodando no GitHub Actions com hospedagem de alta disponibilidade na Vercel ($0 custo).'
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Vitest (98 tests)', 'Playwright (25 E2E)', 'Zustand', 'Zod', 'ADRs', 'RWA / Agro', 'CI/CD'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/agrofinance-dashboard',
      demo: 'https://agrofinance-dashboard-dev.vercel.app/dashboard'
    }
  },
  {
    id: 'imoveis-pricing-ml',
    featured: false,
    title: 'Imóveis Pricing ML — Inteligência Imobiliária',
    subtitle: 'Precificação Preditiva & Radar de Oportunidades',
    badge: 'CIÊNCIA DE DADOS & MLOps',
    type: 'Python 3.11 · LightGBM · SHAP · MLOps Pipeline · Scikit-Learn · Streamlit · Pandas',
    shortDescription: 'Projeto End-to-End de Ciência de Dados e Machine Learning para a Região Metropolitana de Ribeirão Preto/SP, com web scraping, modelo LightGBM (R² = 0.835), Radar de Oportunidades e arquitetura MLOps modular.',
    fullProblem: 'Forte heterogeneidade de preços e assimetria de informações no mercado imobiliário regional, dificultando a precificação correta de venda e a detecção de imóveis subprecificados (arbitragem).',
    fullSolution: [
      '<strong>Pipeline End-to-End & MLOps:</strong> Web scraping automatizado de +1.100 anúncios reais, limpeza estruturada, validação de schema de dados e engenharia de atributos espaciais.',
      '<strong>Modelagem Preditiva com LightGBM:</strong> Algoritmo de gradient boosting com R² = 0.835 e redução de mais de 61% no erro absoluto médio frente à mediana regional.',
      '<strong>Explicabilidade com SHAP (XAI):</strong> Auditoria transparente do impacto de cada feature em Reais (área privativa, banheiros, condomínio, distância ao polo econômico).',
      '<strong>Radar de Oportunidades & Arquitetura Limpa:</strong> Dashboard interativo em Streamlit com simulador preditivo de valor, detecção visual de barganhas e roadmap de inferência via FastAPI / BentoML com CI reproduzível.'
    ],
    tags: ['Python 3.11', 'LightGBM', 'SHAP (XAI)', 'MLOps', 'Scikit-Learn', 'Streamlit', 'Pandas', 'Web Scraping', 'Ciência de Dados'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/imoveis-pricing-ml',
      demo: null
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
    id: 'rpg-companion-android',
    featured: false,
    title: 'Grimório RPG — Companion Android',
    subtitle: 'Assistente Nativo Offline-First com P2P',
    badge: 'MOBILE NATIVO / CLEAN ARCH',
    type: 'Kotlin 2.0 · Jetpack Compose · Material 3 · Room · Nearby Connections',
    shortDescription: 'Assistente nativo Android para RPG de mesa com foco em privacidade total, arquitetura Clean + MVVM, 100% offline-first e comunicação P2P sem servidores.',
    fullProblem: 'Partidas presenciais de RPG em locais sem conexão estável com a internet, em que apps convencionais sofrem com lentidão, consumo excessivo de bateria ou falta de sincronização em tempo real entre mestre e jogadores.',
    fullSolution: [
      '<strong>Arquitetura Moderna & Jetpack Compose:</strong> Estruturado em Clean Architecture + MVVM com Kotlin 2.0, Material 3 e Unidirectional Data Flow (UDF) via StateFlow.',
      '<strong>Parser Léxico Matemático:</strong> Interpretador em Kotlin puro para fórmulas complexas de dados (vantagens, desvantagens, dados explosivos e descarte de menores).',
      '<strong>Mesa Local P2P sem Servidor:</strong> Sincronização direta de rolagens entre mestre e jogadores via Google Nearby Connections (Bluetooth / Wi-Fi Direct) com custo zero de nuvem.',
      '<strong>Resiliência & QR Code:</strong> Persistência local em Room SQLite e exportação/importação instantânea de fichas e encontros via CameraX e ZXing.'
    ],
    tags: ['Kotlin 2.0', 'Jetpack Compose', 'Material 3', 'Clean Architecture', 'Room SQLite', 'Google Nearby P2P', 'CameraX', 'Android Nativo'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/rpg-companion-android',
      demo: null
    }
  },
  {
    id: 'second-brain',
    featured: false,
    title: 'Segundo Cérebro (Life OS)',
    subtitle: 'Assistente Multimodal via WhatsApp & Painel Web',
    badge: 'IA GENERATIVA / FASTAPI',
    type: 'Python · FastAPI · Google Gemini 2.0 · Supabase PostgreSQL · FullCalendar',
    shortDescription: 'Assistente inteligente integrado com WhatsApp e Painel Web para gestão pessoal, financeira e estúdio musical, unindo IA generativa com Google Gemini 2.0 e Supabase.',
    fullProblem: 'Dispersão de diários de aula de música, divisão de cachês da banda, finanças diárias e calendário em múltiplos aplicativos sem automação ou inteligência de contexto.',
    fullSolution: [
      '<strong>IA Multimodal com Gemini 2.0:</strong> Interpretação de mensagens de voz e texto no WhatsApp para categorização automática de diários de aula, tarefas e gastos.',
      '<strong>Rateio Inteligente de Cachês:</strong> Cálculo instantâneo deduzindo custos de transporte e alimentação, formatando mensagem de prestação de contas para grupos.',
      '<strong>Integração de Calendário:</strong> Painel web com FullCalendar e sincronização iCal (.ics) direta com Google Calendar e Samsung Calendar.',
      '<strong>Arquitetura Custo Zero:</strong> Projetado em Python com FastAPI, Supabase PostgreSQL e contêineres Docker para execução resiliente e econômica.'
    ],
    tags: ['Python', 'FastAPI', 'Google Gemini 2.0', 'Supabase', 'PostgreSQL', 'Docker', 'FullCalendar', 'Automação'],
    isProprietary: false,
    isPrivate: true,
    links: {
      github: null,
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
      if (project.isPrivate) {
        linksHTML = `
          <span class="text-muted font-mono" style="font-size: 0.8rem;">🔒 Repositório Privado (Life OS Pessoal)</span>
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

  // Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterButtons.forEach((b) => {
        b.classList.remove('filter-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('filter-btn--active');
      btn.setAttribute('aria-selected', 'true');

      projectCards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
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
