import Image from "next/image";
import { Brand, Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Activities, EkskulFilter, Faq, Fees, PpdbSteps, Programs, Testimonials, Works } from "@/components/interactive";
import { LeadButton, LeadModal } from "@/components/lead";
import { ScrollEffects } from "@/components/scroll-effects";
import {
  about,
  advantages,
  dailySchedule,
  facilities,
  nav,
  news,
  ppdbRequirements,
  ppdbWaves,
  school,
  ticker,
} from "@/content/site";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lompat ke konten
      </a>
      <ScrollEffects />

      {school.isPreview && (
        <div className="preview-ribbon" role="note">
          <b>VERSI PRATINJAU</b> — Seluruh teks, angka, biaya, kontak, dan foto masih contoh, bukan data resmi sekolah.
        </div>
      )}

      <div className="topline">
        <div className="container topline-inner">
          <div>
            <span className="live-dot" aria-hidden="true" />
            <strong>PPDB {school.ppdbYear}</strong> — Gelombang 1 telah dibuka. <a href="#ppdb">Lihat alur pendaftaran</a>
          </div>
          <div className="topline-right">
            <span>✧ Project-based learning</span>
            <span>◎ Tahfidz & boarding 24 jam</span>
          </div>
        </div>
      </div>

      <Header />

      <main id="konten">
        <Hero />

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, n) => (
              <div className="ticker-item" key={n}>
                {t} <b>✳</b>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Keunggulan ---------------- */}
        <section className="section" id="keunggulan">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">KENAPA CIT MANAHILULILMI?</span>
              <h2 className="section-title">
                Lebih dari sekolah.
                <br />
                Tempat potensi menjadi nyata.
              </h2>
              <p className="section-lead">
                Kami memadukan ilmu agama, keterampilan teknologi masa depan, dan pembentukan karakter dalam pengalaman belajar berasrama yang
                bermakna.
              </p>
            </div>
            <div className="adv-grid">
              {advantages.map((a, n) => (
                <article className="adv-card spotlight reveal" key={a.title} style={i(n % 3)}>
                  <span className="adv-icon" aria-hidden="true">
                    {a.icon}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Tentang + visi misi ---------------- */}
        <section className="section soft" id="tentang">
          <div className="container">
            <div className="about-layout">
              <div className="about-image-wrap reveal from-left">
                <div className="about-image">
                  <Image src={about.image} alt="Ilustrasi santri berdiskusi dan belajar bersama" fill sizes="(max-width: 900px) 92vw, 560px" />
                  <div className="about-caption">
                    <small>OUR LEARNING CULTURE</small>
                    <b>
                      Curiosity drives
                      <br />
                      great discoveries.
                    </b>
                  </div>
                </div>
                <div className="about-float">
                  <b>Learn. Create. Impact.</b>
                  <p>Menciptakan ruang bagi setiap santri untuk menemukan versi terbaik dirinya.</p>
                </div>
              </div>
              <div className="about-copy reveal from-right">
                <span className="eyebrow">KENALI SEKOLAH KAMI</span>
                <h2 className="section-title">
                  Pendidikan yang relevan dengan <em>dunia nyata.</em>
                </h2>
                <p className="section-lead">
                  {school.fullName} memadukan pendidikan teknologi informasi, IoT & robotika, program tahfidz, dan pembinaan karakter dalam
                  lingkungan berasrama.
                </p>
                <p className="section-lead" style={{ marginTop: 17 }}>
                  Setiap langkah belajar dirancang untuk membantu santri berpikir kritis, percaya diri menyampaikan ide, dan mampu menghasilkan
                  karya yang bermanfaat.
                </p>
                <div className="about-points">
                  {about.points.map((p) => (
                    <span key={p}>
                      <i className="check-icon">✓</i> {p}
                    </span>
                  ))}
                </div>
                <a href="#program" className="btn btn-primary">
                  Kenali Program Kami <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            <div className="stats-row reveal">
              {about.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b data-count={s.value} data-suffix={s.suffix}>
                    {s.value}
                    {s.suffix}
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="vm-grid">
              <div className="vision-card reveal from-left">
                <span className="eyebrow">VISI</span>
                <p>{about.vision}</p>
              </div>
              <div className="mission-card reveal from-right">
                <span className="eyebrow">MISI</span>
                <ol className="mission-list">
                  {about.missions.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Program ---------------- */}
        <section className="section" id="program">
          <div className="container">
            <div className="program-heading reveal">
              <div className="section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">JENJANG & JURUSAN</span>
                <h2 className="section-title">
                  Temukan jalan terbaik
                  <br />
                  untuk masa depanmu.
                </h2>
                <p className="section-lead">Dua jenjang berasrama, satu tujuan: generasi Qur&apos;ani yang menguasai teknologi.</p>
              </div>
              <a className="text-link" href="#karya">
                Lihat karya santri <span className="arrow">↗</span>
              </a>
            </div>
            <Programs />
          </div>
        </section>

        {/* ---------------- Kehidupan ---------------- */}
        <section className="section soft" id="kehidupan">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">LIFE AT CIT</span>
              <h2 className="section-title">
                Belajar, bertualang,
                <br />
                dan menemukan diri sendiri.
              </h2>
              <p className="section-lead">Di luar kelas selalu ada kisah baru untuk diciptakan. Klik foto untuk memperbesar.</p>
            </div>
            <Activities />
          </div>
        </section>

        <section className="section" id="ekskul">
          <div className="container">
            <EkskulFilter />
          </div>
        </section>

        <section className="section soft" id="fasilitas">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">FASILITAS & ASRAMA</span>
              <h2 className="section-title">
                Rumah kedua yang <em>nyaman</em> untuk bertumbuh.
              </h2>
              <p className="section-lead">Fasilitas belajar, ibadah, dan tinggal yang mendukung keseharian santri selama 24 jam.</p>
            </div>
            <div className="facility-layout">
              <div className="facility-grid">
                {facilities.map((f, n) => (
                  <article className="facility spotlight reveal" key={f.title} style={i(n % 2)}>
                    <span className="ico" aria-hidden="true">
                      {f.icon}
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                ))}
              </div>
              <aside className="schedule-card reveal from-right" aria-label="Contoh jadwal harian santri">
                <span className="eyebrow">SEHARI DI ASRAMA</span>
                <h3>Ritme harian santri</h3>
                <ol className="schedule">
                  {dailySchedule.map((d) => (
                    <li key={d.time}>
                      <time>{d.time}</time>
                      <span>{d.title}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="karya">
          <div className="container">
            <Works />
          </div>
        </section>

        {/* ---------------- Biaya ---------------- */}
        <section className="section soft" id="biaya">
          <div className="container fee-layout">
            <div className="reveal from-left">
              <span className="eyebrow">INVESTASI PENDIDIKAN</span>
              <h2 className="section-title">Langkah awal untuk masa depan yang lebih besar.</h2>
              <p className="fee-description">
                Rincian biaya pendaftaran, uang pangkal, dan SPP bulanan untuk jenjang SMP dan SMK. SPP sudah termasuk asrama dan makan 3 kali
                sehari.
              </p>
              <div className="fee-promise">
                <span aria-hidden="true">💬</span>
                <div>
                  <strong>Butuh skema cicilan atau info beasiswa?</strong>
                  <p>Tim admisi siap membantu menjelaskan pilihan pembayaran yang sesuai untuk keluarga Anda.</p>
                </div>
              </div>
              <span className="pill-note">ⓘ Nominal masih contoh dan akan diperbarui sesuai ketetapan yayasan.</span>
            </div>
            <Fees />
          </div>
        </section>

        {/* ---------------- PPDB ---------------- */}
        <section className="section" id="ppdb">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">PPDB {school.ppdbYear}</span>
              <h2 className="section-title">
                Sembilan langkah menuju
                <br />
                perjalanan barumu.
              </h2>
              <p className="section-lead">Pilih gelombang pendaftaran, ikuti alurnya, dan tim admisi akan mendampingi di setiap tahap.</p>
            </div>
            <div className="waves">
              {ppdbWaves.map((w, n) => (
                <article key={w.name} className={`wave reveal${w.status === "open" ? " open" : ""}`} style={i(n)}>
                  <span className="status">{w.status === "open" ? "SEDANG DIBUKA" : "SEGERA"}</span>
                  <h3>{w.name}</h3>
                  <div className="period">{w.period}</div>
                  <div className="perk">★ {w.perk}</div>
                </article>
              ))}
            </div>
            <PpdbSteps />
            <div className="ppdb-bottom">
              <div className="req-card reveal from-left">
                <h3>Berkas yang perlu disiapkan</h3>
                <ul className="req-list">
                  {ppdbRequirements.map((r) => (
                    <li key={r}>
                      <i className="check-icon">✓</i>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ppdb-cta reveal from-right">
                <h3>Siap bergabung?</h3>
                <p>Daftarkan putra-putri Anda sekarang dan dapatkan diskon uang pangkal Gelombang 1. Kuota setiap jurusan terbatas.</p>
                <div className="btns">
                  <LeadButton>
                    Daftar Sekarang <span className="arrow">↗</span>
                  </LeadButton>
                  <a className="btn btn-white" href="#faq">
                    Baca FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft" id="testimoni">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">VOICE OF COMMUNITY</span>
              <h2 className="section-title">
                Cerita dan perjalanan
                <br />
                yang menginspirasi.
              </h2>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* ---------------- Berita ---------------- */}
        <section className="section" id="berita">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">KABAR CIT</span>
              <h2 className="section-title">Berita & kegiatan terbaru.</h2>
              <p className="section-lead">Ikuti prestasi, kegiatan, dan pengumuman terbaru dari sekolah.</p>
            </div>
            <div className="news-grid">
              {news.map((n, k) => (
                <article className="news-card reveal" key={n.title} style={i(k)}>
                  <div className="news-cover">
                    <Image src={n.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 380px" />
                    <span className="news-cat">{n.category}</span>
                  </div>
                  <div className="news-body">
                    <time dateTime={n.date}>{n.dateLabel}</time>
                    <h3>{n.title}</h3>
                    <p>{n.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft" id="faq">
          <div className="container faq-layout">
            <div className="reveal from-left">
              <span className="eyebrow">PERTANYAAN UMUM</span>
              <h2 className="section-title">Masih punya pertanyaan?</h2>
              <p className="section-lead">Jawaban singkat untuk pertanyaan yang paling sering diajukan calon wali santri.</p>
              <LeadButton className="btn btn-primary" >
                Tanya Tim Admisi <span className="arrow">↗</span>
              </LeadButton>
            </div>
            <Faq />
          </div>
        </section>

        {/* ---------------- Kontak ---------------- */}
        <section className="section" id="kontak">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">HUBUNGI KAMI</span>
              <h2 className="section-title">
                Kunjungi dan kenali <em>CIT</em> lebih dekat.
              </h2>
              <p className="section-lead">Kami dengan senang hati menyambut kunjungan orang tua dan calon santri. Hubungi kami terlebih dahulu untuk mengatur jadwal.</p>
            </div>
            <div className="contact-layout">
              <div className="contact-list">
                <div className="contact-item reveal" style={i(0)}>
                  <span className="ico" aria-hidden="true">📍</span>
                  <div>
                    <small>Alamat</small>
                    <b>{school.address}</b>
                  </div>
                </div>
                <a className="contact-item reveal" style={i(1)} href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <span className="ico" aria-hidden="true">💬</span>
                  <div>
                    <small>WhatsApp PPDB</small>
                    <b>{school.whatsappDisplay}</b>
                  </div>
                </a>
                <a className="contact-item reveal" style={i(2)} href={`tel:${school.phone.replace(/[^\d]/g, "")}`}>
                  <span className="ico" aria-hidden="true">📞</span>
                  <div>
                    <small>Telepon</small>
                    <b>{school.phone}</b>
                  </div>
                </a>
                <a className="contact-item reveal" style={i(3)} href={`mailto:${school.email}`}>
                  <span className="ico" aria-hidden="true">✉️</span>
                  <div>
                    <small>Email</small>
                    <b>{school.email}</b>
                  </div>
                </a>
                <div className="contact-item reveal" style={i(4)}>
                  <span className="ico" aria-hidden="true">🕘</span>
                  <div>
                    <small>Jam layanan</small>
                    <b>{school.officeHours}</b>
                  </div>
                </div>
              </div>
              <div className="map-card reveal from-right">
                {school.mapsEmbedUrl ? (
                  <iframe src={school.mapsEmbedUrl} title={`Peta lokasi ${school.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                ) : (
                  <div className="map-placeholder">
                    <div>
                      <div className="pin" aria-hidden="true">📍</div>
                      <b>Peta lokasi sekolah</b>
                      <p>Peta Google Maps akan tampil di sini setelah alamat resmi sekolah diisi.</p>
                      <a className="btn btn-outline" href={school.mapsLink} target="_blank" rel="noopener noreferrer">
                        Buka Google Maps <span className="arrow">↗</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-box reveal zoom">
              <div>
                <small>YOUR FUTURE STARTS HERE</small>
                <h2>Jangan hanya bermimpi tentang masa depan. Mulai ciptakan hari ini.</h2>
                <p>Kenali program, temukan potensimu, dan bangun cerita baru bersama {school.fullName}.</p>
              </div>
              <LeadButton className="btn btn-accent">
                Daftar / Konsultasi <span className="arrow">↗</span>
              </LeadButton>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-plaque">
                <Image src="/assets/logo-cit-full.png" alt="Logo SMK TI CIT Boarding School" width={500} height={500} />
              </div>
              <Brand footer />
              <p className="footer-description">
                Boarding school SMP & SMK yang memadukan pendidikan teknologi informasi, IoT & robotika, tahfidz Al-Qur&apos;an, dan pembinaan
                karakter.
              </p>
              <div className="socials">
                {school.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.short}
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-col">
              <h4>Jelajahi</h4>
              {nav.slice(0, 4).map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href="#ekskul">Ekstrakurikuler</a>
            </div>
            <div className="footer-col">
              <h4>Informasi</h4>
              <a href="#fasilitas">Fasilitas & Asrama</a>
              <a href="#karya">Karya Santri</a>
              <a href="#biaya">Biaya Pendidikan</a>
              <a href="#ppdb">Alur PPDB</a>
              <a href="#berita">Berita</a>
            </div>
            <div className="footer-col">
              <h4>Hubungi Kami</h4>
              <p>{school.address}</p>
              <a href={`https://wa.me/${school.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WA {school.whatsappDisplay}
              </a>
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {school.ppdbYear.slice(0, 4)} {school.fullName}.</span>
            <span>Berilmu • Berkarakter • Berkarya</span>
          </div>
        </div>
      </footer>

      <LeadButton className="float-contact">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2Z" />
        </svg>
        <span className="label">Konsultasi PPDB</span>
      </LeadButton>
      <LeadModal />
    </>
  );
}
