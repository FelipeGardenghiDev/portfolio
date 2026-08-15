/**
 * Scroll Progress Bar Controller
 * Updates top progress bar width based on viewport scroll percentage
 */

export function initScrollProgress() {
  let progressBar = document.getElementById('scroll-progress');

  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.className = 'scroll-progress-bar';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }

    const percentage = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
    progressBar.style.width = `${percentage}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}
