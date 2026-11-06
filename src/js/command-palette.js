/**
 * Command Palette Controller (Ctrl + K / Cmd + K)
 * Accessible Spotlight Search & Quick Actions
 */
import { getLang, toggleLanguage } from './i18n.js';
import { toggleTheme } from './theme.js';
import { PROJECTS_DATA, openProjectModal } from './projects.js';
import { openCvModal } from './cv-modal.js';
import { setPersona } from './persona.js';

let paletteBackdrop = null;
let searchInput = null;
let resultsList = null;
let lastActiveElement = null;
let activeIndex = 0;
let filteredItems = [];

export function initCommandPalette() {
  paletteBackdrop = document.getElementById('command-palette');
  searchInput = document.getElementById('palette-search');
  resultsList = document.getElementById('palette-results');
  const triggerBtn = document.getElementById('palette-open-btn');

  if (!paletteBackdrop || !searchInput || !resultsList) return;

  // Global keyboard shortcut: Ctrl+K or Cmd+K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (paletteBackdrop.classList.contains('palette--open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && paletteBackdrop.classList.contains('palette--open')) {
      e.preventDefault();
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      openPalette();
    });
  }

  // Backdrop click to close
  paletteBackdrop.addEventListener('click', (e) => {
    if (e.target === paletteBackdrop) {
      closePalette();
    }
  });

  // Search input live filtering
  searchInput.addEventListener('input', () => {
    renderItems(searchInput.value.trim());
  });

  // Keyboard navigation inside input / list
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filteredItems.length === 0) return;
      activeIndex = (activeIndex + 1) % filteredItems.length;
      updateActiveItem();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filteredItems.length === 0) return;
      activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
      updateActiveItem();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[activeIndex]) {
        executeItem(filteredItems[activeIndex]);
      }
    }
  });
}

function openPalette() {
  lastActiveElement = document.activeElement;
  paletteBackdrop.classList.add('palette--open');
  document.body.style.overflow = 'hidden';
  searchInput.value = '';
  renderItems('');
  setTimeout(() => {
    searchInput.focus();
  }, 50);
}

