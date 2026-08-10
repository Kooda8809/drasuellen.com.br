import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Dra Suellen/public/images';
const galleryDir = 'c:/Dra Suellen/Imagens para a galeria';
const rootDra4 = 'c:/Dra Suellen/DRA 4.jpeg';

async function convertImages() {
  console.log('Starting AVIF conversion...');

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Convert DRA 4.jpeg
  if (fs.existsSync(rootDra4)) {
    console.log('Converting DRA 4.jpeg to AVIF...');
    await sharp(rootDra4)
      .avif({ quality: 85 })
      .toFile(path.join(imagesDir, 'dra4.avif'));
    console.log('✔ DRA 4.jpeg converted to dra4.avif');
  }

  // Convert files in "Imagens para a galeria"
  if (fs.existsSync(galleryDir)) {
    const galleryFiles = fs.readdirSync(galleryDir);
    for (const file of galleryFiles) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
        const name = path.basename(file, ext)
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '_')
          .replace(/_+/g, '_')
          .replace(/^_|_$/g, '');

        const inputPath = path.join(galleryDir, file);
        const outputPath = path.join(imagesDir, `${name}.avif`);

        if (!fs.existsSync(outputPath)) {
          console.log(`Converting "${file}" to ${name}.avif...`);
          await sharp(inputPath)
            .avif({ quality: 85 })
            .toFile(outputPath);
          console.log(`✔ ${file} -> ${name}.avif`);
        }
      }
    }
  }

  console.log('All image conversions to AVIF complete!');
}

convertImages().catch(err => {
  console.error('Error during AVIF conversion:', err);
  process.exit(1);
});
