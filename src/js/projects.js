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
    subtitle: 'Arquitetura Hexagonal, 7-Rule Engine & Resiliência Distribuída (9 ADRs)',
    badge: 'FINTECH / ARQUITETURA HEXAGONAL & IaC',
    type: 'Java 21 · Spring Boot 3 · Arquitetura Hexagonal · Virtual Threads (Loom) · Resilience4j · Flyway · Testcontainers · AWS Terraform · Redis Lua · Outbox Pattern · RabbitMQ · Prometheus · JaCoCo',
    shortDescription: 'Plataforma corporativa de alta performance para análise preditiva de risco em tempo real (<10ms) sob Arquitetura Hexagonal e 9 ADRs formais. Java 21 Virtual Threads, esteira determinística com 7 regras de produção (incluindo Impossible Travel via Haversine, Z-Score comportamental e Smurfing/Structuring), Redis ZSET com script Lua atômico protegido por Resilience4j Circuit Breaker, Flyway SQL Migrations, Transactional Outbox Pattern, Testcontainers para paridade com PostgreSQL, telemetria Micrometer/Prometheus, IaC AWS Terraform e 46+ testes automatizados (100% passing).',
    fullProblem: 'Instituições financeiras e fintechs enfrentam perdas vultosas por fraudes transacionais automatizadas, account takeover (deslocamentos impossíveis), transações fracionadas (smurfing/structuring) e rajadas concorrentes em janela curta, exigindo decisões sub-10ms, consistência transacional ACID estrita e observabilidade em tempo real.',
    fullSolution: [
      '<strong>Arquitetura Hexagonal & DDD Estrito:</strong> Inbound Ports (Use Cases) e Outbound Ports desacoplando completamente o domínio de frameworks, com Value Objects ricos (Cpf com validação de dígitos e mascaramento LGPD, RiskScore, Coordinates) e 9 ADRs formais.',
      '<strong>Esteira Determinística de 7 Regras:</strong> Blacklist Restritiva, Detecção de Alto Valor, Janela Noturna PIX, Burst de Velocidade, Deslocamento Impossível (Impossible Travel via Haversine > 800 km/h), Anomalia Comportamental via Z-Score estatístico (3 desvios padrão) e Smurfing/Structuring Detection.',
      '<strong>Sliding Window Atômico via Redis ZSET & Resilience4j:</strong> Janela deslizante em Lua eliminando border bursts sob concorrência maciça, protegida por Circuit Breaker (Resilience4j) com fallback graceful em caso de degradação do cluster.',
      '<strong>Java 21 Virtual Threads & Transactional Outbox:</strong> I/O não-bloqueante via Project Loom para alto throughput e entrega garantida de alertas (At-Least-Once) via Outbox ACID com worker de retry resiliente.',
      '<strong>Observabilidade, IaC, Migrações & Testcontainers:</strong> Telemetria para Prometheus via Micrometer, Health Indicator customizado no Actuator, migrações versionadas com Flyway (ddl-auto: validate), IaC modular via Terraform na AWS, Testcontainers para testes de integração no PostgreSQL e 46+ testes automatizados (100% passing) com JaCoCo.'
    ],
    tags: ['Java 21', 'Spring Boot 3', 'Arquitetura Hexagonal', 'Virtual Threads', 'Resilience4j', 'Flyway', 'Testcontainers', 'Terraform AWS', 'Redis Lua', 'Outbox Pattern', 'RabbitMQ', 'Prometheus', 'JaCoCo (46+ testes)', 'Docker', 'OpenAPI 3', 'PostgreSQL'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/fraud-detection-api',
      demo: null
    }
  },
  {
    id: 'order-processing-api',
    featured: true,
    title: 'Order Processing API (.NET 8 & CQRS)',
    subtitle: 'Clean Architecture, CQRS Híbrido, Channels & Fraud Engine (5 ADRs)',
    badge: '.NET 8 / CLEAN ARCHITECTURE & CQRS',
    type: 'C# 12 · .NET 8 · Clean Arch · CQRS (EF Core + Dapper) · Channels · Fraud Engine · 5 ADRs · xUnit (28 tests)',
    shortDescription: 'API corporativa em .NET 8 (C# 12) sob Clean Architecture, CQRS híbrido (EF Core + Dapper) e 5 ADRs formais. Enfileiramento assíncrono thread-safe via System.Threading.Channels, Background Worker com integração distribuída ao motor antifraude em Java 21 (fraud-detection-api) com degradação graciosa e 28 testes automatizados no xUnit.',
    fullProblem: 'Sistemas de e-commerce e processamento de pedidos enfrentam gargalos de concorrência e alto tempo de resposta quando operações analíticas e de leitura competem com transações críticas de escrita no mesmo modelo de dados ORM.',
    fullSolution: [
      '<strong>Clean Architecture & DDD:</strong> Camadas estritamente desacopladas (Domain, Application, Infrastructure, Api) com encapsulamento de invariantes de negócio na entidade Order via backing fields.',
      '<strong>Abordagem Híbrida CQRS (EF Core + Dapper):</strong> Entity Framework Core gerenciando transações atômicas de escrita e Dapper executando queries brutas otimizadas com multi-mapping e agregações sem tracking overhead.',
      '<strong>Processamento Assíncrono com BackgroundService:</strong> Criação de pedidos com resposta imediata HTTP 201 Created e enfileiramento thread-safe desacoplado via System.Threading.Channels consumido por um Worker.',
      '<strong>Integração Antifraude & 28 Testes no xUnit:</strong> Validação em tempo real integrada ao motor em Java 21 (fraud-detection-api) com política de fallback resiliente, 5 Architecture Decision Records (ADRs) documentadas e 28 testes automatizados com xUnit, FluentAssertions e NSubstitute.'
    ],
    tags: ['C# 12', '.NET 8', 'ASP.NET Core', 'EF Core', 'Dapper', 'Clean Architecture', 'CQRS', 'Channels', 'BackgroundService', 'Fraud Engine', '5 ADRs', 'xUnit (28 tests)', 'NSubstitute'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/order-processing-api',
      demo: null
    }
  },
  {
    id: 'finrisk-operations-hub',
    featured: true,
    title: 'FinRisk Operations Hub',
    subtitle: 'Cockpit de Risco, Angular 19 Signals & Web Workers (5 ADRs)',
    badge: 'ANGULAR 19 / SIGNALS & WEB WORKERS',
    type: 'Angular 19 · TypeScript · Signals · Web Workers (60 FPS) · Vitest (24 tests) · Docker Nginx · 5 ADRs · REST APIs',
    shortDescription: 'Cockpit corporativo e portal unificado de gestão e operações integrando os microsserviços Order Processing API (.NET 8) e Fraud Detection Engine (Java 21). Arquitetura reativa baseada em Signals, simulação paralela de risco Monte Carlo via Web Worker a 60 FPS (zero jank na UI thread), 5 ADRs formais, Docker multi-stage com Nginx Alpine e suíte de 24 testes automatizados no Vitest.',
    fullProblem: 'Em operações financeiras de alta frequência, operadores de risco e compliance precisam monitorar a esteira de pedidos e fraudes em tempo real sem travar a interface do navegador durante simulações analíticas pesadas de projeção estatística.',
    fullSolution: [
      '<strong>Reatividade Fina com Angular Signals:</strong> Arquitetura 100% Standalone Components e Signals (signal, computed, effect), eliminando o overhead de dirty-checking global e permitindo re-render cirúrgico nos nós do DOM.',
      '<strong>Multi-Threading com Web Workers a 60 FPS:</strong> Desacoplamento da simulação estatística de estresse Monte Carlo em thread secundária do sistema operacional, garantindo renderização fluida a 60 FPS contínuos mesmo sob lotes de 10.000 cenários.',
      '<strong>Estratégia de Duplo-Modo Resiliente:</strong> Switch operacional entre consumo das APIs reais (.NET 8 na porta 5000 e Java 21 na porta 8080) e pipeline determinístico em memória com fallback automático e zero indisponibilidade em demos.',
      '<strong>Containerização & Cache Nginx SPA:</strong> Dockerfile multi-stage com Nginx Alpine, regras de cache com immutable nos chunks versionados e fallback de rotas SPA.',
      '<strong>Qualidade & 5 ADRs Formais:</strong> Documentação arquitetural formal com 5 ADRs, suíte com 24 testes unitários no Vitest com Angular TestBed e pipeline de CI/CD automatizado no GitHub Actions.'
    ],
    tags: ['Angular 19', 'TypeScript', 'Signals', 'Web Workers (60 FPS)', 'Vitest (24 tests)', 'Docker Nginx', '5 ADRs', 'Tailwind CSS v4', 'REST APIs', 'CI/CD Actions'],
    isProprietary: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/finrisk-operations-hub',
      demo: null
    }
  },
  {
    id: 'agrofinance-dashboard',
    featured: true,
    title: 'AgroFinance RWA Banking Dashboard',
    subtitle: 'Institutional Quant Trading, Crédito Rural CPR & RWA',
    badge: 'DESTAQUE / QUANT RWA · 130 TESTES + 8 E2E',
    type: 'Next.js 16 · React 19 · TypeScript · Decimal.js · TradingView · Monte Carlo · Playwright (8 E2E)',
    shortDescription: 'Plataforma bancária corporativa, tesouraria de Real World Assets (RWA) e CPR Digital para o agronegócio. Aritmética de precisão arbitrária (Decimal.js), gráficos TradingView em Canvas GPU a 60 FPS, simulação estocástica Monte Carlo (1.000 iterações) via Web Worker, simulador What-If, exportação contábil para ERPs agrícolas (TOTVS Agro/Siagri), Dossiê Bancário com SHA-256 e suíte de 130 testes Vitest + 8 suítes Playwright E2E.',
    fullProblem: 'Mitigar volatilidade cambial e de commodities agrícolas, automatizar concessão de crédito rural (CPR Digital) com garantias colateralizadas e integrar tesouraria de safras tokenizadas a ERPs agrícolas legados e auditorias bancárias de risco.',
    fullSolution: [
      '<strong>Aritmética Arbitrária & ADRs:</strong> Precisão matemática estrita via Decimal.js eliminando inconsistências de ponto flutuante IEEE-754 em amortizações Price e cálculo prudencial de LTV (70%), com 9 Architecture Decision Records (ADRs) documentadas.',
      '<strong>Motor Quantitativo & Monte Carlo em Web Worker:</strong> Simulação estocástica de 1.000 trajetórias de Movimento Browniano Geométrico (GBM) e Value-at-Risk (VaR 95%) desacoplada em Web Worker, garantindo 0ms de Jank na UI.',
      '<strong>TradingView Canvas GPU & What-If Stress:</strong> Gráficos de candlestick OHLCV acelerados por hardware a 60 FPS e simulador What-If macroeconômico reativo para choques de PTAX, Selic e quebra de safra USDA com Relação de Troca (Barter).',
      '<strong>Streaming SSE & Dossiê Bancário SHA-256:</strong> Server-Sent Events em Edge Runtime, exportação contábil no plano de contas agro (TOTVS Agro / Siagri) e emissão de Dossiê de Auditoria com hash criptográfico SHA-256 e folha @media print.',
      '<strong>Qualidade & 130 Testes (100% Passing):</strong> Suíte com 130 testes no Vitest e 8 suítes End-to-End no Playwright (incluindo acessibilidade W3C WCAG 2.1 AA via Axe-Core), CI/CD no GitHub Actions e deploy na Vercel ($0 custo).'
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Decimal.js', 'TradingView Canvas', 'Monte Carlo (Web Worker)', 'Vitest (130 tests)', 'Playwright (8 E2E)', 'SSE Streaming', 'Zustand', 'TOTVS Agro ERP', 'ADRs'],
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
    subtitle: 'Precificação Preditiva & Radar de Oportunidades (MLOps)',
    badge: 'MACHINE LEARNING & MLOps PIPELINE',
    type: 'Python 3.11 · FastAPI · LightGBM · SHAP · Docker · Terraform AWS · Streamlit · Pytest',
    shortDescription: 'Pipeline End-to-End de MLOps para precificação imobiliária e detecção de arbitragem na Região Metropolitana de Ribeirão Preto/SP. Modelo LightGBM (R² = 0.835) auditado via SHAP, serving via API REST desacoplada (FastAPI + Pydantic v2), conteinerização multi-stage em Docker, IaC modular em Terraform na AWS e Radar de Oportunidades em Streamlit.',
    fullProblem: 'Forte assimetria de informações e dispersão de preços no mercado imobiliário regional, dificultando a precificação correta de venda para proprietários e a detecção de imóveis subprecificados (barganhas para investidores), demandando um pipeline de produção robusto, auditável e automatizado.',
    fullSolution: [
      '<strong>Pipeline End-to-End & Engenharia de Dados:</strong> Web scraping modular de +1.100 anúncios reais, limpeza estruturada com Pandas/DuckDB, validação de schema e engenharia de features espaciais (distância ao polo econômico, razões de m² e densidade).',
      '<strong>Modelagem Preditiva com LightGBM:</strong> Algoritmo de gradient boosting atingindo R² = 0.835 e redução de mais de 61% no erro absoluto médio (MAE de R$ 174k) frente à mediana regional.',
      '<strong>Explicabilidade Financeira com SHAP (XAI):</strong> Auditoria transparente com TreeExplainer quantificando o impacto em Reais de cada característica (área privativa com R$ 232k, banheiros/suítes com R$ 206k, padrão de condomínio e tipologia).',
      '<strong>Serving Desacoplado via FastAPI & Pydantic v2:</strong> API REST de alta performance expondo endpoints /health, /api/v1/predict e /api/v1/evaluate-opportunity com validação estrita de contratos de dados e documentação interativa Swagger/OpenAPI.',
      '<strong>MLOps, Docker, Terraform & CI/CD:</strong> Imagem Docker multi-stage otimizada, orquestração com Docker Compose, infraestrutura como código (IaC) modular em Terraform para AWS ECS Fargate/ECR e pipeline de CI no GitHub Actions com testes automatizados em Pytest.',
      '<strong>Radar de Oportunidades em Streamlit:</strong> Dashboard analítico com simulador preditivo de valor de venda e radar de barganhas identificando imóveis com ≥ 15% de desconto frente ao valor intrínseco estimado.'
    ],
    tags: ['Python 3.11', 'FastAPI', 'LightGBM', 'SHAP (XAI)', 'Docker', 'Terraform AWS', 'Streamlit', 'Pytest', 'MLOps', 'Pydantic v2', 'Pandas'],
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
    subtitle: 'Assistente Nativo Offline-First com Mesa P2P & QR Code',
    badge: 'MOBILE NATIVO / CLEAN ARCH & P2P',
    type: 'Kotlin 2.0 · Jetpack Compose · Google Hilt · Material 3 · Room SQLite · DataStore · Nearby P2P · CameraX',
    shortDescription: 'Assistente nativo Android para RPG de mesa com arquitetura Clean + MVVM e injeção de dependências via Google Hilt. 100% offline-first com persistência híbrida (Room + DataStore Preferences), sincronização P2P Star Relay via Bluetooth LE/Wi-Fi, feedback sensorial, regras ProGuard/R8 e pronto para distribuição na Google Play Store.',
    fullProblem: 'Partidas presenciais de RPG em locais sem conexão estável com a internet, em que apps convencionais sofrem com lentidão, consumo excessivo de bateria ou falta de sincronização em tempo real entre mestre e jogadores sem pagar planos caros de nuvem.',
    fullSolution: [
      '<strong>Arquitetura Clean + MVVM & Injeção de Dependências (Hilt):</strong> Desenvolvido com Kotlin 2.0, Jetpack Compose, Material 3 e Google Hilt para DI de ciclo de vida completo (@AndroidEntryPoint, @HiltViewModel), garantindo desacoplamento estrito e facilidade de testes unitários.',
      '<strong>Parser Léxico & DSL de Dados:</strong> Avaliador matemático em Kotlin puro para fórmulas complexas (vantagens/desvantagens 2d20kh1/kl1, dados explosivos 3d6!, descarte de menores 4d6kh3 e macros persistentes).',
      '<strong>Mesa Local P2P em Topologia Estrela (Star Relay):</strong> Sincronização em tempo real de rolagens, fichas e chat entre mestre e jogadores via Google Nearby Connections (Bluetooth LE / Wi-Fi Direct) com retransmissão centralizada no host e permissões runtime granulares do Android 12/13+.',
      '<strong>Persistência Reativa Híbrida & Preferências:</strong> Banco relacional local com Room SQLite para fichas e histórico, somado ao Jetpack DataStore Preferences para preferências de usuário (tema ativo, identidade do jogador) via StateFlow.',
      '<strong>Compartilhamento Offline via QR Code:</strong> Exportação e importação instantânea de fichas e macros usando CameraX, ZXing e compactação binária de alta densidade (GZIP + Base64).',
      '<strong>Feedback Sensorial & Temas Dinâmicos:</strong> Síntese de áudio de baixa latência com SoundPool, vibrações hápticas personalizadas para críticos (VibrationEffect) e 3 temas Material 3 (Pergaminho Medieval, Cyberpunk Neon e Horror Cósmico AMOLED).',
      '<strong>Play Store Readiness & Build de Release:</strong> Configuração de ProGuard/R8 com regras de keep para Gson e serializáveis, isolamento seguro de credenciais via keystore.properties, política de privacidade conforme diretrizes do Google Play e documentação completa de publicação.'
    ],
    tags: ['Kotlin 2.0', 'Jetpack Compose', 'Google Hilt', 'Material 3', 'Clean Architecture', 'Room SQLite', 'DataStore Preferences', 'Google Nearby P2P', 'CameraX', 'ProGuard / R8', 'Android Nativo'],
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
