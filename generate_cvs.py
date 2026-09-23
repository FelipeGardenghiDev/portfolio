import os
import subprocess
import fitz

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

CSS_STYLES = """
  @page {
    size: A4;
    margin: 13mm 15mm 13mm 15mm;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #111111;
    font-size: 8.8pt;
    line-height: 1.30;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 6pt;
  }
  .name {
    font-size: 18pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5pt;
    margin-bottom: 2pt;
    color: #000000;
  }
  .role {
    font-size: 10pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3pt;
    margin-bottom: 3pt;
    color: #222222;
  }
  .contact-info {
    font-size: 8.6pt;
    color: #333333;
    line-height: 1.3;
  }
  .contact-info a {
    color: #1155cc;
    text-decoration: underline;
  }
  .section-title {
    font-size: 9.8pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2pt;
    margin-top: 6pt;
    margin-bottom: 2.5pt;
    color: #000000;
    border-bottom: 1px solid #222222;
    padding-bottom: 1pt;
  }
  p {
    margin: 0 0 3.5pt 0;
    text-align: justify;
  }
  .skills-list p {
    margin: 0 0 2pt 0;
    text-align: left;
  }
  .skills-label {
    font-weight: bold;
    color: #000000;
  }
  .job {
    margin-bottom: 4pt;
  }
  .job-header {
    font-weight: bold;
    font-size: 9pt;
    color: #000000;
  }
  .job-period {
    font-weight: bold;
    font-size: 8.5pt;
    margin-bottom: 1.5pt;
    color: #333333;
  }
  ul {
    margin: 0 0 3.5pt 0;
    padding-left: 13pt;
  }
  li {
    margin-bottom: 1.5pt;
    text-align: justify;
  }
  .page-break {
    page-break-before: always;
  }
  .cert-category {
    font-weight: bold;
    font-size: 8.6pt;
    margin-top: 2pt;
    margin-bottom: 1.5pt;
    text-transform: uppercase;
    color: #222222;
  }
"""

def generate_dev_html():
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>CURRICULO - FELIPE GARDENGHI - DESENVOLVEDOR</title>
<style>{CSS_STYLES}</style>
</head>
<body>

<div class="header">
  <div class="name">FELIPE GARDENGHI</div>
  <div class="role">DESENVOLVEDOR FULL-STACK | ENGENHARIA DE SOFTWARE &amp; MICROSSERVI&Ccedil;OS</div>
  <div class="contact-info">
    Sert&atilde;ozinho, S&atilde;o Paulo | (16) 99373-3667 | <a href="mailto:felipegg.dev@gmail.com">felipegg.dev@gmail.com</a><br>
    <a href="https://linkedin.com/in/felipegardenghi">linkedin.com/in/felipegardenghi</a> | <a href="https://github.com/felipegardenghidev">github.com/felipegardenghidev</a> | <a href="https://felipegardenghidev.github.io/portfolio/">felipegardenghidev.github.io/portfolio</a>
  </div>
</div>

<div class="section-title">RESUMO PROFISSIONAL</div>
<p>
Desenvolvedor full-stack e graduando em <strong>Bacharelado em Ci&ecirc;ncia de Dados (UNIVESP)</strong> com experi&ecirc;ncia s&oacute;lida em engenharia de software corporativa, arquitetura de microsservi&ccedil;os distribu&iacute;dos e solu&ccedil;&otilde;es de dados. Atua no ecossistema <strong>Java 21 / Spring Boot 3</strong> aplicando <strong>Domain-Driven Design (DDD)</strong>, <strong>Transactional Outbox Pattern</strong>, mensageria com <strong>RabbitMQ</strong>, cache com <strong>Redis</strong> (Sliding Window rate limiting) e infraestrutura como c&oacute;digo via <strong>AWS Terraform IaC</strong>. Na camada frontend, projeta interfaces modernas em <strong>React 19 / Next.js 16 (App Router), TypeScript e Tailwind CSS v4</strong> com su&iacute;tes completas de testes automatizados (<strong>Vitest, Playwright E2E, JUnit 5, Mockito e JaCoCo &gt;80%</strong>). Atua na <strong>Nova Smar S/A</strong> com desenvolvimento de sistemas intranet (PHP, JavaScript, Oracle PL/SQL) integrados ao ERP TOTVS Protheus, Triggers corporativas e automa&ccedil;&atilde;o de dados de estoque e fluxo de caixa. Bagagem pr&eacute;via de 5 anos como empreendedor em e-commerce (Mercadol&iacute;der), agregando vis&atilde;o estrat&eacute;gica de neg&oacute;cio, custos e integridade de dados.
</p>

