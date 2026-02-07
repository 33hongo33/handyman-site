import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3b2a18]">
            About Me
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4a3420]">
            Hi, I'm Kane Lopinski — a hands-on handyman with a passion for
            transforming spaces and making homes work better, look sharper,
            and feel more comfortable. I specialize in residential renovations,
            with extensive experience in AirBNB properties and coastal homes,
            where both style and durability matter.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4a3420]">
            In 2021, I purchased a duplex and fully renovated both units to
            become high-performing AirBNB rentals. I handled everything from
            kitchen and bathroom remodels to flooring, electrical, plumbing,
            lighting, tile, and smart home installations. The result? Functional,
            inviting spaces that guests rave about — and that stay running
            smoothly thanks to the right materials, repairs, and attention to
            detail.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4a3420]">
            I am currently remodeling kitchens and bathrooms and renovating a
             beach house in Gleneden Beach, where I am following plans from
            permitted drawings that include framing, carpentry, fixture
            installation, electrical work, and plumbing updates. I have also
            been working as a private contractor building an ADU, completing
            framing, window and door installation, a full bathroom remodel,
            finish carpentry, and interior build-out work.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <div className="relative h-[420px] w-full">
            <Image
              src="/about/about-me.png"
              alt="Kane Lopinski renovation work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="bg-white/70 p-5">
            <div className="text-sm text-[#6b4b2a]">
              Based in Eugene • Serving Eugene, Springfield and the Oregon Coast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
