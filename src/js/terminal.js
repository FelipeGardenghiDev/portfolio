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
  <div><span class="term-cmd">skills</span>     - View tech stack radar and core competencies</div>
  <div><span class="term-cmd">projects</span>   - List featured enterprise & open-source projects</div>
  <div><span class="term-cmd">experience</span> - Show career trajectory at Nova Smar & e-commerce</div>
  <div><span class="term-cmd">cv</span>         - Open interactive 2-page curriculum vitae modal</div>
  <div><span class="term-cmd">contact</span>    - Show direct email, LinkedIn & GitHub profiles</div>
  <div><span class="term-cmd">clear</span>      - Clean up the terminal console</div>
</div>`
          : `<div class="term-help">
  <span class="text-accent font-bold">COMANDOS DISPONÍVEIS:</span>
  <div><span class="term-cmd">skills</span>     - Visualizar radar de tecnologias e competências</div>
  <div><span class="term-cmd">projects</span>   - Listar projetos corporativos e open-source em destaque</div>
  <div><span class="term-cmd">experience</span> - Exibir trajetória profissional na Nova Smar e e-commerce</div>
  <div><span class="term-cmd">cv</span>         - Abrir o visualizador do currículo de 2 páginas</div>
  <div><span class="term-cmd">contact</span>    - Exibir e-mail direto, LinkedIn e GitHub</div>
  <div><span class="term-cmd">clear</span>      - Limpar a tela do console</div>
</div>`;
        break;

      case 'skills':
      case 'stack':
        responseEl.innerHTML = `
<div class="term-table">
  <div class="term-row"><span class="term-key">Backend:</span> <span class="term-val">Java 21, Spring Boot 3, C# .NET 8, CQRS, Hexagonal Arch, EF Core, Dapper</span></div>
  <div class="term-row"><span class="term-key">Databases:</span> <span class="term-val">Oracle PL/SQL, PostgreSQL, MySQL, Redis (Lua & ZSET), Supabase</span></div>
  <div class="term-row"><span class="term-key">Data & AI:</span> <span class="term-val">Python 3.11, LightGBM, SHAP (XAI), Google MediaPipe, Streamlit</span></div>
  <div class="term-row"><span class="term-key">Frontend:</span> <span class="term-val">TypeScript, React 19, Next.js 16, Angular 19 (Signals), Tailwind v4</span></div>
  <div class="term-row"><span class="term-key">Cloud/DevOps:</span> <span class="term-val">Docker, Terraform AWS IaC, RabbitMQ, GitHub Actions, Linux</span></div>
  <div class="term-row"><span class="term-key">Testing:</span> <span class="term-val">Vitest, JUnit 5, Mockito, xUnit, Testcontainers, Playwright E2E</span></div>
</div>`;
        break;

      case 'projects':
        responseEl.innerHTML = isEn
          ? `<div class="term-projects">
  <div><span class="term-bullet">01.</span> <strong>Fraud Detection API</strong> (Java 21 / Spring Boot 3 / Virtual Threads / Hexagonal / 46+ tests)</div>
  <div><span class="term-bullet">02.</span> <strong>Order Processing API</strong> (C# 12 / .NET 8 / CQRS / EF Core + Dapper / 28 tests)</div>
  <div><span class="term-bullet">03.</span> <strong>Nova Smar Financial Dashboard</strong> (Production Intranet / Oracle PL/SQL / TOTVS Protheus)</div>
  <div><span class="term-bullet">04.</span> <strong>FinRisk Operations Hub</strong> (Angular 19 / Signals / Web Workers 60 FPS / Vitest)</div>
  <div><span class="term-bullet">05.</span> <strong>AgroFinance RWA Dashboard</strong> (Next.js 16 / React 19 / 130 tests + 8 Playwright E2E)</div>
  <div><span class="term-bullet">06.</span> <strong>Imóveis Pricing ML</strong> (Python / FastAPI / LightGBM / SHAP / Terraform AWS)</div>
</div>`
          : `<div class="term-projects">
  <div><span class="term-bullet">01.</span> <strong>Fraud Detection API</strong> (Java 21 / Spring Boot 3 / Virtual Threads / Arq. Hexagonal / 46+ testes)</div>
  <div><span class="term-bullet">02.</span> <strong>Order Processing API</strong> (C# 12 / .NET 8 / CQRS / EF Core + Dapper / 28 testes)</div>
  <div><span class="term-bullet">03.</span> <strong>Dashboard Financeiro Nova Smar</strong> (Sistema em Produção / Oracle PL/SQL / TOTVS Protheus)</div>
  <div><span class="term-bullet">04.</span> <strong>FinRisk Operations Hub</strong> (Angular 19 / Signals / Web Workers 60 FPS / Vitest)</div>
  <div><span class="term-bullet">05.</span> <strong>AgroFinance RWA Dashboard</strong> (Next.js 16 / React 19 / 130 testes + 8 Playwright E2E)</div>
  <div><span class="term-bullet">06.</span> <strong>Imóveis Pricing ML</strong> (Python / FastAPI / LightGBM / SHAP / Terraform AWS)</div>
</div>`;
        break;

      case 'experience':
        responseEl.innerHTML = isEn
          ? `<div class="term-exp">
  <div>💼 <strong>Nova Smar S/A</strong> — Software Developer (Intern) [12/2024 – Present]</div>
  <div class="text-muted">   Corporate financial intranet (Oracle PL/SQL + TOTVS Protheus) & 2025 record-time inventory.</div>
  <div>💼 <strong>Limiar Games Store</strong> — E-commerce & Operations Assistant [09/2024 – 11/2024]</div>
  <div class="text-muted">   Marketplace operations, inventory reconciliation & sales conversion optimization.</div>
  <div>💼 <strong>Canivete da Roça</strong> — E-commerce Entrepreneur (MercadoLíder) [09/2019 – 08/2024]</div>
  <div class="text-muted">   Top-tier seller qualification in under 1 year; unit economics and data-driven logistics.</div>
</div>`
          : `<div class="term-exp">
  <div>💼 <strong>Nova Smar S/A</strong> — Desenvolvedor de Software (Estágio) [12/2024 – Presente]</div>
  <div class="text-muted">   Dashboard financeiro intranet (Oracle PL/SQL + TOTVS Protheus) e inventário corporativo recorde em 2025.</div>
  <div>💼 <strong>Limiar Games Store</strong> — Assistente de E-commerce [09/2024 – 11/2024]</div>
  <div class="text-muted">   Gestão de marketplaces, conferência de pedidos e controle de estoque.</div>
  <div>💼 <strong>Canivete da Roça</strong> — Empreendedor em E-commerce (MercadoLíder) [09/2019 – 08/2024]</div>
  <div class="text-muted">   Conquista de Mercadolíder em &lt; 1 ano; gestão financeira e operação orientada a dados.</div>
</div>`;
        break;

      case 'cv':
      case 'resume':
      case 'curl cv':
        responseEl.innerHTML = `<span class="text-success">[OK]</span> ${isEn ? 'Opening interactive 2-page CV viewer...' : 'Abrindo visualizador do currículo de 2 páginas...'}`;
        // Trigger CV modal
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
<div>📍 <strong>Location:</strong> Sertãozinho, SP — Brazil (Available for Hybrid / Remote worldwide)</div>`;
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
