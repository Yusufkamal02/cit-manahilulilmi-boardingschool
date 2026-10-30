// Seluruh konten website publik.
// Data resmi (dari poster & info PPDB 2027/2028): identitas, kontak, alamat, peta, biaya,
// gelombang PPDB, keunggulan, fasilitas, dan jurusan SMK (RPL). Sisanya (deskripsi program, ekskul, jadwal,
// karya, testimoni, berita, visi-misi, sebagian foto) masih CONTOH dan harus diganti.
// Nantinya konten ini dipindahkan ke CMS agar bisa diubah tanpa menyentuh kode.

// Nomor WhatsApp admin PPDB (format internasional, tanpa +).
const whatsapp = "6281292598618";

export const school = {
  // true menampilkan pita "Versi Pratinjau" dan melarang mesin pencari mengindeks website.
  isPreview: false,
  name: "CIT Manahilul Ilmi",
  fullName: "SMP-SMK CIT Manahilul Ilmi Boarding School",
  tagline: "BOARDING SCHOOL",
  levels: "SMP • SMK",
  ppdbYear: "2027/2028",
  whatsapp,
  whatsappDisplay: "0812-9259-8618",
  // Nomor kedua (dari poster PPDB).
  phone: "0812-1982-0431",
  // Domain sementara sampai domain .sch.id terbit.
  website: "https://manahilulilmi.com",
  websiteDisplay: "manahilulilmi.com",
  address: "Kp. Mulyasari, Desa Karyasari, RT 01/RW 03, Kec. Leuwiliang, Kabupaten Bogor, Jawa Barat 16640",
  // CONTOH — belum ada data resmi.
  officeHours: "Senin–Sabtu, 08.00–16.00 WIB",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=SMK+TI+CIT+BOARDING+SCHOOL+MANAHILUL+ILMI,+Karyasari,+Leuwiliang,+Bogor&z=15&output=embed",
  mapsLink: "https://maps.app.goo.gl/YMXJ1t3X3tV1k1Xt5",
  // Ikon ada di public/assets/.
  socials: [
    { label: "Instagram", icon: "/assets/instagram.svg", href: "https://www.instagram.com/aura_analytics/" },
    { label: "YouTube", icon: "/assets/youtube.svg", href: "https://www.youtube.com/@AuraAnalytics25" },
    // CONTOH — ganti dengan akun TikTok resmi.
    { label: "TikTok", icon: "/assets/tiktok.svg", href: "https://tiktok.com" },
    // CONTOH — ganti dengan halaman Facebook resmi.
    { label: "Facebook", icon: "/assets/facebook.svg", href: "https://facebook.com" },
    { label: "LinkedIn", icon: "/assets/linkedin.svg", href: "https://www.linkedin.com/company/aura-analytics-sinergi/" },
    { label: "WhatsApp", icon: "/assets/whatsapp.svg", href: `https://wa.me/${whatsapp}` },
  ],
};

export const nav = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#program", label: "Program" },
  { href: "#kehidupan", label: "Kehidupan" },
  { href: "#biaya", label: "Biaya" },
  { href: "#ppdb", label: "PPDB" },
  { href: "#berita", label: "Berita" },
  { href: "#kontak", label: "Kontak" },
];

// Foto contoh dari Unsplash; foto asli sekolah ada di public/foto/.
const u = (id: string, w = 1100) => `https://images.unsplash.com/${id}?w=${w}&q=82&fit=crop`;

