/**
 * Automated Integrity & Quality Verification Test Suite
 * Validates i18n key parity, project data integrity, and production asset availability.
 * Run via: npm test
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;

function test(description, fn) {
  totalChecks++;
  try {
    fn();
    passedChecks++;
    console.log(`  ✓ ${description}`);
  } catch (err) {
    console.error(`  ✗ ${description}`);
    console.error(`    Error: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log('\n🔍 Running Portfolio Integrity & A11y Verification...\n');

// ── 1. Check Public Assets ──
console.log('📦 1. Verifying Public Production Assets...');

test('Curriculum Vitae PDFs exist (Dev & Support)', () => {
  const devPdf = path.join(rootDir, 'public/resume/felipe-gardenghi-cv.pdf');
  const suportePdf = path.join(rootDir, 'public/resume/felipe-gardenghi-suporte.pdf');
  assert(fs.existsSync(devPdf), 'Dev CV PDF missing');
  assert(fs.existsSync(suportePdf), 'Support CV PDF missing');
});

test('Curriculum Vitae WebP preview images exist with high quality', () => {
  const p1 = path.join(rootDir, 'public/resume/page-1.webp');
  const p2 = path.join(rootDir, 'public/resume/page-2.webp');
  const sp1 = path.join(rootDir, 'public/resume/suporte-page-1.webp');
  const sp2 = path.join(rootDir, 'public/resume/suporte-page-2.webp');
  assert(fs.existsSync(p1) && fs.statSync(p1).size > 50000, 'page-1.webp invalid');
  assert(fs.existsSync(p2) && fs.statSync(p2).size > 50000, 'page-2.webp invalid');
  assert(fs.existsSync(sp1) && fs.statSync(sp1).size > 50000, 'suporte-page-1.webp invalid');
  assert(fs.existsSync(sp2) && fs.statSync(sp2).size > 50000, 'suporte-page-2.webp invalid');
});

test('Social Share Card (og-image.png) exists and has optimal dimensions', () => {
  const ogImg = path.join(rootDir, 'public/og-image.png');
  assert(fs.existsSync(ogImg), 'og-image.png missing');
  assert(fs.statSync(ogImg).size > 30000, 'og-image.png too small');
});

test('SEO crawling manifests (robots.txt & sitemap.xml) exist', () => {
  const robots = path.join(rootDir, 'public/robots.txt');
  const sitemap = path.join(rootDir, 'public/sitemap.xml');
  assert(fs.existsSync(robots), 'robots.txt missing');
  assert(fs.existsSync(sitemap), 'sitemap.xml missing');
});

// ── 2. Verify i18n & Projects ──
console.log('\n🌐 2. Verifying Bilingual Dictionary & Project Data...');

async function verifyCodebaseData() {
  const { I18N_DATA } = await import('../src/js/i18n.js');
  const { PROJECTS_DATA } = await import('../src/js/projects.js');

  test('i18n dictionaries (PT and EN) have symmetric keys', () => {
    function getKeys(obj, prefix = '') {
      let keys = [];
      for (const [k, v] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${k}` : k;
        if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
          keys = keys.concat(getKeys(v, fullKey));
        } else {
          keys.push(fullKey);
        }
      }
      return keys;
    }

    const ptKeys = getKeys(I18N_DATA.pt).sort();
    const enKeys = getKeys(I18N_DATA.en).sort();

    const missingInEn = ptKeys.filter((k) => !enKeys.includes(k));
    const missingInPt = enKeys.filter((k) => !ptKeys.includes(k));

    assert.strictEqual(
      missingInEn.length,
      0,
      `Keys missing in EN: ${missingInEn.join(', ')}`
    );
    assert.strictEqual(
      missingInPt.length,
      0,
      `Keys missing in PT: ${missingInPt.join(', ')}`
    );
  });

  test('All 12 projects have complete bilingual content & required fields', () => {
    assert.strictEqual(PROJECTS_DATA.length, 12, 'Expected 12 featured projects');

    PROJECTS_DATA.forEach((p) => {
      assert(p.id && typeof p.id === 'string', `Project missing id: ${JSON.stringify(p)}`);
      assert(p.title?.pt && p.title?.en, `Project ${p.id} missing title (pt or en)`);
      assert(p.subtitle?.pt && p.subtitle?.en, `Project ${p.id} missing subtitle`);
      assert(p.badge?.pt && p.badge?.en, `Project ${p.id} missing badge`);
      assert(p.type?.pt && p.type?.en, `Project ${p.id} missing type`);
      assert(p.shortDescription?.pt && p.shortDescription?.en, `Project ${p.id} missing shortDescription`);
      assert(p.fullProblem?.pt && p.fullProblem?.en, `Project ${p.id} missing fullProblem`);
      assert(Array.isArray(p.fullSolution?.pt) && Array.isArray(p.fullSolution?.en), `Project ${p.id} missing fullSolution array`);
      assert(Array.isArray(p.tags) && p.tags.length >= 3, `Project ${p.id} missing tags`);
      assert(p.links && typeof p.links === 'object', `Project ${p.id} missing links`);
    });
  });

  // ── 3. HTML Structure & A11y ──
  console.log('\n♿ 3. Verifying HTML Semantic Structure & A11y Attributes...');

  const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

  test('HTML includes essential SEO and OpenGraph tags', () => {
    assert(htmlContent.includes('<meta property="og:image"'), 'Missing og:image tag');
    assert(htmlContent.includes('<meta name="twitter:image"'), 'Missing twitter:image tag');
    assert(htmlContent.includes('<link rel="canonical"'), 'Missing canonical URL link');
  });

  test('Modals have proper accessible ARIA dialog roles', () => {
    assert(htmlContent.includes('id="project-modal" class="modal-backdrop" role="dialog" aria-modal="true"'), 'Project modal missing dialog role');
    assert(htmlContent.includes('id="cv-modal" class="modal-backdrop" role="dialog" aria-modal="true"'), 'CV modal missing dialog role');
    assert(htmlContent.includes('id="command-palette" class="palette-backdrop" role="dialog" aria-modal="true"'), 'Command palette missing dialog role');
  });

  test('Print stylesheet is imported', () => {
    const indexCss = fs.readFileSync(path.join(rootDir, 'src/styles/index.css'), 'utf-8');
    assert(indexCss.includes('./components/print.css'), 'print.css not imported in index.css');
  });

  console.log(`\n🎉 Verification Completed: ${passedChecks}/${totalChecks} checks passed cleanly!\n`);
}

verifyCodebaseData().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
