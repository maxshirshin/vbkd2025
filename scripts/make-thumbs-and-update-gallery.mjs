import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const SRC_IMG = path.join(ROOT, 'src', 'img')
const DST_THUMBS = path.join(ROOT, 'src', 'thumbs')
const GALLERY_FILE = path.join(ROOT, 'src', 'galleryData.ts')

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (err) {
    // ignore
  }
}

function shortestSideResize(meta) {
  const minSide = Math.min(meta.width || 0, meta.height || 0)
  if (!minSide) return null
  const maxShort = 400
  if (minSide <= maxShort) return null
  const scale = maxShort / minSide
  const w = Math.round((meta.width || 0) * scale)
  const h = Math.round((meta.height || 0) * scale)
  return { w, h }
}

async function main() {
  await ensureDir(DST_THUMBS)

  const raw = await fs.readFile(GALLERY_FILE, 'utf8')
  const m = raw.match(/const\s+galleryPhotosRaw\s*=\s*(\[[\s\S]*?\]);/m)
  if (!m) {
    console.error('Could not find galleryPhotosRaw array in', GALLERY_FILE)
    process.exit(1)
  }
  const arrayText = m[1]
  let items
  try {
    items = JSON.parse(arrayText)
  } catch (err) {
    console.error('Failed to parse galleryPhotosRaw JSON:', err)
    process.exit(1)
  }

  for (const item of items) {
    if (!item || !item.src) continue
    const srcPath = path.join(ROOT, item.src.replace(/^\//, ''))
    const filename = path.basename(srcPath)
    const dstPath = path.join(DST_THUMBS, filename)
    try {
      const img = sharp(srcPath)
      const meta = await img.metadata()
      const resizeTo = shortestSideResize(meta)
      if (resizeTo) {
        await img.resize(resizeTo.w, resizeTo.h, { fit: 'inside' }).toFile(dstPath)
      } else {
        // copy original (no upscaling)
        await fs.copyFile(srcPath, dstPath)
      }
      const newMeta = await sharp(dstPath).metadata()
      item.lowSrc = `/src/thumbs/${filename}`
      item.lowWidth = newMeta.width
      item.lowHeight = newMeta.height
      console.log('Wrote thumb', dstPath, `${newMeta.width}x${newMeta.height}`)
    } catch (err) {
      console.error('Error processing', srcPath, err)
    }
  }

  // write back galleryData.ts with updated lowSrc fields
  const out = []
  out.push('const galleryPhotosRaw = ' + JSON.stringify(items, null, 2) + ';')
  out.push('')
  out.push('// filter out entries that were explicitly marked as not accepted, then')
  out.push('// export the processed list where title is set to the filename')
  out.push('export const galleryPhotos = galleryPhotosRaw')
  out.push("  .filter(p => (p as any).accepted !== false)")
  out.push('  .map(p => ({')
  out.push('    ...p,')
  out.push("    // set title to filename (basename of src), e.g. \"1.jpg\"")
  out.push('    title: p.src.split(\'/\').pop() || p.title,')
  out.push('  }));')

  await fs.writeFile(GALLERY_FILE, out.join('\n'), 'utf8')
  console.log('Updated', GALLERY_FILE)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