export const heroSlides = [
  {
    title: "Berilmu dan berkarakter.",
    accent: "Siap berkarya.",
    description:
      "Bersama CIT Manahilul Ilmi Boarding School, jelajahi pendidikan teknologi, pembelajaran praktik, dan pembinaan karakter dalam suasana berasrama.",
    label: "Learn. Build. Grow.",
    mini: "BELAJAR • TUMBUH • BERKARYA",
    image: "/foto/santri-berseragam.jpg",
    alt: "Santri CIT Manahilul Ilmi berseragam berdiri di depan banner sekolah",
  },
  {
    title: "Berani mencoba.",
    accent: "Terampil berkarya.",
    description:
      "Eksplorasi coding, IoT, dan robotika melalui pembelajaran berbasis proyek yang mengubah rasa ingin tahu menjadi karya nyata.",
    label: "Make Ideas Happen.",
    mini: "PROJECT BASED LEARNING",
    image: "/foto/santri-coding-lab.jpg",
    alt: "Santri belajar pemrograman di lab komputer",
  },
  {
    title: "Tumbuh mandiri.",
    accent: "Melangkah percaya diri.",
    description:
      "Kehidupan berasrama 24 jam membangun kedisiplinan, kecintaan pada Al-Qur'an, kerja sama, dan kepedulian dalam keseharian.",
    label: "Grow With Purpose.",
    mini: "BOARDING & CHARACTER",
    image: "/foto/asrama-santri.jpg",
    alt: "Deretan bangunan asrama santri berlatar perbukitan",
  },
];

export const ticker = [
  "AI & MACHINE LEARNING",
  "DATA SCIENCE",
  "COMPUTER VISION",
  "IOT ROBOTICS",
  "SERTIFIKASI NASIONAL & INTERNASIONAL",
  "DINIYYAH & TAHFIDZ",
  "SEKOLAH TAHFIDZ 30 JUZ",
  "BOARDING PUTRA",
];

export const advantages = [
  { icon: "🤖", title: "Kurikulum AI & Teknologi", text: "RPL, AI & Machine Learning, Data Science, NLP, Computer Vision, AI Apps, dan IoT Robotics." },
  { icon: "📖", title: "Diniyyah & Tahfidz", text: "Pendidikan diniyyah dan kelas tahfidz sebagai fondasi akhlak dan kecintaan pada Al-Qur'an." },
  { icon: "🏭", title: "Terhubung ke Industri", text: "Guru berpengalaman dengan koneksi industri, materi industri, dan kesempatan magang di PT Telkom atau PT Peruri." },
  { icon: "🎓", title: "Miliki kesempatan Sertifikasi", text: "Berbagai sertifikasi nasional dan internasional untuk bekal siap kerja, siap kuliah, atau kerja sambil kuliah." },
  { icon: "🌳", title: "Lahan Seluas 5 Hektar", text: "Kampus luas yang nyaman untuk belajar, termasuk kelas outdoor di pendopo dan lapangan olahraga." },
  { icon: "🏠", title: "Asrama Putra Lengkap", text: "Ranjang, kasur, lemari, makan 3x sehari, dan laundry pakaian 2x sepekan." },
];

export const about = {
  image: "/foto/masjid.jpg",
  alt: "Masjid CIT Manahilul Ilmi",
  points: ["Pembelajaran teknologi", "Tahfidz & diniyah", "Kehidupan berasrama", "Karya & portofolio"],
  stats: [
    { value: 3, suffix: "", label: "Jenjang" },
    { value: 5, suffix: " ha", label: "Luas lahan" },
    { value: 10, suffix: "+", label: "Fasilitas" },
    { value: 24, suffix: " jam", label: "Pembinaan asrama" },
  ],
  vision:
    "Menjadi boarding school unggulan yang melahirkan generasi Qur'ani, berakhlak mulia, mandiri, dan menguasai teknologi informasi untuk kemaslahatan umat.",
  missions: [
    "Menyelenggarakan pendidikan terpadu antara ilmu agama, akademik, dan teknologi.",
    "Membina santri agar cinta Al-Qur'an melalui program tahfidz dan pembiasaan ibadah.",
    "Mengembangkan kompetensi IT, IoT, dan robotika melalui pembelajaran berbasis proyek.",
    "Menumbuhkan kemandirian, kepemimpinan, dan jiwa wirausaha dalam kehidupan berasrama.",
    "Membangun kemitraan dengan orang tua, industri, dan masyarakat.",
  ],
};

export type Program = {
  label: string;
  tab: string;
  title: string;
  desc: string;
  perks: string[];
  stamp: string;
  image: string;
};

