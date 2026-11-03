/**
 * Interactive Developer Terminal CLI
 * Provides an authentic, reactive command line experience for technical visitors.
 */
import { getLang } from './i18n.js';

export function initTerminal() {
  const terminal = document.getElementById('interactive-terminal');
  if (!terminal) return;

  const outputContainer = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-input');
  const pills = document.querySelectorAll('.terminal-pill');

  if (!input || !outputContainer) return;

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const isEn = getLang() === 'en';

    // Print command line
    const cmdEntry = document.createElement('div');
    cmdEntry.className = 'terminal-line terminal-user-cmd';
    cmdEntry.innerHTML = `<span class="terminal-prompt">felipe@fedora:~$</span> <span class="cmd-text">${escapeHtml(rawCmd)}</span>`;
    outputContainer.appendChild(cmdEntry);

    // Process output
    const responseEl = document.createElement('div');
    responseEl.className = 'terminal-line terminal-response';

    switch (cmd) {
      case 'help':
        responseEl.innerHTML = isEn
          ? `<div class="term-help">
  <span class="text-accent font-bold">AVAILABLE COMMANDS:</span>
  <div><span class="term-cmd">skills</span>     - View tech stack radar and core competencies (Backend first)</div>
  <div><span class="term-cmd">projects</span>   - List featured enterprise & open-source projects</div>
  <div><span class="term-cmd">experience</span> - Show professional trajectory at Nova Smar, e-commerce & volunteering</div>
  <div><span class="term-cmd">education</span>  - Show degrees at UNIVESP, UNAERP & UFSCar</div>
  <div><span class="term-cmd">cv</span>         - Open interactive 2-page curriculum vitae modal</div>
  <div><span class="term-cmd">contact</span>    - Show direct email, LinkedIn & GitHub profiles</div>
  <div><span class="term-cmd">clear</span>      - Clean up the terminal console</div>
</div>`
          : `<div class="term-help">
  <span class="text-accent font-bold">COMANDOS DISPONÍVEIS:</span>
  <div><span class="term-cmd">skills</span>     - Visualizar radar técnico e competências centrais (Backend primeiro)</div>
  <div><span class="term-cmd">projects</span>   - Listar projetos corporativos e open-source em destaque</div>
  <div><span class="term-cmd">experience</span> - Exibir trajetória na Nova Smar, e-commerce e voluntariado</div>
  <div><span class="term-cmd">education</span>  - Exibir formação acadêmica na UNIVESP, UNAERP e UFSCar</div>
  <div><span class="term-cmd">cv</span>         - Abrir o visualizador do currículo de 2 páginas</div>
  <div><span class="term-cmd">contact</span>    - Exibir e-mail direto, LinkedIn e GitHub</div>
  <div><span class="term-cmd">clear</span>      - Limpar a tela do console</div>
</div>`;
        break;

      case 'skills':
      case 'stack':
        responseEl.innerHTML = `
<div class="term-table">
  <div class="term-row"><span class="term-key">01. Backend Core:</span> <span class="term-val">Java 21, Spring Boot 3, C# 12, .NET 8, CQRS, Hexagonal, Clean Arch, RabbitMQ, Outbox</span></div>
  <div class="term-row"><span class="term-key">02. Databases & ERP:</span> <span class="term-val">Oracle PL/SQL (Triggers/Procedures), PostgreSQL, MySQL, Redis (Lua/ZSET), TOTVS Protheus</span></div>
  <div class="term-row"><span class="term-key">03. Data & AI:</span> <span class="term-val">Python 3.11, LightGBM, SHAP (XAI), Scikit-Learn, Pandas, NumPy, FastAPI, Streamlit</span></div>
  <div class="term-row"><span class="term-key">04. Frontend:</span> <span class="term-val">TypeScript, React 19, Next.js 16, Angular 19 (Signals), Tailwind v4, Web Workers (60 FPS)</span></div>
  <div class="term-row"><span class="term-key">05. DevOps & Testing:</span> <span class="term-val">Docker, Terraform AWS IaC, GitHub Actions, Vitest, Playwright E2E, xUnit, JUnit 5, JaCoCo</span></div>
  <div class="term-row"><span class="term-key">06. Architecture:</span> <span class="term-val">Domain-Driven Design (DDD), 19 formal ADRs, Resilient Microservices, Zero-Jank UI</span></div>
</div>`;
        break;

      case 'projects':
        responseEl.innerHTML = isEn
          ? `<div class="term-projects">
  <div><span class="term-bullet">01.</span> <strong>Nova Smar Financial Dashboard</strong> (Production Intranet / Oracle PL/SQL / TOTVS Protheus)</div>
  <div><span class="term-bullet">02.</span> <strong>Fraud Detection API</strong> (Java 21 / Spring Boot 3 / Virtual Threads / Hexagonal / 46+ tests)</div>
  <div><span class="term-bullet">03.</span> <strong>Order Processing API</strong> (C# 12 / .NET 8 / CQRS / EF Core + Dapper / 28 tests)</div>
  <div><span class="term-bullet">04.</span> <strong>FinRisk Operations Hub</strong> (Angular 19 / Signals / Web Workers 60 FPS / Vitest)</div>
  <div><span class="term-bullet">05.</span> <strong>AgroFinance RWA Dashboard</strong> (Next.js 16 / React 19 / 130 tests + 8 Playwright E2E)</div>
  <div><span class="term-bullet">06.</span> <strong>Imóveis Pricing ML</strong> (Python 3.11 / FastAPI / LightGBM / SHAP / Terraform AWS)</div>
</div>`
          : `<div class="term-projects">
  <div><span class="term-bullet">01.</span> <strong>Dashboard Financeiro Nova Smar</strong> (Sistema em Produção / Oracle PL/SQL / TOTVS Protheus)</div>
  <div><span class="term-bullet">02.</span> <strong>Fraud Detection API</strong> (Java 21 / Spring Boot 3 / Virtual Threads / Arq. Hexagonal / 46+ testes)</div>
  <div><span class="term-bullet">03.</span> <strong>Order Processing API</strong> (C# 12 / .NET 8 / CQRS / EF Core + Dapper / 28 testes)</div>
  <div><span class="term-bullet">04.</span> <strong>FinRisk Operations Hub</strong> (Angular 19 / Signals / Web Workers 60 FPS / Vitest)</div>
  <div><span class="term-bullet">05.</span> <strong>AgroFinance RWA Dashboard</strong> (Next.js 16 / React 19 / 130 testes + 8 Playwright E2E)</div>
  <div><span class="term-bullet">06.</span> <strong>Imóveis Pricing ML</strong> (Python 3.11 / FastAPI / LightGBM / SHAP / Terraform AWS)</div>
</div>`;
        break;

      case 'experience':
        responseEl.innerHTML = isEn
          ? `<div class="term-exp">
  <div>💼 <strong>Nova Smar S/A</strong> — Software Developer (Intern) [12/2024 – Present]</div>
  <div class="text-muted">   Financial intranet dashboard in production, Oracle PL/SQL triggers & 2025 record-time corporate inventory.</div>
  <div>💼 <strong>Limiar Games Store</strong> — E-commerce & Operations Assistant [09/2024 – 11/2024]</div>
  <div class="text-muted">   Marketplace operations, stock reconciliation & conversion rate optimization.</div>
  <div>💼 <strong>Canivete da Roça</strong> — E-commerce Entrepreneur (MercadoLíder) [09/2019 – 08/2024]</div>
  <div class="text-muted">   MercadoLíder in &lt; 1 yr; financial unit economics, customer service & multi-channel logistics.</div>
  <div>🤝 <strong>IFSP Sertãozinho</strong> — Volunteer Art History Instructor [03/2016 – 08/2016]</div>
  <div class="text-muted">   Volunteer Art History lectures and cultural education for the local community.</div>
  <div>🤝 <strong>PICOVID Initiative</strong> — Volunteer Data Analyst [03/2020 – 07/2020]</div>
  <div class="text-muted">   Statistical modeling and public epidemiological data visualization during the pandemic.</div>
  <div>🤝 <strong>Cati Jr. (UFSCar)</strong> — Digital Marketing & Management Trainee [01/2015 – 07/2015]</div>
</div>`
          : `<div class="term-exp">
  <div>💼 <strong>Nova Smar S/A</strong> — Desenvolvedor de Software (Estágio) [12/2024 – Presente]</div>
  <div class="text-muted">   Dashboard financeiro intranet (Oracle PL/SQL + TOTVS Protheus) e inventário corporativo recorde em 2025.</div>
  <div>💼 <strong>Limiar Games Store</strong> — Assistente de E-commerce / Operações [09/2024 – 11/2024]</div>
  <div class="text-muted">   Gestão de marketplaces, expedição e conferência de estoque físico.</div>
  <div>💼 <strong>Canivete da Roça</strong> — Empreendedor em E-commerce (MercadoLíder) [09/2019 – 08/2024]</div>
  <div class="text-muted">   Conquista de Mercadolíder em &lt; 1 ano; gestão financeira, precificação e unit economics.</div>
  <div>🤝 <strong>IFSP Sertãozinho</strong> — Professor Voluntário de História da Arte [03/2016 – 08/2016]</div>
  <div class="text-muted">   Aulas voluntárias de História da Arte e manifestações estéticas para a comunidade escolar.</div>
  <div>🤝 <strong>Projeto PICOVID</strong> — Analista de Dados Voluntário [03/2020 – 07/2020]</div>
  <div class="text-muted">   Modelagem estatística e consolidação de dados epidemiológicos públicos na pandemia.</div>
  <div>🤝 <strong>Cati Jr. (UFSCar)</strong> — Trainee em Marketing Digital & Gestão [01/2015 – 07/2015]</div>
</div>`;
        break;

      case 'education':
        responseEl.innerHTML = isEn
          ? `<div class="term-exp">
  <div>🎓 <strong>UNIVESP — São Paulo State Virtual University</strong> [07/2024 – Jun/2027 (Expected 1st Sem.)]</div>
  <div class="text-muted">   Bachelor of Science in Data Science. Capstone projects in Sales Platforms, WCAG Accessibility, and Machine Learning.</div>
  <div>🎓 <strong>UNAERP — University of Ribeirão Preto</strong> [01/2017 – 09/2019]</div>
  <div class="text-muted">   B.A. in Music Education (Interrupted 09/2019). Acoustics, harmony & perception — foundational for real-time DSP & VisuChord.</div>
  <div>🎓 <strong>UFSCar — Federal University of São Carlos</strong> [01/2015 – 07/2015]</div>
  <div class="text-muted">   B.S. in Computer Science (Interrupted 07/2015). Discrete mathematics, C algorithms & Trainee at Cati Jr.</div>
</div>`
          : `<div class="term-exp">
  <div>🎓 <strong>UNIVESP — Universidade Virtual do Estado de São Paulo</strong> [07/2024 – Junho/2027 (Previsão 1º Sem.)]</div>
  <div class="text-muted">   Bacharelado em Ciência de Dados. Projetos integradores com plataformas web, acessibilidade WCAG e Machine Learning.</div>
  <div>🎓 <strong>UNAERP — Universidade de Ribeirão Preto</strong> [01/2017 – 09/2019]</div>
  <div class="text-muted">   Licenciatura Plena em Música (Interrompida em 09/2019). Acústica física e harmonia — base para projetos de DSP (C++17) e VisuChord.</div>
  <div>🎓 <strong>UFSCar — Universidade Federal de São Carlos</strong> [01/2015 – 07/2015]</div>
  <div class="text-muted">   Bacharelado em Ciência da Computação (Interrompida em 07/2015). Matemática discreta, algoritmos em C e Trainee na Cati Jr.</div>
</div>`;
        break;

      case 'cv':
      case 'resume':
      case 'curl cv':
        responseEl.innerHTML = `<span class="text-success">[OK]</span> ${isEn ? 'Opening interactive 2-page CV viewer...' : 'Abrindo visualizador do currículo de 2 páginas...'}`;
        setTimeout(() => {
          const cvModal = document.getElementById('cv-modal');
          if (cvModal) {
            cvModal.classList.add('modal--open');
            document.body.style.overflow = 'hidden';
          }
        }, 300);
        break;

      case 'contact':
        responseEl.innerHTML = `
<div>✉️ <strong>Email:</strong> <a href="mailto:felipegg.dev@gmail.com" class="term-link">felipegg.dev@gmail.com</a></div>
<div>🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/felipegardenghi" target="_blank" class="term-link">linkedin.com/in/felipegardenghi</a></div>
<div>🐙 <strong>GitHub:</strong> <a href="https://github.com/felipegardenghidev" target="_blank" class="term-link">github.com/felipegardenghidev</a></div>
<div>📍 <strong>Location:</strong> Sertãozinho / Ribeirão Preto, SP — Brazil (Available for Hybrid / Remote worldwide)</div>`;
        break;

      case 'clear':
        outputContainer.innerHTML = '';
        input.value = '';
        return;

      case 'sudo':
        responseEl.innerHTML = `<span class="text-danger">[sudo] felipe is already root. Access granted with great responsibility.</span>`;
        break;

      case 'matrix':
        responseEl.innerHTML = `<span class="text-success">Follow the white rabbit, Neo... 🐇</span>`;
        break;

      default:
        responseEl.innerHTML = isEn
          ? `<span class="text-danger">Command not recognized: '${escapeHtml(rawCmd)}'.</span> Type <span class="term-cmd">help</span> for options.`
          : `<span class="text-danger">Comando não reconhecido: '${escapeHtml(rawCmd)}'.</span> Digite <span class="term-cmd">help</span> para ver os comandos.`;
    }

    outputContainer.appendChild(responseEl);
    input.value = '';

    // Scroll to bottom of terminal
    const termBody = document.getElementById('terminal-body');
    if (termBody) {
      termBody.scrollTop = termBody.scrollHeight;
    }
  }

  // Handle Enter key on input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
    }
  });

  // Handle pill clicks
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      if (cmd) {
        input.value = cmd;
        executeCommand(cmd);
        input.focus();
      }
    });
  });

  // Click on terminal body focuses input
  const termBody = document.getElementById('terminal-body');
  if (termBody) {
    termBody.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        input.focus();
      }
    });
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
