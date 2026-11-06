import os
import subprocess

try:
    import fitz
except ImportError:
    fitz = None

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
    font-size: 9.4pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.15pt;
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
  <div class="role">DESENVOLVEDOR BACKEND / FULL-STACK | ENGENHARIA DE SOFTWARE, CI&Ecirc;NCIA DE DADOS &amp; IA</div>
  <div class="contact-info">
    Sert&atilde;ozinho, S&atilde;o Paulo | (16) 99373-3667 | <a href="mailto:felipegg.dev@gmail.com">felipegg.dev@gmail.com</a><br>
    <a href="https://linkedin.com/in/felipegardenghi">linkedin.com/in/felipegardenghi</a> | <a href="https://github.com/felipegardenghidev">github.com/felipegardenghidev</a> | <a href="https://felipegardenghi.com.br">felipegardenghi.com.br</a>
  </div>
</div>

<div class="section-title">RESUMO PROFISSIONAL</div>
<p>
Desenvolvedor com <strong>2 anos de experi&ecirc;ncia corporativa</strong> e graduando em <strong>Bacharelado em Ci&ecirc;ncia de Dados (UNIVESP)</strong> com atua&ccedil;&atilde;o s&oacute;lida em engenharia de software, microsservi&ccedil;os, banco de dados corporativo e solu&ccedil;&otilde;es anal&iacute;ticas. Atua nos ecossistemas <strong>C# / .NET 8</strong> (ASP.NET Core, EF Core, Dapper, Clean Architecture, CQRS) e <strong>Java 21 / Spring Boot 3</strong> aplicando <strong>Arquitetura Hexagonal</strong>, <strong>Virtual Threads (Loom)</strong>, <strong>Transactional Outbox</strong>, <strong>Circuit Breaker (Resilience4j)</strong>, mensageria ass&iacute;ncrona com <strong>RabbitMQ</strong> e cache com <strong>Redis Lua</strong>. Na camada frontend, desenvolve com <strong>React 19, Next.js 16, Angular 19 (Signals &amp; Web Workers), TypeScript e Tailwind CSS</strong> com ampla cobertura de testes automatizados (<strong>Vitest, Playwright E2E, xUnit, JUnit 5</strong>). Na <strong>Nova Smar S/A</strong>, desenvolveu dashboards corporativos em intranet (PHP, Oracle PL/SQL, OCI8) integrados ao ERP TOTVS Protheus, triggers transacionais e concilia&ccedil;&atilde;o de estoque e invent&aacute;rio corporativo. Bagagem pr&eacute;via de 5 anos como empreendedor no e-commerce (Mercadol&iacute;der), agregando vis&atilde;o estrat&eacute;gica de neg&oacute;cio e processos.
</p>

<div class="section-title">HABILIDADES T&Eacute;CNICAS</div>
<div class="skills-list">
  <p><span class="skills-label">Linguagens:</span> C#, Java 21, TypeScript, JavaScript (ES6+), Python 3.11, PHP, SQL, Kotlin, C/C++, DAX.</p>
  <p><span class="skills-label">Backend &amp; Microsservi&ccedil;os:</span> ASP.NET Core (.NET 8), Entity Framework Core, Dapper, Spring Boot 3, Domain-Driven Design (DDD), Clean Architecture, Hexagonal, RabbitMQ, Redis, REST APIs, Swagger / OpenAPI 3, FastAPI, Laravel.</p>
  <p><span class="skills-label">Frontend &amp; Mobile:</span> React 19, Next.js 16, Angular 19, TypeScript, Capacitor (Android Nativo), Tailwind CSS, Decimal.js, TradingView Canvas, Web Workers, Vite, Zustand.</p>
  <p><span class="skills-label">Cloud, DevOps &amp; Testes:</span> Docker &amp; Compose, Terraform (IaC / AWS), GitHub Actions (CI/CD Automatizado), Vitest, Playwright (E2E), xUnit, JUnit 5, JaCoCo, Testcontainers, Linux, Windows.</p>
  <p><span class="skills-label">Banco de Dados:</span> Oracle Database (PL/SQL, Triggers, Procedures, Otimiza&ccedil;&atilde;o, Parametriza&ccedil;&atilde;o Segura), PostgreSQL, MySQL, SQL Server, Redis.</p>
  <p><span class="skills-label">Ci&ecirc;ncia de Dados &amp; IA:</span> Machine Learning, LightGBM, SHAP (Explainable AI), Scikit-Learn, Pandas, NumPy, Streamlit, Web Scraping.</p>
  <p><span class="skills-label">Idiomas:</span> Portugu&ecirc;s (Nativo), Ingl&ecirc;s (B2 &ndash; Intermedi&aacute;rio Avan&ccedil;ado), Alem&atilde;o (A1 &ndash; B&aacute;sico).</p>
