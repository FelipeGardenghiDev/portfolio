/**
 * Navbar interactions: Mobile Menu Toggle, Scroll State, Scroll-Spy
 */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  if (!navbar) return;

  // ── 1. Navbar Scroll State (Shadow & Border) ──
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── 2. Mobile Menu Toggle ──
  if (navToggle && navMenu) {
    function toggleMobileMenu() {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMenu.classList.toggle('nav-menu--open', !isOpen);

      // Prevent scrolling body when menu is open
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    }

    function closeMobileMenu() {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-menu--open');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
        navToggle.focus();
      }
    });
  }

  // ── 3. Scroll Spy (Highlight active nav link) ──
  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section enters top portion of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('nav-link--active');
            } else {
              link.classList.remove('nav-link--active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
}
