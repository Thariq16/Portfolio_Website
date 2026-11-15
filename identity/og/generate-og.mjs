// Generates every Open Graph image (1200x630 JPEG) from src/lib/dictionaries.ts.
//   PW_ROOT=<folder with playwright installed> node identity/og/generate-og.mjs
// Output: public/images/og/{site, case-<slug>, career-<slug>}.jpg
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const repo = path.resolve(import.meta.dirname, '..', '..');
const req = createRequire(path.join(repo, 'package.json'));
const ts = req('typescript');
const { chromium } = createRequire(path.join(process.env.PW_ROOT || repo, 'package.json'))('playwright');

// --- load the dictionary (TS, with an '@/utils/assets' alias) -------------------------------
function loadDictionary() {
    const src = fs.readFileSync(path.join(repo, 'src/lib/dictionaries.ts'), 'utf8');
    const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
    const mod = { exports: {} };
    new Function('require', 'module', 'exports', js)((id) => (id.startsWith('@/') ? { getAssetPath: (p) => p } : req(id)), mod, mod.exports);
    return mod.exports.dictionary.en;
}
const en = loadDictionary();

// --- shared card -----------------------------------------------------------------------------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fit = (v, big, small, limit) => (String(v).length > limit ? small : big);

const monogramSvg = fs.readFileSync(path.join(repo, 'identity/logo/monogram-green.svg'), 'utf8').replace('<svg ', '<svg width="44" height="44" ');

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:#f6f2e8;font-family:'JetBrains Mono',monospace;overflow:hidden;position:relative}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(80,66,40,.10) 1.5px,transparent 1.5px);background-size:28px 28px;background-position:-10px -10px}
.frame{position:absolute;inset:36px;border:1px solid rgba(80,66,40,.25);border-radius:10px}
.content{position:relative;height:100%;padding:68px 76px 54px;display:flex;flex-direction:column;justify-content:space-between}
.eyebrow{font-size:15px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#1e5a43}
.headline{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-.01em;color:#1d1a13;margin-top:18px;max-width:960px;line-height:1.15}
.stats{display:flex;gap:56px;align-items:flex-end}
.stat{display:flex;flex-direction:column;min-width:0}
.val{font-family:'Fraunces',Georgia,serif;font-weight:500;line-height:1;color:#1e5a43;white-space:nowrap}
.lab{font-size:14px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6d6250;margin-top:10px}
.foot{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(80,66,40,.25);padding-top:20px}
.who{display:flex;align-items:center;gap:14px;font-size:15px;font-weight:600;color:#1d1a13}
.who span{color:#6d6250;font-weight:500}
.url{font-size:14px;font-weight:500;color:#6d6250;letter-spacing:.04em}
.plate{position:absolute;right:76px;top:76px;width:330px;height:420px;border:1px solid rgba(80,66,40,.3);border-radius:8px;padding:8px;background:#f1ecdf}
.plate img{width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:4px;display:block}
`;

const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">`;

const foot = (url, role = 'Senior Product Manager') =>
    `<div class="foot"><div class="who">${monogramSvg}<div>Thariq Hamad <span>&middot; ${esc(role)}</span></div></div><div class="url">${esc(url)}</div></div>`;

const shell = (body) => `<!DOCTYPE html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}</style></head><body><div class="dots"></div><div class="frame"></div>${body}</body></html>`;

// Case study: title + its three lead metrics.
function caseCard(item) {
    const stats = item.metrics.slice(0, 3);
    const hl = item.title.length > 70 ? 40 : 46;
    return shell(`<div class="content"><div>
<div class="eyebrow">Case study &middot; ${esc(item.company)}</div>
<div class="headline" style="font-size:${hl}px">${esc(item.title)}</div></div>
<div class="stats">${stats.map((m) => `<div class="stat"><div class="val" style="font-size:${fit(m.value, 72, 52, 8)}px">${esc(m.value)}</div><div class="lab">${esc(m.label)}</div></div>`).join('')}</div>
${foot(`thariqhamad.com/projects/${item.slug}`)}</div>`);
}

// Career page: role + company / period / place.
function careerCard(job) {
    const facts = [['Company', job.company], ['Period', job.dateRange], ['Where', job.location]];
    return shell(`<div class="content"><div>
<div class="eyebrow">Career &middot; ${esc(job.company)}</div>
<div class="headline" style="font-size:${job.title.length > 42 ? 44 : 52}px">${esc(job.title)}</div></div>
<div class="stats" style="gap:48px">${facts.map(([l, v]) => `<div class="stat"><div class="val" style="font-size:${fit(v, 34, 26, 20)}px;white-space:normal;max-width:340px;line-height:1.15">${esc(v)}</div><div class="lab">${l}</div></div>`).join('')}</div>
${foot(`thariqhamad.com/career/${job.slug}`)}</div>`);
}

// /projects listing: count comes from the data so it never goes stale.
function projectsCard() {
    const n = en.projects.items.length;
    return shell(`<div class="content"><div>
<div class="eyebrow">Product case studies &middot; Thariq Hamad</div>
<div class="headline" style="font-size:46px">From zero&#8209;to&#8209;one builds to enterprise SaaS growth</div></div>
<div class="stats"><div class="stat"><div class="val" style="font-size:76px">${n}</div><div class="lab">Case studies</div></div><div class="stat"><div class="val" style="font-size:76px">SAR 7.5M+</div><div class="lab">Pipeline built</div></div><div class="stat"><div class="val" style="font-size:76px">1 &rarr; 34</div><div class="lab">Team scaled</div></div></div>
${foot('thariqhamad.com/projects')}</div>`);
}

// Site default: name, role, headshot plate.
function siteCard() {
    const photo = pathToFileURL(path.join(repo, 'public/images/headshot-navy.jpg')).href;
    return shell(`<div class="plate"><img src="${photo}" alt=""></div>
<div class="content"><div style="max-width:640px">
<div class="eyebrow">Senior Product Manager &middot; KSA &amp; GCC</div>
<div class="headline" style="font-size:84px;line-height:1.05;margin-top:22px">Thariq Hamad</div>
<div style="font-family:Fraunces,Georgia,serif;font-size:34px;line-height:1.25;color:#6d6250;margin-top:22px">Zero-to-one products, measured in revenue.</div></div>
<div class="stats" style="gap:44px"><div class="stat"><div class="val" style="font-size:50px">SAR 7.5M+</div><div class="lab">Pipeline built</div></div><div class="stat"><div class="val" style="font-size:50px">1 &rarr; 34</div><div class="lab">Team scaled</div></div></div>
${foot('thariqhamad.com')}</div>`);
}

// --- render ----------------------------------------------------------------------------------
const outDir = path.join(repo, 'public/images/og');
fs.mkdirSync(outDir, { recursive: true });
const tmp = path.join(outDir, '.tmp.html');

const jobs = [['site', siteCard()], ['projects', projectsCard()]];
for (const it of en.projects.items) jobs.push([`case-${it.slug}`, caseCard(it)]);
for (const j of en.career.jobs) jobs.push([`career-${j.slug}`, careerCard(j)]);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const [name, html] of jobs) {
    fs.writeFileSync(tmp, html);
    await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(outDir, `${name}.jpg`), type: 'jpeg', quality: 86 });
    console.log('wrote', `${name}.jpg`);
}
await browser.close();
fs.unlinkSync(tmp);
