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

            {/* ✅ Logo + Brand Block (Top of Mobile & Desktop Left) */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] shrink-0">
                <Image
                  src="/kane-logo.png"
                  alt="Kane Lopinski Handyman Services Logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 100px"
                />
              </div>

              <div className="leading-tight">
                <div
                  className={`${rusticFont.className} text-2xl sm:text-3xl font-bold tracking-[0.02em] text-[#3b2a18]`}
                >
                  Kane Lopinski
                </div>
                <div
                  className={`${rusticFont.className} text-base sm:text-lg font-semibold tracking-wide text-[#6b4b2a]`}
                >
                  Handyman Services
                </div>
              </div>
            </div>

            {/* Location Badge */}
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
                solid scheduling, and quality craftsmanship — without the runaround.
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
                  I’ll tell you what I can do, when I can do it, and what it’ll take.
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

          {/* RIGHT — Image + Popular Requests */}
          <div className="grid gap-10">

            {/* Image Panel */}
            <div className="wood-panel p-6">
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-4 shadow-sm">
                <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                  On the Job
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm">
                  <div className="relative aspect-[4/5] sm:aspect-[16/13]">
                    <Image
                      src="/projects/self.png"
                      alt="Kane inspecting exterior window flashing on a roof"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                  Detail-focused repairs and preventative fixes — built to last in Oregon weather.
                </p>
              </div>
            </div>

            {/* Popular Requests */}
            <div className="wood-panel p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
                Popular Requests
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-7 text-[var(--muted)]">
                Common projects I handle across Eugene & Springfield — great for homeowners and rentals.
              </p>

              <ul className="mt-7 space-y-4">
                {popular.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="rustic-dot" />
                    <span className="text-sm sm:text-base leading-7 text-[var(--muted)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-[rgba(87,63,37,0.22)] bg-white/70 p-5">
                <div className="text-xs font-semibold tracking-wide uppercase text-[var(--accent-dark)]">
                  Service Area
                </div>
                <div className="mt-2 text-base font-semibold text-[var(--text)]">
                  Eugene • Springfield • Nearby
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  For a fast estimate, text photos + a short description.
                </p>
              </div>

              <p className="mt-6 text-xs leading-5 text-[var(--muted)]">
                Pro tip: For Airbnb jobs, include check-in/check-out timing.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

