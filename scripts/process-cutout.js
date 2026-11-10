const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'images', 'fidha-cutout.jpg');
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'fidha-cutout.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  // Flood fill or threshold to make pure/near white pixels transparent
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is very close to white (background is solid white)
    if (r > 240 && g > 240 && b > 240) {
      // smooth alpha transition
      const avg = (r + g + b) / 3;
      const alpha = Math.max(0, Math.min(255, 255 - ((avg - 240) / 15) * 255));
      data[i + 3] = Math.round(alpha);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png()
    .toFile(outputPath);

  console.log(`Successfully generated transparent cutout at ${outputPath} (${width}x${height})`);
}

processImage().catch(console.error);

