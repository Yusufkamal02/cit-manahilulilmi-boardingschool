// Seluruh konten website publik.
// CATATAN: semua teks, angka, nominal, kontak, dan foto di file ini adalah CONTOH
// dan harus diganti dengan data resmi sekolah sebelum dipublikasikan.
// Nantinya konten ini dipindahkan ke CMS agar bisa diubah tanpa menyentuh kode.

export const school = {
  // true selama data masih contoh: menampilkan pita "Versi Pratinjau" dan
  // melarang mesin pencari mengindeks website. Ubah ke false saat data resmi siap.
  isPreview: true,
  name: "CIT Manahilulilmi",
  fullName: "SMP-SMK CIT Manahilulilmi Boarding School",
  tagline: "BOARDING SCHOOL",
  levels: "SMP • SMK",
  ppdbYear: "2027/2028",
  // Nomor WhatsApp admin PPDB (format internasional, tanpa +). CONTOH.
  whatsapp: "6281234567890",
  whatsappDisplay: "0812-3456-7890",
  phone: "(021) 1234-5678",
  email: "info@cit-manahilulilmi.sch.id",
  address: "Jl. Contoh Pendidikan No. 1, Kecamatan Contoh, Kabupaten Contoh, Jawa Barat 12345",
  officeHours: "Senin–Sabtu, 08.00–16.00 WIB",
  // Isi dengan URL embed Google Maps lokasi sekolah (Bagikan → Sematkan peta → salin src).
  mapsEmbedUrl: "",
  mapsLink: "https://maps.google.com",
  socials: [
    { label: "Instagram", short: "ig", href: "https://instagram.com" },
    { label: "YouTube", short: "▶", href: "https://youtube.com" },
    { label: "TikTok", short: "tt", href: "https://tiktok.com" },
    { label: "Facebook", short: "fb", href: "https://facebook.com" },
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

const u = (id: string, w = 1100) => `https://images.unsplash.com/${id}?w=${w}&q=82&fit=crop`;

export const heroSlides = [
  {
    title: "Berilmu dan berkarakter.",
    accent: "Siap berkarya.",
    description:
      "Bersama CIT Manahilulilmi Boarding School, jelajahi pendidikan teknologi, pembelajaran praktik, dan pembinaan karakter dalam suasana berasrama.",
    label: "Learn. Build. Grow.",
    mini: "BELAJAR • TUMBUH • BERKARYA",
    image: u("photo-1509062522246-3755977927d7"),
    alt: "Ilustrasi pelajar di lingkungan sekolah",
  },
  {
    title: "Berani mencoba.",
    accent: "Terampil berkarya.",
    description:
      "Eksplorasi coding, IoT, dan robotika melalui pembelajaran berbasis proyek yang mengubah rasa ingin tahu menjadi karya nyata.",
    label: "Make Ideas Happen.",
    mini: "PROJECT BASED LEARNING",
    image: u("photo-1516321318423-f06f85e504b3"),
    alt: "Ilustrasi siswa berkolaborasi di depan komputer",
  },
  {
    title: "Tumbuh mandiri.",
    accent: "Melangkah percaya diri.",
    description:
      "Kehidupan berasrama 24 jam membangun kedisiplinan, kecintaan pada Al-Qur'an, kerja sama, dan kepedulian dalam keseharian.",
    label: "Grow With Purpose.",
    mini: "BOARDING & CHARACTER",
    image: u("photo-1523240795612-9a054b0db644"),
    alt: "Ilustrasi siswa belajar bersama",
  },
];

export const ticker = [
  "CODING & DIGITAL SKILLS",
  "IOT & ROBOTICS",
  "TAHFIDZ AL-QUR'AN",
  "LEADERSHIP & CHARACTER",
  "BOARDING LIFE 24 JAM",
  "CREATIVE ENTREPRENEURSHIP",
];

export const advantages = [
  { icon: "💻", title: "Teknologi Masa Depan", text: "Eksplorasi pemrograman, robotika, IoT, dan keterampilan digital melalui aktivitas belajar yang aplikatif." },
  { icon: "📖", title: "Qur'ani & Berakhlak", text: "Program tahfidz, kajian diniyah, dan pembiasaan ibadah harian sebagai fondasi karakter santri." },
  { icon: "🏠", title: "Kehidupan Berasrama", text: "Lingkungan berasrama sebagai ruang melatih kemandirian, kebiasaan baik, dan kepedulian." },
  { icon: "🛠️", title: "Belajar Lewat Proyek", text: "Bukan hanya teori. Siswa merancang, membangun, menguji, dan mempresentasikan karyanya." },
  { icon: "✨", title: "Mentor Inspiratif", text: "Pendampingan guru dan musyrif yang mendorong rasa ingin tahu, kolaborasi, dan belajar mandiri." },
  { icon: "🤝", title: "Komunitas Positif", text: "Lingkungan aman dan suportif untuk bertumbuh, bereksperimen, dan berani mencoba hal baru." },
];

export const about = {
  image: u("photo-1523240795612-9a054b0db644", 950),
  points: ["Pembelajaran teknologi", "Tahfidz & diniyah", "Kehidupan berasrama", "Karya & portofolio"],
  stats: [
    { value: 2, suffix: "", label: "Jenjang" },
    { value: 3, suffix: "", label: "Jurusan SMK" },
    { value: 15, suffix: "+", label: "Ekstrakurikuler" },
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

export const programs: { level: "SMP" | "SMK"; intro: string; items: Program[] }[] = [
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
        image: u("photo-1503676260728-1c00da094a0b", 850),
      },
      {
        tab: "Tahfidz & Diniyah",
        label: "SMP • TAHFIDZ",
        title: "Tumbuh bersama Al-Qur'an setiap hari.",
        desc: "Setoran hafalan harian, tahsin, serta kajian aqidah, fiqih, dan adab yang dibimbing langsung oleh musyrif.",
        perks: ["Target hafalan", "Tahsin", "Kajian diniyah"],
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
        image: u("photo-1581092921461-eab62e97a780", 850),
      },
    ],
  },
  {
    level: "SMK",
    intro: "SMK TI Boarding — 3 tahun, kompetensi vokasi teknologi siap kerja, kuliah, dan wirausaha.",
    items: [
      {
        tab: "Rekayasa Perangkat Lunak",
        label: "SMK • RPL",
        title: "Menyusun ide menjadi solusi lewat pemrograman.",
        desc: "Logika pemrograman, pengembangan web & aplikasi mobile, basis data, dan kerja tim digital dengan proyek nyata.",
        perks: ["Web development", "Mobile app", "Database"],
        stamp: "Think. Code. Build.",
        image: u("photo-1498050108023-c5249f4df085", 850),
      },
      {
        tab: "Teknik Komputer & Jaringan",
        label: "SMK • TKJ",
        title: "Memahami koneksi yang menggerakkan dunia digital.",
        desc: "Perakitan komputer, jaringan, server, cloud, dan dasar keamanan siber melalui praktik di lab jaringan.",
        perks: ["Networking", "Server & cloud", "Cyber security"],
        stamp: "Connect & Secure.",
        image: u("photo-1558494949-ef010cbdcc31", 850),
      },
      {
        tab: "IoT & Robotika",
        label: "SMK • IOT & ROBOTIKA",
        title: "Membuat teknologi bergerak dan merespons dunia nyata.",
        desc: "Sensor, mikrokontroler, ESP32, robotika, dan Internet of Things melalui proyek yang bisa langsung diuji dan dilombakan.",
        perks: ["Sensor & ESP32", "Internet of Things", "Robotics"],
        stamp: "Build & Innovate.",
        image: u("photo-1485827404703-89b55fcc595e", 850),
      },
    ],
  },
];

export const activities = [
  { tag: "01 / CHARACTER BUILDING", title: "Leadership & Adventure Camp", text: "Belajar kepemimpinan, kerja tim, dan ketangguhan melalui pengalaman di alam.", image: "photo-1500534623283-312aade485b7" },
  { tag: "02 / TECHNOLOGY", title: "Tech & Innovation Lab", text: "Eksperimen dan prototipe di laboratorium teknologi.", image: "photo-1532094349884-543bc11b234d" },
  { tag: "03 / COMMUNITY", title: "Community & Sharing", text: "Berbagi ilmu dan pengabdian kepada masyarakat.", image: "photo-1523580494863-6f3031224c94" },
  { tag: "04 / ENTREPRENEURSHIP", title: "Entrepreneurship Day", text: "Mengasah jiwa wirausaha lewat bazar dan pitching ide.", image: "photo-1552664730-d307ca884978" },
  { tag: "05 / SPIRITUAL", title: "Qiyamul Lail & Kajian", text: "Pembiasaan ibadah dan kajian bersama di asrama.", image: "photo-1585036156171-384164a8c675" },
].map((a) => ({ ...a, thumb: u(a.image, 820), full: u(a.image, 1400) }));

export const extracurriculars = [
  { icon: "🤖", name: "Robotik", group: "Teknologi" },
  { icon: "💻", name: "Competitive Programming", group: "Teknologi" },
  { icon: "🎮", name: "Game Development", group: "Teknologi" },
  { icon: "🎨", name: "Desain Grafis & UI", group: "Teknologi" },
  { icon: "🎬", name: "Multimedia & Konten", group: "Teknologi" },
  { icon: "📖", name: "Tahfidz Intensif", group: "Keagamaan" },
  { icon: "🎙️", name: "Muhadharah (Pidato)", group: "Keagamaan" },
  { icon: "🕌", name: "Kaligrafi", group: "Keagamaan" },
  { icon: "🏹", name: "Panahan", group: "Olahraga" },
  { icon: "⚽", name: "Futsal", group: "Olahraga" },
  { icon: "🥋", name: "Pencak Silat", group: "Olahraga" },
  { icon: "🏊", name: "Renang", group: "Olahraga" },
  { icon: "⛺", name: "Pramuka", group: "Kepemimpinan" },
  { icon: "🗣️", name: "English Club", group: "Bahasa" },
  { icon: "🌙", name: "Arabic Club", group: "Bahasa" },
  { icon: "💼", name: "Young Entrepreneur", group: "Kepemimpinan" },
];

export const facilities = [
  { icon: "🏠", title: "Asrama Putra & Putri", text: "Kamar nyaman terpisah, didampingi musyrif/musyrifah 24 jam." },
  { icon: "🖥️", title: "Lab Komputer", text: "Perangkat untuk pemrograman, desain, dan multimedia." },
  { icon: "🔌", title: "Lab IoT & Robotika", text: "Kit mikrokontroler, sensor, dan arena uji robot." },
  { icon: "🌐", title: "Lab Jaringan", text: "Perangkat jaringan dan server untuk praktik TKJ." },
  { icon: "🕌", title: "Masjid", text: "Pusat ibadah, halaqah tahfidz, dan kajian." },
  { icon: "🍱", title: "Dapur & Ruang Makan", text: "Makan 3x sehari dengan menu bergizi." },
  { icon: "🩺", title: "Klinik Kesehatan", text: "Layanan kesehatan dasar untuk santri." },
  { icon: "⚽", title: "Lapangan Olahraga", text: "Futsal, panahan, dan area kegiatan luar ruang." },
];

export const dailySchedule = [
  { time: "03.30", title: "Qiyamul lail & Subuh berjamaah" },
  { time: "05.00", title: "Setoran tahfidz" },
  { time: "07.00", title: "Pembelajaran akademik & kejuruan" },
  { time: "15.30", title: "Ekstrakurikuler" },
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

// Nominal CONTOH — wajib diganti dengan nominal resmi.
export const fees = [
  {
    tab: "Pendaftaran",
    title: "Biaya Pendaftaran",
    desc: "Dibayar saat mendaftar, untuk formulir dan rangkaian tes seleksi.",
    rows: [
      { item: "Formulir & tes seleksi", smp: 350_000, smk: 350_000 },
    ],
    notes: ["Tes akademik, baca Al-Qur'an, minat IT, dan wawancara", "Tidak dapat dikembalikan"],
  },
  {
    tab: "Uang Pangkal",
    title: "Biaya Masuk (Uang Pangkal)",
    desc: "Dibayar sekali saat daftar ulang. Dapat dicicil sesuai ketentuan.",
    rows: [
      { item: "Uang gedung & fasilitas", smp: 8_000_000, smk: 9_000_000 },
      { item: "Perlengkapan asrama", smp: 2_000_000, smk: 2_000_000 },
      { item: "Seragam (5 stel)", smp: 1_500_000, smk: 1_750_000 },
      { item: "Kegiatan awal tahun", smp: 1_000_000, smk: 1_250_000 },
    ],
    notes: ["Diskon untuk pendaftar Gelombang 1", "Bisa dicicil hingga 3 kali"],
  },
  {
    tab: "SPP Bulanan",
    title: "SPP Bulanan",
    desc: "Dibayar setiap bulan, sudah termasuk pendidikan dan kebutuhan asrama.",
    rows: [
      { item: "Pendidikan & pembinaan", smp: 1_200_000, smk: 1_400_000 },
      { item: "Asrama & makan 3x sehari", smp: 1_300_000, smk: 1_300_000 },
      { item: "Laundry & kesehatan", smp: 200_000, smk: 200_000 },
    ],
    notes: ["Dibayar paling lambat tanggal 10", "Tagihan dapat dipantau orang tua lewat portal (segera)"],
  },
];

export const ppdbWaves = [
  { name: "Gelombang 1", period: "1 Nov 2026 – 31 Jan 2027", perk: "Diskon uang pangkal 15%", status: "open" as const },
  { name: "Gelombang 2", period: "1 Feb – 30 Apr 2027", perk: "Diskon uang pangkal 5%", status: "soon" as const },
  { name: "Gelombang 3", period: "1 Mei – 30 Jun 2027", perk: "Selama kuota tersedia", status: "soon" as const },
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
  { date: "2026-10-20", dateLabel: "20 Okt 2026", category: "Prestasi", title: "Tim Robotik CIT Raih Juara 2 Lomba Robot Tingkat Provinsi", excerpt: "Santri SMK jurusan IoT & Robotika berhasil membawa pulang medali perak dalam kategori line follower.", image: u("photo-1561557944-6e7860d1a7eb", 750) },
  { date: "2026-10-12", dateLabel: "12 Okt 2026", category: "PPDB", title: "PPDB 2027/2028 Gelombang 1 Resmi Dibuka", excerpt: "Pendaftaran santri baru jenjang SMP dan SMK dibuka mulai 1 November dengan diskon uang pangkal.", image: u("photo-1427504494785-3a9ca7044f45", 750) },
  { date: "2026-10-03", dateLabel: "3 Okt 2026", category: "Kegiatan", title: "Wisuda Tahfidz Angkatan Ke-5", excerpt: "Sebanyak 42 santri menuntaskan target hafalan dan diwisuda di hadapan orang tua.", image: u("photo-1609599006353-e629aaabfeae", 750) },
];

export const faqs = [
  { q: "Apa yang menjadi fokus pembelajaran CIT?", a: "Perpaduan pendidikan teknologi (coding, jaringan, IoT & robotika), program tahfidz dan diniyah, serta pembinaan karakter dan kemandirian dalam kehidupan berasrama." },
  { q: "Apakah semua santri wajib tinggal di asrama?", a: "Ya. Seluruh santri SMP dan SMK tinggal di asrama yang terpisah antara putra dan putri, didampingi musyrif/musyrifah." },
  { q: "Jurusan apa saja yang tersedia di SMK?", a: "Rekayasa Perangkat Lunak (RPL), Teknik Komputer & Jaringan (TKJ), serta IoT & Robotika." },
  { q: "Berapa biaya masuk dan SPP bulanan?", a: "Rincian biaya pendaftaran, uang pangkal, dan SPP bulanan untuk SMP dan SMK dapat dilihat di bagian Biaya Pendidikan. Uang pangkal dapat dicicil." },
  { q: "Kapan orang tua bisa menjenguk santri?", a: "Kunjungan dapat dilakukan pada jadwal kunjungan yang ditetapkan asrama, umumnya satu kali dalam sebulan." },
  { q: "Bagaimana cara mendaftar?", a: "Klik tombol Daftar Sekarang, isi data singkat, lalu Anda akan terhubung dengan admin PPDB melalui WhatsApp untuk langkah berikutnya." },
];

export const programOptions = [
  "SMP IT Boarding",
  "SMK — Rekayasa Perangkat Lunak",
  "SMK — Teknik Komputer & Jaringan",
  "SMK — IoT & Robotika",
  "Belum tahu, ingin konsultasi",
];
