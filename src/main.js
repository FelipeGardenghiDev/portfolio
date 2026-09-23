import './styles/index.css';
import { initTheme } from './js/theme.js';
import { initNavbar } from './js/navbar.js';
import { initProjects } from './js/projects.js';
import { initScrollReveal } from './js/scroll-reveal.js';
import { initScrollProgress } from './js/scroll-progress.js';
import { initTypewriter } from './js/typewriter.js';
import { initMarquee } from './js/marquee.js';

// Initialize core systems
initTheme();
initNavbar();
initTypewriter();
initMarquee();
initProjects();
initScrollProgress();
initScrollReveal();

