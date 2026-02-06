import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rusticFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Kane Lopinski Handyman Services",
  description:
    "Modern rustic handyman services in Eugene and Springfield. Reliable repairs, Airbnb turnover fixes, and quality craftsmanship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-50 wood-header border-b border-black shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            {/* Brand */}
            <div>
              <a
                href="/"
                className={`${rusticFont.className} text-3xl sm:text-4xl font-bold tracking-[0.02em] text-[#3b2a18]`}
              >
                Kane Lopinski
              </a>
              <div
                className={`${rusticFont.className} text-lg sm:text-xl font-semibold tracking-wide text-[#6b4b2a]`}
              >
                Handyman Services
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-base font-medium text-[#4a3420]">
              <a
                href="/"
                className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>

              <a
                href="/services"
                className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>

              <a
                href="/projects"
                className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>

              <a
                href="https://instagram.com/abode_onsalal"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-semibold text-[#3b2a18] hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                Current Renovation
              </a>

              <a
                href="tel:5419818246"
                className="ml-2 px-6 py-3 rounded-xl bg-[#3b2a18] text-white shadow-sm hover:opacity-90 transition"
              >
                Call
              </a>

              <a
                href="sms:5419818246"
                className="px-6 py-3 rounded-xl border border-[#3b2a18] hover:bg-[#f4e7d3] transition"
              >
                Text
              </a>
            </nav>

            {/* Mobile: Menu only */}
            <div className="md:hidden">
              <details className="group relative">
                <summary className="list-none cursor-pointer select-none">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-[#3b2a18]/40 bg-white/75 px-4 py-2 text-base font-semibold text-[#3b2a18] shadow-sm backdrop-blur-sm">
                    <span className="leading-none">Menu</span>
                    <span className="text-lg leading-none transition-transform duration-200 group-open:rotate-180">
                      ▾
                    </span>
                  </span>
                </summary>

                {/* ✅ Full-width dropdown so it never clips */}
                <div className="absolute left-0 right-0 mt-3">
                  <div className="wood-panel p-3 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-4">
                      <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                        Navigation
                      </div>

                      <nav className="mt-3 grid gap-2">
                        <a
                          href="/services"
                          className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                        >
                          Services
                        </a>
                        <a
                          href="/projects"
                          className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                        >
                          Projects
                        </a>
                        <a
                          href="/contact"
                          className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                        >
                          Contact
                        </a>

                        <a
                          href="https://instagram.com/abode_onsalal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-[rgba(87,63,37,0.22)] bg-white/70 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
                        >
                          Current Renovation
                        </a>
                      </nav>

                      <div className="my-4 h-px bg-[rgba(87,63,37,0.20)]" />

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href="tel:5419818246"
                          className="text-center rounded-xl bg-[#3b2a18] px-4 py-3 text-base font-semibold text-white shadow-sm hover:opacity-95 transition"
                        >
                          Call
                        </a>
                        <a
                          href="sms:5419818246"
                          className="text-center rounded-xl border border-[#3b2a18] bg-white/75 px-4 py-3 text-base font-semibold text-[#3b2a18] hover:bg-white transition"
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
              </details>
            </div>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="mt-20 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Kane Lopinski Handyman Services</div>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/abode_onsalal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Current Renovation
                </a>

                <a href="tel:5419818246" className="underline underline-offset-4">
                  Call 541-981-8246
                </a>

                <a href="sms:5419818246" className="underline underline-offset-4">
                  Text
                </a>
              </div>
            </div>

            <div className="mt-4">
              Serving Eugene & Springfield • Modern Rustic Finish • Reliable Scheduling
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
