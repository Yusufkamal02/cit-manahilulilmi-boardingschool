"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, school } from "@/content/site";
import { LeadButton } from "./lead";
import { ThemeSegment, ThemeToggle } from "./theme";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#beranda" aria-label={`${school.name} Boarding School — Beranda`}>
      <Image className="brand-logo" src="/assets/logo-cit-symbol.png" alt="" width={285} height={191} priority={!footer} />
      <span className="brand-text">
        <span className="brand-name">
          CIT <span>Manahilul Ilmi</span>
        </span>
        <span className="brand-tag">
          BOARDING SCHOOL <i>•</i> {school.levels}
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#beranda");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Tandai menu sesuai bagian yang sedang dibaca.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav">
        <Brand />
        <nav className="nav-links" aria-label="Navigasi utama">
          {nav.map(({ href, label }) => (
            <a key={href} href={href} className={active === href ? "active" : undefined} aria-current={active === href ? "location" : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <LeadButton className="btn btn-primary nav-cta">
            Daftar Sekarang <span className="arrow">↗</span>
          </LeadButton>
          <button
            type="button"
            className="icon-btn hamburger"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" aria-hidden="true">
              <path className="bar bar-1" d="M4 7h16" />
              <path className="bar bar-2" d="M4 12h16" />
              <path className="bar bar-3" d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-panel${menuOpen ? " open" : ""}`} inert={!menuOpen}>
        <div>
          <nav aria-label="Navigasi mobile">
            {nav.map(({ href, label }) => (
              <a key={href} href={href} className={active === href ? "active" : undefined} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <ThemeSegment />
            <LeadButton className="btn btn-primary">
              Mulai Pendaftaran <span className="arrow">↗</span>
            </LeadButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
