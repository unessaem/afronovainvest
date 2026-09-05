/**
 * Builds a single self-contained HTML preview of the site (all CSS, JS and
 * images inlined) — handy for sending a client a one-file preview.
 * Run AFTER `npm run build`:   node scripts/build-singlefile.mjs
 * Output: dist-preview/afronova-invest-preview.html
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const outDir = path.join(root, 'dist-preview')

const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const cssFile = html.match(/href="[^"]*?(assets\/index-[^"]+\.css)"/)[1]
const jsFile = html.match(/src="[^"]*?(assets\/index-[^"]+\.js)"/)[1]

const css = fs.readFileSync(path.join(dist, cssFile), 'utf8')
let js = fs.readFileSync(path.join(dist, jsFile), 'utf8')

const mime = (f) => (f.endsWith('.png') ? 'image/png' : 'image/jpeg')
const dataUri = (rel) => {
  const file = path.join(dist, rel)
  if (!fs.existsSync(file)) return null
  return `data:${mime(rel)};base64,${fs.readFileSync(file).toString('base64')}`
}

// Inline every fingerprinted image emitted next to the JS bundle
const refs = new Set(
  (js.match(/"[\w.-]+-[A-Za-z0-9_-]{6,}\.(?:jpg|png|webp)"/g) || []).map((s) => s.slice(1, -1))
)
let inlined = 0
for (const ref of refs) {
  const uri = dataUri(path.posix.join('assets', ref))
  if (!uri) continue
  js = js.split(`"${ref}"`).join(JSON.stringify(uri))
  inlined++
}

const out = `<meta charset="utf-8">
<title>AFRONOVA INVEST</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet">
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`

fs.mkdirSync(outDir, { recursive: true })
const target = path.join(outDir, 'afronova-invest-preview.html')
fs.writeFileSync(target, out)
console.log(`inlined ${inlined} images → ${target} (${(out.length / 1e6).toFixed(2)} MB)`)