<div class="section-title">HABILIDADES T&Eacute;CNICAS</div>
<div class="skills-list">
  <p><span class="skills-label">Linguagens:</span> Java 21, TypeScript, JavaScript (ES6+), Python 3.11, PHP, SQL, Kotlin 2.0, C/C++, DAX.</p>
  <p><span class="skills-label">Backend &amp; Microsservi&ccedil;os:</span> Spring Boot 3, Domain-Driven Design (DDD), Specification Pattern, Transactional Outbox Pattern, RabbitMQ (Event-Driven), Redis (Sliding Window), REST APIs, Spring Security, Swagger / OpenAPI 3, FastAPI, Node.js, Laravel.</p>
  <p><span class="skills-label">Frontend &amp; Web:</span> React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS v4, HTML5, CSS3, Vite, Zustand, Zod, WebGL.</p>
  <p><span class="skills-label">Cloud, DevOps &amp; Testes:</span> AWS (Terraform IaC, VPC, ECS Fargate, RDS PostgreSQL, ElastiCache, Amazon MQ), Docker &amp; Compose, GitHub Actions (CI/CD), Vitest, Playwright (E2E), JUnit 5, Mockito, JaCoCo (&gt;80% Cobertura), Linux (Ubuntu, Debian), Windows.</p>
  <p><span class="skills-label">Banco de Dados:</span> Oracle PL/SQL (Triggers, Procedures, Functions, Otimiza&ccedil;&atilde;o de Queries), PostgreSQL, MySQL, Supabase, Redis.</p>
  <p><span class="skills-label">Ci&ecirc;ncia de Dados &amp; IA:</span> Machine Learning, LightGBM, SHAP (Explainable AI), Scikit-Learn, Pandas, NumPy, Streamlit, MLOps, Google MediaPipe, Google Gemini API.</p>
  <p><span class="skills-label">Ferramentas &amp; Metodologias:</span> Postman, HTTPie, JIRA, Confluence, Zendesk, Kanban/Scrum, Git, GitHub, Power BI, Figma, Clean Architecture, ERP TOTVS Protheus.</p>
  <p><span class="skills-label">Idiomas:</span> Portugu&ecirc;s (Nativo), Ingl&ecirc;s (B2 &ndash; Intermedi&aacute;rio Avan&ccedil;ado), Alem&atilde;o (A1 &ndash; B&aacute;sico).</p>
</div>

<div class="section-title">EXPERI&Ecirc;NCIA PROFISSIONAL</div>

