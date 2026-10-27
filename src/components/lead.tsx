"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { programOptions, school } from "@/content/site";

const OPEN_EVENT = "cit-open-lead";

/** Tombol apa pun yang membuka formulir pendaftaran/konsultasi. */
export function LeadButton({
  children,
  className = "btn btn-primary",
  program,
}: {
  children: ReactNode;
  className?: string;
  program?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: program ?? "" }))}
    >
      {children}
    </button>
  );
}

type Errors = Partial<Record<"parent" | "phone" | "program", string>>;

/**
 * Formulir sementara sebelum sistem PPDB online jadi:
 * isian dirangkai menjadi pesan dan dibuka di WhatsApp admin PPDB.
 */
export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const lastFocus = useRef<HTMLElement | null>(null);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      lastFocus.current = document.activeElement as HTMLElement;
      setPreset((e as CustomEvent<string>).detail);
      setErrors({});
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("lock");
    const t = window.setTimeout(() => firstField.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lock");
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [open]);

  if (!open) return null;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (v("parent").length < 3) next.parent = "Mohon isi nama orang tua/wali.";
    if (!/^(\+?62|0)8\d{7,12}$/.test(v("phone").replace(/[\s-]/g, ""))) next.phone = "Nomor WhatsApp belum valid, contoh: 081234567890.";
    if (!v("program")) next.program = "Pilih program yang diminati.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const details = [
      `Nama orang tua/wali: ${v("parent")}`,
      v("student") && `Nama calon santri: ${v("student")}`,
      `No. WhatsApp: ${v("phone")}`,
      `Program diminati: ${v("program")}`,
      v("message") && `Pertanyaan: ${v("message")}`,
    ].filter(Boolean);
    const text = [
      "Assalamu'alaikum, Admin PPDB CIT Manahilul Ilmi.",
      "Saya ingin informasi pendaftaran santri baru.",
      "",
      ...details,
    ].join("\n");

    window.open(`https://wa.me/${school.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setOpen(false);
  }

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="lead-title">
        <div className="modal-head">
          <div>
            <h2 id="lead-title">Mulai perjalananmu.</h2>
            <p>Isi data singkat berikut. Anda akan langsung terhubung dengan admin PPDB melalui WhatsApp.</p>
          </div>
          <button type="button" className="modal-close" aria-label="Tutup formulir" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <form onSubmit={submit} noValidate>
          <div className="field-row">
            <div className="field">
              <label htmlFor="lead-parent">Nama orang tua/wali *</label>
              <input ref={firstField} id="lead-parent" name="parent" autoComplete="name" placeholder="Nama lengkap" aria-invalid={!!errors.parent} />
              {errors.parent && <span className="err">{errors.parent}</span>}
            </div>
            <div className="field">
              <label htmlFor="lead-student">Nama calon santri</label>
              <input id="lead-student" name="student" placeholder="Opsional" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="lead-phone">Nomor WhatsApp *</label>
            <input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="08xxxxxxxxxx" aria-invalid={!!errors.phone} />
            {errors.phone && <span className="err">{errors.phone}</span>}
          </div>
          <div className="field">
            <label htmlFor="lead-program">Program yang diminati *</label>
            <select id="lead-program" name="program" defaultValue={preset} aria-invalid={!!errors.program}>
              <option value="">Pilih program</option>
              {programOptions.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            {errors.program && <span className="err">{errors.program}</span>}
          </div>
          <div className="field">
            <label htmlFor="lead-message">Pertanyaan</label>
            <textarea id="lead-message" name="message" placeholder="Misalnya: jadwal tes, rincian biaya, atau kunjungan sekolah" />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Lanjut ke WhatsApp <span className="arrow">↗</span>
          </button>
          <p className="form-note">Data hanya dipakai untuk menyusun pesan WhatsApp dan tidak disimpan di website.</p>
        </form>
      </div>
    </div>
  );
}
