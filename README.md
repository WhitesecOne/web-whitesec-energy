# whitesec.energy

Situs publik praktik energi Whitesec (PT Topi Putih Siberindo / Whitesec ID dan Whitesec AU): konsultasi dan implementasi energi untuk minyak dan gas, energi terbarukan, dan energi hijau di Indonesia dan Australia. Situs hanya berbahasa Inggris.

Next.js 16 (App Router), Tailwind CSS v4, shadcn/ui di atas Base UI, dan Motion. Sumber kebutuhan: `whitesec-energy-services-website-plan.docx` (24 Oktober 2026), ringkasannya ada di `PRODUCT.md`.

## Menjalankan lokal

```bash
npm install
npm run dev            # http://localhost:3000
npm run lint
npm run check          # aturan formulir kontak
npm run build
```

Uji menyeluruh di browser (44 pemeriksaan: semua halaman di 360, 768, dan 1440 px, metadata, 404, formulir, cookie, menu, CTA mobile):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3200 npx next build
NEXT_PUBLIC_SITE_URL=http://localhost:3200 npx next start -p 3200
CHROMIUM_PATH=<biner browser jika Playwright belum memasangnya> node scripts/e2e.mjs
```

## Variabel lingkungan

Salin `.env.example` menjadi `.env.local`.

| Nama | Wajib | Fungsi |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Ya, di produksi | URL kanonis (`https://whitesec.energy`). Tanpa nilai ini `robots.txt` memblokir semua crawler, sehingga staging aman. |
| `RESEND_API_KEY` | Agar email terkirim | Mengirim pertanyaan lewat Resend. Tanpa kunci, pertanyaan hanya dicatat di log server. |
| `CONTACT_FROM` | Bila memakai Resend | Alamat pengirim, harus dari domain yang sudah diverifikasi di Resend. |
| `CONTACT_TO_ID`, `CONTACT_TO_AU`, `CONTACT_TO` | Tidak | Penerima. Bawaan: `support@whitesec.id` untuk pengunjung yang memilih Indonesia, `support@whitesec.au` untuk Australia. |
| `NEXT_PUBLIC_GA_ID` | Agar analitik aktif | ID Google Analytics 4. Skrip hanya dimuat setelah pengunjung mengizinkan cookie. |

## Struktur

- `src/content/en.ts`: seluruh teks situs. Tipenya di `types.ts`; kolom yang kurang tidak akan lolos `tsc`. Edit teks di sini.
- `src/lib/routes.ts`: alamat tiap halaman (`/services/...`, `/how-we-work`, dst.) dan daftar sitemap.
- `src/lib/site.ts`: fakta tetap: entitas kontrak, alamat kantor, email, telepon.
- `src/lib/photos.ts`: setiap foto beserta sumber dan lisensinya (juga membangun halaman Kredit Foto).
- `src/lib/partners.ts`: logo klien dan mitra yang nyata, diambil dari whitesec.id dan whitesec.au.
- `src/views/`: isi tiap halaman; `src/app/*/page.tsx` hanya pembungkus tipis (metadata + view). Satu root layout (`lang="en"`).
- `src/components/`: header, footer, diagram alur kerja, indeks layanan, formulir kontak, banner cookie, CTA mobile.
- `src/app/_actions/contact.ts`: server action formulir (honeypot, validasi di server, Resend).
- `src/app/{robots,sitemap,manifest}.ts`, `src/app/og`, `src/app/llms*.txt`: SEO, AEO, dan GEO.
- `docs/`: `RELEASE-CHECKLIST.md`, `OPEN-ITEMS.md`, `IMAGE-CREDITS.md`.

Menambah layanan: tambahkan satu objek di `services` pada `src/content/en.ts`, satu nilai pada `ServiceKey` dan `serviceKeys` di `types.ts`, dan satu foto di `servicePhoto`. Menu, indeks, sitemap, formulir, dan llms.txt mengikuti.

## Deploy

Belum ditentukan (pengembangan lokal dulu). Saat siap: proyek Vercel baru, isi variabel di atas, arahkan DNS `whitesec.energy`. Kirim email lewat Resend memerlukan verifikasi domain pengirim.