<div class="job">
  <div class="job-header">Estagi&aacute;rio de T.I. | Nova Smar S/A | Sert&atilde;ozinho, SP</div>
  <div class="job-period">12/2024 &ndash; Presente</div>
  <ul>
    <li>Desenvolveu e implantou em produ&ccedil;&atilde;o dashboard financeiro em intranet (PHP, JavaScript, Oracle PL/SQL), substituindo controles manuais por sistema multiusu&aacute;rio audit&aacute;vel integrado ao ERP TOTVS Protheus, com fluxo de caixa di&aacute;rio/mensal e relat&oacute;rios em tempo real para tomada de decis&atilde;o da diretoria e acionistas.</li>
    <li>Implementou triggers, procedures e fun&ccedil;&otilde;es PL/SQL em Oracle DB e MySQL para automa&ccedil;&atilde;o de rotinas de banco de dados, eliminando retrabalho operacional e garantindo integridade transacional.</li>
    <li>Desenvolveu relat&oacute;rios de contabilidade e controle de estoque que viabilizaram a conclus&atilde;o do invent&aacute;rio corporativo da empresa em tempo recorde em 2025.</li>
    <li>Prestou suporte t&eacute;cnico sist&ecirc;mico a usu&aacute;rios (local e remoto), realizando diagn&oacute;stico de falhas, documenta&ccedil;&atilde;o de processos corporativos e treinamento t&eacute;cnico.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Assistente de E-commerce | Limiar Games Store | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2024 &ndash; 11/2024</div>
  <ul>
    <li>Criou e otimizou an&uacute;ncios em m&uacute;ltiplos marketplaces (Mercado Livre, Shopee, Magalu, Americanas), aumentando a visibilidade e convers&atilde;o de produtos.</li>
    <li>Gerenciou separa&ccedil;&atilde;o, confer&ecirc;ncia de pedidos, atendimento presencial e controle rigoroso de estoque f&iacute;sico.</li>
  </ul>
</div>

<div class="page-break"></div>

<div class="job">
  <div class="job-header">Aut&ocirc;nomo em E-commerce | Canivete da Ro&ccedil;a | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2019 &ndash; 08/2024</div>
  <ul>
    <li>Gerenciou opera&ccedil;&atilde;o pr&oacute;pria em m&uacute;ltiplos marketplaces, liderando estrat&eacute;gias de tr&aacute;fego pago, an&aacute;lise de m&eacute;tricas financeiras e atendimento ao cliente por 5 anos.</li>
    <li>Conquistou a qualifica&ccedil;&atilde;o de <strong>Mercadol&iacute;der em menos de 1 ano de opera&ccedil;&atilde;o</strong>, comprovando forte vis&atilde;o de neg&oacute;cio, efici&ecirc;ncia de processos e foco em resultados.</li>
  </ul>
</div>

<div class="section-title">PROJETOS EM DESTAQUE (PORTF&Oacute;LIO &amp; ENGENHARIA DE SOFTWARE)</div>

