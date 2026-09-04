import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const docsDir = path.join(rootDir, 'docs');
const assetsDir = path.join(rootDir, 'assets');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run build first.');
  process.exit(1);
}

// 1. Copy dist/index.html to root index.html
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));

// 2. Ensure docs directory exists and copy dist/ to docs/
fs.cpSync(distDir, docsDir, { recursive: true });

// 3. Ensure assets directory exists and copy dist/assets to assets/
if (fs.existsSync(path.join(distDir, 'assets'))) {
  fs.cpSync(path.join(distDir, 'assets'), assetsDir, { recursive: true });
}

// 4. Copy favicon and icons to root if present
for (const file of ['favicon.svg', 'icons.svg']) {
  const src = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(rootDir, file));
  }
}

// 5. Ensure .nojekyll in root and docs
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');

console.log('Successfully synchronized production bundle to root and /docs for GitHub Pages deployment.');
