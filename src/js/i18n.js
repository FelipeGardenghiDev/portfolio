/**
 * Internationalization (i18n) Engine — 100% Comprehensive Bilingual PT-BR & EN
 * Dynamically re-renders and translates all page components and persists user choice.
 */
import { resetTypewriter } from './typewriter.js';
import { updateModalLang } from './cv-modal.js';

let currentLang = 'pt';

export function getLang() {
  return currentLang;
}

export const I18N_DATA = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      terminal: 'Terminal',
      lab: 'Laboratório',
      stack: 'Stack',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
      viewCv: 'Visualizar CV'
    },
    hero: {
      badge: 'Disponível para oportunidades',
      description: 'Desenvolvedor Backend / Full-Stack com <strong>2 anos de atuação corporativa</strong> na multinacional <strong>Nova Smar S/A</strong> (Oracle PL/SQL, TOTVS Protheus, PHP, triggers transacionais e inventário corporativo recorde em 2025) e graduando em <strong>Ciência de Dados (UNIVESP)</strong>. Experiência na construção de microsserviços distribuídos de alto rendimento (<strong>Java 21 / Spring Boot 3</strong> e <strong>C# .NET 8</strong> com Virtual Threads, Arquitetura Hexagonal, CQRS e Resiliência), esteiras analíticas de Machine Learning (Python, LightGBM, SHAP) e interfaces reativas modernas (React 19, Next.js 16, Angular 19).',
      viewProjects: 'Ver Projetos',
      viewCv: 'Visualizar CV',
      downloadCv: 'Baixar CV (PDF)',
      contact: 'Entrar em Contato'
    },
    terminal: {
      status: 'ONLINE',
      welcome: 'Felipe Gardenghi Shell [v2.4.0 - x86_64]. Digite um comando ou use os atalhos rápidos abaixo:',
      pillsLabel: 'Atalhos rápidos:'
    },
    about: {
      label: '// sobre mim',
      title: 'Trajetória e visão de negócio',
      p1: 'Sou desenvolvedor backend / full-stack e graduando em <strong>Bacharelado em Ciência de Dados</strong> pela UNIVESP (com previsão de formatura em <strong>Junho/2027</strong>). Possuo <strong>2 anos de atuação diária em tecnologia corporativa</strong> na multinacional <strong>Nova Smar S/A</strong>, onde atuo no desenvolvimento de software, automação de dados e sustentação em produção de sistemas críticos de gestão.',
      p2: 'Na Nova Smar, desenvolvi e mantenho em produção um dashboard financeiro em intranet integrado diretamente ao banco de dados do ERP TOTVS Protheus e Oracle PL/SQL, além de triggers transacionais e relatórios analíticos de estoque que viabilizaram a conclusão do <strong>inventário corporativo em tempo recorde em 2025</strong>. Minha atuação combina microsserviços modernos em <strong>Java 21 e C# .NET 8</strong> com sólidos conhecimentos em bancos relacionais e Ciência de Dados.',
      p3: 'Antes da transição definitiva para tecnologia, liderei por 5 anos uma operação própria de e-commerce, conquistando a qualificação de <strong>Mercadolíder em menos de 1 ano</strong>. Essa experiência prática de negócio me confere sensibilidade apurada para custos de infraestrutura, integridade de transações financeiras e resolução de problemas reais de produto.',
      factsTitle: '// informações chave',
      locLabel: 'Localização',
      locValue: 'Sertãozinho / Ribeirão Preto, SP (Híbrido / Remoto)',
      eduLabel: 'Formação Principal',
      eduValue: 'Ciência de Dados (UNIVESP · 06/2027)',
      roleLabel: 'Atuação Atual',
      roleValue: 'Desenvolvedor de Software (Estágio) — Nova Smar S/A (2 anos)',
      langLabel: 'Idiomas',
      langValue: 'Português (Nativo) · Inglês (B2) · Alemão (A1)',
      diffLabel: 'Diferenciais Técnicos',
      diffValue: 'Microsserviços Java 21 & .NET 8, Oracle PL/SQL & ERP, Machine Learning, Angular & React/Next.js'
    },
    projects: {
      label: '// projetos em destaque',
      title: 'Projetos de engenharia com impacto real',
      desc: 'Casos de uso corporativos em produção, microsserviços distribuídos de alto rendimento, machine learning e aplicações web de alta performance.',
      filters: {
        all: 'Todos (12)',
        backend: 'Backend & Fintech',
        fullstack: 'Full-Stack & Web',
        dataAi: 'Dados & IA',
        mobile: 'Mobile & Mídia'
      },
      btnDetails: 'Ver Detalhes',
      btnCase: 'Ver Case Completo',
      proprietary: '🔒 Proprietário (Nova Smar)',
      private: '🔒 Privado (Uso Pessoal)'
    },
    lab: {
      tag: '// LIVE SYSTEM ARCHITECTURE & DSP PLAYGROUND',
      title: 'Laboratório de Engenharia & Simulação Interativa',
      desc: 'Explore a topologia arquitetural, métricas de vazão (throughput) e execute simulações em tempo real de DSP de áudio e consistência transacional diretamente no navegador.'
    },
    stack: {
      label: '// stack técnica',
      title: 'Pilares de Engenharia & Tecnologias Centrais',
      desc: 'Conjunto de tecnologias estruturado por prioridade técnica: ecossistemas robustos de backend, bancos relacionais corporativos, esteiras de dados/IA, interfaces modernas e infraestrutura.',
      topLabel: 'Top 5 Tecnologias Centrais:',
      cat1: 'Backend & Microsserviços Corporativos',
      cat1Desc: 'Arquiteturas resilientes para alto throughput, desacoplamento transacional e microsserviços orientados a eventos.',
      cat2: 'Bancos de Dados Corporativos & Caching',
      cat2Desc: 'Integridade referencial estrita, procedures e triggers de alta performance e cache de baixa latência.',
      cat3: 'Ciência de Dados & Machine Learning',
      cat3Desc: 'Pipelines preditivos end-to-end, explicabilidade de modelos (XAI) e esteiras analíticas em produção.',
      cat4: 'Frontend Moderno & Interfaces Reativas',
      cat4Desc: 'Aplicações web ultra-rápidas com renderização a 60 FPS, Web Workers e arquitetura reativa por Signals.',
      cat5: 'DevOps, Cloud & Automação de Testes',
      cat5Desc: 'Containers imutáveis, infraestrutura como código (IaC), esteiras de CI/CD e pirâmide de testes completa.',
      cat6: 'Arquitetura de Software & ERP',
      cat6Desc: 'Domínio de regras de negócio industriais, conciliação contábil, modelagem DDD e governança por ADRs.'
    },
    experience: {
      label: '// experiência',
      title: 'Experiência profissional & trajetória',
      novaSmar: {
        role: 'Desenvolvedor de Software (Estágio)',
        company: '@ Nova Smar S/A',
        period: '12/2024 – Presente (2 anos corporativos)',
        location: '· Sertãozinho, SP',
        b1: 'Desenvolveu e mantém em produção <strong>dashboard financeiro em intranet (PHP, JavaScript, Oracle PL/SQL)</strong> integrado diretamente ao banco de dados do ERP TOTVS Protheus, substituindo controles manuais por sistema multiusuário auditável com fluxo de caixa diário/mensal e conciliação contábil em tempo real.',
        b2: 'Implementou <strong>triggers, procedures e funções PL/SQL em Oracle e MySQL</strong> para automação de regras de negócio, eliminando retrabalho operacional e garantindo integridade transacional ACID.',
        b3: 'Desenvolveu relatórios analíticos de contabilidade e controle de estoque integrados ao ERP que viabilizaram a conclusão do <strong>inventário corporativo em tempo recorde em 2025</strong>.',
        b4: 'Prestou suporte técnico N2 especializado a usuários locais e remotos, diagnóstico de falhas sistêmicas em ERP e documentação de processos operacionais.'
      },
      limiar: {
        role: 'Assistente de E-commerce / Operações',
        company: '@ Limiar Games Store',
        period: '09/2024 – 11/2024',
        location: '· Sertãozinho, SP',
        b1: 'Criou e otimizou anúncios em múltiplos marketplaces (Mercado Livre, Shopee, Magalu, Americanas, LigaMagic, LigaPokémon), alavancando a taxa de conversão.',
        b2: 'Gerenciou separação, conferência de pedidos, conferência fiscal e controle de estoque físico.'
      },
      canivete: {
        role: 'Empreendedor em E-commerce (MercadoLíder)',
        company: '@ Canivete da Roça',
        period: '09/2019 – 08/2024',
        location: '· Sertãozinho, SP',
        b1: 'Gerenciou operação própria em múltiplos canais digitais, liderando campanhas de tráfego pago, análise de dados de conversão e logística por 5 anos.',
        b2: 'Conquistou a qualificação de <strong>Mercadolíder em menos de 1 ano de operação</strong>, demonstrando rigor na gestão financeira, precificação e unit economics.'
      },
      volunteeringTitle: 'Experiências Complementares & Voluntariado',
      ifsp: {
        role: 'Professor Voluntário de História da Arte',
        org: '@ IFSP Sertãozinho',
        period: '03/2016 – 08/2016',
        desc: 'Ministrou aulas voluntárias de História da Arte e manifestações estéticas para turmas e comunidade escolar.'
      },
      picovid: {
        role: 'Analista de Dados Voluntário',
        org: '@ Projeto PICOVID',
        period: '03/2020 – 07/2020',
        desc: 'Modelagem estatística, consolidação de dados epidemiológicos públicos e elaboração de visualizações analíticas de impacto durante a pandemia.'
      },
      cati: {
        role: 'Trainee em Marketing Digital & Gestão',
        org: '@ Cati Jr. (UFSCar)',
        period: '01/2015 – 07/2015',
        desc: 'Participação ativa na empresa júnior de computação da UFSCar, atuando no planejamento estratégico de marketing digital e estruturação de processos.'
      }
    },
    education: {
      label: '// formação acadêmica',
      title: 'Formação acadêmica e certificações',
      univesp: {
        degree: 'Bacharelado em Ciência de Dados',
        institution: 'UNIVESP — Universidade Virtual do Estado de São Paulo',
        period: '07/2024 – 06/2027 (Previsão 1º Semestre)',
        location: '· Sertãozinho, SP',
        desc: 'Formação superior com foco em algoritmos, estrutura de dados, modelagem preditiva, bancos de dados relacionais e distribuídos, machine learning e esteiras de dados.',
        piTitle: 'Projetos Integradores em Destaque (UNIVESP):',
        pi1: '<strong>PI I:</strong> Plataforma Web de Vendas com front-end Lovable, backend em Python e banco PostgreSQL.',
        pi2: '<strong>PI II:</strong> Pipeline de Dados e análise estatística para visualização corporativa.',
        pi3: '<strong>PI III:</strong> Plataforma Web de Vendas Acessível, focada em padrões WCAG 2.1 AA e inclusão digital.',
        pi4: '<strong>PI IV:</strong> Plataforma Web com Machine Learning integrado para previsão de demanda e recomendação.'
      },
      priorTitle: 'Histórico Acadêmico Anterior',
      unaerp: {
        degree: 'Licenciatura Plena em Música',
        institution: 'UNAERP — Universidade de Ribeirão Preto',
        period: '01/2017 – 09/2019 (Graduação interrompida em Set/2019)',
        desc: 'Domínio de harmonia, acústica física e percepção rítmica — base para os projetos de DSP de áudio em tempo real (C++17/JUCE) e visão computacional (VisuChord).'
      },
      ufscar: {
        degree: 'Bacharelado em Ciência da Computação (Início)',
        institution: 'UFSCar — Universidade Federal de São Carlos',
        period: '01/2015 – 07/2015 (Graduação interrompida em Jul/2015)',
        desc: 'Formação de base sólida em lógica matemática, algoritmos em C e participação como Trainee na Empresa Júnior Cati Jr.'
      },
      certsTitle: 'Certificações & Cursos Técnicos',
      certSummary: 'Total de <strong>+400 horas</strong> em cursos técnicos certificados.'
    },
    contact: {
      label: '// contato',
      title: 'Vamos conversar',
      lead: 'Estou disponível para oportunidades como <strong>Desenvolvedor Backend / Full-Stack / Engenheiro de Software</strong>, microsserviços distribuídos, arquitetura de sistemas e Ciência de Dados. Vamos conectar!',
      emailCardTitle: 'Enviar Mensagem',
      emailAction: 'Enviar e-mail',
      linkedinAction: 'Conectar no LinkedIn',
      githubAction: 'Ver Repositórios'
    },
    footer: {
      copyright: '&copy; 2026 <strong>Felipe Gardenghi</strong>. Todos os direitos reservados.',
      tech: 'Construído com HTML5, CSS3 Vanilla, JavaScript ES6+ e Vite.',
      backToTop: 'Voltar ao topo'
    }
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      terminal: 'Terminal',
      lab: 'Engineering Lab',
      stack: 'Tech Stack',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      viewCv: 'View Resume'
    },
    hero: {
      badge: 'Available for immediate opportunities',
      description: 'Backend / Full-Stack Developer with <strong>2 years of enterprise engineering experience</strong> at multinational <strong>Nova Smar S/A</strong> (Oracle PL/SQL, TOTVS Protheus ERP, PHP, transactional triggers and 2025 record-time corporate inventory) & B.S. candidate in <strong>Data Science (UNIVESP)</strong>. Designing high-throughput distributed microservices (<strong>Java 21 / Spring Boot 3</strong> & <strong>C# .NET 8</strong> with Virtual Threads, Hexagonal Architecture, CQRS and Resilience), Machine Learning pipelines (Python, LightGBM, SHAP), and modern reactive interfaces (React 19, Next.js 16, Angular 19).',
      viewProjects: 'Explore Projects',
      viewCv: 'View Resume',
      downloadCv: 'Download CV (PDF)',
      contact: 'Get in Touch'
    },
    terminal: {
      status: 'ONLINE',
      welcome: 'Felipe Gardenghi Shell [v2.4.0 - x86_64]. Type a command or click any shortcut below:',
      pillsLabel: 'Quick shortcuts:'
    },
    about: {
      label: '// about me',
      title: 'Engineering trajectory & business impact',
      p1: 'I am a backend / full-stack software engineer and Bachelor of Science in <strong>Data Science</strong> candidate at UNIVESP (expected graduation in <strong>June 2027</strong>). I bring <strong>2 years of daily enterprise technology experience</strong> at multinational <strong>Nova Smar S/A</strong>, engineering software, automating transactional databases, and maintaining production-critical systems.',
      p2: 'At Nova Smar, I engineered and maintain in production an intranet financial dashboard directly integrated with TOTVS Protheus ERP and Oracle PL/SQL, alongside transactional triggers and inventory audit reports that enabled the completion of the <strong>2025 corporate inventory in record time</strong>. My engineering combines modern <strong>Java 21 and C# .NET 8</strong> microservices with deep relational database expertise and Data Science.',
      p3: 'Prior to my full-time technology career, I founded and scaled an e-commerce business for 5 years, achieving top-tier <strong>MercadoLíder qualification in under 1 year</strong>. This real-world business acumen gives me a sharp focus on infrastructure costs, transaction consistency, and solving high-impact product challenges.',
      factsTitle: '// key metrics',
      locLabel: 'Location',
      locValue: 'Sertãozinho / Ribeirão Preto, SP — Brazil (Hybrid / Remote)',
      eduLabel: 'Academic Degree',
      eduValue: 'Data Science (UNIVESP · Jun/2027)',
      roleLabel: 'Current Role',
      roleValue: 'Software Developer (Intern) — Nova Smar S/A (2 yrs)',
      langLabel: 'Languages',
      langValue: 'Portuguese (Native) · English (B2) · German (A1)',
      diffLabel: 'Core Differentiators',
      diffValue: 'Java 21 & .NET 8 Microservices, Oracle PL/SQL & ERP, Machine Learning, Angular & React/Next.js'
    },
    projects: {
      label: '// featured engineering works',
      title: 'High-Impact Engineering Solutions',
      desc: 'Enterprise production use-cases, high-throughput distributed microservices, machine learning, and high-performance web applications.',
      filters: {
        all: 'All (12)',
        backend: 'Backend & Fintech',
        fullstack: 'Full-Stack & Web',
        dataAi: 'Data & AI',
        mobile: 'Mobile & Media'
      },
      btnDetails: 'View Details',
      btnCase: 'View Full Case',
      proprietary: '🔒 Proprietary (Nova Smar)',
      private: '🔒 Private (Personal Life OS)'
    },
    lab: {
      tag: '// LIVE SYSTEM ARCHITECTURE & DSP PLAYGROUND',
      title: 'Engineering Lab & Interactive Sandbox',
      desc: 'Inspect live distributed architecture topologies, real-time throughput metrics, and test audio DSP filters directly in your browser without external servers.'
    },
    stack: {
      label: '// tech stack',
      title: 'Core Engineering Pillars & Technologies',
      desc: 'Structured by engineering priority: enterprise backend ecosystems, relational database engines, machine learning pipelines, modern web and cloud infrastructure.',
      topLabel: 'Top 5 Core Technologies:',
      cat1: 'Enterprise Backend & Microservices',
      cat1Desc: 'Resilient architectures for high throughput, transactional decoupling, and event-driven microservices.',
      cat2: 'Relational Databases & In-Memory Caching',
      cat2Desc: 'Strict ACID referential integrity, high-performance triggers, procedures, and sub-millisecond Redis caching.',
      cat3: 'Data Science & Machine Learning',
      cat3Desc: 'End-to-end predictive pipelines, Explainable AI (XAI) auditing, and production analytical serving.',
      cat4: 'Modern Frontend & Reactive Web',
      cat4Desc: 'High-speed web platforms with 60 FPS Canvas rendering, Web Workers, and Signal-based reactive state.',
      cat5: 'DevOps, Cloud & Automated Testing',
      cat5Desc: 'Immutable containers, Infrastructure as Code (AWS Terraform), CI/CD pipelines, and multi-tier test suites.',
      cat6: 'Software Architecture & Enterprise Systems',
      cat6Desc: 'Industrial domain modeling, corporate financial reconciliation, DDD invariants, and formal ADR governance.'
    },
    experience: {
      label: '// professional experience',
      title: 'Professional Experience & Trajectory',
      novaSmar: {
        role: 'Software Developer (Intern)',
        company: '@ Nova Smar S/A',
        period: '12/2024 – Present (2 enterprise yrs)',
        location: '· Sertãozinho, SP',
        b1: 'Developed and maintains in production a <strong>financial intranet dashboard (PHP, JavaScript, Oracle PL/SQL)</strong> integrated directly with TOTVS Protheus ERP, replacing manual spreadsheets with an auditable multi-user cash flow system.',
        b2: 'Engineered <strong>triggers, stored procedures, and functions in Oracle PL/SQL and MySQL</strong> to automate business workflows, eliminating operational overhead and ensuring ACID transactional consistency.',
        b3: 'Built specialized accounting and inventory auditing reports that enabled the corporate team to complete the <strong>2025 enterprise inventory in record time</strong>.',
        b4: 'Delivered N2 technical engineering support to on-site and remote corporate users, resolving business logic incidents and authoring technical documentation.'
      },
      limiar: {
        role: 'E-commerce & Operations Assistant',
        company: '@ Limiar Games Store',
        period: '09/2024 – 11/2024',
        location: '· Sertãozinho, SP',
        b1: 'Created and optimized listings across multiple marketplaces (Mercado Livre, Shopee, Magalu, Americanas, LigaMagic), increasing overall conversion rates.',
        b2: 'Managed order picking, packing, fiscal verification, and physical warehouse inventory reconciliation.'
      },
      canivete: {
        role: 'E-commerce Entrepreneur (MercadoLíder)',
        company: '@ Canivete da Roça',
        period: '09/2019 – 08/2024',
        location: '· Sertãozinho, SP',
        b1: 'Founded and operated an independent multi-channel e-commerce business, leading digital marketing campaigns, conversion analytics, and logistics for 5 years.',
        b2: 'Achieved top-tier <strong>MercadoLíder qualification in under 1 year</strong>, maintaining unit economics, cash flow health, and high customer satisfaction.'
      },
      volunteeringTitle: 'Complementary Experiences & Volunteering',
      ifsp: {
        role: 'Volunteer Art History Instructor',
        org: '@ IFSP Sertãozinho',
        period: '03/2016 – 08/2016',
        desc: 'Conducted volunteer Art History and aesthetic theory lectures for academic classes and the local community.'
      },
      picovid: {
        role: 'Volunteer Data Analyst',
        org: '@ PICOVID Initiative',
        period: '03/2020 – 07/2020',
        desc: 'Statistical modeling, consolidation of public epidemiological datasets, and analytical visualizations during the COVID-19 pandemic.'
      },
      cati: {
        role: 'Digital Marketing & Management Trainee',
        org: '@ Cati Jr. (UFSCar)',
        period: '01/2015 – 07/2015',
        desc: 'Active member at UFSCar’s junior enterprise in Computer Science, participating in digital marketing strategy and project workflow design.'
      }
    },
    education: {
      label: '// academic degrees',
      title: 'Academic Degrees & Certifications',
      univesp: {
        degree: 'Bachelor of Science in Data Science',
        institution: 'UNIVESP — São Paulo State Virtual University',
        period: '07/2024 – 06/2027 (Expected 1st Sem.)',
        location: '· Sertãozinho, SP',
        desc: 'Higher education degree focused on algorithms, data structures, predictive modeling, relational & distributed databases, machine learning, and data pipelines.',
        piTitle: 'Featured Capstone Engineering Projects (UNIVESP):',
        pi1: '<strong>PI I:</strong> Web Sales Platform built with Lovable front-end, Python backend, and PostgreSQL database.',
        pi2: '<strong>PI II:</strong> Data Pipeline & statistical visualization for corporate operations.',
        pi3: '<strong>PI III:</strong> Accessible Web Sales Platform complying with WCAG 2.1 AA accessibility standards.',
        pi4: '<strong>PI IV:</strong> Web Sales Platform integrating Machine Learning for demand forecasting and smart recommendations.'
      },
      priorTitle: 'Prior Academic Background',
      unaerp: {
        degree: 'B.A. in Music Education',
        institution: 'UNAERP — University of Ribeirão Preto',
        period: '01/2017 – 09/2019 (Interrupted 09/2019)',
        desc: 'Rigorous foundation in acoustic physics, harmonic theory, and auditory perception — foundational for real-time DSP audio algorithms (C++17) and VisuChord.'
      },
      ufscar: {
        degree: 'B.S. in Computer Science (Initial Studies)',
        institution: 'UFSCar — Federal University of São Carlos',
        period: '01/2015 – 07/2015 (Interrupted 07/2015)',
        desc: 'Rigorous foundation in discrete mathematics, algorithms in C, and trainee at Cati Jr. Software Enterprise.'
      },
      certsTitle: 'Technical Certifications & Training',
      certSummary: 'Total of <strong>+400 hours</strong> in certified technical engineering courses.'
    },
    contact: {
      label: '// get in touch',
      title: "Let's Connect",
      lead: 'Available for immediate opportunities as a <strong>Backend / Full-Stack Software Engineer</strong>, distributed systems, architecture and Data Science. Let’s build something remarkable together!',
      emailCardTitle: 'Send a Message',
      emailAction: 'Send Email',
      linkedinAction: 'Connect on LinkedIn',
      githubAction: 'View Repositories'
    },
    footer: {
      copyright: '&copy; 2026 <strong>Felipe Gardenghi</strong>. All rights reserved.',
      tech: 'Engineered with Vanilla HTML5, CSS3, ES6+ JavaScript, and Vite.',
      backToTop: 'Back to top'
    }
  }
};

