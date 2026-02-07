import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const rusticFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const popular: string[] = [
    "Airbnb punch lists + turnover repairs",
    "Drywall patch & paint blending",
    "Deck & fence repair",
    "Door adjustments & trim work",
    "Mounting TVs, fixtures & hardware",
  ];

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* LEFT — Hero Section */}
          <div className="wood-panel p-10">

            {/* ✅ LARGE CENTERED LOGO ONLY */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]">
                <Image
                  src="/kane-logo.png"
                  alt="Kane Lopinski Handyman Services logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 220px, 300px"
                />
              </div>
            </div>

            <div className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--accent-dark)] uppercase">
              Eugene & Springfield
            </div>

            {/* Headline */}
            <div className="mt-6 inline-block rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-4 border border-[rgba(87,63,37,0.22)] shadow-sm">
              <h1
                className={`${rusticFont.className} text-3xl sm:text-4xl font-semibold tracking-[0.01em] text-[var(--text)] leading-[1.15]`}
              >
                Professional Handyman Services in Eugene & Springfield
              </h1>
            </div>

            {/* Description */}
            <div className="mt-6 max-w-xl rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-4 border border-[rgba(87,63,37,0.18)] shadow-sm">
              <p className="text-[15px] sm:text-base leading-7 text-[var(--muted)]">
                Kane Lopinski Handyman Services helps homeowners and Airbnb hosts
                with repairs, upgrades, and finish work. Clear communication,
                solid scheduling, and quality craftsmanship — without the
                runaround.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="sms:5419818246"
                className="px-6 py-3 rounded-xl bg-[#cbb89d] border-2 border-[#3b2a18] text-[#3b2a18] font-semibold hover:bg-[#bda98e] transition"
              >
                Text for a Quote
              </a>

              <a
                href="/projects"
                className="px-6 py-3 rounded-xl bg-[#cbb89d] border-2 border-[#3b2a18] text-[#3b2a18] font-semibold hover:bg-[#bda98e] transition"
              >
                View Projects
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-5">
                <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                  Fast Response
                </div>
                <div className="mt-2 text-base font-semibold text-[var(--text)]">
                  Clear scheduling + updates
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  I’ll tell you what I can do, when I can do it, and what it’ll
                  take.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-5">
                <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                  Airbnb Ready
                </div>
                <div className="mt-2 text-base font-semibold text-[var(--text)]">
                  Punch lists + turnover fixes
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Quick repairs that keep your place guest-ready and problem-free.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE UNCHANGED */}
          {/* ... your entire right column remains exactly the same ... */}

        </div>

        {/* Bottom Navigation Cards — UNCHANGED */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <a href="/services" className="wood-panel p-7 hover:shadow-md transition">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6">
              <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                What I Do
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                Services
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Repairs, installs, finish carpentry, flooring, and more.
              </p>
            </div>
          </a>

          <a href="/projects" className="wood-panel p-7 hover:shadow-md transition">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6">
              <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                Proof
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                Projects
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Before & after photos from recent work.
              </p>
            </div>
          </a>

          <a href="/contact" className="wood-panel p-7 hover:shadow-md transition">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6">
              <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                Get in Touch
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Text for scheduling and quotes.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