export const programs: { level: "SMP" | "SMK" | "Tahfidz"; intro: string; items: Program[] }[] = [
  {
    level: "SMP",
    intro: "SMP IT Boarding — 3 tahun, fondasi akhlak, akademik, dan literasi digital.",
    items: [
      {
        tab: "Akademik Terpadu",
        label: "SMP • AKADEMIK",
        title: "Kurikulum nasional berpadu nilai-nilai Islam.",
        desc: "Pembelajaran akademik yang kuat dengan kelas kecil, pendampingan belajar malam, dan integrasi nilai keislaman di setiap mata pelajaran.",
        perks: ["Kurikulum Merdeka", "Kelas kecil", "Belajar malam terbimbing"],
        stamp: "Strong Foundation.",
        image: "/foto/kelas-presentasi.jpg",
      },
      {
        tab: "Tahfidz & Diniyyah",
        label: "SMP • TAHFIDZ",
        title: "Tumbuh bersama Al-Qur'an setiap hari.",
        desc: "Setoran hafalan harian, tahsin, serta kajian aqidah, fiqih, dan adab yang dibimbing langsung oleh musyrif.",
        perks: ["Target hafalan", "Tahsin", "Kajian diniyyah"],
        stamp: "Qur'an First.",
        image: u("photo-1609599006353-e629aaabfeae", 850),
      },
      {
        tab: "Coding & Robotik Dasar",
        label: "SMP • TEKNOLOGI",
        title: "Mengenal logika, coding, dan robot sejak dini.",
        desc: "Pengenalan computational thinking, pemrograman blok hingga Python dasar, dan proyek robotik sederhana yang menyenangkan.",
        perks: ["Computational thinking", "Python dasar", "Robotik pemula"],
        stamp: "Think. Code. Play.",
        image: "/foto/santri-komputer.jpg",
      },
    ],
  },
  {
    level: "SMK",
    intro: "SMK TI Boarding — 3 tahun, jurusan Rekayasa Perangkat Lunak (RPL), siap kerja, siap kuliah, atau kerja sambil kuliah.",
    items: [
      {
        tab: "Rekayasa Perangkat Lunak",
        label: "SMK • RPL",
        title: "Menyusun ide menjadi solusi lewat pemrograman dan AI.",
        desc: "Pemrograman web & aplikasi, hingga AI & Machine Learning, Data Science, NLP, Computer Vision, AI Apps, dan IoT Robotics — dilengkapi materi industri dan sertifikasi internasional.",
        perks: ["Web & aplikasi", "AI & Machine Learning", "Data Science", "IoT Robotics"],
        stamp: "Think. Code. Build.",
        image: "/foto/coding-laptop.jpg",
      },
      {
        tab: "IoT & Robotika",
        label: "SMK • IOT & ROBOTIKA",
        title: "Membuat teknologi bergerak dan merespons dunia nyata.",
        desc: "Sensor, mikrokontroler, ESP32, robotika, dan Internet of Things melalui proyek yang bisa langsung diuji dan dilombakan.",
        perks: ["Sensor & ESP32", "Internet of Things", "Robotics"],
        stamp: "Build & Innovate.",
        image: "/foto/rakit-robot.jpg",
      },
      {
        tab: "Akademik Terpadu",
        label: "SMK • AKADEMIK",
        title: "Kurikulum nasional berpadu nilai-nilai Islam.",
        desc: "Mata pelajaran umum dengan integrasi nilai keislaman, pendampingan belajar malam, serta kesempatan magang di PT Telkom atau PT Peruri sebagai bekal kerja dan kuliah.",
        perks: ["Kurikulum nasional", "Magang industri", "Siap kerja & kuliah"],
        stamp: "Ready for the Future.",
        image: "/foto/kelas-presentasi.jpg",
      },
      {
        tab: "Tahfidz & Diniyyah",
        label: "SMK • TAHFIDZ",
        title: "Tetap dekat dengan Al-Qur'an di tengah teknologi.",
        desc: "Setoran hafalan harian, tahsin, serta kajian aqidah, fiqih, dan adab yang dibimbing langsung oleh musyrif.",
        perks: ["Target hafalan", "Tahsin", "Kajian diniyyah"],
        stamp: "Qur'an First.",
        image: u("photo-1585036156171-384164a8c675", 850),
      },
    ],
  },
  {
    level: "Tahfidz",
    intro: "Sekolah Tahfidz — 3 tahun (6 semester), usia setara SMP–SMA (±12–18 th), fokus tahfidz & diniyyah. Lulusan mendapat ijazah tahfidz & sertifikat (bukan ijazah sekolah formal).",
    items: [
      {
        tab: "Tahfidz 30 Juz Mutqin",
        label: "SEKOLAH TAHFIDZ • 30 JUZ",
        title: "Menghafal 30 juz dengan hafalan yang kuat dan terjaga.",
        desc: "Setoran ziyadah dan muraja'ah harian, tahsin, serta ujian per juz. Lulusan mendapat ijazah tahfidz dan sertifikat, serta sanad bagi yang mengajukan dan dinyatakan lulus.",
        perks: ["Target 30 juz mutqin", "Ujian per juz", "Ijazah, sertifikat & sanad"],
        stamp: "Hafidz Qur'an.",
        image: u("photo-1609599006353-e629aaabfeae", 850),
      },
      {
        tab: "Diniyyah",
        label: "SEKOLAH TAHFIDZ • DINIYYAH",
        title: "Memahami agama sebagai bekal hidup.",
        desc: "Kajian aqidah, fiqih, dan adab serta bahasa Arab dasar, dibimbing langsung oleh asatidz dan musyrif.",
        perks: ["Aqidah & fiqih", "Adab", "Bahasa Arab dasar"],
        stamp: "Ilmu & Adab.",
        image: u("photo-1585036156171-384164a8c675", 850),
      },
      {
        tab: "Ekskul IT, IoT & Robotics",
        label: "SEKOLAH TAHFIDZ • EKSKUL",
        title: "Tetap melek teknologi di sela hafalan.",
        desc: "Ekstrakurikuler khusus santri Sekolah Tahfidz: coding dasar, Internet of Things, dan robotika, dijadwalkan di luar jam tahfidz.",
        perks: ["Coding dasar", "Internet of Things", "Robotics"],
        stamp: "Qur'an & Tech.",
        image: "/foto/lab-iot.jpg",
      },
    ],
  },
];

