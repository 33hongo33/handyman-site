export default function Services() {
  const services = [
    {
      title: "General Repairs",
      items: [
        "Drywall patch & paint blending",
        "Door adjustments & trim work",
        "Fence & deck repairs",
        "Fixture replacements",
      ],
    },
    {
      title: "Airbnb & Rental Maintenance",
      items: [
        "Punch list completion",
        "Turnover repair fixes",
        "Guest damage repair",
        "Mounting & hardware installs",
      ],
    },
    {
      title: "Flooring Installation",
      items: [
        "Hardwood flooring",
        "Luxury Vinyl Plank (LVP)",
        "Tile flooring",
        "Subfloor prep & leveling",
      ],
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Page intro */}
        <div className="wood-panel p-10">
          <div className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--accent-dark)] uppercase">
            Services
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-5 border border-[rgba(87,63,37,0.18)] shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] leading-tight">
              Handyman Services in Eugene & Springfield
            </h1>
            <p className="mt-3 text-[15px] sm:text-base leading-7 text-[var(--muted)]">
              Professional repairs, installs, and finish work — including Airbnb-ready
              punch lists and flooring projects.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="sms:5419818246" className="btn-primary">
              Text for a Quote
            </a>
            <a href="tel:5419818246" className="btn-outline">
              Call 541-981-8246
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((section) => (
            <div key={section.title} className="wood-panel p-7">
              {/* Paper inner panel for readability */}
              <div className="rounded-2xl bg-white/82 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--text)]">
                  {section.title}
                </h2>

                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="rustic-dot" />
                      <span className="text-sm leading-6 text-[var(--muted)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 wood-panel p-10 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-6 border border-[rgba(87,63,37,0.18)] shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              Need Flooring Installed?
            </h2>
            <p className="mt-3 text-[var(--muted)] leading-7">
              Text photos and approximate square footage for a quick estimate.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a href="tel:5419818246" className="btn-primary">
                Call
              </a>
              <a href="sms:5419818246" className="btn-outline">
                Text for Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
