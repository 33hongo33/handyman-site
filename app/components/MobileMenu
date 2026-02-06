"use client";

import { useState } from "react";

type Props = {
  phone: string;
  instagramUrl: string;
};

export default function MobileMenu({ phone, instagramUrl }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl border border-[#3b2a18]/40 bg-white/80 px-4 py-2 text-base font-semibold text-[#3b2a18] shadow-sm backdrop-blur-sm"
      >
        Menu
      </button>

      {/* Overlay */}
      {open && (
        <>
          {/* Background dim */}
          <div
            className="fixed inset-0 bg-black/30 z-[200]"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown Panel */}
          <div className="absolute right-0 mt-3 w-64 z-[300]">
            <div className="wood-panel p-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              <div className="rounded-2xl bg-white/95 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-4 space-y-3">

                <a
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                >
                  Services
                </a>

                <a
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                >
                  Projects
                </a>

                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                >
                  Contact
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                >
                  Current Renovation
                </a>

                <div className="pt-3 border-t border-[rgba(87,63,37,0.18)] grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="text-center rounded-xl bg-[#3b2a18] px-4 py-3 text-base font-semibold text-white shadow-sm hover:opacity-95 transition"
                  >
                    Call
                  </a>

                  <a
                    href={`sms:${phone}`}
                    className="text-center rounded-xl border border-[#3b2a18] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                  >
                    Text
                  </a>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