export const activities = [
  { tag: "01 / CHARACTER BUILDING", title: "Leadership & Adventure Camp", text: "Belajar kepemimpinan, kerja tim, dan ketangguhan melalui pengalaman di alam.", image: "photo-1500534623283-312aade485b7" },
  { tag: "02 / TECHNOLOGY", title: "Tech & Innovation Lab", text: "Eksperimen dan prototipe di laboratorium teknologi.", image: "/foto/lab-iot.jpg" },
  { tag: "03 / COMMUNITY", title: "Community & Sharing", text: "Berbagi ilmu dan pengabdian kepada masyarakat.", image: "/foto/acara-bersama.jpg" },
  { tag: "04 / ENTREPRENEURSHIP", title: "Entrepreneurship Day", text: "Mengasah jiwa wirausaha lewat bazar dan pitching ide.", image: "photo-1552664730-d307ca884978" },
  { tag: "05 / SPIRITUAL", title: "Qiyamul Lail & Kajian", text: "Pembiasaan ibadah dan kajian bersama di asrama.", image: "photo-1585036156171-384164a8c675" },
].map((a) => (a.image.startsWith("/") ? { ...a, thumb: a.image, full: a.image } : { ...a, thumb: u(a.image, 820), full: u(a.image, 1400) }));

export const extracurriculars = [
  { icon: "🤖", name: "Robotik", group: "Teknologi" },
  { icon: "💻", name: "Competitive Programming", group: "Teknologi" },
  { icon: "🎮", name: "Game Development", group: "Teknologi" },
  { icon: "🎨", name: "Desain Grafis & UI", group: "Teknologi" },
  { icon: "🎬", name: "Multimedia & Konten", group: "Teknologi" },
  { icon: "📖", name: "Tahfidz Intensif", group: "Keagamaan" },
  { icon: "🎙️", name: "Muhadharah (Pidato)", group: "Keagamaan" },
  { icon: "⚽", name: "Futsal", group: "Olahraga" },
  { icon: "🥋", name: "Karate", group: "Olahraga" },
  { icon: "🗣️", name: "English Club", group: "Bahasa" },
];