</div>

<div class="section-title">EXPERI&Ecirc;NCIA PROFISSIONAL</div>

<div class="job">
  <div class="job-header">Desenvolvedor de Software (Est&aacute;gio) | Nova Smar S/A | Sert&atilde;ozinho, SP</div>
  <div class="job-period">12/2024 &ndash; 12/2026 (2 anos completos)</div>
  <ul>
    <li>Desenvolveu e implantou em produ&ccedil;&atilde;o dashboard financeiro em intranet (PHP, JavaScript, Oracle PL/SQL), substituindo controles manuais por sistema multiusu&aacute;rio audit&aacute;vel integrado ao ERP TOTVS Protheus, com fluxo de caixa di&aacute;rio/mensal e relat&oacute;rios em tempo real para tomada de decis&atilde;o executiva.</li>
    <li>Implementou triggers, procedures e fun&ccedil;&otilde;es PL/SQL em Oracle DB e MySQL para automa&ccedil;&atilde;o de rotinas de banco de dados, eliminando retrabalho operacional e garantindo integridade transacional.</li>
    <li>Desenvolveu relat&oacute;rios de contabilidade e controle de estoque que viabilizaram a conclus&atilde;o do invent&aacute;rio corporativo da empresa em tempo recorde em 2025.</li>
    <li>Prestou suporte t&eacute;cnico sist&ecirc;mico a usu&aacute;rios (local e remoto), diagn&oacute;stico de falhas, documenta&ccedil;&atilde;o de processos corporativos e treinamento t&eacute;cnico.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Assistente de E-commerce | Limiar Games Store | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2024 &ndash; 11/2024</div>
  <ul>
    <li>Criou e otimizou an&uacute;ncios em m&uacute;ltiplos marketplaces (Mercado Livre, Shopee, Magalu), gerenciando expedi&ccedil;&atilde;o e integra&ccedil;&atilde;o de estoque f&iacute;sico.</li>
  </ul>
</div>

<div class="page-break"></div>

<div class="job">
  <div class="job-header">Aut&ocirc;nomo em E-commerce | Canivete da Ro&ccedil;a | Sert&atilde;ozinho, SP</div>
  <div class="job-period">09/2019 &ndash; 08/2024</div>
  <ul>
    <li>Gerenciou opera&ccedil;&atilde;o pr&oacute;pria em m&uacute;ltiplos marketplaces por 5 anos, conquistando a qualifica&ccedil;&atilde;o de <strong>Mercadol&iacute;der em menos de 1 ano</strong>, atuando em estrat&eacute;gias de tr&aacute;fego pago, an&aacute;lise de margem e atendimento.</li>
  </ul>
</div>

<div class="section-title">PROJETOS P&Uacute;BLICOS EM DESTAQUE (GITHUB P&Uacute;BLICO)</div>

