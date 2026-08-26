// Generates a valid placeholder PDF at public/cv.pdf.
// Replace that file with your real CV (keep the same name) — run: node scripts/make-cv.mjs
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'public', 'cv.pdf')
mkdirSync(join(root, 'public'), { recursive: true })

const content = [
  'BT /F1 10 Tf 72 780 Td (KHALID - GRAPHIC DESIGNER) Tj ET',
  'BT /F1 22 Tf 72 740 Td (Curriculum Vitae) Tj ET',
  'BT /F1 10 Tf 72 716 Td (This is a placeholder file.) Tj ET',
  'BT /F1 10 Tf 72 702 Td (Replace public/cv.pdf with your real CV - keep the same filename.) Tj ET',
  'BT /F1 10 Tf 72 672 Td (EXPERIENCE) Tj ET',
  'BT /F1 10 Tf 72 656 Td (2023 - Now   Independent designer) Tj ET',
  'BT /F1 10 Tf 72 642 Td (2021 - 2023  Studio Nord, Karachi) Tj ET',
  'BT /F1 10 Tf 72 628 Td (2019 - 2021  Ansari & Co., Lahore) Tj ET',
  'BT /F1 10 Tf 72 598 Td (CONTACT) Tj ET',
  'BT /F1 10 Tf 72 582 Td (hello@khalid.design) Tj ET',
].join('\n')

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
]

let pdf = '%PDF-1.4\n'
const offsets = []
objects.forEach((body, i) => {
  offsets.push(pdf.length)
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`
})

const xrefStart = pdf.length
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
for (const off of offsets) {
  pdf += `${String(off).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

writeFileSync(out, pdf, 'latin1')
console.log(`Wrote ${out} (${pdf.length} bytes)`)
