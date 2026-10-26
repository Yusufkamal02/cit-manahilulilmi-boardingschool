"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "./theme-key";

export type ThemePref = "light" | "dark" | "system";

const OPTIONS: { value: ThemePref; label: string }[] = [
  { value: "light", label: "Terang" },
  { value: "dark", label: "Gelap" },
  { value: "system", label: "Auto" },
];

const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

function readPref(): ThemePref {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark" || v === "system") return v;
  } catch {}
  return "system";
}

function apply(pref: ThemePref, animate: boolean) {
  const root = document.documentElement;
  const dark = pref === "dark" || (pref === "system" && systemDark());
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 500);
  }
  root.setAttribute("data-theme", dark ? "dark" : "light");
}

const CHANGE_EVENT = "cit-theme-change";

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Preferensi tema, dibagi antara toggle header dan menu mobile. */
function useThemePref() {
  const pref = useSyncExternalStore(subscribe, readPref, () => "system" as ThemePref);

  // Pasang ulang atribut setelah remount Strict Mode di development, dan
  // ikuti perubahan tema sistem operasi saat memakai mode Auto.
  useLayoutEffect(() => {
    apply(readPref(), false);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => readPref() === "system" && apply("system", true);
    mq.addEventListener("change", onSystem);
    return () => mq.removeEventListener("change", onSystem);
  }, []);

  const choose = useCallback((next: ThemePref) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
    apply(next, true);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return [pref, choose] as const;
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8Z" />
    </svg>
  );
}

function AutoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor" />
    </svg>
  );
}

const ICONS = { light: SunIcon, dark: MoonIcon, system: AutoIcon };

/** Dropdown tema di header (desktop). */
export function ThemeToggle() {
  const [pref, choose] = useThemePref();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[pref];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="theme-toggle" ref={ref} data-open={open}>
      <button
        type="button"
        className="icon-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Tema tampilan: ${OPTIONS.find((o) => o.value === pref)?.label}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon />
        <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </button>
      {open && (
        <div className="theme-menu" role="menu" aria-label="Pilih tema">
          {OPTIONS.map(({ value, label }) => {
            const I = ICONS[value];
            return (
              <button
                key={value}
                type="button"
                role="menuitemradio"
                aria-checked={pref === value}
                onClick={() => {
                  choose(value);
                  setOpen(false);
                }}
              >
                <I />
                {label}
                {pref === value && <span className="check">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** Pilihan tema tersegmentasi di menu mobile. */
export function ThemeSegment() {
  const [pref, choose] = useThemePref();
  return (
    <>
      <p className="theme-segment-label">TEMA TAMPILAN</p>
      <div className="theme-segment" role="radiogroup" aria-label="Tema tampilan">
        {OPTIONS.map(({ value, label }) => {
          const I = ICONS[value];
          return (
            <button key={value} type="button" role="radio" aria-checked={pref === value} onClick={() => choose(value)}>
              <I />
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
}
