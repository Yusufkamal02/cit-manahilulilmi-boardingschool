# Website Publik — SMP-SMK CIT Manahilulilmi Boarding School

Dibangun dengan Next.js dari desain acuan di `../Web_Design_Public_Access/`.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan → http://localhost:3000
npm run build && npm run start   # mode produksi
```

## Mengubah konten

Semua teks, angka, biaya, kontak, dan foto ada di **`src/content/site.ts`**.
Isinya masih **contoh** dan wajib diganti dengan data resmi sebelum dipublikasikan:

- `school.whatsapp`: nomor WhatsApp admin PPDB (format `62…`, tanpa `+`)
- `school.mapsEmbedUrl`: URL embed Google Maps (Bagikan → Sematkan peta → salin `src`)
- `fees`: nominal biaya pendaftaran, uang pangkal, SPP
- Foto: saat ini memakai foto ilustrasi Unsplash, ganti dengan foto asli sekolah

## Struktur

- `src/app/page.tsx`: susunan seluruh bagian halaman
- `src/app/globals.css`: gaya visual, warna tema terang & gelap (token di `:root`)
- `src/components/`: header, hero slider, tema, formulir WhatsApp, bagian interaktif
