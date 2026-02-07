"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  instagramUrl?: string;
};

export default function MobileMenu({ instagramUrl }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch + enable portal
  useEffect(() => setMounted(true), []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const panel = (
    <div
      className="fixed inset-0 z-[2147483647]"
      aria-hidden={!open}
      style={{ display: open ? "block" : "none" }}
    >
      {/* Backdrop */}
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      {/* Dropdown card */}
      <div className="absolute right-4 top-20 w-[min(92vw,360px)]">
        <div className="wood-panel p-3 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
          <div className="rounded-2xl bg-white/95 backdrop-blur-sm border border-[rgba(87,63,37,0.22)] p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                Menu
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-[rgba(87,63,37,0.25)] bg-white/80 px-3 py-1 text-sm font-semibold text-[#3b2a18] hover:bg-white"
              >
                Close
              </button>
            </div>

            <nav className="mt-4 grid gap-2">
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
              >
                Home
              </a>
              <a
                href="/services"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
              >
                Services
              </a>
              <a
                href="/projects"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
              >
                Projects
              </a>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
              >
                Contact
              </a>

              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition flex items-center gap-2"
                >
                  Current Renovation

                  {/* Instagram Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M7.75 2h8.5C19.216 2 22 4.784 22 8.25v7.5C22 19.216 19.216 22 16.25 22h-8.5C4.784 22 2 19.216 2 15.75v-7.5C2 4.784 4.784 2 7.75 2zm8.5 1.5h-8.5C5.56 3.5 3.5 5.56 3.5 7.75v8.5C3.5 18.44 5.56 20.5 7.75 20.5h8.5c2.19 0 4.25-2.06 4.25-4.25v-8.5c0-2.19-2.06-4.25-4.25-4.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.504 3.504 0 0012 8.5zm5.25-2a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                  </svg>
                </a>
              ) : null}
            </nav>

            <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
              Tip: text photos for the fastest estimate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Button in header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-xl border border-[#3b2a18]/40 bg-white/80 px-4 py-2 text-base font-semibold text-[#3b2a18] shadow-sm backdrop-blur-sm"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Menu
      </button>

      {/* Portal overlay */}
      {mounted ? createPortal(panel, document.body) : null}
    </>
  );
}
