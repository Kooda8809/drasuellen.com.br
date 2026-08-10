import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Dra Suellen/public/images';
const rootHero = 'c:/Dra Suellen/HERO.jpeg';

async function convertImages() {
  console.log('Starting AVIF conversion...');

  // Convert root HERO.jpeg
  if (fs.existsSync(rootHero)) {
    console.log('Converting HERO.jpeg to AVIF...');
    await sharp(rootHero)
      .avif({ quality: 85 })
      .toFile(path.join(imagesDir, 'hero_new.avif'));
    
    await sharp(rootHero)
      .avif({ quality: 85 })
      .toFile(path.join(imagesDir, 'hero.avif'));

    console.log('✔ HERO.jpeg converted to hero_new.avif & hero.avif');
  }

  // Convert all images in public/images
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
      const name = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, `${name}.avif`);
      
      console.log(`Converting ${file} to ${name}.avif...`);
      await sharp(inputPath)
        .avif({ quality: 80 })
        .toFile(outputPath);
      console.log(`✔ ${file} -> ${name}.avif`);
    }
  }

  console.log('All image conversions to AVIF complete!');
}

convertImages().catch(err => {
  console.error('Error during AVIF conversion:', err);
  process.exit(1);
});
