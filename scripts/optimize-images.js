const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/products';
const outputDir = './public/products_optmized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const extensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath, outputPath) {
  try {
    await sharp(filePath)
      .resize(600, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`✅ ${path.basename(filePath)} → ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`❌ Erro: ${filePath}`, err);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (extensions.includes(path.extname(file).toLowerCase())) {
      const outputPath = path.join(outputDir, path.basename(file, path.extname(file)) + '.webp');
      await optimizeImage(filePath, outputPath);
    }
  }
}

console.log('🚀 Otimizando imagens...');
processDirectory(inputDir).then(() => {
  console.log('✨ Otimização finalizada!');
});