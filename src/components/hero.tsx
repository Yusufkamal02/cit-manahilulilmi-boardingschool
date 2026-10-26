"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides, school } from "@/content/site";
import { LeadButton } from "./lead";

const SLIDE_MS = 7000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const artRef = useRef<HTMLDivElement>(null);
  const slide = heroSlides[index];

  const go = useCallback((i: number) => setIndex((i + heroSlides.length) % heroSlides.length), []);

  // Slide berganti saat animasi pengisi indikator selesai, sehingga jeda
  // (hover/fokus) dan indikator selalu sinkron.
  const onDotFilled = () => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) go(index + 1);
  };

  // Parallax ringan mengikuti kursor (hanya perangkat dengan mouse).
  useEffect(() => {
    const art = artRef.current;
    if (!art || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = art.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      art.style.setProperty("--px", `${x * -10}px`);
      art.style.setProperty("--py", `${y * -10}px`);
      art.style.setProperty("--bx", `${x * 18}px`);
      art.style.setProperty("--by", `${y * 18}px`);
    };
    const reset = () => ["--px", "--py", "--bx", "--by"].forEach((p) => art.style.setProperty(p, "0px"));
    const section = art.closest("section")!;
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", reset);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section
      className={`hero${paused ? " paused" : ""}`}
      id="beranda"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ "--slide-ms": `${SLIDE_MS}ms` } as React.CSSProperties}
    >
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-main">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="dot" /> {school.levels} • BOARDING SCHOOL • IT & IOT ROBOTICS
          </div>
          <h1 key={`t${index}`} className="anim-in" aria-live="polite">
            {slide.title}
            <br />
            <span>{slide.accent}</span>
          </h1>
          <p key={`d${index}`} className="hero-description anim-in" style={{ animationDelay: "120ms" }}>
            {slide.description}
          </p>
          <div className="hero-actions">
            <LeadButton>
              Daftar PPDB {school.ppdbYear} <span className="arrow">↗</span>
            </LeadButton>
            <a className="btn btn-light" href="#tentang">
              Eksplor Sekolah <span className="arrow">↘</span>
            </a>
          </div>
          <div className="hero-trust">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar">A</span>
              <span className="avatar">R</span>
              <span className="avatar">N</span>
              <span className="avatar">S</span>
            </div>
            <span>
              <strong>Tempat ide besar bertumbuh</strong>Teknologi • Al-Qur&apos;an • Kemandirian
            </span>
          </div>
        </div>

        <div className="hero-art" ref={artRef}>
          <div className="ring-decoration" aria-hidden="true" />
          <div className="hero-photo">
            <div className="logo-mark" aria-hidden="true">
              <Image src="/assets/logo-cit-symbol.png" alt="" width={285} height={191} />
            </div>
            {heroSlides.map((s, i) => (
              <div key={s.image} className={`hero-slide${i === index ? " active" : ""}`} aria-hidden={i !== index}>
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 900px) 92vw, 560px" priority={i === 0} />
              </div>
            ))}
            <div className="hero-photo-label" key={`l${index}`}>
              <small className="anim-in">{slide.mini}</small>
              <strong className="anim-in" style={{ animationDelay: "100ms" }}>
                {slide.label}
              </strong>
            </div>
          </div>
          <div className="hero-bubble bubble-a">
            <span className="bubble-icon">🤖</span>
            <span>
              <strong>IoT & Robotics Lab</strong>
              <small>Praktik nyata setiap pekan</small>
            </span>
          </div>
          <div className="hero-bubble bubble-b">
            <span className="em">📖</span>
            <span>
              <strong>Boarding Life</strong>
              <small>Tahfidz & pembinaan 24 jam</small>
            </span>
          </div>
          <div className="hero-slider" role="group" aria-label="Pilih slide">
            {heroSlides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                className={`hero-dot${i === index ? " active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                onAnimationEnd={i === index ? onDotFilled : undefined}
              />
            ))}
          </div>
          <div className="hero-side-label" aria-hidden="true">
            CIT BOARDING SCHOOL / {school.ppdbYear.slice(0, 4)}
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#keunggulan" aria-label="Gulir ke bawah" />
    </section>
  );
}
