# Yang masih perlu jawaban Anda

Situs sudah lengkap dan berjalan di lokal. Daftar ini hanya hal yang tidak boleh saya karang.

## Perlu dikonfirmasi sebelum tayang

1. **Tagline.** Rencana menawarkan tiga pilihan. Situs memakai nomor 2: "From feasibility study to a secure, efficient operation.". Mengganti: `tagline` di `src/content/en.ts`.
2. **Alamat Jakarta.** Rencana menulis "Jakarta (address to add)". Saya memakai dua alamat yang sudah tercantum di whitesec.id: Centennial Tower Level 29 (kantor cabang) dan Whitesec ID Hub (Ceger). Pastikan mana yang menjadi alamat kontak praktik energi, lalu ubah `site.entities.id.offices` di `src/lib/site.ts`.
3. **Email penerima.** Tidak ada kotak surat `@whitesec.energy`. Pertanyaan diteruskan ke `support@whitesec.id` (pilihan Indonesia) dan `support@whitesec.au` (pilihan Australia). Untuk alamat khusus energi, buat kotak surat lalu isi `CONTACT_TO_ID` dan `CONTACT_TO_AU`.
4. **Pengiriman email.** Isi `RESEND_API_KEY` dan `CONTACT_FROM` (domain pengirim harus diverifikasi di Resend). Tanpa itu formulir tetap berhasil di layar, tetapi pertanyaan hanya tercatat di log server.
5. **Google Analytics.** Kode sudah terpasang di belakang persetujuan cookie. Isi `NEXT_PUBLIC_GA_ID` dengan ID GA4; sebelum itu tidak ada analitik yang berjalan.
6. **Tinjauan hukum.** Kebijakan Privasi dan Syarat & Ketentuan ditulis berdasarkan praktik yang ada di situs (formulir, cookie analitik, dua entitas, UU 27/2022 PDP, Privacy Act 1988). Minta penasihat hukum Anda memeriksanya, terutama bagian retensi, transfer antarnegara, dan hukum yang berlaku. ABN Whitesec AU tidak dicantumkan (belum ada nomor nyata).
7. **Domain.** `whitesec.energy`: belum ada DNS, deploy, atau domain pengirim email. Pengembangan masih lokal.

## Dua kutipan peraturan yang tidak saya bisa verifikasi, sengaja tidak dipublikasikan

- **Kepmen ESDM 96.K/DI.01/MEM.S/2026** (rencana, tabel Indonesia, layanan OT). Pencarian tidak menemukan keputusan itu. Situs hanya menyebut Perpres 82/2022 dan "ketentuan turunan Kementerian ESDM untuk sektor energi". Tambahkan nomor keputusan bila sudah Anda konfirmasi.
- **Ambang 6.000, 4.000, dan 500 TOE per tahun** (rencana, layanan efisiensi energi). Saya tidak menemukan angka itu di sumber yang dapat dibuka. Situs menulis "ambang konsumsi tahunan yang ditetapkan per sektor". PP 33/2023 dan Permen ESDM 8/2025 sendiri sudah saya konfirmasi ada dan berlaku.

Peraturan lain di situs (UU 43/2009, Perpres 82/2022, PP 33/2023, Permen ESDM 8/2025, POJK 51/2017, SOCI Act dan CIRMP, AESCSF, AASB S2, NGER) berasal dari rencana dan sebagian saya konfirmasi lewat pencarian; periksa teks resminya sebelum dipakai sebagai dasar nasihat.

## Yang sengaja kosong karena belum ada buktinya

- **Studi kasus proyek energi.** Belum ada yang berizin klien. Halaman Pengalaman jujur menyebutnya dan hanya memuat pekerjaan Whitesec ID yang nyata (tiga studi kasus anonim dari whitesec.id) dan logo klien energi dan infrastruktur Whitesec ID. Setelah ada persetujuan tertulis, tambahkan kartu di `experience.cases` dan di halaman negara.
- **Mitra EPC berlisensi.** Tidak ada nama sampai perjanjian ditandatangani (halaman Tentang menyatakannya).
- **Penerbit sertifikat ISO 50001.** Belum dikonfirmasi; situs tidak menyebut badan tertentu untuk standar itu.
- **CIVD.** Situs menyatakan pekerjaan KKKS melalui mitra terdaftar CIVD (Manpro dan SCU/Elnusa), persis seperti whitesec.id. Whitesec tidak mengklaim terdaftar sendiri.
- **Insinyur energi dan energy auditor.** Halaman Tentang menyebut keduanya "bergabung sesuai kebutuhan proyek" dan hanya menamai dua pendiri. Tambahkan orangnya bila sudah ada.
- **Lima area yang tidak ditawarkan** (hidrogen, CCS, kredit karbon, subsurface migas, studi koneksi jaringan di Australia sebagai layanan penuh) tidak tampil di situs, sesuai rencana. Hanya "studi koneksi jaringan belum ditawarkan" di Australia yang tampil, karena tabel rencana menyebutnya.

## Urusan bisnis dari rencana (bukan urusan situs)

Persetujuan bendera Whitesec AU untuk pekerjaan energi, peran Edwin dan konflik kepentingan dengan Triputra, proses IUJPTL dan SBU, kode KBLI, energy manager dan energy auditor bersertifikat, pendaftaran CIVD SKK Migas, insinyur energi Australia dan registrasi insinyur WA mulai 1 Juli 2027, mitra sertifikasi ISO 50001, perjanjian mitra EPC, persetujuan klien untuk disebut namanya.