export const facilities = [
  { icon: "🕌", title: "Masjid", text: "Pusat ibadah berjamaah, kajian, dan halaqah tahfidz." },
  { icon: "🏠", title: "Asrama Santri", text: "Asrama putra dengan ranjang, kasur, dan lemari untuk setiap santri." },
  { icon: "🏫", title: "Ruang Kelas", text: "Ruang belajar indoor dengan akses wifi untuk kegiatan akademik harian." },
  { icon: "⛩️", title: "Kelas Outdoor (Pendopo)", text: "Ruang belajar terbuka di tengah lahan kampus yang asri." },
  { icon: "⚽", title: "Lapangan Olahraga", text: "Lapangan futsal, basket, dan badminton." },
  { icon: "📚", title: "Perpustakaan", text: "Koleksi buku untuk menunjang belajar dan literasi santri." },
  { icon: "🍱", title: "Makan & Laundry", text: "Makan 3x sehari dan laundry pakaian 2x sepekan (termasuk SPP)." },
  { icon: "🛡️", title: "Pos Keamanan", text: "Penjagaan lingkungan sekolah dan asrama." },
  { icon: "🛏️", title: "Guest House", text: "Tempat menginap bagi orang tua yang berkunjung." },
];

export const dailySchedule = [
  { time: "03.30", title: "Qiyamul lail & Subuh berjamaah" },
  { time: "05.00", title: "Setoran tahfidz" },
  { time: "07.00", title: "Pembelajaran akademik & kejuruan" },
  { time: "18.00", title: "Maghrib, kajian & makan malam" },
  { time: "19.30", title: "Belajar malam terbimbing" },
  { time: "21.30", title: "Istirahat" },
];

export const works = [
  { category: "robotics", tag: "ROBOTICS / AI", title: "Robot Vision Explorer", text: "Robot cerdas yang mampu merespons kondisi lingkungan secara otomatis.", image: u("photo-1485827404703-89b55fcc595e", 750) },
  { category: "coding", tag: "WEB DEVELOPMENT", title: "Smart Learning Platform", text: "Aplikasi untuk membantu proses belajar lebih personal dan menyenangkan.", image: u("photo-1498050108023-c5249f4df085", 750) },
  { category: "iot", tag: "INTERNET OF THINGS", title: "Smart Garden Monitor", text: "Sistem penyiraman otomatis berbasis sensor kelembapan dan ESP32.", image: u("photo-1530836369250-ef72a3f5cda8", 750) },
  { category: "design", tag: "DIGITAL DESIGN", title: "Creative Digital Campaign", text: "Visual dan pengalaman digital yang dirancang untuk menjawab kebutuhan nyata.", image: u("photo-1558655146-9f40138edfeb", 750) },
  { category: "coding", tag: "MOBILE APP", title: "Aplikasi Murojaah Hafalan", text: "Aplikasi pengingat dan pencatat murojaah hafalan santri.", image: u("photo-1512941937669-90a1b58e7e9c", 750) },
  { category: "iot", tag: "IOT / SECURITY", title: "Smart Door Asrama", text: "Kunci pintu berbasis RFID dengan log keluar-masuk.", image: u("photo-1558002038-1055907df827", 750) },
];

export const workFilters = [
  { key: "all", label: "Semua" },
  { key: "robotics", label: "Robotics" },
  { key: "iot", label: "IoT" },
  { key: "coding", label: "Coding" },
  { key: "design", label: "Design" },
];

// Harga resmi PPDB 2027/2028. Harga promo berlaku untuk pendaftar Gelombang 1.
// Baris tanpa harga ditampilkan "Hubungi admin".
type FeeRow = { level: string; normal?: number; promo?: number };