<div class="job">
  <div class="job-header">Fraud Detection &amp; Risk Engine API | Java 21 &middot; Spring Boot 3 &middot; Terraform AWS &middot; RabbitMQ &middot; Redis &middot; JaCoCo</div>
  <ul>
    <li>Engine corporativa de antifraude e an&aacute;lise de risco transacional (PIX, Cart&atilde;o, Boleto) com lat&ecirc;ncia &lt;100ms e arquitetura Hexagonal.</li>
    <li>Aplicou <strong>Domain-Driven Design (DDD)</strong> com Value Objects imut&aacute;veis (Cpf com valida&ccedil;&atilde;o de d&iacute;gitos e m&aacute;scara LGPD, RiskScore, TransactionAmount) e Specification Pattern combinando regras de fraude sem acoplamento.</li>
    <li>Implementou <strong>Transactional Outbox Pattern</strong> com persist&ecirc;ncia ACID no PostgreSQL e scheduler de polling com deduplica&ccedil;&atilde;o para mensageria ass&iacute;ncrona com <strong>RabbitMQ</strong>, prevenindo dual-write problem.</li>
    <li>Rate limiting e burst check com <strong>Redis Sliding Window Cache</strong> e fallback resiliente.</li>
    <li>Infraestrutura como C&oacute;digo (IaC) modular em <strong>AWS Terraform</strong> (VPC, Security Groups, RDS PostgreSQL, ElastiCache Redis, Amazon MQ e ECS Fargate). Cobertura aferida via <strong>JaCoCo &gt;80%</strong> com 32 testes automatizados no CI/CD via GitHub Actions.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">AgroFinance RWA Banking Dashboard | Next.js 16 &middot; React 19 &middot; TypeScript &middot; Tailwind v4 &middot; Vitest &middot; Playwright</div>
  <ul>
    <li>Plataforma banc&aacute;ria digital e cust&oacute;dia de Real World Assets (RWA) para o agroneg&oacute;cio com liquida&ccedil;&atilde;o de PIX em tempo real.</li>
    <li>Desenvolvido com Next.js 16 (App Router), React 19, TypeScript estrito, estado global com Zustand e valida&ccedil;&otilde;es din&acirc;micas com Zod. Decis&otilde;es arquiteturais documentadas via <strong>Architecture Decision Records (ADRs)</strong>.</li>
    <li>Su&iacute;te robusta de <strong>123 testes automatizados (98 testes unit&aacute;rios no Vitest + 25 testes End-to-End no Playwright)</strong> com 85.8% de cobertura de c&oacute;digo, integrada ao GitHub Actions e hospedada com alta disponibilidade na Vercel ($0 custo).</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Im&oacute;veis Pricing ML &ndash; Intelig&ecirc;ncia Imobili&aacute;ria | Python 3.11 &middot; LightGBM &middot; SHAP &middot; MLOps &middot; Streamlit</div>
  <ul>
    <li>Pipeline End-to-End de Ci&ecirc;ncia de Dados e Machine Learning: web scraping de +1.100 an&uacute;ncios reais, engenharia de atributos espaciais, modelo LightGBM (R&sup2; = 0.835 e redu&ccedil;&atilde;o de 61% no MAE) e explicabilidade de vari&aacute;veis via SHAP (XAI) em Reais.</li>
    <li>Dashboard interativo em Streamlit com simulador preditivo de pre&ccedil;o, detec&ccedil;&atilde;o visual de barganhas e arquitetura limpa de infer&ecirc;ncia.</li>
  </ul>
</div>

<div class="section-title">FORMA&Ccedil;&Atilde;O ACAD&Ecirc;MICA</div>
<div class="job">
  <div class="job-header">Bacharelado em Ci&ecirc;ncia de Dados | UNIVESP &ndash; Universidade Virtual do Estado de S&atilde;o Paulo</div>
  <div class="job-period">07/2024 &ndash; Presente | Sert&atilde;ozinho, SP</div>
  <p>Forma&ccedil;&atilde;o de n&iacute;vel superior abrangendo algoritmos, estruturas de dados, modelagem estat&iacute;stica, bancos de dados relacionais e n&atilde;o-relacionais, an&aacute;lise preditiva e aprendizado de m&aacute;quina.</p>
</div>

