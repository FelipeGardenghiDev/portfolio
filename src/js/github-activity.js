/**
 * GitHub Live Public Activity Integration
 * Fetches public repository count and activity with local caching & offline resilience.
 */
import { getLang } from './i18n.js';

const CACHE_KEY = 'felipe_github_activity_cache';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes TTL to respect unauthenticated rate limits

export async function getGitHubStats() {
  // Check sessionStorage cache first
  try {
    const rawCache = sessionStorage.getItem(CACHE_KEY);
    if (rawCache) {
      const parsed = JSON.parse(rawCache);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed.data;
      }
    }
  } catch {}

  // Fetch from GitHub REST API with 3.5s timeout
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3500);

    const res = await fetch('https://api.github.com/users/felipegardenghidev', {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      const stats = {
        publicRepos: data.public_repos || 24,
        followers: data.followers || 10,
        login: data.login || 'felipegardenghidev',
        url: data.html_url || 'https://github.com/felipegardenghidev',
        updatedAt: data.updated_at || new Date().toISOString()
      };

      try {
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: stats
          })
        );
      } catch {}

      return stats;
    }
  } catch {}

  // Fallback defaults
  return {
    publicRepos: 24,
    followers: 12,
    login: 'felipegardenghidev',
    url: 'https://github.com/felipegardenghidev',
    updatedAt: new Date().toISOString()
  };
}

export async function initGitHubActivity() {
  const tickerEl = document.getElementById('github-status-ticker');
  if (!tickerEl) return;

  const stats = await getGitHubStats();
  const isEn = getLang() === 'en';

  tickerEl.innerHTML = `
    <span class="status-dot"></span>
    <span>${isEn ? 'Active on GitHub · ' : 'Ativo no GitHub · '}<strong>${stats.publicRepos}</strong> ${isEn ? 'public repositories' : 'repositórios públicos'}</span>
  `;
}