<div class="job">
  <div class="job-header">Ecossistema FinRisk: Fraud API (Java 21), Order API (.NET 8) &amp; Cockpit (Angular 19) | 19 ADRs</div>
  <ul>
    <li>Tr&iacute;ade corporativa distribu&iacute;da orquestrando microsservi&ccedil;os em <strong>Java 21</strong> e <strong>.NET 8</strong> com frontend <strong>Angular 19</strong> (19 ADRs formais e 98+ testes automatizados).</li>
    <li><strong>Fraud Detection API (Java 21):</strong> Arquitetura Hexagonal, Virtual Threads, 7 regras antifraude em tempo real (Haversine, Z-Score), Redis Lua com Resilience4j, Transactional Outbox, RabbitMQ, Testcontainers e 46+ testes JaCoCo.</li>
    <li><strong>Order Processing API (.NET 8):</strong> Clean Architecture, CQRS h&iacute;brido (EF Core + Dapper), enfileiramento com System.Threading.Channels e 28 testes xUnit.</li>
    <li><strong>FinRisk Operations Hub (Angular 19):</strong> Reatividade com Signals, c&aacute;lculo de risco Monte Carlo em Web Worker a 60 FPS e Docker Nginx.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">AgroFinance RWA Banking Dashboard | Next.js 16 &middot; React 19 &middot; TypeScript &middot; TradingView &middot; 138 Testes</div>
  <ul>
    <li>Plataforma banc&aacute;ria de cust&oacute;dia de Real World Assets (RWA) e CPR Digital para o agroneg&oacute;cio, orientada por 9 Architecture Decision Records (ADRs).</li>
    <li>Aritm&eacute;tica de precis&atilde;o arbitr&aacute;ria com <strong>Decimal.js</strong>, gr&aacute;ficos TradingView Canvas a 60 FPS, simula&ccedil;&atilde;o estoc&aacute;stica Monte Carlo em Web Worker e <strong>130 testes Vitest + 8 su&iacute;tes E2E no Playwright (100% passing)</strong>.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Sert&atilde;ozinho Digital | React 19 &middot; TypeScript &middot; Capacitor 8 (Android Nativo) &middot; CI/CD GitHub Actions</div>
  <ul>
    <li>Portal c&iacute;vico municipal com web scraping din&acirc;mico em tempo real do portal da prefeitura de Sert&atilde;ozinho, mapa interativo de utilidade p&uacute;blica com rotas GPS (UPAs, Ecopontos) e canal colaborativo cidad&atilde;o.</li>
    <li>Pipeline de CI/CD automatizado no GitHub Actions com testes automatizados, linters e compila&ccedil;&atilde;o de APK Android nativo via Gradle.</li>
  </ul>
</div>

<div class="job">
  <div class="job-header">Im&oacute;veis Pricing ML &ndash; Intelig&ecirc;ncia Imobili&aacute;ria | Python 3.11 &middot; LightGBM &middot; SHAP &middot; Streamlit</div>
  <ul>
    <li>Pipeline End-to-End de Ci&ecirc;ncia de Dados: web scraping de +1.100 an&uacute;ncios reais, engenharia de atributos espaciais, modelo LightGBM (R&sup2; = 0.835) e explicabilidade de vari&aacute;veis via SHAP (XAI) em Reais com simulador Streamlit.</li>
  </ul>
</div>

<div class="section-title">FORMA&Ccedil;&Atilde;O ACAD&Ecirc;MICA</div>
<div class="job">
  <div class="job-header">Bacharelado em Ci&ecirc;ncia de Dados | UNIVESP &ndash; Universidade Virtual do Estado de S&atilde;o Paulo</div>
  <div class="job-period">07/2024 &ndash; Previs&atilde;o de Conclus&atilde;o: Junho/2027 (1&ordm; Semestre) | Sert&atilde;ozinho, SP</div>
  <p>Forma&ccedil;&atilde;o superior abrangendo algoritmos, estruturas de dados, modelagem estat&iacute;stica, bancos de dados, an&aacute;lise preditiva e aprendizado de m&aacute;quina.</p>
</div>

