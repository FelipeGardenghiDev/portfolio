/**
 * Projects Section & Accessible Modal Controller
 * Complete Bilingual Support (PT-BR / EN) & A11y Focus Trap
 */
import { getLang } from './i18n.js';

export const PROJECTS_DATA = [
  {
    id: 'nova-smar-dashboard',
    featured: true,
    title: {
      pt: 'Dashboard Financeiro & Automação ERP',
      en: 'Financial Dashboard & ERP Automation'
    },
    subtitle: {
      pt: 'Sistema Corporativo em Produção · Nova Smar S/A',
      en: 'Production Enterprise System · Nova Smar S/A'
    },
    badge: {
      pt: 'PROJETO EM PRODUÇÃO / CASE DE SUCESSO',
      en: 'PRODUCTION SYSTEM / SUCCESS CASE'
    },
    type: {
      pt: 'Full-Stack · Oracle PL/SQL · PHP · ERP Integration',
      en: 'Full-Stack · Oracle PL/SQL · PHP · ERP Integration'
    },
    shortDescription: {
      pt: 'Sistema web multiusuário auditável desenvolvido para substituir controles manuais na gestão financeira, integrado diretamente ao banco de dados do ERP TOTVS Protheus com fluxo de caixa e conciliação contábil.',
      en: 'Auditable multi-user web application engineered to replace manual spreadsheets in financial management, integrated directly with TOTVS Protheus ERP and Oracle PL/SQL for real-time cash flow and accounting reconciliation.'
    },
    fullProblem: {
      pt: 'A gestão de fluxo de caixa diário e mensal dependia de controles em planilhas manuais descentralizadas, gerando risco de inconsistência de dados, retrabalho operacional e falta de auditabilidade para tomada de decisão pela gerência, diretoria e acionistas.',
      en: 'Daily and monthly cash flow management relied on fragmented manual spreadsheets, exposing the business to data inconsistencies, operational overhead, and a lack of audit trails for executive decision-making across management and board members.'
    },
    fullSolution: {
      pt: [
        '<strong>Desenvolvimento Full-Stack:</strong> Desenvolveu aplicação web intranet em PHP, JavaScript e Oracle PL/SQL.',
        '<strong>Automação de Banco de Dados:</strong> Implementou Triggers, Procedures e Functions em Oracle DB e MySQL, eliminando o retrabalho manual.',
        '<strong>Integração ERP:</strong> Integração com a base de dados do ERP TOTVS Protheus para captura e conciliação de dados em tempo real.',
        '<strong>Previsão & Relatórios:</strong> Módulos para fluxo de caixa, geração de relatórios dinâmicos e predição de situação financeira.',
        '<strong>Impacto de Estoque:</strong> Desenvolveu relatórios de contabilidade e controle de estoque que permitiram a realização do inventário corporativo em tempo recorde em 2025.'
      ],
      en: [
        '<strong>Full-Stack Engineering:</strong> Developed corporate intranet web application using PHP, JavaScript, and Oracle PL/SQL.',
        '<strong>Database Automation:</strong> Implemented Triggers, Procedures, and Functions in Oracle DB and MySQL, eliminating manual data entry.',
        '<strong>ERP Integration:</strong> Connected directly to TOTVS Protheus ERP database for real-time data capture and reconciliation.',
        '<strong>Forecasting & Reporting:</strong> Engineered modules for daily/monthly cash flow, dynamic financial reports, and trend predictions.',
        '<strong>Inventory Impact:</strong> Delivered accounting and stock audit reports that enabled the corporate inventory to be completed in record time in 2025.'
      ]
    },
    tags: ['PHP', 'Oracle PL/SQL', 'JavaScript', 'TOTVS Protheus', 'MySQL', 'Triggers & Procedures', 'Relatórios Financeiros'],
    isProprietary: true,
    isPrivate: false,
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: 'fraud-detection-api',
    featured: true,
    title: {
      pt: 'Fraud Detection & Risk Engine API',
      en: 'Fraud Detection & Risk Engine API'
    },
    subtitle: {
      pt: 'Arquitetura Hexagonal, 7-Rule Engine & Resiliência Distribuída (9 ADRs)',
      en: 'Hexagonal Architecture, 7-Rule Engine & Distributed Resilience (9 ADRs)'
    },
    badge: {
      pt: 'FINTECH / ARQUITETURA HEXAGONAL & IaC',
      en: 'FINTECH / HEXAGONAL ARCHITECTURE & IaC'
    },
    type: {
      pt: 'Java 21 · Spring Boot 3 · Arquitetura Hexagonal · Virtual Threads (Loom) · Resilience4j · Flyway · Testcontainers · AWS Terraform · Redis Lua · Outbox Pattern · RabbitMQ · Prometheus · JaCoCo',
      en: 'Java 21 · Spring Boot 3 · Hexagonal Architecture · Virtual Threads (Loom) · Resilience4j · Flyway · Testcontainers · AWS Terraform · Redis Lua · Outbox Pattern · RabbitMQ · Prometheus · JaCoCo'
    },
    shortDescription: {
      pt: 'Plataforma corporativa de alta performance para análise preditiva de risco em tempo real (<10ms) sob Arquitetura Hexagonal e 9 ADRs formais. Java 21 Virtual Threads, esteira determinística com 7 regras de produção (incluindo Impossible Travel via Haversine, Z-Score comportamental e Smurfing/Structuring), Redis ZSET com script Lua atômico protegido por Resilience4j Circuit Breaker, Flyway SQL Migrations, Transactional Outbox Pattern, Testcontainers para paridade com PostgreSQL, telemetria Micrometer/Prometheus, IaC AWS Terraform e 46+ testes automatizados (100% passing).',
      en: 'High-throughput enterprise risk engine for real-time fraud scoring (<10ms) under Hexagonal Architecture and 9 formal ADRs. Java 21 Virtual Threads, 7-rule deterministic pipeline (Impossible Travel via Haversine, behavioral Z-Score, and Smurfing/Structuring), atomic Redis ZSET Lua script protected by Resilience4j Circuit Breaker, Flyway migrations, Transactional Outbox Pattern, PostgreSQL Testcontainers, Micrometer/Prometheus telemetry, AWS Terraform IaC, and 46+ automated tests (100% passing).'
    },
    fullProblem: {
      pt: 'Instituições financeiras e fintechs enfrentam perdas vultosas por fraudes transacionais automatizadas, account takeover (deslocamentos impossíveis), transações fracionadas (smurfing/structuring) e rajadas concorrentes em janela curta, exigindo decisões sub-10ms, consistência transacional ACID estrita e observabilidade em tempo real.',
      en: 'Financial institutions and fintechs suffer massive losses from automated transactional fraud, account takeovers (impossible travel), structuring/smurfing bursts, and high-concurrency spikes, requiring sub-10ms decisions, strict ACID transactional consistency, and end-to-end observability.'
    },
    fullSolution: {
      pt: [
        '<strong>Arquitetura Hexagonal & DDD Estrito:</strong> Inbound Ports (Use Cases) e Outbound Ports desacoplando completamente o domínio de frameworks, com Value Objects ricos (Cpf com validação de dígitos e mascaramento LGPD, RiskScore, Coordinates) e 9 ADRs formais.',
        '<strong>Esteira Determinística de 7 Regras:</strong> Blacklist Restritiva, Detecção de Alto Valor, Janela Noturna PIX, Burst de Velocidade, Deslocamento Impossível (Impossible Travel via Haversine > 800 km/h), Anomalia Comportamental via Z-Score estatístico (3 desvios padrão) e Smurfing/Structuring Detection.',
        '<strong>Sliding Window Atômico via Redis ZSET & Resilience4j:</strong> Janela deslizante em Lua eliminando border bursts sob concorrência maciça, protegida por Circuit Breaker (Resilience4j) com fallback graceful em caso de degradação do cluster.',
        '<strong>Java 21 Virtual Threads & Transactional Outbox:</strong> I/O não-bloqueante via Project Loom para alto throughput e entrega garantida de alertas (At-Least-Once) via Outbox ACID com worker de retry resiliente.',
        '<strong>Observabilidade, IaC, Migrações & Testcontainers:</strong> Telemetria para Prometheus via Micrometer, Health Indicator customizado no Actuator, migrações versionadas com Flyway (ddl-auto: validate), IaC modular via Terraform na AWS, Testcontainers para testes de integração no PostgreSQL e 46+ testes automatizados (100% passing) com JaCoCo.'
      ],
      en: [
        '<strong>Hexagonal Architecture & Strict DDD:</strong> Inbound Ports (Use Cases) and Outbound Ports isolating the core domain from external frameworks, using rich Value Objects (CPF validation/masking, RiskScore, Coordinates) governed by 9 formal ADRs.',
        '<strong>7-Rule Deterministic Engine:</strong> Restrictive Blacklist, High Amount Spike, Overnight Window, Velocity Burst, Impossible Travel (Haversine > 800 km/h), Behavioral Z-Score Anomaly (3 standard deviations), and Smurfing/Structuring Detection.',
        '<strong>Atomic Sliding Window via Redis ZSET & Resilience4j:</strong> Atomic Lua script preventing border bursts under massive concurrency, shielded by Resilience4j Circuit Breaker with graceful degradation fallback.',
        '<strong>Java 21 Virtual Threads & Transactional Outbox:</strong> Non-blocking I/O through Project Loom for high throughput, plus guaranteed At-Least-Once event publishing via ACID Outbox Pattern and resilient retry workers.',
        '<strong>Observability, IaC & Testcontainers:</strong> Prometheus telemetry via Micrometer, versioned Flyway migrations, modular AWS Terraform IaC, PostgreSQL Testcontainers, and 46+ automated unit and integration tests (100% passing) audited with JaCoCo.'
      ]
    },
    tags: ['Java 21', 'Spring Boot 3', 'Arquitetura Hexagonal', 'Virtual Threads', 'Resilience4j', 'Flyway', 'Testcontainers', 'Terraform AWS', 'Redis Lua', 'Outbox Pattern', 'RabbitMQ', 'Prometheus', 'JaCoCo (46+ testes)', 'Docker', 'OpenAPI 3', 'PostgreSQL'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/fraud-detection-api',
      demo: null
    }
  },
  {
    id: 'order-processing-api',
    featured: true,
    title: {
      pt: 'Order Processing API (.NET 8 & CQRS)',
      en: 'Order Processing API (.NET 8 & CQRS)'
    },
    subtitle: {
      pt: 'Clean Architecture, CQRS Híbrido, Channels & Fraud Engine (5 ADRs)',
      en: 'Clean Architecture, Hybrid CQRS, Channels & Fraud Engine (5 ADRs)'
    },
    badge: {
      pt: '.NET 8 / CLEAN ARCHITECTURE & CQRS',
      en: '.NET 8 / CLEAN ARCHITECTURE & CQRS'
    },
    type: {
      pt: 'C# 12 · .NET 8 · Clean Arch · CQRS (EF Core + Dapper) · Channels · Fraud Engine · 5 ADRs · CI/CD GitHub Actions · xUnit (28 tests)',
      en: 'C# 12 · .NET 8 · Clean Arch · CQRS (EF Core + Dapper) · Channels · Fraud Engine · 5 ADRs · CI/CD GitHub Actions · xUnit (28 tests)'
    },
    shortDescription: {
      pt: 'API corporativa em .NET 8 (C# 12) sob Clean Architecture, CQRS híbrido (EF Core + Dapper) e 5 ADRs formais. Enfileiramento assíncrono thread-safe via System.Threading.Channels, Background Worker com integração distribuída ao motor antifraude em Java 21 (fraud-detection-api) com degradação graciosa e 28 testes automatizados no xUnit.',
      en: 'Enterprise API in .NET 8 (C# 12) built with Clean Architecture, hybrid CQRS (EF Core + Dapper), and 5 formal ADRs. Thread-safe asynchronous queuing via System.Threading.Channels, Background Worker with distributed Java 21 fraud engine integration, graceful degradation, and 28 automated xUnit tests.'
    },
    fullProblem: {
      pt: 'Sistemas de e-commerce e processamento de pedidos enfrentam gargalos de concorrência e alto tempo de resposta quando operações analíticas e de leitura competem com transações críticas de escrita no mesmo modelo de dados ORM.',
      en: 'E-commerce and order processing systems suffer from concurrency bottlenecks and degraded response times when heavy analytical read queries compete with critical transactional writes on the exact same ORM model.'
    },
    fullSolution: {
      pt: [
        '<strong>Clean Architecture & DDD:</strong> Camadas estritamente desacopladas (Domain, Application, Infrastructure, Api) com encapsulamento de invariantes de negócio na entidade Order via backing fields.',
        '<strong>Abordagem Híbrida CQRS (EF Core + Dapper):</strong> Entity Framework Core gerenciando transações atômicas de escrita e Dapper executando queries brutas otimizadas com multi-mapping e agregações sem tracking overhead.',
        '<strong>Processamento Assíncrono com BackgroundService:</strong> Criação de pedidos com resposta imediata HTTP 201 Created e enfileiramento thread-safe desacoplado via System.Threading.Channels consumido por um Worker.',
        '<strong>Integração Antifraude & 28 Testes no xUnit:</strong> Validação em tempo real integrada ao motor em Java 21 (fraud-detection-api) com política de fallback resiliente, 5 Architecture Decision Records (ADRs) documentadas e 28 testes automatizados com xUnit, FluentAssertions e NSubstitute.'
      ],
      en: [
        '<strong>Clean Architecture & DDD:</strong> Strict separation of concerns (Domain, Application, Infrastructure, API) encapsulating domain invariants inside the Order entity with backing fields.',
        '<strong>Hybrid CQRS (EF Core + Dapper):</strong> EF Core handles transactional write operations with ACID guarantees, while Dapper executes raw, multi-mapped read queries with zero change-tracking overhead.',
        '<strong>Async Queuing with BackgroundService:</strong> Orders receive an immediate HTTP 201 Created acknowledgment while payload is queued into thread-safe System.Threading.Channels and processed by a dedicated worker.',
        '<strong>Distributed Fraud Engine Integration & 28 Tests:</strong> Real-time risk verification against the Java 21 fraud engine with graceful fallback degradation, 5 documented ADRs, and 28 tests using xUnit, FluentAssertions, and NSubstitute.'
      ]
    },
    tags: ['C# 12', '.NET 8', 'ASP.NET Core', 'EF Core', 'Dapper', 'Clean Architecture', 'CQRS', 'Channels', 'BackgroundService', 'Fraud Engine', '5 ADRs', 'CI/CD GitHub Actions', 'xUnit (28 tests)', 'NSubstitute'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/order-processing-api',
      demo: null
    }
  },
  {
    id: 'finrisk-operations-hub',
    featured: true,
    title: {
      pt: 'FinRisk Operations Hub',
      en: 'FinRisk Operations Hub'
    },
    subtitle: {
      pt: 'Cockpit de Risco, Angular 19 Signals & Web Workers (5 ADRs)',
      en: 'Risk Cockpit, Angular 19 Signals & Web Workers (5 ADRs)'
    },
    badge: {
      pt: 'ANGULAR 19 / SIGNALS & WEB WORKERS',
      en: 'ANGULAR 19 / SIGNALS & WEB WORKERS'
    },
    type: {
      pt: 'Angular 19 · TypeScript · Signals · Web Workers (60 FPS) · Vitest (24 tests) · Docker Nginx · 5 ADRs · REST APIs',
      en: 'Angular 19 · TypeScript · Signals · Web Workers (60 FPS) · Vitest (24 tests) · Docker Nginx · 5 ADRs · REST APIs'
    },
    shortDescription: {
      pt: 'Cockpit corporativo e portal unificado de gestão e operações integrando os microsserviços Order Processing API (.NET 8) e Fraud Detection Engine (Java 21). Arquitetura reativa baseada em Signals, simulação paralela de risco Monte Carlo via Web Worker a 60 FPS (zero jank na UI thread), 5 ADRs formais, Docker multi-stage com Nginx Alpine e suíte de 24 testes automatizados no Vitest.',
      en: 'Unified operations portal and risk cockpit integrating the .NET 8 Order API and Java 21 Fraud Engine. Reactive architecture driven by Angular Signals, parallel Monte Carlo risk simulation offloaded to a Web Worker running at continuous 60 FPS (zero UI jank), 5 formal ADRs, multi-stage Docker with Alpine Nginx, and 24 Vitest automated tests.'
    },
    fullProblem: {
      pt: 'Em operações financeiras de alta frequência, operadores de risco e compliance precisam monitorar a esteira de pedidos e fraudes em tempo real sem travar a interface do navegador durante simulações analíticas pesadas de projeção estatística.',
      en: 'In high-frequency financial platforms, risk and compliance operators must monitor order pipelines and fraud events in real time without browser freezing or frame drops during heavy stochastic stress simulations.'
    },
    fullSolution: {
      pt: [
        '<strong>Reatividade Fina com Angular Signals:</strong> Arquitetura 100% Standalone Components e Signals (signal, computed, effect), eliminando o overhead de dirty-checking global e permitindo re-render cirúrgico nos nós do DOM.',
        '<strong>Multi-Threading com Web Workers a 60 FPS:</strong> Desacoplamento da simulação estatística de estresse Monte Carlo em thread secundária do sistema operacional, garantindo renderização fluida a 60 FPS contínuos mesmo sob lotes de 10.000 cenários.',
        '<strong>Estratégia de Duplo-Modo Resiliente:</strong> Switch operacional entre consumo das APIs reais (.NET 8 na porta 5000 e Java 21 na porta 8080) e pipeline determinístico em memória com fallback automático e zero indisponibilidade em demos.',
        '<strong>Containerização & Cache Nginx SPA:</strong> Dockerfile multi-stage com Nginx Alpine, regras de cache com immutable nos chunks versionados e fallback de rotas SPA.',
        '<strong>Qualidade & 5 ADRs Formais:</strong> Documentação arquitetural formal com 5 ADRs, suíte com 24 testes unitários no Vitest com Angular TestBed e pipeline de CI/CD automatizado no GitHub Actions.'
      ],
      en: [
        '<strong>Fine-Grained Reactivity with Signals:</strong> 100% Standalone Components with Signals (signal, computed, effect), eliminating global Zone.js dirty-checking overhead for surgical DOM node updates.',
        '<strong>Multi-Threading via Web Workers (60 FPS):</strong> CPU-intensive Monte Carlo stress simulations are offloaded to an OS worker thread, preserving smooth 60 FPS UI rendering even across 10,000 scenarios.',
        '<strong>Dual-Mode Resilient Strategy:</strong> Seamless toggle between live backend APIs (.NET 8 on port 5000, Java 21 on port 8080) and in-memory mock datasets with automatic fallback for zero demo downtime.',
        '<strong>Docker & Alpine Nginx Caching:</strong> Multi-stage Docker image with immutable HTTP caching headers for versioned asset chunks and SPA route fallbacks.',
        '<strong>Architecture & 24 Vitest Tests:</strong> Governed by 5 formal ADRs, 24 unit tests using Vitest with Angular TestBed, and automated CI/CD in GitHub Actions.'
      ]
    },
    tags: ['Angular 19', 'TypeScript', 'Signals', 'Web Workers (60 FPS)', 'Vitest (24 tests)', 'Docker Nginx', '5 ADRs', 'Tailwind CSS v4', 'REST APIs', 'CI/CD Actions'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/finrisk-operations-hub',
      demo: null
    }
  },
  {
    id: 'agrofinance-dashboard',
    featured: true,
    title: {
      pt: 'AgroFinance RWA Banking Dashboard',
      en: 'AgroFinance RWA Banking Dashboard'
    },
    subtitle: {
      pt: 'Institutional Quant Trading, Crédito Rural CPR & RWA',
      en: 'Institutional Quant Trading, Agribusiness CPR & RWA Custody'
    },
    badge: {
      pt: 'DESTAQUE / QUANT RWA · 130 TESTES + 8 E2E',
      en: 'FEATURED / QUANT RWA · 130 TESTS + 8 E2E'
    },
    type: {
      pt: 'Next.js 16 · React 19 · TypeScript · Decimal.js · TradingView · Monte Carlo · Playwright (8 E2E)',
      en: 'Next.js 16 · React 19 · TypeScript · Decimal.js · TradingView · Monte Carlo · Playwright (8 E2E)'
    },
    shortDescription: {
      pt: 'Plataforma bancária corporativa, tesouraria de Real World Assets (RWA) e CPR Digital para o agronegócio. Aritmética de precisão arbitrária (Decimal.js), gráficos TradingView em Canvas GPU a 60 FPS, simulação estocástica Monte Carlo (1.000 iterações) via Web Worker, simulador What-If, exportação contábil para ERPs agrícolas (TOTVS Agro/Siagri), Dossiê Bancário com SHA-256 e suíte de 130 testes Vitest + 8 suítes Playwright E2E.',
      en: 'Institutional banking and treasury platform for agribusiness Real World Assets (RWA) and Digital CPR custody. Arbitrary-precision math (Decimal.js), GPU-accelerated TradingView Canvas at 60 FPS, Web Worker Monte Carlo simulation (1,000 iterations), What-If stress engine, TOTVS Agro/Siagri accounting export, SHA-256 bank dossier, and 130 Vitest + 8 Playwright E2E test suites.'
    },
    fullProblem: {
      pt: 'Mitigar volatilidade cambial e de commodities agrícolas, automatizar concessão de crédito rural (CPR Digital) com garantias colateralizadas e integrar tesouraria de safras tokenizadas a ERPs agrícolas legados e auditorias bancárias de risco.',
      en: 'Mitigate commodity and FX market volatility, automate digital agricultural credit granting with collateralized harvest pledges, and connect tokenized agribusiness treasury to legacy agricultural ERPs under strict banking risk audits.'
    },
    fullSolution: {
      pt: [
        '<strong>Aritmética Arbitrária & ADRs:</strong> Precisão matemática estrita via Decimal.js eliminando inconsistências de ponto flutuante IEEE-754 em amortizações Price e cálculo prudencial de LTV (70%), com 9 Architecture Decision Records (ADRs) documentadas.',
        '<strong>Motor Quantitativo & Monte Carlo em Web Worker:</strong> Simulação estocástica de 1.000 trajetórias de Movimento Browniano Geométrico (GBM) e Value-at-Risk (VaR 95%) desacoplada em Web Worker, garantindo 0ms de Jank na UI.',
        '<strong>TradingView Canvas GPU & What-If Stress:</strong> Gráficos de candlestick OHLCV acelerados por hardware a 60 FPS e simulador What-If macroeconômico reativo para choques de PTAX, Selic e quebra de safra USDA com Relação de Troca (Barter).',
        '<strong>Streaming SSE & Dossiê Bancário SHA-256:</strong> Server-Sent Events em Edge Runtime, exportação contábil no plano de contas agro (TOTVS Agro / Siagri) e emissão de Dossiê de Auditoria com hash criptográfico SHA-256 e folha @media print.',
        '<strong>Qualidade & 130 Testes (100% Passing):</strong> Suíte com 130 testes no Vitest e 8 suítes End-to-End no Playwright (incluindo acessibilidade W3C WCAG 2.1 AA via Axe-Core), CI/CD no GitHub Actions e deploy na Vercel ($0 custo).'
      ],
      en: [
        '<strong>Arbitrary-Precision Arithmetic:</strong> Strict financial precision using Decimal.js eliminating IEEE-754 floating-point inaccuracies in Price amortization and prudential 70% LTV calculations, documented across 9 ADRs.',
        '<strong>Quant Engine & Web Worker Monte Carlo:</strong> Stochastic simulation running 1,000 Geometric Brownian Motion trajectories and 95% VaR calculations off the main UI thread with zero frame stutter.',
        '<strong>TradingView Canvas GPU & What-If Engine:</strong> 60 FPS hardware-rendered OHLCV candlestick charts and reactive macroeconomic stress simulator testing FX, Selic interest rates, and USDA crop yields with barter terms.',
        '<strong>Edge SSE Streaming & SHA-256 Dossier:</strong> Real-time price feeds via Edge Server-Sent Events, agricultural chart-of-accounts export (TOTVS Agro / Siagri), and tamper-evident PDF dossier with SHA-256 hashing.',
        '<strong>130 Vitest Tests + 8 Playwright Suites:</strong> 130 Vitest tests and 8 Playwright E2E suites verifying full critical user flows and W3C WCAG 2.1 AA accessibility via Axe-Core.'
      ]
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Decimal.js', 'TradingView Canvas', 'Monte Carlo (Web Worker)', 'Vitest (130 tests)', 'Playwright (8 E2E)', 'SSE Streaming', 'Zustand', 'TOTVS Agro ERP', 'ADRs'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/agrofinance-dashboard',
      demo: 'https://agrofinance-dashboard-dev.vercel.app/dashboard'
    }
  },
  {
    id: 'imoveis-pricing-ml',
    featured: false,
    title: {
      pt: 'Imóveis Pricing ML — Inteligência Imobiliária',
      en: 'Real Estate Pricing ML — Predictive Valuation'
    },
    subtitle: {
      pt: 'Precificação Preditiva & Radar de Oportunidades (MLOps)',
      en: 'Predictive Valuation & Arbitrage Radar (MLOps)'
    },
    badge: {
      pt: 'MACHINE LEARNING & MLOps PIPELINE',
      en: 'MACHINE LEARNING & MLOps PIPELINE'
    },
    type: {
      pt: 'Python 3.11 · FastAPI · LightGBM · SHAP · Docker · Terraform AWS · Streamlit · Pytest',
      en: 'Python 3.11 · FastAPI · LightGBM · SHAP · Docker · Terraform AWS · Streamlit · Pytest'
    },
    shortDescription: {
      pt: 'Pipeline End-to-End de MLOps para precificação imobiliária e detecção de arbitragem na Região Metropolitana de Ribeirão Preto/SP. Modelo LightGBM (R² = 0.835) auditado via SHAP, serving via API REST desacoplada (FastAPI + Pydantic v2), conteinerização multi-stage em Docker, IaC modular em Terraform na AWS e Radar de Oportunidades em Streamlit.',
      en: 'End-to-End MLOps pipeline for property valuation and market arbitrage detection in the Ribeirão Preto metropolitan area. LightGBM model (R² = 0.835) audited with SHAP, served via decoupled FastAPI REST API, multi-stage Docker containerization, AWS Terraform IaC, and Streamlit opportunity radar.'
    },
    fullProblem: {
      pt: 'Forte assimetria de informações e dispersão de preços no mercado imobiliário regional, dificultando a precificação correta de venda para proprietários e a detecção de imóveis subprecificados (barganhas para investidores), demandando um pipeline de produção robusto, auditável e automatizado.',
      en: 'Significant information asymmetry and price dispersion in regional real estate, preventing accurate asset listing by sellers and hiding undervalued properties from buyers, requiring an automated, auditable valuation pipeline.'
    },
    fullSolution: {
      pt: [
        '<strong>Pipeline End-to-End & Engenharia de Dados:</strong> Web scraping modular de +1.100 anúncios reais, limpeza estruturada com Pandas/DuckDB, validação de schema e engenharia de features espaciais (distância ao polo econômico, razões de m² e densidade).',
        '<strong>Modelagem Preditiva com LightGBM:</strong> Algoritmo de gradient boosting atingindo R² = 0.835 e redução de mais de 61% no erro absoluto médio (MAE de R$ 174k) frente à mediana regional.',
        '<strong>Explicabilidade Financeira com SHAP (XAI):</strong> Auditoria transparente com TreeExplainer quantificando o impacto em Reais de cada característica (área privativa com R$ 232k, banheiros/suítes com R$ 206k, padrão de condomínio e tipologia).',
        '<strong>Serving Desacoplado via FastAPI & Pydantic v2:</strong> API REST de alta performance expondo endpoints /health, /api/v1/predict e /api/v1/evaluate-opportunity com validação estrita de contratos de dados e documentação interativa Swagger/OpenAPI.',
        '<strong>MLOps, Docker, Terraform & CI/CD:</strong> Imagem Docker multi-stage otimizada, orquestração com Docker Compose, infraestrutura como código (IaC) modular em Terraform para AWS ECS Fargate/ECR e pipeline de CI no GitHub Actions com testes automatizados em Pytest.',
        '<strong>Radar de Oportunidades em Streamlit:</strong> Dashboard analítico com simulador preditivo de valor de venda e radar de barganhas identificando imóveis com ≥ 15% de desconto frente ao valor intrínseco estimado.'
      ],
      en: [
        '<strong>End-to-End Data Pipeline:</strong> Modular web scraping of 1,100+ real listings, automated data cleaning with Pandas/DuckDB, schema validation, and spatial feature engineering.',
        '<strong>Gradient Boosting Model (LightGBM):</strong> Machine learning model achieving R² = 0.835 and reducing Mean Absolute Error by over 61% compared to regional baseline medians.',
        '<strong>Explainable AI via SHAP (XAI):</strong> Transparent model auditing with TreeExplainer, quantifying the exact dollar impact of each attribute (private square footage, suites, condominium tier).',
        '<strong>Decoupled Serving via FastAPI:</strong> Production REST API with strict Pydantic v2 data contracts, OpenAPI docs, and sub-30ms inference response times.',
        '<strong>MLOps, IaC & Cloud:</strong> Multi-stage Docker packaging, modular AWS Terraform configuration for ECS Fargate, and automated Pytest test suites in GitHub Actions.',
        '<strong>Arbitrage Radar in Streamlit:</strong> Interactive web dashboard surfacing deals priced at >= 15% discount against intrinsic fair-value predictions.'
      ]
    },
    tags: ['Python 3.11', 'FastAPI', 'LightGBM', 'SHAP (XAI)', 'Docker', 'Terraform AWS', 'Streamlit', 'Pytest', 'MLOps', 'Pydantic v2', 'Pandas'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/imoveis-pricing-ml',
      demo: null
    }
  },
  {
    id: 'visuchord',
    featured: true,
    title: {
      pt: 'VisuChord — Instrumento por IA & Visão Computacional',
      en: 'VisuChord — AI & Computer Vision Air Instrument'
    },
    subtitle: {
      pt: 'Síntese Harmônica Controlada por Gestos via Webcam',
      en: 'Real-Time Harmonic Synthesis Controlled by Webcam Gestures'
    },
    badge: {
      pt: 'VISÃO COMPUTACIONAL & IA',
      en: 'COMPUTER VISION & AI'
    },
    type: {
      pt: 'React 19 · Vite 8 · Google MediaPipe Hands · Tone.js · WebGL',
      en: 'React 19 · Vite 8 · Google MediaPipe Hands · Tone.js · WebGL'
    },
    shortDescription: {
      pt: 'Aplicação web que transforma a webcam em um instrumento musical polifônico em tempo real, rastreando 21 pontos anatômicos das mãos para modular e tocar qualquer acorde cromático.',
      en: 'Web application that transforms any webcam into a real-time polyphonic musical instrument, tracking 21 hand anatomical landmarks to trigger and modulate chromatic chords.'
    },
    fullProblem: {
      pt: 'Exploração de interfaces homem-máquina inovadoras (NUI - Natural User Interfaces), sintetizando harmonia musical rica no ar sem necessidade de controladores físicos externos.',
      en: 'Exploring Natural User Interfaces (NUI) for expressive musical synthesis in mid-air with zero hardware controllers or physical midi gear.'
    },
    fullSolution: {
      pt: [
        '<strong>Visão Computacional na GPU:</strong> Processamento a 60 FPS com Google MediaPipe Hands Tasks Vision via WebAssembly e WebGL diretamente no navegador.',
        '<strong>Teoria Musical Cromática:</strong> Suporte integral a todas as 12 tonalidades ocidentais com modulação por altura espacial (# / ♭) e tétrades/tríades avançadas (Maior, Menor, 7ª, 7M, Meio-Diminuto m7b5, Diminuto).',
        '<strong>Motor de Áudio Tone.js:</strong> Síntese polifônica com modelagem de envelope ADSR, simulação de palhetada (strumming em cascata), Reverb espacial e Chorus analógico.',
        '<strong>Teclado Virtual & HUD Sci-Fi:</strong> Canvas dinâmico com conexões anatômicas em neon e visualizador de piano em tempo real.'
      ],
      en: [
        '<strong>GPU-Accelerated Computer Vision:</strong> Real-time 60 FPS landmark detection using Google MediaPipe Hands Tasks Vision via WebAssembly and WebGL.',
        '<strong>Full Chromatic Harmony:</strong> Dynamic chord engine covering all 12 musical keys with spatial pitch bend modulation and complex triads/seventh extensions.',
        '<strong>Polyphonic Audio Engine:</strong> Synthesizer powered by Tone.js with custom ADSR envelopes, cascading strumming emulation, spatial reverb, and analog chorus.',
        '<strong>Virtual Piano HUD:</strong> Cyberpunk-inspired canvas overlay rendering real-time skeleton tracking and visual piano keys.'
      ]
    },
    tags: ['React 19', 'Vite 8', 'Google MediaPipe', 'Tone.js', 'Visão Computacional', 'Web Audio API', 'TypeScript', 'Tailwind CSS v4'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/visuchord',
      demo: null
    }
  },
  {
    id: 'revanche-website',
    featured: false,
    title: {
      pt: 'Website Banda Revanche',
      en: 'Revanche Band Official Website'
    },
    subtitle: {
      pt: 'Aplicação Web em Produção · Cliente Real',
      en: 'Production Web Platform · Real-World Client'
    },
    badge: {
      pt: 'CLIENTE REAL / PRODUÇÃO',
      en: 'REAL CLIENT / IN PRODUCTION'
    },
    type: {
      pt: 'Next.js 16 · React 19 · TypeScript · Tailwind v4 · SEO',
      en: 'Next.js 16 · React 19 · TypeScript · Tailwind v4 · SEO'
    },
    shortDescription: {
      pt: 'Aplicação web oficial de alta performance desenvolvida para a banda Revanche, com agenda de shows, integração com Spotify e otimização para SEO.',
      en: 'High-performance official web application built for rock band Revanche, featuring tour schedules, Spotify integration, press kit downloads, and high-ranking SEO.'
    },
    fullProblem: {
      pt: 'A banda necessitava de um canal oficial de alta performance para divulgação de shows, captação de contratantes via WhatsApp formatado, download de mídia kit em alta resolução e engajamento dos fãs.',
      en: 'The band needed an official digital home to announce tour dates, generate booking leads via formatted WhatsApp triggers, deliver high-res press kits, and engage fans.'
    },
    fullSolution: {
      pt: [
        '<strong>Arquitetura Moderna:</strong> Desenvolvido com Next.js 16 (App Router), React 19, TypeScript estrito e Tailwind CSS v4.',
        '<strong>SEO & Governança:</strong> Metadados estruturados Schema.org (MusicGroup) para indexação rápida no Google e OpenGraph para compartilhamento social.',
        '<strong>Recursos & Integrações:</strong> Agenda de eventos dinâmica com links oficiais de ingressos, player de mídias e fluxo de contato direto para contratantes.',
        '<strong>Entrega & Produção:</strong> Aplicação no ar e mantida em domínio próprio de alta performance (bandarevanche.com.br).'
      ],
      en: [
        '<strong>Modern Web Architecture:</strong> Built using Next.js 16 (App Router), React 19, strict TypeScript, and Tailwind CSS v4.',
        '<strong>SEO & Schema.org:</strong> Rich MusicGroup structured data for top Google search indexation and rich OpenGraph cards.',
        '<strong>Features & Media:</strong> Dynamic concert calendar, direct ticket integration, embedded streaming player, and business contact flow.',
        '<strong>Production Deployment:</strong> Running on custom domain with edge CDN optimization (bandarevanche.com.br).'
      ]
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'SEO Schema.org', 'Produção'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/revanche-website',
      demo: 'https://bandarevanche.com.br'
    }
  },
  {
    id: 'sertaozinho-digital',
    featured: false,
    title: {
      pt: 'Sertãozinho Digital',
      en: 'Sertãozinho Digital Civic Portal'
    },
    subtitle: {
      pt: 'Portal Cívico Municipal, Rotas GPS & PWA Android Nativo',
      en: 'Municipal Civic Portal, GPS Routes & Native Android PWA'
    },
    badge: {
      pt: 'CIVIC TECH / REACT 19 & CAPACITOR 8',
      en: 'CIVIC TECH / REACT 19 & CAPACITOR 8'
    },
    type: {
      pt: 'React 19 · TypeScript · Capacitor 8 (Android Nativo) · Leaflet GPS · Web Scraping · GitHub Actions CI/CD',
      en: 'React 19 · TypeScript · Capacitor 8 (Native Android) · Leaflet GPS · Web Scraping · GitHub Actions CI/CD'
    },
    shortDescription: {
      pt: 'Portal cívico municipal e aplicativo PWA/Android nativo para centralização de serviços públicos de Sertãozinho/SP. Web scraping dinâmico para ofertas de emprego do PAT e editais, mapa interativo geolocalizado com rotas GPS (UPAs, UBSs e Ecopontos), canal cidadão colaborativo e esteira de CI/CD no GitHub Actions com compilação de APK nativo.',
      en: 'Municipal civic portal and native Android PWA unifying public services in Sertãozinho/SP. Dynamic web scraping for public jobs and municipal tenders, interactive map with turn-by-turn GPS routes to hospitals and recycling points, citizen feedback, and automated GitHub Actions CI/CD building native APKs.'
    },
    fullProblem: {
      pt: 'Cidadãos e comerciantes do município de Sertãozinho enfrentavam dispersão e lentidão no acesso a serviços públicos essenciais (vagas de emprego no PAT, rotas para descarte em ecopontos, unidades de pronto atendimento de saúde e notícias oficiais), distribuídos em portais desatualizados sem aplicativo unificado ou mapa interativo offline-first.',
      en: 'Citizens and local business owners faced fragmented, outdated access to essential municipal public services (job openings, sustainable waste disposal sites, emergency healthcare units, and announcements) without a unified mobile app.'
    },
    fullSolution: {
      pt: [
        '<strong>Interface Cívica Reativa & PWA Nativo:</strong> Desenvolvida em React 19, TypeScript e Tailwind CSS v4, empacotada com Capacitor 8 para Android nativo e PWA instalável com suporte offline.',
        '<strong>Web Scraping Dinâmico & Atualização Diária:</strong> Automação diária via GitHub Actions que coleta e atualiza oportunidades de emprego do PAT e comunicados da prefeitura com zero intervenção manual.',
        '<strong>Mapa Interativo com Rotas GPS:</strong> Integração com Leaflet e OpenStreetMap mapeando serviços de emergência (UPAs, Bombeiros, SAMU) e pontos de descarte sustentável (Ecopontos) com cálculo de rota direta via GPS do dispositivo.',
        '<strong>Esteira CI/CD Automatizada:</strong> Pipeline completo no GitHub Actions executando linters, testes automatizados e compilação de APK Android release via Gradle.'
      ],
      en: [
        '<strong>Reactive Civic UI & Native PWA:</strong> Engineered with React 19, TypeScript, and Tailwind v4, wrapped with Capacitor 8 for Android and offline PWA capabilities.',
        '<strong>Automated Daily Web Scraping:</strong> Daily GitHub Actions workflow that collects and synchronizes municipal job listings and official bulletins with zero manual intervention.',
        '<strong>Interactive Map with GPS Routes:</strong> Leaflet and OpenStreetMap integration routing citizens directly to 24/7 emergency clinics, fire stations, and eco-disposal points.',
        '<strong>CI/CD Pipeline:</strong> GitHub Actions pipeline running linting, unit tests, and compiling native Android release APKs with Gradle.'
      ]
    },
    tags: ['React 19', 'TypeScript', 'Capacitor 8', 'Android', 'Leaflet', 'OpenStreetMap', 'Web Scraping', 'Tailwind CSS v4', 'GitHub Actions', 'CI/CD'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/sertaozinho-digital',
      demo: null
    }
  },
  {
    id: 'underground-tools',
    featured: true,
    title: {
      pt: 'Underground Tools (C++17 Audio DSP Plugins)',
      en: 'Underground Tools (C++17 Audio DSP Plugins)'
    },
    subtitle: {
      pt: 'DSP em Tempo Real, Filtros Bi-Quad, Saturação Não-Linear & Arquitetura JUCE',
      en: 'Real-Time DSP, Bi-Quad Filters, Non-Linear Saturation & JUCE Architecture'
    },
    badge: {
      pt: 'C++17 / REAL-TIME DSP AUDIO',
      en: 'C++17 / REAL-TIME DSP AUDIO'
    },
    type: {
      pt: 'C++17 · JUCE Framework · VST3 / AU · Real-Time Audio DSP · Bi-Quad Filters · SIMD · Zero-Allocation Audio Thread',
      en: 'C++17 · JUCE Framework · VST3 / AU · Real-Time Audio DSP · Bi-Quad Filters · SIMD · Zero-Allocation Audio Thread'
    },
    shortDescription: {
      pt: 'Ecossistema profissional de plugins de áudio VST3/AU em C++17 e JUCE Framework para produção musical, mixagem e palcos. Processamento de sinal em tempo real (DSP) com zero alocação dinâmica no audio thread crítico, filtros bi-quad passa-baixa/alta, saturação analógica não-linear e medição RMS/Peak com renderização vetorial a 60 FPS.',
      en: 'Professional suite of VST3/AU audio plugins engineered in C++17 and JUCE Framework for studio mixing and live performances. Real-time digital signal processing (DSP) with zero dynamic allocation on the critical audio thread, bi-quad filters, non-linear analog saturation, and 60 FPS vector metering.'
    },
    fullProblem: {
      pt: 'Aplicações de áudio profissional e plugins VST exigem execução estritamente determinística sem garbage collection, bloqueio de mutex ou alocação dinâmica no callback de áudio, sob risco de buffer underruns, clicks e latência perceptível no palco e estúdio.',
      en: 'Live and studio audio processing demands deterministic low-latency execution without garbage collection, mutex locks, or dynamic memory allocations during the audio callback to prevent dropouts, clicks, and phase jitter.'
    },
    fullSolution: {
      pt: [
        '<strong>C++17 & JUCE Framework:</strong> Arquitetura modular de processamento digital de sinais para Windows, macOS e Linux nos formatos VST3 e Standalone.',
        '<strong>Zero-Allocation no Audio Thread:</strong> Algoritmos DSP estritamente determinísticos com buffers estáticos pré-alocados para garantir latência inferior a 1ms.',
        '<strong>DSP de Filtros & Saturação:</strong> Implementação de curvas de saturação analógica com modelagem matemática não-linear (hiperbólica tanh) e filtros equalizadores IIR Bi-Quad.',
        '<strong>Interface Vetorial Responsiva:</strong> Componentes de UI desenhados em tempo real com taxa de atualização de 60 FPS e desacoplamento assíncrono entre a interface gráfica e o motor de áudio.'
      ],
      en: [
        '<strong>C++17 & JUCE Framework:</strong> Modular digital signal processing architecture building for Windows, macOS, and Linux across VST3 and Standalone formats.',
        '<strong>Zero-Allocation Audio Thread:</strong> Deterministic DSP routines using pre-allocated static buffers to achieve guaranteed sub-1ms buffer latencies.',
        '<strong>Filter & Saturation DSP:</strong> Custom analog saturation curves via hyperbolic tangent (tanh) mathematical modeling and IIR Bi-Quad EQ filters.',
        '<strong>60 FPS Vector UI:</strong> Hardware-accelerated UI dials and responsive peak meters asynchronously decoupled from the audio engine thread.'
      ]
    },
    tags: ['C++17', 'JUCE Framework', 'Audio DSP', 'VST3 / AU', 'Real-Time Audio', 'Zero-Allocation', 'Bi-Quad Filters', 'Saturação Analógica', 'CMake'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/underground-tools',
      demo: null
    }
  },
  {
    id: 'garden-creative-suite',
    featured: true,
    title: {
      pt: 'Garden Creative Suite (Multiplatform Media Tools)',
      en: 'Garden Creative Suite (Multiplatform Media Tools)'
    },
    subtitle: {
      pt: 'WebCodecs, Whisper AI Wasm, Autotiling Wang-47 & NLE Exporters',
      en: 'WebCodecs, Whisper AI Wasm, Wang-47 Autotiling & NLE Exporters'
    },
    badge: {
      pt: 'WEBMEDIA / MULTIPLATFORM (WEB, DESKTOP, ANDROID)',
      en: 'WEBMEDIA / MULTIPLATFORM (WEB, DESKTOP, ANDROID)'
    },
    type: {
      pt: 'React 19 · TypeScript · Vite · Capacitor · Tauri (Rust) · WebCodecs · Web Audio API · Whisper Wasm · IndexedDB',
      en: 'React 19 · TypeScript · Vite · Capacitor · Tauri (Rust) · WebCodecs · Web Audio API · Whisper Wasm · IndexedDB'
    },
    shortDescription: {
      pt: 'Tríade de ferramentas profissionais de criação multimídia de alto desempenho operando 100% no cliente: GardenCut (editor de vídeo não-linear multitrack com detecção de silêncio por RMS), GardenPixel (editor pixel-art com blend modes e autotiling Wang-47 para Godot 4/Tiled) e GardenSubtitle (gerador de legendas cinéticas com Whisper AI e exportadores para W3C TTML, DaVinci FCPXML e After Effects JSX). Disponíveis como Web Apps, Desktop (Tauri/Rust) e APKs Android (Capacitor).',
      en: 'Suite of professional 100% client-side multimedia creative tools: GardenCut (multitrack non-linear video editor with RMS silence detection), GardenPixel (pixel art editor with Wang-47 autotiling for Godot/Tiled), and GardenSubtitle (kinetic subtitles with Whisper AI and DaVinci/Premiere/After Effects exporters). Available across Web, Desktop (Tauri/Rust), and Android (Capacitor).'
    },
    fullProblem: {
      pt: 'Criadores de conteúdo e desenvolvedores de jogos dependem de softwares pesados, caros e baseados em assinaturas de nuvem que enviam seus vídeos e assets confidenciais para servidores de terceiros, criando gargalos de upload e riscos de privacidade.',
      en: 'Digital creators and game developers rely on expensive, cloud-bound subscription tools that upload sensitive media files to remote servers, causing privacy risks and slow upload bottlenecks.'
    },
    fullSolution: {
      pt: [
        '<strong>Processamento 100% Client-Side & Zero-Cost Cloud:</strong> Transcrição acústica local via Whisper ONNX Wasm e síntese de vídeo/áudio acelerada por hardware no navegador.',
        '<strong>Engenharia de Mídia Industrial:</strong> Exportação para padrões mundiais de broadcast e pós-produção (W3C TTML, Final Cut Pro XML, Adobe Premiere .prproj, After Effects .jsx e CMX 3600 EDL).',
        '<strong>Arquitetura Tri-Platform:</strong> O mesmo codebase em React 19 / TypeScript compila e roda nativamente na Web, no Desktop via Rust/Tauri e no Android via Capacitor.',
        '<strong>Algoritmos Gráficos & Acústicos:</strong> Detecção inteligente de pausas via RMS/LUFS com auto jump-cut, modos de mesclagem de camadas (Multiply, Screen, Overlay) e autotiling canônico de 47 tiles.'
      ],
      en: [
        '<strong>100% Client-Side & Zero Cloud Cost:</strong> On-device acoustic transcription via Whisper ONNX Wasm and hardware-accelerated video rendering via WebCodecs.',
        '<strong>Broadcast Media Engineering:</strong> Full export support for professional NLE standards (W3C TTML, Final Cut Pro XML, Adobe Premiere, After Effects JSX, CMX 3600 EDL).',
        '<strong>Tri-Platform Architecture:</strong> Unified React 19 / TypeScript codebase compiled across Web, Desktop (Rust/Tauri), and Android (Capacitor).',
        '<strong>Graphics & DSP Algorithms:</strong> Smart jump-cut silence removal with RMS audio gating, 47-tile Wang autotiling, and canvas layer blend modes.'
      ]
    },
    tags: ['React 19', 'TypeScript', 'WebCodecs', 'Capacitor Android', 'Tauri (Rust)', 'Whisper AI', 'Web Audio API', 'IndexedDB', 'Godot 4', 'W3C TTML', 'FCPXML'],
    isProprietary: false,
    isPrivate: false,
    links: {
      github: 'https://github.com/FelipeGardenghiDev/garden-cut',
      demo: null
    }
  },
  {
    id: 'second-brain',
    featured: false,
    title: {
      pt: 'Segundo Cérebro (Life OS)',
      en: 'Second Brain (Life OS)'
    },
    subtitle: {
      pt: 'Assistente Multimodal via WhatsApp & Painel Web',
      en: 'Multimodal Assistant via WhatsApp & Web Cockpit'
    },
    badge: {
      pt: 'IA GENERATIVA / FASTAPI',
      en: 'GENERATIVE AI / FASTAPI'
    },
    type: {
      pt: 'Python · FastAPI · Google Gemini 2.0 · Supabase PostgreSQL · FullCalendar',
      en: 'Python · FastAPI · Google Gemini 2.0 · Supabase PostgreSQL · FullCalendar'
    },
    shortDescription: {
      pt: 'Assistente inteligente integrado com WhatsApp e Painel Web para gestão pessoal, financeira e estúdio musical, unindo IA generativa com Google Gemini 2.0 e Supabase.',
      en: 'Intelligent personal and financial operations assistant combining Google Gemini 2.0 generative AI, WhatsApp webhook triggers, and a Supabase web dashboard.'
    },
    fullProblem: {
      pt: 'Dispersão de diários de aula de música, divisão de cachês da banda, finanças diárias e calendário em múltiplos aplicativos sem automação ou inteligência de contexto.',
      en: 'Scattered daily schedules, concert fee distribution logs, musical lesson diaries, and budget tracking across disconnected apps without unified context.'
    },
    fullSolution: {
      pt: [
        '<strong>IA Multimodal com Gemini 2.0:</strong> Interpretação de mensagens de voz e texto no WhatsApp para categorização automática de diários de aula, tarefas e gastos.',
        '<strong>Rateio Inteligente de Cachês:</strong> Cálculo instantâneo deduzindo custos de transporte e alimentação, formatando mensagem de prestação de contas para grupos.',
        '<strong>Integração de Calendário:</strong> Painel web com FullCalendar e sincronização iCal (.ics) direta com Google Calendar e Samsung Calendar.',
        '<strong>Arquitetura Custo Zero:</strong> Projetado em Python com FastAPI, Supabase PostgreSQL e contêineres Docker para execução resiliente e econômica.'
      ],
      en: [
        '<strong>Multimodal AI with Gemini 2.0:</strong> Transcribes audio notes and categorizes free-form text into database entities, lesson plans, and expenses.',
        '<strong>Concert Accounting Automation:</strong> Automates fee splitting, deducting transport and staging expenses with instant group-formatted balance sheets.',
        '<strong>Interactive Calendar & Sync:</strong> Dynamic FullCalendar dashboard with two-way iCal sync to Google and Samsung calendars.',
        '<strong>Zero-Cost Architecture:</strong> High-efficiency FastAPI backend running on Docker with Supabase PostgreSQL.'
      ]
    },
    tags: ['Python', 'FastAPI', 'Google Gemini 2.0', 'Supabase', 'PostgreSQL', 'Docker', 'FullCalendar', 'Automação'],
    isProprietary: false,
    isPrivate: true,
    links: {
      github: null,
      demo: null
    }
  }
];

