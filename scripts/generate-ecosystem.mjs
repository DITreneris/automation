// Resize ecosystem master → WebP + PNG delivery variants. Run: npm run generate:ecosystem
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ecoDir = join(root, 'assets', 'img', 'ecosystem');
const src = join(ecoDir, 'ecosystem2.png');

await sharp(src)
  .resize(1200)
  .webp({ quality: 80 })
  .toFile(join(ecoDir, 'ecosystem-1200.webp'));

await sharp(src)
  .resize(800)
  .webp({ quality: 80 })
  .toFile(join(ecoDir, 'ecosystem-800.webp'));

await sharp(src)
  .resize(1200)
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(ecoDir, 'ecosystem-1200.png'));

console.log('generated assets/img/ecosystem/ecosystem-{800,1200}.webp and ecosystem-1200.png from ecosystem2.png');
