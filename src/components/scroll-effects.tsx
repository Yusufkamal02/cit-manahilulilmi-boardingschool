"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Efek global halaman: animasi muncul saat di-scroll (.reveal),
 * angka berjalan ([data-count]), cahaya kursor pada kartu (.spotlight),
 * indikator progres baca, dan tombol kembali ke atas.
 */
export function ScrollEffects() {
  const bar = useRef<HTMLSpanElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-shown", "");
          reveal.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal:not([data-shown])").forEach((el) => reveal.observe(el));

    const counters = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counters.unobserve(e.target);
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          if (reduced) return;
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      // Server merender angka akhir (tanpa JS tetap benar); mulai dari 0 untuk animasi.
      if (!reduced) el.textContent = `0${el.dataset.suffix ?? ""}`;
      counters.observe(el);
    });

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element).closest<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const h = document.documentElement;
        const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
        setShowTop(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      reveal.disconnect();
      counters.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-meter" aria-hidden="true">
        <span ref={bar} />
      </div>
      <button
        type="button"
        className={`backtop${showTop ? " show" : ""}`}
        aria-label="Kembali ke atas"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