<div class="section-title">CERTIFICA&Ccedil;&Otilde;ES T&Eacute;CNICAS (+400H CERTIFICADAS)</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6pt; font-size: 8.2pt;">
  <div>
    <div class="cert-category">Front-End &amp; UI/UX</div>
    <ul>
      <li>Trilha | UI Design para Devs (24h) &ndash; Alura, 2025</li>
      <li>Trilha | React: JSX e Hooks (57h) &ndash; Alura, 2025</li>
      <li>Trilha | Desenvolvimento Front-end (60h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Back-End &amp; APIs</div>
    <ul>
      <li>Trilha | PHP Web Completo (52h) &ndash; Alura, 2025</li>
      <li>Curso | Laravel: MVC e APIs (8h) &ndash; Alura, 2025</li>
      <li>Curso | QA: Testes e Gest&atilde;o de Bugs (8h) &ndash; Alura, 2025</li>
    </ul>
  </div>
  <div>
    <div class="cert-category">DevOps, Cloud &amp; Infraestrutura</div>
    <ul>
      <li>Curso | Git e GitHub: Controle de Vers&atilde;o (8h) &ndash; Alura, 2025</li>
      <li>Curso | Entrega Cont&iacute;nua e CI/CD (8h) &ndash; Alura, 2025</li>
      <li>Curso | Microsservi&ccedil;os: Padr&otilde;es de Projeto (6h) &ndash; Alura, 2025</li>
    </ul>
    <div class="cert-category">Banco de Dados &amp; BI</div>
    <ul>
      <li>Trilha | Consultas com Oracle Database (82h) &ndash; Alura, 2025</li>
      <li>Curso | Power BI Avan&ccedil;ado (32h) &ndash; SENAI, 2025</li>
      <li>White Belt Six Sigma (2h) &ndash; RL &amp; Associados / UNIVESP, 2026</li>
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
  <p><span class="skills-label">Linguagens &amp; Automa&ccedil;&atilde;o:</span> SQL avan&ccedil;ado, Python (Scripts e automa&ccedil;&atilde;o), PHP, Angular, JavaScript/TypeScript, HTML5, CSS3, DAX.</p>
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
  <div class="job-period">07/2024 &ndash; Previs&atilde;o de Conclus&atilde;o: Junho/2027 (1&ordm; Semestre) | Sert&atilde;ozinho, SP</div>
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


def find_browser_cmd():
    import shutil
    # 1. Windows paths
    for path in [
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
    ]:
        if os.path.exists(path):
            return [path]
    # 2. Flatpak Brave
    if shutil.which('flatpak'):
        if subprocess.run(['flatpak', 'info', 'com.brave.Browser'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0:
            return ['flatpak', 'run', '--filesystem=host', 'com.brave.Browser']
    # 3. Linux native binaries
    for b in ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'microsoft-edge', 'brave-browser']:
        if shutil.which(b):
            return [b]
    raise RuntimeError('Nenhum navegador Chromium compatível para renderização PDF foi encontrado.')


def render_pdf(html_content, output_pdf):
    temp_html = output_pdf.replace('.pdf', '_temp.html')
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_content)

    if os.path.exists(output_pdf):
        os.remove(output_pdf)

    browser_cmd = find_browser_cmd()
    file_url = 'file:///' + os.path.abspath(temp_html).replace('\\', '/')
    cmd = browser_cmd + [
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

    pages = 0
    doc = None
    if fitz:
        doc = fitz.open(output_pdf)
        pages = len(doc)
    else:
        try:
            out = subprocess.check_output(["pdfinfo", output_pdf], text=True)
            for line in out.splitlines():
                if "Pages:" in line:
                    pages = int(line.split(":")[1].strip())
        except Exception:
            pages = 2

    print(f"Generated '{os.path.basename(output_pdf)}': {pages} pages, {os.path.getsize(output_pdf)} bytes")
    return doc


if __name__ == '__main__':
    dev_pdf = os.path.join(BASE_DIR, 'CURRICULO - FELIPE GARDENGHI - DESENVOLVEDOR.pdf')
    suporte_pdf = os.path.join(BASE_DIR, 'CURRICULO - FELIPE GARDENGHI - SUPORTE TÉCNICO.pdf')

    doc_dev = render_pdf(generate_dev_html(), dev_pdf)
    doc_suporte = render_pdf(generate_suporte_html(), suporte_pdf)

    # Render pages to PNG to inspect visually
    if doc_dev:
        for i, p in enumerate(doc_dev):
            p.get_pixmap(dpi=150).save(os.path.join(BASE_DIR, f'new_dev_page_{i+1}.png'))
    else:
        prefix_dev = os.path.join(BASE_DIR, 'new_dev_page')
        subprocess.run(["pdftoppm", "-png", "-r", "150", dev_pdf, prefix_dev], check=False)

    if doc_suporte:
        for i, p in enumerate(doc_suporte):
            p.get_pixmap(dpi=150).save(os.path.join(BASE_DIR, f'new_suporte_page_{i+1}.png'))
    else:
        prefix_sup = os.path.join(BASE_DIR, 'new_suporte_page')
        subprocess.run(["pdftoppm", "-png", "-r", "150", suporte_pdf, prefix_sup], check=False)

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
