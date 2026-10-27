# Design: whitesec.energy

Dunia visual: dokumen teknik dari konsultan energi. Latar putih, tinta gelap, oranye Whitesec hanya sebagai aksen dan satu warna aksi. Garis tipis (hairline) sebagai satu-satunya perangkat struktur antar bagian; foto nyata sumber terbuka; satu diagram sederhana per halaman layanan. Ditetapkan oleh brief pemilik (rencana situs, bagian "Look and feel"); tidak ada turnamen konsep.

## Warna

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `--ink` | `#0f172a` | teks utama, judul, garis tegas, pita gelap (footer, CTA akhir) |
| `--body` | `#334155` | teks isi |
| `--muted-foreground` | `#596579` | teks pendukung (4.5:1 di putih dan di kertas) |
| `--brand` | `#f74c2a` | tanda logo, belah ketupat gerbang keputusan; tidak untuk teks |
| `--primary` | `#d93b14` | tombol utama, tautan aktif di latar putih (4.9:1 dengan teks putih) |
| `--brand-deep` | `#b32f0d` | tautan teks (lewat 4.5:1 di putih dan di kertas), hover tombol |
| `--paper` | `#f6f4ef` | pita bergantian; hangat, sengaja berbeda dari slate dingin situs Whitesec lain |
| `--rule` | `#e2dfd8` | garis pemisah baris |

Hanya terang: situs dibaca di meja kerja pada siang hari oleh petugas pengadaan dan insinyur.

## Tipografi

Satu keluarga: Plus Jakarta Sans (400 sampai 800). Alasan: digambar dekat dengan geometri tebal dan membulat pada wordmark Whitesec, sehingga judul (800, tracking -0.035em) terbaca sebagai keluarga yang sama dengan logo. Skala: judul halaman `clamp(2.25rem, 5vw, 3.75rem)`, bagian `clamp(1.875rem, 3.1vw, 2.75rem)`, isi 17 sampai 18 px, ukuran terkecil 14 px. Ukuran baris isi 52 sampai 62 karakter.

## Bentuk

Radius kecil (4 sampai 8 px, foto 8 px), tanpa pil dan tanpa lencana, tanpa kaca, tanpa glow, tanpa bayangan kecuali satu bayangan lembut pada menu layanan dan banner cookie yang melayang. Ikon hanya panah dan chevron fungsional.

## Susunan

Tidak ada kartu ikon dan tidak ada grid kartu sejenis. Bagian layanan adalah indeks yang dibaca ke bawah dengan foto yang berganti di sisi kanan (desktop) atau di tiap baris (mobile). Negara berdampingan dengan foto dan aturan bernama. Metode kerja dan alur tiap layanan memakai satu diagram: lingkaran adalah tahap, belah ketupat oranye adalah gerbang keputusan tempat klien menyetujui. Ritme bagian bergantian putih dan kertas, jarak vertikal 64 sampai 96 px, dan lebar kolom teks dibatasi.

## Gerak

Satu momen yang ditulis: hero (teks naik 18 px berurutan, foto keluar dari zoom 1.06) dan garis diagram yang tergambar sekali saat tiba. Sisanya hanya naik 20 px saat masuk layar (`Reveal`), tanpa menyembunyikan konten sebelum JavaScript jalan. Menghormati `prefers-reduced-motion` (`MotionConfig reducedMotion="user"`, skeleton berhenti berdenyut).

## Yang dihindari

Bento, kartu ikon seragam, bilah logo "dipercaya oleh" di bawah hero, statistik dan testimoni karangan, gradien, eyebrow di atas judul, angka bagian, teks gradien, em dash. Foto bukan proyek Whitesec dan diberi label demikian.
