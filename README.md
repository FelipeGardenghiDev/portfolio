# 🚀 Felipe Gardenghi — Portfólio Profissional

![Vite](https://img.shields.io/badge/Vite-6.4.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Design_System-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)
![Acessibilidade](https://img.shields.io/badge/WCAG-2.1_AA-2e7d32?style=for-the-badge)

Portfólio web de alta performance desenvolvido por **Felipe Gardenghi**, apresentando projetos de software, cases de automação corporativa, histórico profissional e competências técnicas com foco em desenvolvimento **Full-Stack, Web e Backend**.

🌐 **Website Publicado**: [https://felipegardenghidev.github.io/portfolio/](https://felipegardenghidev.github.io/portfolio/)

---

## 📌 Visão Geral & Posicionamento

O projeto foi construído sob o posicionamento de **"Desenvolvedor Full-Stack que entende o negócio"**. Em vez de apresentar um site genérico de IA com métricas arbitrárias ou textos vagos, o portfólio entrega uma comunicação direta, técnica e orientada a resultados mensuráveis.

### Diferenciais da Aplicação
- ⚡ **Alta Performance & Zero Framework Bloat**: Desenvolvido em Vanilla HTML5, CSS3 e JS ES6+, garantindo carregamento instantâneo (< 300ms de build, CLS < 0.1).
- 🎨 **Design System Sóbrio ("Terminal Profissional")**: Estética moderna com tema escuro elegante (`#0a0a0f`), acentos indigo/violeta (`#6366f1`), tipografia técnica (Inter + JetBrains Mono) e suporte a tema claro.
- 🏢 **Case de Sucesso de Sistema Proprietário**: Destaque para o *Dashboard Financeiro da Nova Smar S/A*, respeitando sigilo corporativo sem expor código-fonte, mantendo container reservado `[ Diagrama de Arquitetura — Em breve ]`.
- ♿ **Acessibilidade Nativa (WCAG 2.1 AA)**: Suporte completo a navegação por teclado (`Tab`, `Escape`), skip link, atributos ARIA, foco visível e respeito a `prefers-reduced-motion`.
- 📱 **Abordagem Mobile-First**: Layouts responsivos testados desde 320px até telas ultra-wide de 4K.

---

## 🛠️ Tecnologias & Ferramentas

| Camada | Tecnologias Utilizadas |
| :--- | :--- |
| **Core Frontend** | HTML5 Semântico, JavaScript ES6+ (Modules) |
| **Estilização** | CSS3 Vanilla (Custom Properties, Flexbox, CSS Grid, Glassmorphic Navbar) |
| **Build & Bundler** | [Vite 6.4.3](https://vitejs.dev/) |
| **Tipografia** | Inter (Sans-serif) & JetBrains Mono (Monospaced via Google Fonts) |
| **CI/CD & Deploy** | GitHub Actions (`.github/workflows/deploy.yml`) + GitHub Pages |
| **Controle de Versão** | Git & GitHub |

---

## 📂 Estrutura de Diretórios do Projeto

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de CI/CD para deploy automático no GitHub Pages
├── public/
│   ├── favicon.svg             # Logotipo monograma vetorial <FG />
│   ├── site.webmanifest        # Web App Manifest PWA
│   ├── .nojekyll              # Desativa o processamento padrão do Jekyll no GitHub Pages
│   └── resume/
│       └── felipe-gardenghi-cv.pdf  # Currículo em PDF oficial (Desenvolvedor Full-Stack)
├── src/
│   ├── js/
│   │   ├── navbar.js           # Scroll-spy (IntersectionObserver) e gaveta mobile
│   │   ├── projects.js         # Dados dos projetos e controlador do Modal Acessível
│   │   ├── scroll-progress.js   # Barra de progresso de leitura no topo
│   │   ├── scroll-reveal.js     # Animações de entrada no scroll com prefers-reduced-motion
│   │   └── theme.js            # Gerenciador de tema Dark/Light com localStorage
│   ├── styles/
│   │   ├── base.css            # Tipografia, links e regras base de foco
│   │   ├── index.css           # Ponto de entrada de estilos com @import de componentes
│   │   ├── layout.css          # Primitivas de layout (.container e .section)
│   │   ├── reset.css           # Reset CSS moderno com suporte a movimento reduzido
│   │   ├── utilities.css       # Classes utilitárias (.sr-only, .font-mono, cores)
│   │   ├── variables.css       # Design tokens (cores HSL, espaçamentos, sombras, z-index)
│   │   └── components/
│   │       ├── about.css       # Seção Sobre Mim e cartão de fatos rápidos
│   │       ├── animations.css  # Barra de progresso e utilitários de scroll reveal
│   │       ├── contact.css     # Cartões de contato direto (Email, LinkedIn, GitHub)
│   │       ├── education.css   # Cartão acadêmico UNIVESP e certificações agrupadas
│   │       ├── experience.css # Timeline vertical cronológica com nós pulsantes
│   │       ├── footer.css      # Rodapé minimalista e botão voltar ao topo
│   │       ├── hero.css        # Seção principal, badge de status e botões CTAs
│   │       ├── modal.css       # Backdrop blur, modal acessível e caixa de diagrama
│   │       ├── navbar.css      # Header fixo translúcido e gaveta hambúrguer
│   │       ├── projects.css    # Grid de projetos e destaque do case Nova Smar
│   │       └── stack.css       # Organização em 5 camadas técnicas
│   └── main.js                 # Ponto de entrada principal da aplicação JS
├── .gitignore                  # Regras de exclusão do Git (node_modules, dist, logs)
├── index.html                  # Template HTML5 principal com SEO e dados estruturados JSON-LD
├── package.json                # Configurações do projeto e dependências do Vite
└── vite.config.js              # Configuração do Vite (alias @ e base: './')
```

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js**: v18.0.0 ou superior
- **npm**: v9.0.0 ou superior

### Passo a Passo

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/FelipeGardenghiDev/portfolio.git
   cd portfolio
   ```

2. **Instalar as Dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação em `http://localhost:5173/`.

4. **Compilar para Produção**:
   ```bash
   npm run build
   ```
   Os arquivos otimizados e minificados serão gerados no diretório `dist/`.

5. **Testar o Build Localmente (Preview de Produção)**:
   ```bash
   npm run preview
   ```
   Acesse a prévia de produção em `http://localhost:4173/`.

---

## ⚙️ Configuração de Deploy (GitHub Pages & CI/CD)

O deploy é realizado de forma automática no **GitHub Pages** através da action configurada em `.github/workflows/deploy.yml`.

### Destaques da Configuração de Deploy
- **Base Relativa**: Configurado `base: './'` em `vite.config.js`, garantindo que todos os assets sejam resolvidos com caminhos relativos seguros.
- **Bypass do Jekyll**: Arquivo `.nojekyll` incluído na pasta `public/` e na raiz do projeto para impedir que o GitHub Pages filtre arquivos binários como o PDF do currículo.
- **Workflow do GitHub Actions**:
  - Compila o código fonte Node.js 20 (`npm run build`).
  - Publica os artefatos da pasta `dist/` diretamente no ambiente do GitHub Pages.

---

## 📑 Seções do Portfólio

1. **Navbar & Hero**: Apresentação principal com foto/monograma, posição profissional, badge de status *"Disponível para oportunidades"*, alternador de temas Dark/Light, botões de ação e link para **Baixar CV em PDF**.
2. **Sobre Mim**: Narrativa profissional focando em transição de carreira, 5 anos de experiência empreendedora em e-commerce (Mercadolíder), graduação em Ciência de Dados (UNIVESP) e atuação na Nova Smar S/A.
3. **Projetos em Destaque**:
   - **Dashboard Financeiro Nova Smar S/A** *(Case em Produção / Proprietário)*: Sistema web multiusuário em PHP, Oracle PL/SQL, JavaScript e TOTVS Protheus.
   - **Aggrandize Planner**: Aplicação web em TypeScript, React e Vite hospedada na Vercel.
   - **Website Banda Revanche**: Site institucional responsivo para cliente real.
   - **Feeagro Data Dashboard**: Visualização de dados do setor agrícola.
4. **Stack Técnica**: Organizada em 5 áreas funcionais (*Frontend*, *Backend & APIs*, *Banco de Dados*, *DevOps & Cloud*, *Sistemas & Negócio*).
5. **Experiência Profissional**: Timeline vertical detalhada de cargos na Nova Smar S/A, Limiar Games e Canivete da Roça, destacando feitos mensuráveis de desenvolvimento e automação.
6. **Formação & Certificações**: Graduação em Bacharelado em Ciência de Dados (UNIVESP) e 4 grupos de cursos técnicos certificados (+400 horas acumuladas).
7. **Contato & Footer**: Links diretos funcionais sem formulários genéricos (**E-mail**, **LinkedIn**, **GitHub**), direitos autorais e botão de retorno ao topo.

---

## 📬 Contato

- **E-mail**: [felipegg.dev@gmail.com](mailto:felipegg.dev@gmail.com)
- **LinkedIn**: [linkedin.com/in/felipegardenghi](https://www.linkedin.com/in/felipegardenghi/)
- **GitHub**: [github.com/felipegardenghidev](https://github.com/felipegardenghidev)

---

## 📜 Licença & Direitos Autorais

© 2026 **Felipe Gardenghi**. Todos os direitos reservados.
Este código-fonte é disponibilizado abertamente para fins de demonstração técnica e consulta de portfólio.