export const fees: { tab: string; title: string; desc: string; rows: FeeRow[]; notes: string[] }[] = [
  {
    tab: "Uang Pangkal",
    title: "Uang Pangkal",
    desc: "Dibayar sekali saat daftar ulang dan bisa dicicil.",
    rows: [
      { level: "SMP", normal: 15_000_000, promo: 13_000_000 },
      { level: "SMK", normal: 20_000_000, promo: 15_000_000 },
      { level: "Sekolah Tahfidz" },
    ],
    notes: ["Termasuk asrama (ranjang, kasur, lemari), 3 seragam, buku, dan berbagai fasilitas lainnya", "Uang pangkal bisa dicicil"],
  },
  {
    tab: "SPP Bulanan",
    title: "SPP Bulanan",
    desc: "Dibayar setiap bulan.",
    rows: [
      { level: "SMP", normal: 2_000_000, promo: 1_500_000 },
      { level: "SMK", normal: 2_500_000, promo: 2_000_000 },
      { level: "Sekolah Tahfidz" },
    ],
    notes: ["Termasuk makan 3x sehari", "Termasuk laundry pakaian 2x sepekan"],
  },
];

export const feeExtras = ["Menerima murid pindahan", "Ada keringanan biaya", "Kuota terbatas"];

export const ppdbWaves = [
  { name: "Gelombang 1", period: "Oktober – Desember 2026", perk: "Promo uang pangkal & SPP", status: "open" as const },
  { name: "Gelombang 2", period: "Januari – Maret 2027", perk: "Info biaya: hubungi admin", status: "soon" as const },
  { name: "Gelombang 3", period: "April – Juni 2027", perk: "Selama kuota tersedia", status: "soon" as const },
];

export const ppdbSteps = [
  { title: "Cari Informasi", text: "Pelajari program, jurusan, biaya, dan jadwal gelombang.", who: "Calon wali santri" },
  { title: "Buat Akun", text: "Pilih jenjang & jurusan, isi nama dan nomor WhatsApp.", who: "Calon wali santri" },
  { title: "Bayar Formulir", text: "Transfer biaya pendaftaran dan unggah bukti bayar.", who: "Calon wali santri" },
  { title: "Isi Data & Berkas", text: "Biodata, data orang tua, KK, akta, rapor, dan pas foto.", who: "Calon wali santri" },
  { title: "Verifikasi", text: "Panitia memeriksa berkas dan pembayaran.", who: "Panitia" },
  { title: "Tes & Wawancara", text: "Akademik, baca Al-Qur'an, minat IT, wawancara santri & orang tua.", who: "Santri & orang tua" },
  { title: "Pengumuman", text: "Hasil seleksi diumumkan lewat akun dan WhatsApp.", who: "Panitia" },
  { title: "Daftar Ulang", text: "Bayar uang pangkal (bisa dicicil) dan lengkapi administrasi.", who: "Calon wali santri" },
  { title: "Masuk Asrama", text: "Persiapan perlengkapan dan hari pertama di asrama.", who: "Santri baru" },
];

export const ppdbRequirements = [
  "Fotokopi Kartu Keluarga & akta kelahiran",
  "Rapor 2 semester terakhir",
  "Pas foto 3x4 latar merah",
  "Ijazah / Surat Keterangan Lulus (menyusul)",
  "Surat keterangan sehat",
];

export const testimonials = [
  { quote: "Saya menyukai bagaimana pembelajaran tidak berhenti pada teori. Setiap ide didorong menjadi proyek yang nyata.", name: "Contoh Testimoni A", role: "Ilustrasi • Orang tua siswa", letter: "A" },
  { quote: "Kegiatan kolaboratif memberi siswa kesempatan belajar percaya diri, berkomunikasi, dan menyelesaikan tantangan bersama.", name: "Contoh Testimoni B", role: "Ilustrasi • Pendidik", letter: "B" },
  { quote: "Ada kebanggaan tersendiri ketika karya yang awalnya hanya ide akhirnya dapat dipresentasikan di depan banyak orang.", name: "Contoh Testimoni C", role: "Ilustrasi • Siswa", letter: "C" },
];