let lastActiveElement = null;

export function updateProjectsLang() {
  const isEn = getLang() === 'en';
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card) => {
    const btn = card.querySelector('[data-project-target]');
    if (!btn) return;
    const projectId = btn.getAttribute('data-project-target');
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project) return;

    const badgeEl = card.querySelector('.project-badge');
    const titleEl = card.querySelector('.project-title');
    const typeEl = card.querySelector('.project-type');
    const descEl = card.querySelector('.project-description');
    const btnSpan = btn.querySelector('span');

    if (badgeEl) badgeEl.textContent = isEn ? project.badge.en : project.badge.pt;
    if (titleEl) titleEl.textContent = isEn ? project.title.en : project.title.pt;
    if (typeEl) typeEl.textContent = isEn ? project.type.en : project.type.pt;
    if (descEl) descEl.textContent = isEn ? project.shortDescription.en : project.shortDescription.pt;

    if (btnSpan) {
      btnSpan.textContent = isEn
        ? (project.featured ? 'View Full Case' : 'View Details')
        : (project.featured ? 'Ver Case Completo' : 'Ver Detalhes');
    }

    const noteEl = card.querySelector('.project-external-links .text-muted');
    if (noteEl) {
      if (project.isProprietary) {
        noteEl.textContent = isEn ? '🔒 Proprietary' : '🔒 Proprietário';
      } else if (project.isPrivate) {
        noteEl.textContent = isEn ? '🔒 Private' : '🔒 Privado';
      }
    }

    const gitLink = card.querySelector('.project-external-links a[aria-label*="GitHub"]');
    if (gitLink) {
      const projTitle = isEn ? project.title.en : project.title.pt;
      gitLink.setAttribute('aria-label', isEn ? `GitHub of ${projTitle}` : `GitHub do projeto ${projTitle}`);
    }

    const demoLink = card.querySelector('.project-external-links a[aria-label*="Demo"]');
    if (demoLink) {
      const projTitle = isEn ? project.title.en : project.title.pt;
      demoLink.setAttribute('aria-label', isEn ? `Live demo of ${projTitle}` : `Demonstração ao vivo de ${projTitle}`);
    }
  });
}