export function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('portfolio-lang', lang);
  } catch {}

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const t = I18N_DATA[lang];

  // 1. Nav Links
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 6) {
    navLinks[0].textContent = t.nav.about;
    navLinks[1].textContent = t.nav.projects;
    navLinks[2].textContent = t.nav.stack;
    navLinks[3].textContent = t.nav.experience;
    navLinks[4].textContent = t.nav.education;
    navLinks[5].textContent = t.nav.contact;
  }

  // 2. Hero
  const heroBadge = document.querySelector('.hero-status-badge span:last-child');
  if (heroBadge) heroBadge.textContent = t.hero.badge;

  const heroDesc = document.querySelector('.hero-description');
  if (heroDesc) heroDesc.innerHTML = t.hero.description;

  const btnViewProj = document.querySelector('.hero-actions .btn-primary span');
  if (btnViewProj) btnViewProj.textContent = t.hero.viewProjects;

  const btnViewCv = document.querySelector('[data-open-cv] span');
  if (btnViewCv) btnViewCv.textContent = t.hero.viewCv;

  const btnDownloadCv = document.querySelector('[data-download-cv] span');
  if (btnDownloadCv) btnDownloadCv.textContent = t.hero.downloadCv;

  const btnContactHero = document.querySelector('.hero-actions a[href="#contato"]');
  if (btnContactHero) btnContactHero.textContent = t.hero.contact;

  // 3. Terminal
  const termStatus = document.getElementById('terminal-status-tag');
  if (termStatus) termStatus.textContent = t.terminal.status;

  const termWelcome = document.getElementById('terminal-welcome-text');
  if (termWelcome) termWelcome.textContent = t.terminal.welcome;

  const termPillsLabel = document.getElementById('terminal-pills-label');
  if (termPillsLabel) termPillsLabel.textContent = t.terminal.pillsLabel;

  // 4. About Section
  const aboutLabel = document.querySelector('#sobre .section-label');
  if (aboutLabel) aboutLabel.textContent = t.about.label;

  const aboutTitle = document.querySelector('#sobre .section-title');
  if (aboutTitle) aboutTitle.textContent = t.about.title;

  const aboutPs = document.querySelectorAll('.about-content p');
  if (aboutPs.length >= 3) {
    aboutPs[0].innerHTML = t.about.p1;
    aboutPs[1].innerHTML = t.about.p2;
    aboutPs[2].innerHTML = t.about.p3;
  }

  const factCardTitle = document.querySelector('.fact-card-title');
  if (factCardTitle) factCardTitle.textContent = t.about.factsTitle;

  const factItems = document.querySelectorAll('.fact-item');
  if (factItems.length >= 5) {
    factItems[0].querySelector('.fact-label').textContent = t.about.locLabel;
    factItems[0].querySelector('.fact-value').textContent = t.about.locValue;

    factItems[1].querySelector('.fact-label').textContent = t.about.eduLabel;
    factItems[1].querySelector('.fact-value').textContent = t.about.eduValue;

    factItems[2].querySelector('.fact-label').textContent = t.about.roleLabel;
    factItems[2].querySelector('.fact-value').textContent = t.about.roleValue;

    factItems[3].querySelector('.fact-label').textContent = t.about.langLabel;
    factItems[3].querySelector('.fact-value').textContent = t.about.langValue;

    factItems[4].querySelector('.fact-label').textContent = t.about.diffLabel;
    factItems[4].querySelector('.fact-value').textContent = t.about.diffValue;
  }

  // 5. Projects Section
  const projLabel = document.querySelector('#projetos .section-label');
  if (projLabel) projLabel.textContent = t.projects.label;

  const projTitle = document.querySelector('#projetos .section-title');
  if (projTitle) projTitle.textContent = t.projects.title;

  const projDesc = document.querySelector('#projetos .section-description');
  if (projDesc) projDesc.textContent = t.projects.desc;

  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length >= 5) {
    filterBtns[0].textContent = t.projects.filters.all;
    filterBtns[1].textContent = t.projects.filters.backend;
    filterBtns[2].textContent = t.projects.filters.fullstack;
    filterBtns[3].textContent = t.projects.filters.dataAi;
    filterBtns[4].textContent = t.projects.filters.mobile;
  }

  // 6. Lab Section
  const labTag = document.querySelector('.lab-section .section-tag');
  if (labTag) labTag.textContent = t.lab.tag;

  const labTitle = document.querySelector('.lab-section .section-title');
  if (labTitle) labTitle.textContent = t.lab.title;

  const labDesc = document.querySelector('.lab-section .section-description');
  if (labDesc) labDesc.textContent = t.lab.desc;

  // 7. Stack Section
  const stackLabel = document.querySelector('#stack .section-label');
  if (stackLabel) stackLabel.textContent = t.stack.label;

  const stackTitle = document.querySelector('#stack .section-title');
  if (stackTitle) stackTitle.textContent = t.stack.title;

  const stackDesc = document.querySelector('#stack .section-description');
  if (stackDesc) stackDesc.textContent = t.stack.desc;

  const stackTopLabel = document.getElementById('stack-top-label');
  if (stackTopLabel) stackTopLabel.textContent = t.stack.topLabel;

  const stackTitles = document.querySelectorAll('.stack-card-title');
  if (stackTitles.length >= 6) {
    stackTitles[0].textContent = t.stack.cat1;
    stackTitles[1].textContent = t.stack.cat2;
    stackTitles[2].textContent = t.stack.cat3;
    stackTitles[3].textContent = t.stack.cat4;
    stackTitles[4].textContent = t.stack.cat5;
    stackTitles[5].textContent = t.stack.cat6;
  }

  const stackCardDescs = document.querySelectorAll('.stack-card-desc');
  if (stackCardDescs.length >= 6) {
    stackCardDescs[0].textContent = t.stack.cat1Desc;
    stackCardDescs[1].textContent = t.stack.cat2Desc;
    stackCardDescs[2].textContent = t.stack.cat3Desc;
    stackCardDescs[3].textContent = t.stack.cat4Desc;
    stackCardDescs[4].textContent = t.stack.cat5Desc;
    stackCardDescs[5].textContent = t.stack.cat6Desc;
  }

  // 8. Experience Section
  const expLabel = document.querySelector('#experiencia .section-label');
  if (expLabel) expLabel.textContent = t.experience.label;

  const expTitle = document.querySelector('#experiencia .section-title');
  if (expTitle) expTitle.textContent = t.experience.title;

  const expItems = document.querySelectorAll('.timeline-item');
  if (expItems.length >= 3) {
    // Nova Smar
    expItems[0].querySelector('.experience-role').textContent = t.experience.novaSmar.role;
    expItems[0].querySelector('.experience-period').textContent = t.experience.novaSmar.period;
    expItems[0].querySelector('.experience-location').textContent = t.experience.novaSmar.location;
    const bullets0 = expItems[0].querySelectorAll('.experience-bullet');
    if (bullets0.length >= 4) {
      bullets0[0].innerHTML = t.experience.novaSmar.b1;
      bullets0[1].innerHTML = t.experience.novaSmar.b2;
      bullets0[2].innerHTML = t.experience.novaSmar.b3;
      bullets0[3].innerHTML = t.experience.novaSmar.b4;
    }

    // Limiar
    expItems[1].querySelector('.experience-role').textContent = t.experience.limiar.role;
    expItems[1].querySelector('.experience-period').textContent = t.experience.limiar.period;
    expItems[1].querySelector('.experience-location').textContent = t.experience.limiar.location;
    const bullets1 = expItems[1].querySelectorAll('.experience-bullet');
    if (bullets1.length >= 2) {
      bullets1[0].innerHTML = t.experience.limiar.b1;
      bullets1[1].innerHTML = t.experience.limiar.b2;
    }

    // Canivete
    expItems[2].querySelector('.experience-role').textContent = t.experience.canivete.role;
    expItems[2].querySelector('.experience-period').textContent = t.experience.canivete.period;
    expItems[2].querySelector('.experience-location').textContent = t.experience.canivete.location;
    const bullets2 = expItems[2].querySelectorAll('.experience-bullet');
    if (bullets2.length >= 2) {
      bullets2[0].innerHTML = t.experience.canivete.b1;
      bullets2[1].innerHTML = t.experience.canivete.b2;
    }
  }

  // Volunteering block
  const volTitle = document.getElementById('volunteering-title');
  if (volTitle) volTitle.textContent = t.experience.volunteeringTitle;

  const ifspRole = document.getElementById('ifsp-role');
  if (ifspRole) ifspRole.textContent = t.experience.ifsp.role;
  const ifspDesc = document.getElementById('ifsp-desc');
  if (ifspDesc) ifspDesc.textContent = t.experience.ifsp.desc;

  const picovidRole = document.getElementById('picovid-role');
  if (picovidRole) picovidRole.textContent = t.experience.picovid.role;
  const picovidDesc = document.getElementById('picovid-desc');
  if (picovidDesc) picovidDesc.textContent = t.experience.picovid.desc;

  const catiRole = document.getElementById('cati-role');
  if (catiRole) catiRole.textContent = t.experience.cati.role;
  const catiDesc = document.getElementById('cati-desc');
  if (catiDesc) catiDesc.textContent = t.experience.cati.desc;

  // 9. Education Section
  const eduLabel = document.querySelector('#formacao .section-label');
  if (eduLabel) eduLabel.textContent = t.education.label;

  const eduTitle = document.querySelector('#formacao .section-title');
  if (eduTitle) eduTitle.textContent = t.education.title;

  const univespDegree = document.querySelector('.academic-degree');
  if (univespDegree) univespDegree.textContent = t.education.univesp.degree;

  const univespInst = document.querySelector('.academic-institution');
  if (univespInst) univespInst.textContent = t.education.univesp.institution;

  const univespPeriod = document.querySelector('.academic-meta .experience-period');
  if (univespPeriod) univespPeriod.textContent = t.education.univesp.period;

  const univespDesc = document.querySelector('.academic-description');
  if (univespDesc) univespDesc.textContent = t.education.univesp.desc;

  const piTitle = document.getElementById('pi-container-title');
  if (piTitle) piTitle.textContent = t.education.univesp.piTitle;

  const pi1 = document.getElementById('pi-1-desc');
  if (pi1) pi1.innerHTML = t.education.univesp.pi1;
  const pi2 = document.getElementById('pi-2-desc');
  if (pi2) pi2.innerHTML = t.education.univesp.pi2;
  const pi3 = document.getElementById('pi-3-desc');
  if (pi3) pi3.innerHTML = t.education.univesp.pi3;
  const pi4 = document.getElementById('pi-4-desc');
  if (pi4) pi4.innerHTML = t.education.univesp.pi4;

  const priorTitle = document.getElementById('prior-degrees-title');
  if (priorTitle) priorTitle.textContent = t.education.priorTitle;

  const unaerpDegree = document.getElementById('unaerp-degree');
  if (unaerpDegree) unaerpDegree.textContent = t.education.unaerp.degree;
  const unaerpInst = document.getElementById('unaerp-inst');
  if (unaerpInst) unaerpInst.textContent = t.education.unaerp.institution;
  const unaerpPeriod = document.getElementById('unaerp-period');
  if (unaerpPeriod) unaerpPeriod.textContent = t.education.unaerp.period;
  const unaerpDesc = document.getElementById('unaerp-desc');
  if (unaerpDesc) unaerpDesc.textContent = t.education.unaerp.desc;

  const ufscarDegree = document.getElementById('ufscar-degree');
  if (ufscarDegree) ufscarDegree.textContent = t.education.ufscar.degree;
  const ufscarInst = document.getElementById('ufscar-inst');
  if (ufscarInst) ufscarInst.textContent = t.education.ufscar.institution;
  const ufscarPeriod = document.getElementById('ufscar-period');
  if (ufscarPeriod) ufscarPeriod.textContent = t.education.ufscar.period;
  const ufscarDesc = document.getElementById('ufscar-desc');
  if (ufscarDesc) ufscarDesc.textContent = t.education.ufscar.desc;

  const certTitle = document.querySelector('.cert-title-group .section-title');
  if (certTitle) certTitle.textContent = t.education.certsTitle;

  const certSummary = document.querySelector('.cert-total-summary span:last-child');
  if (certSummary) certSummary.innerHTML = t.education.certSummary;

  // 10. Contact Section
  const contactLabel = document.querySelector('#contato .section-label');
  if (contactLabel) contactLabel.textContent = t.contact.label;

  const contactTitle = document.querySelector('#contato .section-title');
  if (contactTitle) contactTitle.textContent = t.contact.title;

  const contactLead = document.querySelector('.contact-lead');
  if (contactLead) contactLead.innerHTML = t.contact.lead;

  const contactActions = document.querySelectorAll('.contact-card-action span');
  if (contactActions.length >= 3) {
    contactActions[0].textContent = t.contact.emailAction;
    contactActions[1].textContent = t.contact.linkedinAction;
    contactActions[2].textContent = t.contact.githubAction;
  }

  // 11. Footer
  const footerCopy = document.querySelector('.footer-copyright');
  if (footerCopy) footerCopy.innerHTML = t.footer.copyright;

  const footerTech = document.querySelector('.footer-tech');
  if (footerTech) footerTech.textContent = t.footer.tech;

  const backToTop = document.querySelector('.back-to-top span');
  if (backToTop) backToTop.textContent = t.footer.backToTop;

  // 12. Switch active button style
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

  // 13. Sync modal and typewriter
  updateModalLang();
  resetTypewriter();
}

export function initI18n() {
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') {
      currentLang = saved;
    } else {
      const userLang = navigator.language || navigator.userLanguage || '';
      if (!userLang.startsWith('pt')) {
        currentLang = 'en';
      }
    }
  } catch {}

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  setLanguage(currentLang);
}
