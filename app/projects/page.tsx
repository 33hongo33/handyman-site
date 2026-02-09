export const revalidate = 0;

import Image from "next/image";

/**
 * EASY EDIT GUIDE
 * 1) Add your image files to: /public/projects/
 * 2) Update the PROJECTS array below
 */

type Photo = {
  src: string;
  caption: string;
  alt: string;
};

type ProjectSection = {
  title: string;
  location?: string;
  description?: string;
  photos: Photo[];
};

const PROJECTS: ProjectSection[] = [
  {
    title: "Hardwood Flooring Installation",
    location: "Gleneden Beach",
    description:
      "Full carpet removal and hardwood installation transforming the space into a clean, modern finish.",
    photos: [
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
    title: "Kitchen Remodel",
    location: "Eugene & Springfield",
    description:
      "Replace cabinets, countertops, flooring, electrical outlets and appliances.",
    photos: [
      { src: "/projects/airbnb-kitchen5.png", caption: "Kichen Before and After", alt: "Tile layout and spacing" },
      { src: "/projects/airbnb-kitchen4.png", caption: "Kitchen in Progress", alt: "Tile with clean grout lines" },
      { src: "/projects/airbnb-kitchen6.png", caption: "Kitchen Remodel Finished", alt: "Tile edges and trim finish" },
    ],
  },
  {
    title: "Fencing & Railing",
    location: "Eugene Area",
    description:
      "Fence repair, railing reinforcement, and exterior wood restoration for safety and durability.",
    photos: [
      { src: "/projects/fence-eugene1.png", caption: "Fence Build in Eugene", alt: "Fence reinforcement repair" },
      { src: "/projects/fence-eugene2.png", caption: "Updating Fence", alt: "Deck railing stabilization repair" },
      { src: "/projects/fence-eugene3.png", caption: "Finished fence repair", alt: "Finished fence repair result" },
      { src: "/projects/don-rail1-v2.png", caption: "Rail Upgrade Before Pciture", alt: "Fence reinforcement repair" },
      { src: "/projects/don-rail2-v2.png", caption: "Rail Upgrade After Picture", alt: "Deck railing stabilization repair" },
      { src: "/projects/don-rail3-v2.png", caption: "Rail Upgrade", alt: "Finished fence repair result" },
    ],
  },
  {
    title: "LVP Flooring Installation",
    location: "Eugene",
    description:
      "Subfloor prep and full luxury vinyl plank install for durability and clean finish.",
    photos: [
      { src: "/projects/bnb-flooring1.png", caption: "LVP Flooring Install", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/bnb-flooring2.png", caption: "LVP", alt: "Luxury vinyl plank detail and trim" },
      { src: "/projects/bnb-flooring3.png", caption: "Finished LVP Flooring at BNB", alt: "Luxury vinyl plank detail and trim" },
    ],
  },
  {
    title: "Shower Renovations",
    location: "Springfield",
    description: "Complete shower remodel and subfloor fix.",
    photos: [
      { src: "/projects/bnb-shower1.png", caption: "LVP Shower Tiles Installed", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/bnb-shower2.png", caption: "Custom Maple and Purple Heart Wood Accents", alt: "Luxury vinyl plank detail and trim" },
      { src: "/projects/bnb-shower3.png", caption: "Finished Shower with Door", alt: "Luxury vinyl plank detail and trim" },
      { src: "/projects/beach-shower1.png", caption: "Before: Beach Bathroom", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/beach-shower2.png", caption: "After: Tiled Floor and Shower", alt: "Luxury vinyl plank detail and trim" },
      { src: "/projects/beach-shower3.png", caption: "Finished Shower with Door", alt: "Luxury vinyl plank detail and trim" },
    ],
  },
  {
    title: "Hot Tub Canopy Build",
    location: "Springfield",
    description: "Put together hot tub canopy and connected in to concrete pilings.",
    photos: [
      { src: "/projects/hottub1.png", caption: "Hot Tub Canopy Build", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/hottub2.png", caption: "Finished Hot Tub Canopy", alt: "Luxury vinyl plank detail and trim" },
      { src: "/projects/hottub3.png", caption: "Hot Tub Canopy at BnB", alt: "Luxury vinyl plank detail and trim" },
    ],
  },

  {
    title: "TV Mounting",
    location: "Springfield",
    description: "Professional TV Mounting",
    photos: [
      { src: "/projects/tv-mount1.png", caption: "TV Mount Installed", alt: "Finished luxury vinyl plank flooring" },
      { src: "/projects/tv-mount2.png", caption: "Switching an Existing TV Mount Above Fireplace", alt: "Switching an existing TV Mount above Fireplace" },
      { src: "/projects/tv-mount3.png", caption: "TV Mounted Above Fireplace ", alt: "Luxury vinyl plank detail and trim" },
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

          {/* White content + Large Logo Layout */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* White Box */}
            <div className="max-w-3xl rounded-2xl bg-white/85 backdrop-blur-sm px-6 py-5 border border-[rgba(87,63,37,0.18)] shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text)] leading-tight">
                Recent Work
              </h1>
              <p className="mt-3 text-[var(--muted)] leading-7">
                Flooring, tile, fencing, railing repair, and finish work completed in Eugene & Springfield.
              </p>
            </div>

            {/* 🔥 500% Larger Logo Outside White Box */}
            <div className="relative w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] shrink-0">
              <Image
                src="/kane-logo.png"
                alt="Kane Lopinski Handyman Services Logo"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Buttons unchanged */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              <a href="sms:5419818246" className="btn-primary">
                Text Photos for Estimate
              </a>

              <a href="tel:5419818246" className="btn-outline">
                Call 541-981-8246
              </a>

              <a
                href="https://instagram.com/abode_onsalal"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-secondary"
              >
                Current Renovation
              </a>
            </div>

            <div className="mt-3 sm:hidden">
              <a
                href="https://instagram.com/abode_onsalal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex underline underline-offset-4 text-[var(--muted)]"
              >
                Current Renovation (Instagram)
              </a>
            </div>
          </div>

        </div>

        {/* Projects Grid remains unchanged */}
        <div className="mt-12 grid gap-12">
          {PROJECTS.map((section) => (
            <div key={section.title} className="wood-panel p-8">
              <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-[rgba(87,63,37,0.18)] p-6 shadow-sm">
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