<div class="section-title">CERTIFICA&Ccedil;&Otilde;ES T&Eacute;CNICAS (+400H CERTIFICADAS)</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6pt; font-size: 8.2pt;">
  <div>
    <div class="cert-category">Front-End &amp; UI/UX</div>
    <ul>
      <li>Trilha | UI Design para Devs (24h) &ndash; Alura, 2025</li>
      <li>Trilha | React: JSX e Hooks (57h) &ndash; Alura, 2025</li>
      <li>Trilha | Acessibilidade e Web Inclusiva (28h) &ndash; Alura, 2025</li>
      <li>Trilha | Desenvolvimento Front-end (60h) &ndash; Alura, 2025</li>
      <li>Trilha Digital | Front-End (19h) &ndash; Santander / Ada, 2024</li>
    </ul>
    <div class="cert-category">Back-End &amp; APIs</div>
    <ul>
      <li>Trilha | PHP Web Completo (52h) &ndash; Alura, 2025</li>
      <li>Curso | Laravel: Aplica&ccedil;&atilde;o com MVC (8h) &ndash; Alura, 2025</li>
      <li>Curso | Swagger: Documentando APIs (8h) &ndash; Alura, 2025</li>
      <li>Curso | Quality Assurance: Testes e Bugs (8h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Gest&atilde;o &amp; Metodologias</div>
    <ul>
      <li>White Belt Six Sigma (2h) &ndash; RL &amp; Associados / UNIVESP, 2026</li>
      <li>Curso | Equipes &Aacute;geis e Scrum (8h) &ndash; Alura, 2025</li>
    </ul>
  </div>
  <div>
    <div class="cert-category">DevOps, Cloud &amp; Infraestrutura</div>
    <ul>
      <li>Curso | Git e GitHub: Controle de Vers&atilde;o (8h) &ndash; Alura, 2025</li>
      <li>Curso | Entrega Cont&iacute;nua e CI/CD (8h) &ndash; Alura, 2025</li>
      <li>Curso | Integra&ccedil;&atilde;o Cont&iacute;nua: Menos Risco (6h) &ndash; Alura, 2025</li>
      <li>Curso | Microsservi&ccedil;os: Padr&otilde;es de Projeto (6h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Banco de Dados &amp; BI</div>
    <ul>
      <li>Trilha | Consultas com Oracle Database (82h) &ndash; Alura, 2025</li>
      <li>Curso | Power BI Avan&ccedil;ado (32h) &ndash; SENAI, 2025</li>
      <li>Curso | Admin Oracle DB: Seguran&ccedil;a e Otimiza&ccedil;&atilde;o (14h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Intelig&ecirc;ncia Artificial</div>
    <ul>
      <li>Curso | GitHub Copilot e ChatGPT para Devs (8h) &ndash; Alura, 2025</li>
    </ul>
  </div>
</div>

</body>
</html>"""


def generate_suporte_html():
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>CURRICULO - FELIPE GARDENGHI - SUPORTE TÉCNICO</title>
<style>{CSS_STYLES}</style>
</head>
<body>

<div class="header">
  <div class="name">FELIPE GARDENGHI</div>
  <div class="role">ANALISTA DE SUPORTE T&Eacute;CNICO &amp; SUSTENTA&Ccedil;&Atilde;O DE SISTEMAS (TI / N2)</div>
  <div class="contact-info">
    Sert&atilde;ozinho, S&atilde;o Paulo | (16) 99373-3667 | <a href="mailto:felipegg.dev@gmail.com">felipegg.dev@gmail.com</a><br>
    <a href="https://linkedin.com/in/felipegardenghi">linkedin.com/in/felipegardenghi</a> | <a href="https://github.com/felipegardenghidev">github.com/felipegardenghidev</a> | <a href="https://felipegardenghidev.github.io/portfolio/">felipegardenghidev.github.io/portfolio</a>
  </div>
</div>

<div class="section-title">RESUMO PROFISSIONAL</div>
<p>
Analista de suporte t&eacute;cnico e graduando em <strong>Bacharelado em Ci&ecirc;ncia de Dados (UNIVESP)</strong> com s&oacute;lida viv&ecirc;ncia em atendimento a usu&aacute;rios (presencial e remoto), suporte N1/N2, diagn&oacute;stico avan&ccedil;ado de falhas sist&ecirc;micas, documenta&ccedil;&atilde;o de processos corporativos e automa&ccedil;&atilde;o de rotinas de TI. Experi&ecirc;ncia comprovada na sustenta&ccedil;&atilde;o e integra&ccedil;&atilde;o com o ERP <strong>TOTVS Protheus</strong>, administra&ccedil;&atilde;o e consultas em bancos de dados relacionais (<strong>Oracle PL/SQL, MySQL, PostgreSQL</strong>), ambientes <strong>Windows e Linux (Ubuntu, Debian, Kali)</strong>, redes corporativas, <strong>VPN (OpenVPN)</strong> e ferramentas de acesso remoto (AnyDesk, TeamViewer, VNC). Possui bagagem t&eacute;cnica s&oacute;lida em desenvolvimento de software (PHP, JavaScript, Python, REST APIs, Postman, Git), viabilizando r&aacute;pida interlocu&ccedil;&atilde;o com squads de engenharia, an&aacute;lise profunda de logs de erro, resolu&ccedil;&atilde;o proativa de incidentes e constru&ccedil;&atilde;o de automa&ccedil;&otilde;es e scripts para mitigar retrabalho operacional.
</p>

<div class="section-title">HABILIDADES T&Eacute;CNICAS</div>
<div class="skills-list">
  <p><span class="skills-label">Suporte &amp; Service Desk:</span> Zendesk, JIRA Service Management, Confluence, SLA, Gest&atilde;o de Incidentes e Chamados, ITIL/Kanban/Scrum.</p>
  <p><span class="skills-label">Redes &amp; Acesso Remoto:</span> VPN (OpenVPN), AnyDesk, TeamViewer, VNC, RDP, Protocolos TCP/IP, DNS, DHCP, Roteamento, Diagn&oacute;stico de Conectividade.</p>
  <p><span class="skills-label">Sistemas Operacionais:</span> Linux (Ubuntu, Debian, Kali), Windows 10/11, Windows Server, Scripts de Automa&ccedil;&atilde;o (Bash, PowerShell).</p>
  <p><span class="skills-label">Bancos de Dados:</span> Oracle PL/SQL (Triggers, Procedures, Functions, Diagn&oacute;stico de Travamentos e Otimiza&ccedil;&atilde;o), MySQL, PostgreSQL.</p>
  <p><span class="skills-label">ERP &amp; Integra&ccedil;&atilde;o de Sistemas:</span> ERP TOTVS Protheus, Bling, REST APIs, Webhooks, Concilia&ccedil;&atilde;o de Dados Cont&aacute;beis e Estoque.</p>
  <p><span class="skills-label">Ferramentas de An&aacute;lise &amp; Diagn&oacute;stico:</span> Postman, HTTPie, Swagger/OpenAPI, Git, GitHub, Docker (Containers b&aacute;sico), Power BI, Tableau.</p>
  <p><span class="skills-label">Linguagens &amp; Automa&ccedil;&atilde;o:</span> SQL avan&ccedil;ado, Python (Scripts de automa&ccedil;&atilde;o e dados), PHP, JavaScript/TypeScript, HTML5, CSS3, DAX.</p>
  <p><span class="skills-label">Idiomas:</span> Portugu&ecirc;s (Nativo), Ingl&ecirc;s (B2 &ndash; Intermedi&aacute;rio Avan&ccedil;ado), Alem&atilde;o (A1 &ndash; B&aacute;sico).</p>
</div>

<div class="section-title">EXPERI&Ecirc;NCIA PROFISSIONAL</div>

<div class="job">
  <div class="job-header">Estagi&aacute;rio de T.I. / Suporte &amp; Sistemas | Nova Smar S/A | Sert&atilde;ozinho, SP</div>
  <div class="job-period">12/2024 &ndash; Presente</div>
  <ul>
    <li>Presta suporte t&eacute;cnico presencial e remoto a colaboradores de diferentes departamentos da empresa, realizando triagem, diagn&oacute;stico e resolu&ccedil;&atilde;o de incidentes de hardware, software, rede e acessos com alto &iacute;ndice de resolu&ccedil;&atilde;o no primeiro contato.</li>
    <li>Elaborou manuais de instru&ccedil;&atilde;o, documenta&ccedil;&atilde;o de procedimentos operacionais padr&atilde;o (POP) e guiou treinamentos para capacita&ccedil;&atilde;o de usu&aacute;rios em novas ferramentas corporativas.</li>
    <li>Desenvolveu e manteve dashboard financeiro em intranet (PHP, JavaScript, Oracle PL/SQL), atuando na integra&ccedil;&atilde;o e sustenta&ccedil;&atilde;o de dados com o ERP TOTVS Protheus, eliminando controles manuais e permitindo gera&ccedil;&atilde;o de relat&oacute;rios din&acirc;micos e audit&aacute;veis.</li>
    <li>Implementou triggers e procedures PL/SQL em Oracle DB e MySQL para automa&ccedil;&atilde;o de rotinas de banco de dados, prevenindo falhas de integridade e reduzindo chamados de suporte por inconsist&ecirc;ncia.</li>
    <li>Desenvolveu relat&oacute;rios de contabilidade e de controle de estoque que viabilizaram a conclus&atilde;o do invent&aacute;rio f&iacute;sico da empresa em tempo recorde em 2025.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Assistente de E-commerce &amp; Opera&ccedil;&otilde;es | Limiar Games Store | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2024 &ndash; 11/2024</div>
  <ul>
    <li>Realizou atendimento ao cliente presencial e via canais digitais, com resolu&ccedil;&atilde;o de d&uacute;vidas, trocas e p&oacute;s-venda com alta avalia&ccedil;&atilde;o de satisfa&ccedil;&atilde;o.</li>
    <li>Gerenciou separa&ccedil;&atilde;o, confer&ecirc;ncia de pedidos, integra&ccedil;&atilde;o de sistemas de expedi&ccedil;&atilde;o com marketplaces e organiza&ccedil;&atilde;o de estoque f&iacute;sico.</li>
  </ul>
</div>

<div class="page-break"></div>

<div class="job">
  <div class="job-header">Aut&ocirc;nomo em E-commerce &amp; Atendimento | Canivete da Ro&ccedil;a | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2019 &ndash; 08/2024</div>
  <ul>
    <li>Liderou atendimento ao cliente, suporte t&eacute;cnico a produtos, p&oacute;s-venda e gest&atilde;o de reclama&ccedil;&otilde;es em plataformas de marketplace por 5 anos.</li>
    <li>Conquistou a medalha de <strong>Mercadol&iacute;der em menos de 1 ano de opera&ccedil;&atilde;o</strong>, mantendo &iacute;ndices m&aacute;ximos de reputa&ccedil;&atilde;o, resolu&ccedil;&atilde;o &aacute;gil de problemas e satisfa&ccedil;&atilde;o do consumidor.</li>
  </ul>
</div>

<div class="section-title">FORMA&Ccedil;&Atilde;O ACAD&Ecirc;MICA</div>
<div class="job">
  <div class="job-header">Bacharelado em Ci&ecirc;ncia de Dados | UNIVESP &ndash; Universidade Virtual do Estado de S&atilde;o Paulo</div>
  <div class="job-period">07/2024 &ndash; Presente | Sert&atilde;ozinho, SP</div>
  <p>Forma&ccedil;&atilde;o superior com foco em algoritmos, modelagem de dados, infraestrutura de banco de dados, seguran&ccedil;a da informa&ccedil;&atilde;o e resolu&ccedil;&atilde;o l&oacute;gica de problemas complexos.</p>
</div>

<div class="section-title">CERTIFICA&Ccedil;&Otilde;ES T&Eacute;CNICAS (+400H CERTIFICADAS)</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6pt; font-size: 8.2pt;">
  <div>
    <div class="cert-category">Banco de Dados, BI &amp; Infraestrutura</div>
    <ul>
      <li>Trilha | Consultas com Oracle Database (82h) &ndash; Alura, 2025</li>
      <li>Curso | Admin Oracle DB: Seguran&ccedil;a e Otimiza&ccedil;&atilde;o (14h) &ndash; Alura, 2025</li>
      <li>Curso | Power BI Avan&ccedil;ado (32h) &ndash; SENAI, 2025</li>
      <li>Curso | Git e GitHub: Controle de Vers&atilde;o (8h) &ndash; Alura, 2025</li>
      <li>Curso | Entrega Cont&iacute;nua e CI/CD (8h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Qualidade, Processos &amp; Testes</div>
    <ul>
      <li>Curso | Quality Assurance: Plano de Testes e Gest&atilde;o de Bugs (8h) &ndash; Alura, 2025</li>
      <li>Curso | Swagger: Documentando APIs e Integra&ccedil;&otilde;es (8h) &ndash; Alura, 2025</li>
      <li>Curso | JavaScript: Consumindo e Tratando Dados de API (6h) &ndash; Alura, 2025</li>
    </ul>
  </div>
  <div>
    <div class="cert-category">Gest&atilde;o &amp; Metodologias &Aacute;geis</div>
    <ul>
      <li>White Belt Six Sigma (2h) &ndash; RL &amp; Associados / UNIVESP, 2026</li>
      <li>Curso | Equipes &Aacute;geis: Organizando Pap&eacute;is e Processos (8h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Desenvolvimento &amp; Automa&ccedil;&atilde;o de TI</div>
    <ul>
      <li>Trilha | PHP Web: Aplica&ccedil;&otilde;es e Rotinas Web (52h) &ndash; Alura, 2025</li>
      <li>Trilha | Acessibilidade e Tecnologias Web (28h) &ndash; Alura, 2025</li>
      <li>Trilha | Desenvolvimento Front-end (60h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Intelig&ecirc;ncia Artificial &amp; Produtividade</div>
    <ul>
      <li>Curso | GitHub Copilot e ChatGPT para Produtividade T&eacute;cnica (8h) &ndash; Alura, 2025</li>
    </ul>
  </div>
</div>

</body>
</html>"""


def render_pdf(html_content, output_pdf):
    temp_html = output_pdf.replace('.pdf', '_temp.html')
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_content)

    if os.path.exists(output_pdf):
        os.remove(output_pdf)

    edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
    file_url = 'file:///' + os.path.abspath(temp_html).replace('\\', '/')
    cmd = [
        edge_path,
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        f'--print-to-pdf={output_pdf}',
        file_url
    ]
    subprocess.run(cmd, check=True)

    import time
    for _ in range(20):
        if os.path.exists(output_pdf) and os.path.getsize(output_pdf) > 1000:
            break
        time.sleep(0.3)

    if os.path.exists(temp_html):
        os.remove(temp_html)

    doc = fitz.open(output_pdf)
    print(f"Generated '{os.path.basename(output_pdf)}': {len(doc)} pages, {os.path.getsize(output_pdf)} bytes")
    return doc


if __name__ == '__main__':
    dev_pdf = os.path.join(BASE_DIR, 'CURRICULO - FELIPE GARDENGHI - DESENVOLVEDOR.pdf')
    suporte_pdf = os.path.join(BASE_DIR, 'CURRICULO - FELIPE GARDENGHI - SUPORTE TÉCNICO.pdf')

    doc_dev = render_pdf(generate_dev_html(), dev_pdf)
    doc_suporte = render_pdf(generate_suporte_html(), suporte_pdf)

    # Render pages to PNG to inspect visually
    for i, p in enumerate(doc_dev):
        p.get_pixmap(dpi=150).save(os.path.join(BASE_DIR, f'new_dev_page_{i+1}.png'))
    for i, p in enumerate(doc_suporte):
        p.get_pixmap(dpi=150).save(os.path.join(BASE_DIR, f'new_suporte_page_{i+1}.png'))

    # Synchronize all developer CV copies in the repository
    dev_bytes = open(dev_pdf, 'rb').read()
    destinations = [
        os.path.join(BASE_DIR, 'felipe-gardenghi-cv.pdf'),
        os.path.join(BASE_DIR, 'public', 'felipe-gardenghi-cv.pdf'),
        os.path.join(BASE_DIR, 'public', 'resume', 'felipe-gardenghi-cv.pdf'),
        os.path.join(BASE_DIR, 'resume', 'felipe-gardenghi-cv.pdf'),
    ]
    for dest in destinations:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, 'wb') as f:
            f.write(dev_bytes)
        print(f"Synced -> {dest}")
