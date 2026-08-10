import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/Dra Suellen/public/images';
const rootHero = 'c:/Dra Suellen/HERO.jpeg';
const rootDra2 = 'c:/Dra Suellen/Dra 2.jpg';
const rootDra3 = 'c:/Dra Suellen/dra 3.jpeg';

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

  // Convert root Dra 2.jpg
  if (fs.existsSync(rootDra2)) {
    console.log('Converting Dra 2.jpg to AVIF...');
    await sharp(rootDra2)
      .avif({ quality: 85 })
      .toFile(path.join(imagesDir, 'dra2.avif'));
    console.log('✔ Dra 2.jpg converted to dra2.avif');
  }

  // Convert root dra 3.jpeg
  if (fs.existsSync(rootDra3)) {
    console.log('Converting dra 3.jpeg to AVIF...');
    await sharp(rootDra3)
      .avif({ quality: 85 })
      .toFile(path.join(imagesDir, 'dra3.avif'));
    console.log('✔ dra 3.jpeg converted to dra3.avif');
  }

  // Convert any other images in public/images
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpeg' || ext === '.jpg') {
      const name = path.basename(file, ext);
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, `${name}.avif`);
      
      if (!fs.existsSync(outputPath)) {
        console.log(`Converting ${file} to ${name}.avif...`);
        await sharp(inputPath)
          .avif({ quality: 80 })
          .toFile(outputPath);
        console.log(`✔ ${file} -> ${name}.avif`);
      }
    }
  }

  console.log('All image conversions to AVIF complete!');
}

convertImages().catch(err => {
  console.error('Error during AVIF conversion:', err);
  process.exit(1);
});
