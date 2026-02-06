"use client";

import { useEffect, useState } from "react";

type Props = {
  phone: string;
  instagramUrl: string;
};

export default function MobileMenu({ phone, instagramUrl }: Props) {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-xl border border-[#3b2a18]/40 bg-white/80 px-4 py-2 text-base font-semibold text-[#3b2a18] shadow-sm backdrop-blur-sm"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Menu
      </button>

      {/* Fixed Overlay + Panel */}
      {open && (
        <div className="fixed inset-0 z-[9999]">
          {/* Dim background */}
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-4 top-4 left-4">
            <div className="wood-panel p-3 shadow-[0_20px_60px_rgba(0,0,0,0.30)]">
              <div className="rounded-2xl bg-white/92 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                    Navigation
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-[rgba(87,63,37,0.25)] bg-white/80 px-3 py-1 text-sm font-semibold text-[#3b2a18]"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <nav className="mt-3 grid gap-2">
                  <a
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Services
                  </a>

                  <a
                    href="/projects"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Projects
                  </a>

                  <a
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Contact
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Current Renovation
                  </a>
                </nav>

                {/* OPTIONAL: keep or delete this block */}
                <div className="my-4 h-px bg-[rgba(87,63,37,0.20)]" />

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phone}`}
                    onClick={() => setOpen(false)}
                    className="text-center rounded-xl bg-[#3b2a18] px-4 py-3 text-base font-semibold text-white shadow-sm hover:opacity-95 transition"
                  >
                    Call
                  </a>
                  <a
                    href={`sms:${phone}`}
                    onClick={() => setOpen(false)}
                    className="text-center rounded-xl border border-[#3b2a18] bg-white/80 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Text
                  </a>
                </div>

                <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                  Serving Eugene & Springfield • Quick estimates via text photos
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

