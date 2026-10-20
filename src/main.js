import './styles/index.css';
import { initTheme } from './js/theme.js';
import { initNavbar } from './js/navbar.js';
import { initProjects } from './js/projects.js';
import { initScrollReveal } from './js/scroll-reveal.js';
import { initScrollProgress } from './js/scroll-progress.js';
import { initTypewriter } from './js/typewriter.js';
import { initMarquee } from './js/marquee.js';
import { initI18n } from './js/i18n.js';
import { initEngineeringLab } from './js/engineering-lab.js';

// Initialize core systems
initTheme();
initNavbar();
initI18n();
initTypewriter();
initMarquee();
initEngineeringLab();
initProjects();
initScrollProgress();
initScrollReveal();
