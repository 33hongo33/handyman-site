import Image from "next/image";

/**
 * EASY EDIT GUIDE
 * 1) Add your image files to: /public/projects/
 * 2) Update the PROJECTS array below:
 *    - Change the section title, location, description
 *    - For each photo: update src, caption, alt
 * 3) The layout will stay the same automatically.
 */

type Photo = {
  /** Path from /public (example: /projects/hardwood-before-after.png) */
  src: string;
  /** Short label shown ABOVE the photo */
  caption: string;
  /** Accessibility text (briefly describe what's in the photo) */
  alt: string;
};

type ProjectSection = {
  /** Big section title (ex: "Tile Work") */
  title: string;
  /** Small location line (ex: "Eugene") */
  location?: string;
  /** One-sentence description under the title */
  description?: string;
  /** Up to 3 photos show per row on desktop */
  photos: Photo[];
};

/** ✅ EDIT THIS ONLY */
const PROJECTS: ProjectSection[] = [
  {
    title: "Hardwood Flooring Installation",
    location: "Gleneden Beach",
    description:
      "Full carpet removal and hardwood installation transforming the space into a clean, modern finish.",
    photos: [
      
      // Add more photos like this:
       { src: "/projects/brazilian-oak-bnb.png", caption: "Brazilian Oak Installed at AirBNB", alt: "Hardwood plank detail close-up" },
       { src: "/projects/brazilian-oak2-bnb.png", caption: "Brazilian Oak Installed in Bedroom AirBNB", alt: "Hardwood plank detail close-up" },
       { src: "/projects/brazilian-oak3-bnb.png", caption: "Brazilian Oak Living Room", alt: "Hardwood plank detail close-up" },
       { src: "/projects/hardwood-before-after.png", caption: "Before and After Beach House Bedroom", alt: "Hardwood plank detail close-up" },
       { src: "/projects/beach-hardwood.png", caption: "Distressed Beech Install Beach House", alt: "Hardwood plank detail close-up" },
       { src: "/projects/beach-hardwood2.png", caption: "Beach House Bedroom", alt: "Hardwood plank detail close-up" },
       
       
    ],
  },

  {
    title: "Tile Work",
    location: "Eugene & Springfield",
    description:
      "Professional tile installation including flooring, showers, backsplashes, and repair work.",
    photos: [
      { src: "/projects/bnb-tile1.png", caption: "AirBNB Bathroom Tile Finished", alt: "Tile layout and spacing" },
      { src: "/projects/bnb-tile2.png", caption: "Tile Work in Progress", alt: "Tile with clean grout lines" },
      { src: "/projects/bnb-tile3.png", caption: "Bathroom Renovation", alt: "Tile edges and trim finish" },
      { src: "/projects/rio-glen-bath1.png", caption: "Eugene Bathroom Renovation Subfloor Work", alt: "Tile edges and trim finish" },
      { src: "/projects/rio-glen-bath2.png", caption: "Hexaganol Tile", alt: "Tile edges and trim finish" },
      { src: "/projects/rio-glen-bath4.png", caption: "Finished Bathroom", alt: "Tile edges and trim finish" },
      { src: "/projects/beach-house-bath1.png", caption: "Beach House Bathroom Remodel", alt: "Tile edges and trim finish" },
      { src: "/projects/beach-house-bath2.png", caption: "Penny Tile Grouting", alt: "Tile edges and trim finish" },
      { src: "/projects/beach-house-bath3.png", caption: "Finished Bathroom", alt: "Tile edges and trim finish" },
    ],
  },

  {
    title: "Fencing & Railing Repair",
    location: "Eugene Area",
    description:
      "Fence repair, railing reinforcement, and exterior wood restoration for safety and durability.",
    photos: [
      { src: "/projects/fence-eugene1.png", caption: "Fence Build in Eugene", alt: "Fence reinforcement repair" },
      { src: "/projects/fence-eugene2.png", caption: "Updating Fence", alt: "Deck railing stabilization repair" },
      { src: "/projects/fence-eugene3.png", caption: "Finished fence repair", alt: "Finished fence repair result" },
    ],
  },

  {
    title: "LVP Flooring Installation",
    location: "Eugene",
    description:
      "Subfloor prep and full luxury vinyl plank install for durability and clean finish.",
    photos: [
      { src: "/projects/flooring-lvp-01.jpg", caption: "Finished LVP install", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/flooring-lvp-02.jpg", caption: "Plank + trim detail", alt: "Luxury vinyl plank detail and trim" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Page Intro */}
        <div className="wood-panel p-10">
          <div className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--accent-dark)] uppercase">
            Project Gallery
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-5 border border-[rgba(87,63,37,0.18)] shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] leading-tight">
              Recent Work
            </h1>
            <p className="mt-3 text-[var(--muted)] leading-7">
              Flooring, tile, fencing, railing repair, and finish work completed in Eugene & Springfield.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="sms:5419818246" className="btn-primary">
              Text Photos for Estimate
            </a>
            <a href="tel:5419818246" className="btn-outline">
              Call 541-981-8246
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-12">
          {PROJECTS.map((section) => (
            <div key={section.title} className="wood-panel p-8">
              <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
                {/* Section Header */}
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--text)]">
                    {section.title}
                  </h2>

                  {(section.location || section.description) && (
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {section.location ? `${section.location} • ` : ""}
                      {section.description ?? ""}
                    </p>
                  )}
                </div>

                {/* Photo Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.photos.map((photo) => (
                    <div key={photo.src}>
                      <p className="mb-3 text-sm font-medium text-[var(--text)]">
                        {photo.caption}
                      </p>

                      <a
                        href={photo.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm"
                        title="Open full size"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}