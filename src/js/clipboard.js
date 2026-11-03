/**
 * Copy to Clipboard Utility with Micro-Feedback Tooltip
 */
import { getLang } from './i18n.js';

export function initClipboard() {
  const copyElements = document.querySelectorAll('[data-copy]');

  copyElements.forEach((el) => {
    el.addEventListener('click', async (e) => {
      // If it's an anchor with mailto, we don't necessarily prevent default if they want to open mail client,
      // but if it has data-copy-only="true", prevent default.
      if (el.getAttribute('data-copy-only') === 'true') {
        e.preventDefault();
      }

      const textToCopy = el.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showCopyToast(el);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showCopyToast(el);
        } catch {}
        document.body.removeChild(textarea);
      }
    });
  });
}

function showCopyToast(anchorEl) {
  const isEn = getLang() === 'en';
  const message = isEn ? 'Copied to clipboard! ✓' : 'Copiado para a área de transferência! ✓';

  // Remove existing toast if any
  const existing = document.getElementById('copy-feedback-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'copy-feedback-toast';
  toast.className = 'copy-toast';
  toast.textContent = message;

  document.body.appendChild(toast);

  // Position toast near bottom center
  requestAnimationFrame(() => {
    toast.classList.add('copy-toast--visible');
  });

  setTimeout(() => {
    toast.classList.remove('copy-toast--visible');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}
