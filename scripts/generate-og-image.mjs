// Resize design master 01_og_image.png → og-image.png (1200×630). Run: npm run generate:og-image
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, '01_og_image.png');
const out = join(root, 'og-image.png');

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png()
  .toFile(out);

console.log('generated og-image.png 1200x630 from 01_og_image.png');
