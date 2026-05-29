// Resize design master → og-image.png (1200×630). Run: npm run generate:og-image
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ogDir = join(root, 'assets', 'img', 'og');
const src = join(ogDir, '01_og_image.png');
const out = join(ogDir, 'og-image.png');

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(out);

console.log('generated assets/img/og/og-image.png 1200x630 from 01_og_image.png');
