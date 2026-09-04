import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const templatePath = path.join(rootDir, 'template.html');

if (fs.existsSync(templatePath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  if (!content.includes('/src/main.tsx')) {
    fs.copyFileSync(templatePath, indexPath);
    console.log('Restored index.html from template.html for development/build.');
  }
}
