// Generates PNG favicons from assets/img/icons/favicon.svg. Run: npm run generate:favicons
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const iconsDir = join(root, 'assets', 'img', 'icons');
const src = readFileSync(join(iconsDir, 'favicon.svg'));

const targets = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
];

for (const [name, size] of targets) {
  await sharp(src, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 11, g: 19, b: 32, alpha: 1 } })
    .png()
    .toFile(join(iconsDir, name));
  console.log('generated', name, `${size}x${size}`);
}