let activeOpenModalFn = null;

export function openProjectModal(id) {
  if (activeOpenModalFn) {
    activeOpenModalFn(id);
  }
}

export function initProjects() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('[data-project-target]');

  if (!modalBackdrop) return;

  function openModal(projectId) {
    const project = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project) return;

    const isEn = getLang() === 'en';
    lastActiveElement = document.activeElement;

    // Update section labels
    const sectionLabels = document.querySelectorAll('.modal-section-label');
    if (sectionLabels.length >= 3) {
      sectionLabels[0].textContent = isEn ? '// the challenge / problem' : '// o desafio / problema';
      sectionLabels[1].textContent = isEn ? '// solution & technical implementation' : '// solução & contribuição técnica';
      sectionLabels[2].textContent = isEn ? '// technologies used' : '// tecnologias utilizadas';
    }

    // Populate modal content
    const modalBadge = document.getElementById('modal-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalTags = document.getElementById('modal-tags');
    const modalLinks = document.getElementById('modal-links');

    if (modalBadge) modalBadge.textContent = isEn ? project.badge.en : project.badge.pt;
    if (modalTitle) modalTitle.textContent = isEn ? project.title.en : project.title.pt;
    if (modalSubtitle) modalSubtitle.textContent = isEn ? project.subtitle.en : project.subtitle.pt;
    if (modalProblem) modalProblem.textContent = isEn ? project.fullProblem.en : project.fullProblem.pt;

    if (modalCloseBtn) {
      modalCloseBtn.setAttribute('aria-label', isEn ? 'Close details dialog' : 'Fechar janela de detalhes');
    }

    if (modalSolution) {
      const solutionItems = isEn ? project.fullSolution.en : project.fullSolution.pt;
      modalSolution.innerHTML = solutionItems
        .map((item) => `<li class="modal-list-item">${item}</li>`)
        .join('');

      // If proprietary (Nova Smar case), insert real visual architecture topology
      if (project.isProprietary) {
        modalSolution.innerHTML += `
          <div class="architecture-topology-card" role="region" aria-label="${isEn ? 'Corporate Integration Architecture Topology' : 'Topologia de Arquitetura da Integração Corporativa'}">
            <div class="topology-header">
              <span class="topology-title">${isEn ? '// ENTERPRISE ARCHITECTURE TOPOLOGY · NOVA SMAR' : '// TOPOLOGIA DE ARQUITETURA CORPORATIVA · NOVA SMAR'}</span>
              <span class="topology-badge">${isEn ? '● 24/7 AUDITABLE' : '● PRODUÇÃO 24/7 AUDITÁVEL'}</span>
            </div>
            <div class="topology-grid">
              <div class="topology-node">
                <span class="node-icon">💻</span>
                <span class="node-name">${isEn ? 'INTRANET CLIENT' : 'CLIENTE INTRANET'}</span>
                <span class="node-role">${isEn ? 'Role-based access, cash flow & stock views' : 'Acessos por perfil, fluxo de caixa e inventário'}</span>
                <span class="node-tech">HTML5 / Vanilla JS</span>
              </div>
              <div class="topology-node">
                <span class="node-icon">⚙️</span>
                <span class="node-name">${isEn ? 'APP LAYER' : 'CAMADA WEB / APP'}</span>
                <span class="node-role">${isEn ? 'Parametrized OCI8 queries & audit logs' : 'Consultas OCI8 parametrizadas e logs de auditoria'}</span>
                <span class="node-tech">PHP 8 / OCI8</span>
              </div>
              <div class="topology-node">
                <span class="node-icon">🗄️</span>
                <span class="node-name">${isEn ? 'ORACLE 19c DB' : 'ORACLE DATABASE 19c'}</span>
                <span class="node-role">${isEn ? 'ACID Triggers, stored procedures & views' : 'Triggers ACID em tempo real e procedures'}</span>
                <span class="node-tech">Oracle PL/SQL</span>
              </div>
              <div class="topology-node">
                <span class="node-icon">🏢</span>
                <span class="node-name">${isEn ? 'ERP CORE' : 'ERP CORPORATIVO'}</span>
                <span class="node-role">${isEn ? 'Financial reconciliation & physical inventory' : 'Conciliação contábil e inventário físico'}</span>
                <span class="node-tech">TOTVS Protheus</span>
              </div>
            </div>
            <div class="topology-metrics">
              <div class="metric-item">⚡ <span>${isEn ? 'Trigger Latency:' : 'Latência de Trigger:'}</span> <strong>&lt; 15ms</strong></div>
              <div class="metric-item">🔒 <span>${isEn ? 'Consistency:' : 'Consistência:'}</span> <strong>ACID Strict</strong></div>
              <div class="metric-item">🏆 <span>${isEn ? 'Corporate Result:' : 'Resultado:'}</span> <strong>${isEn ? '2025 Record Inventory' : 'Inventário 2025 Recorde'}</strong></div>
            </div>
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
            <span>${isEn ? 'View on GitHub' : 'Ver no GitHub'}</span>
          </a>
        `;
      }
      if (project.links.demo) {
        linksHTML += `
          <a href="${project.links.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span>${isEn ? 'Live Demo' : 'Acessar Demo'}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
          </a>
        `;
      }
      if (project.isProprietary) {
        linksHTML = `
          <span class="text-muted font-mono" style="font-size: 0.8rem;">🔒 ${isEn ? 'Proprietary enterprise codebase (Nova Smar S/A)' : 'Código proprietário (Nova Smar S/A)'}</span>
        `;
      }
      if (project.isPrivate) {
        linksHTML = `
          <span class="text-muted font-mono" style="font-size: 0.8rem;">🔒 ${isEn ? 'Private repository (Personal Life OS)' : 'Repositório Privado (Life OS Pessoal)'}</span>
        `;
      }
      modalLinks.innerHTML = linksHTML;
    }

    // Show modal & disable background scroll
    modalBackdrop.classList.add('modal--open');
    document.body.style.overflow = 'hidden';

    // Set focus inside modal
    if (modalCloseBtn) modalCloseBtn.focus();

    // Deep link: update URL without full page reload
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('project', id);
      window.history.replaceState({}, '', url.toString());
    } catch {}
  }

  function closeModal() {
    modalBackdrop.classList.remove('modal--open');
    document.body.style.overflow = '';

    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }

    // Clear URL deep link parameter
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('project')) {
        url.searchParams.delete('project');
        window.history.replaceState({}, '', url.toString());
      }
    } catch {}
  }

  activeOpenModalFn = openModal;

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

  // Focus trap inside project modal
  modalBackdrop.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = modalBackdrop.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
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
    if (e.key === 'Escape' && modalBackdrop.classList.contains('modal--open')) {
      closeModal();
    }
  });

  // Check URL query parameters for deep-linked project
  try {
    const params = new URLSearchParams(window.location.search);
    const linkedProject = params.get('project');
    if (linkedProject && PROJECTS_DATA.some((p) => p.id === linkedProject)) {
      setTimeout(() => openModal(linkedProject), 200);
    }
  } catch {}
}
