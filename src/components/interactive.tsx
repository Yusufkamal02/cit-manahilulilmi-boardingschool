"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  activities,
  extracurriculars,
  faqs,
  fees,
  ppdbSteps,
  school,
  programs,
  testimonials,
  workFilters,
  works,
} from "@/content/site";
import { LeadButton } from "./lead";

const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");

// Pilihan formulir yang terisi otomatis saat tombol "Diskusikan Program" diklik.
const leadProgram: Record<string, string> = {
  SMP: "SMP IT Boarding",
  SMK: "SMK — Rekayasa Perangkat Lunak",
  Tahfidz: "Sekolah Tahfidz (30 Juz)",
};

/* ---------------------------- Program per jenjang ---------------------------- */
export function Programs() {
  const [level, setLevel] = useState(1);
  const [tab, setTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const group = programs[level];
  const p = group.items[tab];

  // Di HP deretan tab bisa digeser; tab yang dipilih digeser ke tengah agar tidak terpotong.
  useEffect(() => {
    const row = tabsRef.current;
    const btn = row?.children[tab] as HTMLElement | undefined;
    if (!row || !btn) return;
    const offset = btn.getBoundingClientRect().left - row.getBoundingClientRect().left;
    row.scrollTo({ left: row.scrollLeft + offset - (row.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
  }, [level, tab]);

  return (
    <>
      <div
        className="level-switch reveal"
        role="tablist"
        aria-label="Pilih jenjang"
        style={{ "--idx": level, "--n": programs.length } as React.CSSProperties}
      >
        <span className="thumb" aria-hidden="true" />
        {programs.map((g, i) => (
          <button
            key={g.level}
            type="button"
            role="tab"
            aria-selected={level === i}
            onClick={() => {
              setLevel(i);
              setTab(0);
            }}
          >
            {g.level}
          </button>
        ))}
      </div>
      <p className="level-intro anim-in" key={group.level}>
        {group.intro}
      </p>
      <div className="tabs reveal" ref={tabsRef} role="tablist" aria-label={`Program ${group.level}`}>
        {group.items.map((item, i) => (
          <button
            key={item.tab}
            type="button"
            role="tab"
            id={`prog-tab-${i}`}
            aria-controls="program-panel"
            aria-selected={tab === i}
            className="tab"
            onClick={() => setTab(i)}
          >
            {item.tab}
          </button>
        ))}
      </div>
      <div className="program-feature reveal" role="tabpanel" id="program-panel" aria-labelledby={`prog-tab-${tab}`}>
        <div className="program-copy" key={p.title}>
          <span className="num" aria-hidden="true">
            {String(tab + 1).padStart(2, "0")}
          </span>
          <span className="program-label anim-in">{p.label}</span>
          <h3 className="anim-in" style={{ animationDelay: "60ms" }}>
            {p.title}
          </h3>
          <p className="anim-in" style={{ animationDelay: "120ms" }}>
            {p.desc}
          </p>
          <div className="program-perks anim-in" style={{ animationDelay: "180ms" }}>
            {p.perks.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <LeadButton
            className="btn btn-white anim-in"
            program={leadProgram[group.level]}
          >
            Diskusikan Program <span className="arrow">↗</span>
          </LeadButton>
        </div>
        <div className="program-visual">
          <Image key={p.image} src={p.image} alt={`Program ${p.tab}`} fill sizes="(max-width: 620px) 100vw, 560px" />
          <div className="program-stamp anim-in" key={p.stamp}>
            <b>{p.stamp}</b>
            <small>Project-based education</small>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------------------- Kegiatan + galeri ---------------------------- */
export function Activities() {
  const [open, setOpen] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("lock");
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % activities.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + activities.length) % activities.length));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lock");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open === null) lastFocus.current?.focus();
  }, [open]);

  const a = open === null ? null : activities[open];

  return (
    <>
      <div className="activities-grid">
        {activities.map((act, i) => (
          <article className="activity reveal" key={act.title} style={{ "--i": i } as React.CSSProperties}>
            <Image src={act.thumb} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 400px" />
            <button
              type="button"
              className="zoom-btn"
              aria-label={`Perbesar foto ${act.title}`}
              onClick={(e) => {
                lastFocus.current = e.currentTarget;
                setOpen(i);
              }}
            >
              ↗
            </button>
            <div className="activity-content">
              <small>{act.tag}</small>
              <h3>{act.title}</h3>
              <p>{act.text}</p>
            </div>
          </article>
        ))}
      </div>
      {a && (
        <div className="gallery-backdrop" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <div className="gallery-view" role="dialog" aria-modal="true" aria-label={`Foto: ${a.title}`}>
            <button ref={closeBtn} type="button" className="gallery-close" aria-label="Tutup galeri" onClick={() => setOpen(null)}>
              ×
            </button>
            <div className="gallery-frame">
              <Image key={a.full} src={a.full} alt={a.title} fill sizes="900px" />
            </div>
            <div className="gallery-description">
              <div>
                <b>{a.title}</b>
                <br />
                <span>{a.text}</span>
              </div>
              <div className="gallery-nav">
                <button type="button" aria-label="Foto sebelumnya" onClick={() => setOpen((open! - 1 + activities.length) % activities.length)}>
                  ‹
                </button>
                <button type="button" aria-label="Foto berikutnya" onClick={() => setOpen((open! + 1) % activities.length)}>
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------------------- Ekstrakurikuler ---------------------------- */
const ekskulGroups = ["Semua", ...Array.from(new Set(extracurriculars.map((e) => e.group)))];

export function EkskulFilter() {
  const [group, setGroup] = useState("Semua");
  return (
    <>
      <div className="section-head split reveal">
        <div>
          <span className="eyebrow">EKSTRAKURIKULER</span>
          <h2 className="section-title">
            Temukan <em>passion</em> di luar kelas.
          </h2>
          <p className="section-lead">Beragam pilihan kegiatan untuk mengasah bakat teknologi, keagamaan, olahraga, bahasa, dan kepemimpinan.</p>
        </div>
        <div className="ekskul-filters" role="group" aria-label="Filter ekstrakurikuler">
          {ekskulGroups.map((g) => (
            <button key={g} type="button" className="filter" aria-pressed={group === g} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </div>
      </div>
      <div className="ekskul-grid">
        {extracurriculars.map((e, i) => (
          <div
            key={e.name}
            className={`ekskul spotlight reveal${group !== "Semua" && group !== e.group ? " dim" : ""}`}
            style={{ "--i": i % 4 } as React.CSSProperties}
          >
            <span className="ico" aria-hidden="true">
              {e.icon}
            </span>
            <span>
              <b>{e.name}</b>
              <small>{e.group}</small>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------------------- Karya siswa ---------------------------- */
export function Works() {
  const [filter, setFilter] = useState("all");
  const shown = works.filter((w) => filter === "all" || w.category === filter);
  return (
    <>
      <div className="section-head split reveal">
        <div>
          <span className="eyebrow">STUDENT SHOWCASE</span>
          <h2 className="section-title">
            Dari ide sederhana
            <br />
            menjadi karya luar biasa.
          </h2>
          <p className="section-lead">Contoh karya santri. Dokumentasi proyek asli akan ditampilkan setelah tersedia.</p>
        </div>
        <div className="filter-tabs" role="group" aria-label="Filter jenis proyek">
          {workFilters.map((f) => (
            <button key={f.key} type="button" className="filter" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid" aria-live="polite">
        {shown.map((w, i) => (
          <article className="project-card" key={`${filter}-${w.title}`} style={{ animationDelay: `${i * 70}ms` }}>
            <div className="project-cover">
              <Image src={w.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 380px" />
              <span className="project-category">{w.tag}</span>
            </div>
            <div className="project-body">
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

/* ---------------------------- Biaya ---------------------------- */
export function Fees() {
  const [idx, setIdx] = useState(0);
  const f = fees[idx];
  return (
    <div className="fee-panel reveal from-right">
      <div className="fee-tabs" role="tablist" aria-label="Rincian biaya" style={{ "--idx": idx, "--n": fees.length } as React.CSSProperties}>
        <span className="thumb" aria-hidden="true" />
        {fees.map((x, i) => (
          <button key={x.tab} type="button" role="tab" className="fee-tab" aria-selected={idx === i} onClick={() => setIdx(i)}>
            {x.tab}
          </button>
        ))}
      </div>
      <div className="fee-content" role="tabpanel" key={f.tab}>
        <span className="fee-pill anim-in">PROMO GELOMBANG 1 • TA {school.ppdbYear}</span>
        <h3 className="anim-in" style={{ animationDelay: "50ms" }}>
          {f.title}
        </h3>
        <p className="anim-in" style={{ animationDelay: "100ms" }}>
          {f.desc}
        </p>
        <table className="fee-table anim-in" style={{ animationDelay: "150ms" }}>
          <thead>
            <tr>
              <th scope="col">JENJANG</th>
              <th scope="col">NORMAL</th>
              <th scope="col">PROMO GEL. 1</th>
            </tr>
          </thead>
          <tbody>
            {f.rows.map((r) => (
              <tr key={r.level}>
                <td>{r.level}</td>
                {r.normal && r.promo ? (
                  <>
                    <td>
                      <s>{rupiah(r.normal)}</s>
                    </td>
                    <td className="promo">
                      {rupiah(r.promo)}
                      <small>Hemat {rupiah(r.normal - r.promo)}</small>
                    </td>
                  </>
                ) : (
                  <td colSpan={2} className="ask">
                    Hubungi admin
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="fee-notes anim-in" style={{ animationDelay: "200ms" }}>
          {f.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <LeadButton>
          Tanya Rincian Biaya <span className="arrow">↗</span>
        </LeadButton>
      </div>
    </div>
  );
}

/* ---------------------------- Alur PPDB ---------------------------- */
export function PpdbSteps() {
  const wrap = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(0);
  const [progress, setProgress] = useState(0);

  // Langkah "menyala" berurutan mengikuti posisi scroll.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = wrap.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height + vh * 0.1)));
        setProgress(p);
        setLit(Math.round(p * ppdbSteps.length));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="steps-wrap" ref={wrap}>
      <div className="steps-progress" aria-hidden="true">
        <span style={{ "--p": progress } as React.CSSProperties} />
      </div>
      <ol className="steps">
        {ppdbSteps.map((s, i) => (
          <li key={s.title} className={`step reveal${i < lit ? " lit" : ""}`} style={{ "--i": i % 3 } as React.CSSProperties}>
            <span className="step-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>
              <span className="sr-only">Langkah {i + 1}: </span>
              {s.title}
            </h3>
            <p>{s.text}</p>
            <span className="who">{s.who}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------------------- Testimoni ---------------------------- */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = testimonials[i];
  const go = (n: number) => setI((n + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % testimonials.length), 8000);
    return () => window.clearTimeout(t);
  }, [i, paused]);

  return (
    <div className="story-box reveal zoom" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="story-left">
        <span className="eyebrow">TESTIMONI KOMUNITAS</span>
        <h3>Setiap perjalanan punya cerita.</h3>
        <p>Ketika santri, orang tua, dan pendidik bergerak bersama, ruang belajar menjadi lebih bermakna.</p>
      </div>
      <div className="story-right">
        <div key={i}>
          <div className="stars" aria-label="5 dari 5 bintang">
            ★★★★★
          </div>
          <blockquote className="quote anim-in">“{s.quote}”</blockquote>
        </div>
        <div className="story-foot">
          <div className="story-person anim-in" key={s.name}>
            <div className="person-circle" aria-hidden="true">
              {s.letter}
            </div>
            <div>
              <b>{s.name}</b>
              <small>{s.role}</small>
            </div>
          </div>
          <div className="story-controls">
            <div className="story-dots" aria-hidden="true">
              {testimonials.map((t, n) => (
                <i key={t.name} className={n === i ? "on" : undefined} />
              ))}
            </div>
            <button type="button" aria-label="Testimoni sebelumnya" onClick={() => go(i - 1)}>
              ‹
            </button>
            <button type="button" aria-label="Testimoni berikutnya" onClick={() => go(i + 1)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- FAQ ---------------------------- */
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list reveal from-right">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq-item${open === i ? " open" : ""}`}>
          <button
            type="button"
            className="faq-trigger"
            aria-expanded={open === i}
            aria-controls={`faq-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q} <span className="faq-plus" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer" id={`faq-${i}`} role="region">
            <div>
              <p>{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
