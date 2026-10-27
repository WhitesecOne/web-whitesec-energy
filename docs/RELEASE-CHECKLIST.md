# Daftar rilis (20 butir) dan buktinya

Diverifikasi 27 Oktober 2026 pada build produksi lokal. `node scripts/e2e.mjs` mencakup butir 1, 2, 3, 6, 7, 8, 9, 10, 11, 13, 14, 17 (44 pemeriksaan, semuanya lolos); butir 4 dan lebar 320, 1024, 1280 px diperiksa dengan skrip terpisah (hasil di bawah).

| # | Butir | Status | Bukti |
|---|---|---|---|
| 1 | 404 khusus, status HTTP 404 | Selesai | `global-not-found` untuk alamat tak dikenal, `not-found` untuk slug layanan; empat alamat uji (termasuk `/en` dan `/layanan` lama) mengembalikan 404. |
| 2 | Judul meta unik per halaman | Selesai | 18 halaman indeks, tidak ada judul ganda, semuanya di bawah 70 karakter. |
| 3 | Deskripsi meta unik per halaman | Selesai | Tidak ada yang ganda, semuanya lebih dari 50 karakter. |
| 4 | CTA di atas lipatan (360x640 dan 1366x768) | Selesai | Lima halaman uji di kedua ukuran: tombol "Talk to Us" (mobile, termasuk bilah CTA) dan tombol "Contact" di header (desktop) terlihat tanpa menggulir. |
| 5 | Set favicon | Selesai | `favicon.ico` (16/32/48), `icon.png` 512, `apple-icon.png` 180, `icon-192.png`, `icon-512.png`, `manifest.webmanifest`. |
| 6 | robots.txt | Selesai | Mengizinkan situs, menyebut sitemap, mengeluarkan halaman thank-you, menyebut crawler AI. Tanpa `NEXT_PUBLIC_SITE_URL` memblokir semua (staging aman). |
| 7 | sitemap.xml | Selesai | 18 URL kanonis; tanpa halaman thank-you dan 404. |
| 8 | Gambar Open Graph 1200x630 | Selesai | `/og`, PNG 1200 x 630, tercantum di setiap halaman. |
| 9 | Alt text di setiap gambar | Selesai | Tidak ada gambar tanpa atribut `alt` di 19 halaman; foto dekoratif di indeks layanan memakai `alt=""`. |
| 10 | Breakpoint mobile 320 sampai 1440 | Selesai | Tanpa scroll horizontal di 320, 360, 768, 1024, 1280, 1440 px, 19 halaman. |
| 11 | CTA mobile menempel | Selesai | Bilah bawah dengan safe-area, tinggi 48 px, tidak menutup konten (ada penyangga), hilang di halaman kontak dan terima kasih, mundur saat CTA halaman terlihat. |
| 12 | Loading state | Selesai | `loading.tsx` (skeleton sesuai bentuk halaman, berhenti berdenyut bila gerak dikurangi); tombol kirim menampilkan spinner dan "Sending…". |
| 13 | Error state formulir | Selesai | Ringkasan error dengan fokus, pesan per kolom, `aria-invalid`, nilai tidak hilang, pesan server gagal. |
| 14 | Halaman terima kasih | Selesai | `noindex`; konversi `generate_lead` dicatat sekali per token (`sessionStorage`) dan hanya bila analitik diizinkan. |
| 15 | Kebijakan privasi | Selesai | Bahasa Inggris. Perlu tinjauan hukum (lihat OPEN-ITEMS). |
| 16 | Syarat & ketentuan | Selesai | Bahasa Inggris. Perlu tinjauan hukum. |
| 17 | Banner cookie | Selesai | Refuse dan Allow setara bobotnya; tidak ada skrip analitik sebelum izin; pilihan diingat; dapat dibuka lagi dari footer. |
| 18 | Analitik terpasang | Kode siap, menunggu ID | GA4 dimuat hanya setelah izin. Isi `NEXT_PUBLIC_GA_ID`. |
| 19 | Alamat dan kontak nyata | Perlu konfirmasi | Alamat dan kontak berasal dari whitesec.id dan whitesec.au. Alamat Jakarta untuk praktik energi perlu Anda tegaskan. |
| 20 | Gambar terkompresi | Selesai | Sumber WebP mutu 74 (65 sampai 350 KB); `next/image` menyajikan AVIF/WebP sesuai ukuran dengan `sizes`; hanya gambar LCP (hero, foto layanan) yang `priority`. |
