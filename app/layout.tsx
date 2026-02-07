import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";

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
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* ================= BRAND (LOGO + TEXT) ================= */}
            <a href="/" className="flex items-center gap-4">
              {/* Logo */}
              <div className="relative h-17 w-17 sm:h-20 sm:w-20">
                <Image
                  src="/kane-logo.png"
                  alt="Kane Lopinski Handyman Services Logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="64px"
                />
              </div>

              {/* Text */}
              <div>
                <div
                  className={`${rusticFont.className} text-2xl sm:text-3xl font-bold tracking-[0.02em] text-[#3b2a18] leading-none`}
                >
                  Kane Lopinski
                </div>
                <div
                  className={`${rusticFont.className} text-sm sm:text-lg font-semibold tracking-wide text-[#6b4b2a]`}
                >
                  Handyman Services
                </div>
              </div>
            </a>

            {/* ================= DESKTOP NAV ================= */}
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

              {/* ✅ NEW: ABOUT */}
              <a
                href="/about"
                className="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>

              <a
                href="/contact"
                className="relative font-semibold text-[#3b2a18] hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b2a18] after:transition-all after:duration-300 hover:after:w-full"
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
            </nav>

            {/* ================= MOBILE MENU ================= */}
            <div className="md:hidden">
              <MobileMenu instagramUrl="https://instagram.com/abode_onsalal" />
            </div>
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="relative z-0">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="mt-20 border-t border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Kane Lopinski Handyman Services
              </div>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/abode_onsalal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Current Renovation
                </a>

                {/* ✅ NEW: ABOUT (FOOTER LINK) */}
                <a href="/about" className="underline underline-offset-4">
                  About
                </a>

                <a href="/contact" className="underline underline-offset-4">
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-4">
              Serving Eugene & Springfield • Modern Rustic Finish • Reliable
              Scheduling
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