export const news = [
  { date: "2026-10-20", dateLabel: "20 Okt 2026", category: "Prestasi", title: "Tim Robotik CIT Raih Juara 2 Lomba Robot Tingkat Provinsi", excerpt: "Santri SMK berhasil membawa pulang medali perak dalam kategori line follower.", image: u("photo-1561557944-6e7860d1a7eb", 750) },
  { date: "2026-10-12", dateLabel: "12 Okt 2026", category: "PPDB", title: "PPDB 2027/2028 Gelombang 1 Resmi Dibuka", excerpt: "Pendaftaran santri baru (putra) jenjang SMP, SMK, dan Sekolah Tahfidz dibuka Oktober–Desember 2026 dengan promo uang pangkal dan SPP.", image: u("photo-1427504494785-3a9ca7044f45", 750) },
  { date: "2026-10-03", dateLabel: "3 Okt 2026", category: "Kegiatan", title: "Wisuda Tahfidz Angkatan Ke-5", excerpt: "Sebanyak 42 santri menuntaskan target hafalan dan diwisuda di hadapan orang tua.", image: u("photo-1609599006353-e629aaabfeae", 750) },
];

export const faqs = [
  { q: "Apa yang menjadi fokus pembelajaran CIT?", a: "Perpaduan pendidikan teknologi (pemrograman, AI, Data Science, IoT & robotika), program tahfidz dan diniyyah, serta pembinaan karakter dan kemandirian dalam kehidupan berasrama." },
  { q: "Apakah sekolah ini menerima santri putri?", a: "Saat ini CIT Manahilul Ilmi khusus menerima santri putra untuk jenjang SMP, SMK, dan Sekolah Tahfidz." },
  { q: "Apa itu Sekolah Tahfidz?", a: "Program 3 tahun (6 semester) untuk santri usia setara SMP–SMA yang ingin fokus menghafal Al-Qur'an dan belajar diniyyah, dengan target 30 juz mutqin. Lulusan mendapat ijazah tahfidz dan sertifikat, serta sanad bagi yang mengajukan dan dinyatakan lulus. Program ini tidak memberikan ijazah sekolah formal. Santri juga bisa mengikuti ekskul IT, IoT & Robotics." },
  { q: "Apakah semua santri wajib tinggal di asrama?", a: "Ya. Seluruh santri tinggal di asrama putra yang dilengkapi ranjang, kasur, dan lemari, dengan makan 3x sehari dan laundry 2x sepekan." },
  { q: "Jurusan apa saja yang tersedia di SMK?", a: "Saat ini SMK membuka satu jurusan, yaitu Rekayasa Perangkat Lunak (RPL), dengan materi AI & Machine Learning, Data Science, NLP, Computer Vision, AI Apps, dan IoT Robotics. Santri SMK juga mengikuti program akademik terpadu serta tahfidz & diniyyah." },
  { q: "Berapa biaya masuk dan SPP bulanan?", a: "Promo Gelombang 1: uang pangkal SMP Rp13 juta (normal Rp15 juta) dan SMK Rp15 juta (normal Rp20 juta); SPP SMP Rp1,5 juta/bulan (normal Rp2 juta) dan SMK Rp2 juta/bulan (normal Rp2,5 juta). Biaya Sekolah Tahfidz silakan hubungi admin PPDB. Uang pangkal bisa dicicil dan tersedia keringanan biaya." },
  { q: "Apakah menerima murid pindahan?", a: "Ya, sekolah menerima murid pindahan. Hubungi admin PPDB untuk informasi persyaratannya." },
  { q: "Kapan orang tua bisa menjenguk santri?", a: "Kunjungan dapat dilakukan pada jadwal kunjungan yang ditetapkan asrama, umumnya satu kali dalam sebulan." },
  { q: "Bagaimana cara mendaftar?", a: "Klik tombol Daftar Sekarang, isi data singkat, lalu Anda akan terhubung dengan admin PPDB melalui WhatsApp untuk langkah berikutnya." },
];

export const programOptions = [
  "SMP IT Boarding",
  "SMK — Rekayasa Perangkat Lunak",
  "Sekolah Tahfidz (30 Juz)",
  "Belum tahu, ingin konsultasi",
];
