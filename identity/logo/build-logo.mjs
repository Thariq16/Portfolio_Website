import fs from 'node:fs';
import path from 'node:path';
import * as fk from 'fontkit';

const out = path.resolve('out');
fs.mkdirSync(out, { recursive: true });

const font = fk.openSync('node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2');
const UPM = font.unitsPerEm; // 2000

const C = {
    paper: '#f6f2e8', ink: '#1d1a13', green: '#1e5a43',
    night: '#14110b', ivory: '#ece5d3', mint: '#85b89d',
};

// Lay out a string with a variation instance; returns {d, width, ascent, descent, capHeight}
function setType(text, axes, tracking = 0) {
    const inst = font.getVariation(axes);
    const run = inst.layout(text);
    let x = 0, paths = [];
    run.glyphs.forEach((g, i) => {
        const p = run.positions[i];
        const d = g.path.toSVG();
        if (d) paths.push(`<path transform="translate(${x + (p.xOffset || 0)} ${p.yOffset || 0})" d="${d}"/>`);
        x += p.xAdvance + tracking;
    });
    return { paths: paths.join(''), width: x - tracking, capHeight: inst.capHeight, xHeight: inst.xHeight };
}

// Place laid-out type into a box: fit width to `w`, baseline at `baseline`, left at `left`.
function place(t, left, baseline, scale, fill) {
    return `<g fill="${fill}" transform="translate(${left} ${baseline}) scale(${scale} ${-scale})">${t.paths}</g>`;
}

// ---------- Monogram (512 viewBox) ----------
function monogram({ bg, fg, rule, rx = 88, safe = 1, bleed = false }) {
    const t = setType('TH', { wght: 640, opsz: 96, SOFT: 0, WONK: 0 }, -20);
    const targetW = 338 * safe;
    const s = targetW / t.width;
    const capH = t.capHeight * s;
    const left = (512 - targetW) / 2;
    const baseline = 256 + capH / 2 - 14 * safe; // nudge up to make room for the rule
    const ruleY = baseline + 34 * safe;
    const sw = Math.max(6, 10 * safe);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="Thariq Hamad monogram">
<rect width="512" height="512" ${bleed ? '' : `rx="${rx}"`} fill="${bg}"/>
${place(t, left, baseline, s, fg)}
<line x1="${left}" y1="${ruleY}" x2="${left + targetW}" y2="${ruleY}" stroke="${rule}" stroke-width="${sw}" stroke-linecap="butt"/>
</svg>`;
}

const marks = {
    'monogram-green': monogram({ bg: C.green, fg: C.paper, rule: C.paper }),
    'monogram-paper': monogram({ bg: C.paper, fg: C.ink, rule: C.green }),
    'monogram-night': monogram({ bg: C.night, fg: C.ivory, rule: C.mint }),
    'monogram-bleed': monogram({ bg: C.green, fg: C.paper, rule: C.paper, bleed: true }),
    'monogram-maskable': monogram({ bg: C.green, fg: C.paper, rule: C.paper, safe: 0.72, bleed: true }),
};
for (const [n, svg] of Object.entries(marks)) fs.writeFileSync(path.join(out, `${n}.svg`), svg);

// ---------- Wordmark ----------
function wordmark({ fg, rule, label }) {
    const t = setType('Thariq Hamad', { wght: 520, opsz: 72, SOFT: 0, WONK: 0 }, 6);
    const s = 0.0405; // font-size ≈ 81px
    const w = t.width * s;
    const pad = 4, h = 120;
    const baseline = 84;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.ceil(w) + pad * 2} ${h}" role="img" aria-label="${label}">
${place(t, pad, baseline, s, fg)}
<line x1="${pad}" y1="${baseline + 18}" x2="${pad + 56}" y2="${baseline + 18}" stroke="${rule}" stroke-width="3"/>
</svg>`;
}
fs.writeFileSync(path.join(out, 'wordmark-ink.svg'), wordmark({ fg: C.ink, rule: C.green, label: 'Thariq Hamad' }));
fs.writeFileSync(path.join(out, 'wordmark-ivory.svg'), wordmark({ fg: C.ivory, rule: C.mint, label: 'Thariq Hamad' }));

// ---------- Horizontal lockup (monogram tile + wordmark) ----------
function lockup({ tileBg, tileFg, tileRule, wordFg, wordRule }) {
    const tile = monogram({ bg: tileBg, fg: tileFg, rule: tileRule, rx: 88 })
        .replace(/<svg[^>]*>/, '').replace('</svg>', '');
    const t = setType('Thariq Hamad', { wght: 520, opsz: 72, SOFT: 0, WONK: 0 }, 6);
    const s = 0.0405, w = t.width * s;
    const tileSize = 96, gap = 28;
    const totalW = tileSize + gap + Math.ceil(w) + 8;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} ${tileSize}" role="img" aria-label="Thariq Hamad">
<g transform="scale(${tileSize / 512})">${tile}</g>
${place(t, tileSize + gap, 64, s, wordFg)}
<line x1="${tileSize + gap}" y1="80" x2="${tileSize + gap + 48}" y2="80" stroke="${wordRule}" stroke-width="3"/>
</svg>`;
}
fs.writeFileSync(path.join(out, 'lockup-ink.svg'), lockup({ tileBg: C.green, tileFg: C.paper, tileRule: C.paper, wordFg: C.ink, wordRule: C.green }));
fs.writeFileSync(path.join(out, 'lockup-ivory.svg'), lockup({ tileBg: C.mint, tileFg: C.night, tileRule: C.night, wordFg: C.ivory, wordRule: C.mint }));

console.log(fs.readdirSync(out).join('\n'));