function closePalette() {
  paletteBackdrop.classList.remove('palette--open');
  document.body.style.overflow = '';
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

function getItems() {
  const isEn = getLang() === 'en';

  const actions = [
    {
      group: isEn ? 'Dual Persona' : 'Portfólio Duplo',
      title: isEn ? 'Switch to Music & Audio Persona' : 'Alternar para Música & Áudio (Guitarrista / Produtor)',
      subtitle: isEn ? 'Banda Revanche, DSP Plugins, Live Stage Rig' : 'Banda Revanche, C++ DSP, Rig de Palco',
      badge: 'Music',
      icon: '🎸',
      keywords: 'musica audio som guitarrista guitarra revanche dsp rig banda show',
      run: () => setPersona('music', true)
    },
    {
      group: isEn ? 'Dual Persona' : 'Portfólio Duplo',
      title: isEn ? 'Switch to Tech & Software Persona' : 'Alternar para Engenharia & TI (Software Engineer)',
      subtitle: isEn ? '.NET 8, Java 21, React 19, Data Science' : '.NET 8, Java 21, React 19, Ciência de Dados',
      badge: 'Tech',
      icon: '💻',
      keywords: 'ti tech software backend fullstack dotnet java react python',
      run: () => setPersona('tech', true)
    },

    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Toggle Theme (Light / Dark)' : 'Alternar Tema (Claro / Escuro)',
      subtitle: isEn ? 'Switch color theme' : 'Alternar entre modo claro e escuro',
      badge: 'Theme',
      icon: '🌓',
      keywords: 'theme tema dark light claro escuro',
      run: () => toggleTheme()
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Switch Language (PT / EN)' : 'Alternar Idioma (Português / Inglês)',
      subtitle: isEn ? 'Current: English' : 'Atual: Português',
      badge: 'Lang',
      icon: '🌐',
      keywords: 'lang language idioma portugues ingles pt en translation',
      run: () => toggleLanguage()
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'View Developer Resume (Full-Stack / Backend)' : 'Visualizar Currículo Desenvolvedor (Full-Stack / Backend)',
      subtitle: isEn ? 'Open on-screen preview' : 'Abrir visualização na tela',
      badge: 'CV',
      icon: '📄',
      keywords: 'cv curriculo resume dev developer backend fullstack preview',
      run: () => openCvModal('dev')
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'View IT Support & Operations Resume' : 'Visualizar Currículo Suporte TI & Operações L2',
      subtitle: isEn ? 'ERP Protheus, Oracle, Infrastructure' : 'ERP Protheus, Oracle, Infraestrutura',
      badge: 'CV',
      icon: '🛠️',
      keywords: 'cv curriculo suporte ti support helpdesk operations erp n2',
      run: () => openCvModal('suporte')
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Download Resume (PDF)' : 'Baixar Currículo em PDF',
      subtitle: 'felipe-gardenghi-cv.pdf',
      badge: 'Download',
      icon: '📥',
      keywords: 'download baixar pdf cv curriculo',
      run: () => {
        const link = document.createElement('a');
        link.href = './resume/felipe-gardenghi-cv.pdf';
        link.download = 'felipe-gardenghi-cv.pdf';
        link.click();
      }
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Print Executive Resume (A4 / PDF)' : 'Imprimir Currículo Executivo (A4 / PDF)',
      subtitle: isEn ? 'Clean black & white formatted page' : 'Página formatada limpa em preto e branco',
      badge: 'Print',
      icon: '🖨️',
      keywords: 'print imprimir pdf a4 salvar folha',
      run: () => window.print()
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Copy Direct Email' : 'Copiar E-mail Direto',
      subtitle: 'felipegg.dev@gmail.com',
      badge: 'Clipboard',
      icon: '📋',
      keywords: 'copy email copiar contato mensagem mail',
      run: async () => {
        try {
          await navigator.clipboard.writeText('felipegg.dev@gmail.com');
          const toast = document.createElement('div');
          toast.className = 'copy-toast copy-toast--visible';
          toast.textContent = isEn ? 'Email copied to clipboard! ✓' : 'E-mail copiado! ✓';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 2000);
        } catch {}
      }
    },
    {
      group: isEn ? 'System Actions' : 'Ações Rápidas',
      title: isEn ? 'Copy Recruiter Outreach Message' : 'Copiar Mensagem para Recrutadores',
      subtitle: isEn ? 'Ready-to-paste template for LinkedIn or Email' : 'Template pronto para colar no LinkedIn ou E-mail',
      badge: 'Outreach',
      icon: '✉️',
      keywords: 'recrutador recruiter outreach template mensagem copiar message',
      run: async () => {
        const msg = isEn
          ? 'Hi Felipe, I came across your portfolio at felipegardenghi.com.br and would like to connect regarding a Backend / Full-Stack Developer opportunity.'
          : 'Olá Felipe, vi seu portfólio em felipegardenghi.com.br e gostaria de conversar sobre uma oportunidade para Desenvolvedor Backend / Full-Stack.';
        try {
          await navigator.clipboard.writeText(msg);
          const toast = document.createElement('div');
          toast.className = 'copy-toast copy-toast--visible';
          toast.textContent = isEn ? 'Outreach template copied! ✓' : 'Template de mensagem copiado! ✓';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 2000);
        } catch {}
      }
    }
  ];

  const sections = [
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'About Me' : 'Sobre Mim',
      subtitle: '#sobre',
      badge: 'Section',
      icon: '👤',
      keywords: 'sobre about bio trajetoria formacao perfil',
      run: () => scrollToSection('#sobre')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Featured Projects' : 'Projetos em Destaque',
      subtitle: '#projetos',
      badge: 'Section',
      icon: '🚀',
      keywords: 'projetos projects portfolio trabalhos codigo',
      run: () => scrollToSection('#projetos')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Interactive Engineering Lab' : 'Laboratório Interativo de Engenharia',
      subtitle: '#lab',
      badge: 'Section',
      icon: '⚡',
      keywords: 'lab laboratorio benchmark csharp dotnet java audio dsp reactive',
      run: () => scrollToSection('#lab')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Tech Stack & Skills' : 'Stack Técnica & Habilidades',
      subtitle: '#stack',
      badge: 'Section',
      icon: '💻',
      keywords: 'stack tecnologia skills c# java python react oracle sql docker',
      run: () => scrollToSection('#stack')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Professional Experience' : 'Experiência Profissional',
      subtitle: '#experiencia',
      badge: 'Section',
      icon: '💼',
      keywords: 'experiencia experience carreira nova smar totvs oracle plsql',
      run: () => scrollToSection('#experiencia')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Education & Certifications' : 'Formação & Certificações',
      subtitle: '#formacao',
      badge: 'Section',
      icon: '🎓',
      keywords: 'educacao education univesp dados formacao cursos certificados',
      run: () => scrollToSection('#formacao')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Get in Touch' : 'Contato',
      subtitle: '#contato',
      badge: 'Section',
      icon: '📬',
      keywords: 'contato contact email linkedin github falar',
      run: () => scrollToSection('#contato')
    },
    {
      group: isEn ? 'Navigation' : 'Navegação',
      title: isEn ? 'Interactive Terminal CLI' : 'Terminal Interativo CLI',
      subtitle: '#terminal',
      badge: 'Section',
      icon: '⌨️',
      keywords: 'terminal cli shell bash console prompt comandos',
      run: () => scrollToSection('#terminal')
    }
  ];

  const projects = PROJECTS_DATA.map((p) => {
    const title = p.title[isEn ? 'en' : 'pt'];
    const subtitle = p.subtitle[isEn ? 'en' : 'pt'];
    const tagsStr = (p.tags || []).join(' ');
    return {
      group: isEn ? 'Projects (12)' : 'Projetos (12)',
      title,
      subtitle,
      badge: p.featured ? 'Featured' : 'Project',
      icon: '📂',
      keywords: `${p.id} ${title} ${subtitle} ${tagsStr}`.toLowerCase(),
      run: () => openProjectModal(p.id)
    };
  });

  return [...actions, ...sections, ...projects];
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderItems(filterQuery) {
  const allItems = getItems();
  const q = filterQuery.toLowerCase().trim();

  if (!q) {
    filteredItems = allItems;
  } else {
    filteredItems = allItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSub = item.subtitle.toLowerCase().includes(q);
      const matchKey = item.keywords.includes(q);
      return matchTitle || matchSub || matchKey;
    });
  }

  activeIndex = 0;
  resultsList.innerHTML = '';

  if (filteredItems.length === 0) {
    const isEn = getLang() === 'en';
    const emptyLi = document.createElement('li');
    emptyLi.className = 'palette-empty';
    emptyLi.textContent = isEn
      ? `No matches found for "${filterQuery}"`
      : `Nenhum resultado encontrado para "${filterQuery}"`;
    resultsList.appendChild(emptyLi);
    return;
  }

  let currentGroup = '';
  filteredItems.forEach((item, index) => {
    if (item.group !== currentGroup) {
      currentGroup = item.group;
      const groupHeading = document.createElement('li');
      groupHeading.className = 'palette-group-title';
      groupHeading.textContent = currentGroup;
      groupHeading.setAttribute('aria-hidden', 'true');
      resultsList.appendChild(groupHeading);
    }

    const li = document.createElement('li');
    li.className = 'palette-item';
    li.setAttribute('role', 'option');
    li.setAttribute('id', `palette-opt-${index}`);
    li.setAttribute('aria-selected', index === activeIndex ? 'true' : 'false');
    if (index === activeIndex) {
      li.classList.add('palette-item--active');
    }

    li.innerHTML = `
      <div class="palette-item-left">
        <span class="palette-item-icon" aria-hidden="true">${item.icon}</span>
        <div class="palette-item-content">
          <span class="palette-item-title">${item.title}</span>
          <span class="palette-item-subtitle">${item.subtitle}</span>
        </div>
      </div>
      <span class="palette-item-badge">${item.badge}</span>
    `;

    li.addEventListener('click', () => {
      executeItem(item);
    });

    li.addEventListener('mouseenter', () => {
      activeIndex = index;
      updateActiveItem();
    });

    resultsList.appendChild(li);
  });
}

function updateActiveItem() {
  const items = resultsList.querySelectorAll('.palette-item');
  items.forEach((el, idx) => {
    const isActive = idx === activeIndex;
    el.classList.toggle('palette-item--active', isActive);
    el.setAttribute('aria-selected', isActive ? 'true' : 'false');
    if (isActive) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

function executeItem(item) {
  closePalette();
  setTimeout(() => {
    item.run();
  }, 100);
}
