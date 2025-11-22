const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function safeWriteOver(originalPath, buffer) {
  const tmpPath = `${originalPath}.vbkdtmp`;
  try {
    try {
      await fs.chmod(originalPath, 0o666);
    } catch (e) {}
    await fs.writeFile(tmpPath, buffer);
    await fs.rename(tmpPath, originalPath);
    return true;
  } catch (err) {
    try { await fs.unlink(tmpPath); } catch (e) {}
    return false;
  }
}

async function main() {
  const cwd = process.cwd();
  const imgDir = path.join(cwd, 'src', 'img');
  const galleryDataPath = path.join(cwd, 'src', 'galleryData.ts');

  let files;
  try {
    files = await fs.readdir(imgDir);
  } catch (err) {
    console.error('Failed to read src/img:', err);
    process.exit(2);
  }

  const jpegFiles = files.filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (jpegFiles.length === 0) {
    console.log('No JPEG files found in src/img to process.');
    return;
  }

  const results = [];

  for (const fname of jpegFiles) {
    const p = path.join(imgDir, fname);
    try {
      const meta = await sharp(p).metadata();
      const width = meta.width || 0;
      const height = meta.height || 0;

      if (width > 1800) {
        console.log(`Resizing ${fname}: ${width}x${height} -> 1800px width`);
        const ext = path.extname(fname).toLowerCase();
        let buffer;
        if (ext === '.png') {
          buffer = await sharp(p).resize({ width: 1800 }).png().toBuffer();
        } else {
          buffer = await sharp(p).resize({ width: 1800 }).jpeg({ quality: 100 }).toBuffer();
        }
        const ok = await safeWriteOver(p, buffer);
        if (!ok) throw new Error('Failed to write resized image (permission or lock)');
        const newMeta = await sharp(p).metadata();
        results.push({ fname, old: { width, height }, new: { width: newMeta.width || 0, height: newMeta.height || 0 }, changed: true });
      } else {
        results.push({ fname, old: { width, height }, new: { width, height }, changed: false });
      }
    } catch (err) {
      console.error('Error processing', fname, err);
      results.push({ fname, error: String(err) });
    }
  }

  let gd;
  try {
    gd = await fs.readFile(galleryDataPath, 'utf8');
  } catch (err) {
    console.error('Failed to read galleryData.ts:', err);
    process.exit(3);
  }

  for (const r of results) {
    if (r.error) continue;
    const fname = r.fname;
    const newW = r.new.width;
    const newH = r.new.height;

    const srcPath1 = `/src/img/${fname}`;
    const srcPath2 = `src/img/${fname}`;
    let idx = gd.indexOf(srcPath1);
    if (idx === -1) idx = gd.indexOf(srcPath2);
    if (idx === -1) {
      console.warn(`Warning: could not find gallery entry for ${fname} (src not present in galleryData.ts)`);
      continue;
    }

    const start = idx;
    let tail = gd.slice(start);

    // Match either quoted or unquoted property names ("width": or width:)
    tail = tail.replace(/((?:"width"|width)\s*:\s*)(\d+)/, `$1${newW}`);
    tail = tail.replace(/((?:"height"|height)\s*:\s*)(\d+)/, `$1${newH}`);

    gd = gd.slice(0, start) + tail;
  }

  try {
    await fs.writeFile(galleryDataPath, gd, 'utf8');
    console.log('Updated src/galleryData.ts with new dimensions where applicable.');
  } catch (err) {
    console.error('Failed to write galleryData.ts:', err);
    process.exit(4);
  }

  console.log('\nSummary:');
  for (const r of results) {
    if (r.error) console.log(`${r.fname}: error: ${r.error}`);
    else if (r.changed) console.log(`${r.fname}: resized ${r.old.width}x${r.old.height} -> ${r.new.width}x${r.new.height}`);
    else console.log(`${r.fname}: unchanged ${r.old.width}x${r.old.height}`);
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});