import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import BookingCTA from "../components/BookingCTA";

// ── Families
import fam0 from "../../imports/outdoor-shot-of-pleased-man-and-woman-stand-closel-2026-05-28-23-39-35-utc.JPG";
import fam1 from "../../imports/happy-family-laughing-while-lying-in-green-grass-2026-03-25-05-03-58-utc.jpg";
import fam2 from "../../imports/young-happy-mixed-race-family-relaxing-and-sitting-2026-03-25-08-29-12-utc.jpg";
import fam3 from "../../imports/loving-family-together-in-sunny-field-outdoors-2026-01-05-05-42-43-utc.jpg";
import fam4 from "../../imports/happy-family-sitting-in-the-autumn-grass-2026-03-26-09-13-29-utc.jpg";

// ── Pets
import pet0 from "../../imports/dog-in-autumn-foliage-wearing-a-red-collar-2026-03-25-00-44-16-utc.jpg";
import pet1 from "../../imports/happy-young-woman-spending-time-with-lovely-spotte-2026-01-05-04-49-04-utc.jpg";
import pet2 from "../../imports/a-soft-coated-wheaten-terrier-running-through-the-2026-03-13-01-52-31-utc.jpg";
import pet3 from "../../imports/happy-dog-standing-on-a-rock-in-nature-2026-03-24-11-37-42-utc.jpg";
import pet4 from "../../imports/cute-puppy-sitting-alert-in-green-grass-2026-03-19-08-12-02-utc.jpg";

// ── Personal Branding
import brand0 from "../../imports/japanese-woman-in-office-portrait-2026-03-09-05-22-48-utc.jpg";
import brand1 from "../../imports/athletic-woman-crouches-on-bridge-in-activewear-2026-03-25-07-26-56-utc.jpg";
import brand2 from "../../imports/jumping-hurdler-top-view-2026-01-05-05-51-32-utc.jpg";
import brand3 from "../../imports/young-woman-doing-gymnastics-top-view-2026-03-09-06-04-47-utc.jpg";
import brand4 from "../../imports/young-woman-in-a-lake-rubbing-her-eyes-2026-03-09-05-46-08-utc.jpg";

// ── Events
import evt0 from "../../imports/celebrating-together-at-an-office-new-year-s-party-2026-01-09-09-10-33-utc.jpg";
import evt1 from "../../imports/smiling-people-celebrating-new-year-s-eve-with-spa-2026-03-24-09-00-03-utc.jpg";
import evt2 from "../../imports/friends-celebrate-new-year-s-eve-with-sparklers-2026-03-24-07-23-58-utc.jpg";
import evt3 from "../../imports/celebratory-evening-couple-cheers-with-champagne-2026-03-24-05-10-35-utc.jpg";
import evt4 from "../../imports/friends-celebrating-with-champagne-on-yellow-backg-2026-03-17-08-58-10-utc.jpg";

type Category = "All" | "Families" | "Pets" | "Personal Branding" | "Events";

interface Image {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
  path: string;
}

const images: Image[] = [
  // Families
  { src: fam0, alt: "Couple with their dog on the beach", category: "Families", path: "/family-photography" },
  { src: fam1, alt: "Family laughing together in the grass", category: "Families", path: "/family-photography" },
  { src: fam2, alt: "Mixed-race family relaxing outdoors with two children", category: "Families", path: "/family-photography" },
  { src: fam3, alt: "Family together in a sunny outdoor field", category: "Families", path: "/family-photography" },
  { src: fam4, alt: "Family sitting in autumn grass", category: "Families", path: "/family-photography" },
  // Pets
  { src: pet0, alt: "Dog in autumn foliage wearing a red collar", category: "Pets", path: "/pet-photography" },
  { src: pet1, alt: "Woman with her Australian Shepherd on the grass", category: "Pets", path: "/pet-photography" },
  { src: pet2, alt: "Wheaten Terrier running through a bluebell field", category: "Pets", path: "/pet-photography" },
  { src: pet3, alt: "Dog standing on a rock with mountain backdrop", category: "Pets", path: "/pet-photography" },
  { src: pet4, alt: "German Shepherd puppy sitting alert in green grass", category: "Pets", path: "/pet-photography" },
  // Personal Branding
  { src: brand0, alt: "Professional woman portrait in an office corridor", category: "Personal Branding", path: "/personal-branding" },
  { src: brand1, alt: "Woman in activewear crouching on a bridge", category: "Personal Branding", path: "/personal-branding" },
  { src: brand2, alt: "Aerial view of athlete jumping a hurdle", category: "Personal Branding", path: "/personal-branding" },
  { src: brand3, alt: "Top-down view of gymnast on a dark floor", category: "Personal Branding", path: "/personal-branding" },
  { src: brand4, alt: "Woman emerging from a lake in mountain light", category: "Personal Branding", path: "/personal-branding" },
  // Events
  { src: evt0, alt: "Office celebration party together", category: "Events", path: "/event-photography" },
  { src: evt1, alt: "Group celebrating New Year with sparklers", category: "Events", path: "/event-photography" },
  { src: evt2, alt: "Friends raising sparklers at a New Year event", category: "Events", path: "/event-photography" },
  { src: evt3, alt: "Couple toasting champagne at an evening celebration", category: "Events", path: "/event-photography" },
  { src: evt4, alt: "Friends celebrating with champagne and confetti", category: "Events", path: "/event-photography" },
];

const categories: Category[] = ["All", "Families", "Pets", "Personal Branding", "Events"];

const categoryMeta: Record<Exclude<Category, "All">, { path: string; label: string }> = {
  "Families": { path: "/family-photography", label: "Family Photography" },
  "Pets": { path: "/pet-photography", label: "Pet Photography" },
  "Personal Branding": { path: "/personal-branding", label: "Personal Branding" },
  "Events": { path: "/event-photography", label: "Event Photography" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "EHRoy Photography Portfolio",
  "description": "Portfolio of natural light photography across families, pets, personal branding and events in Dubai, UAE.",
  "author": { "@type": "LocalBusiness", "name": "EHRoy Photography", "url": "https://www.ehrayphotography.com" },
};

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? images : images.filter(img => img.category === active);

  return (
    <>
      <SEO
        title="Portfolio | EHRoy Photography Dubai - Family, Pet & Event Photography"
        description="Browse the full portfolio of EHRoy Photography. Natural light family, pet, personal branding and event photography across Dubai and the UAE."
        keywords="Photography Portfolio Dubai, Family Photography Portfolio, Pet Photography Dubai, Event Photography UAE, Personal Branding Photography"
        canonical="https://www.ehrayphotography.com/portfolio"
        schema={pageSchema}
      />

      {/* ── Page header ── */}
      <section className="pt-[72px] bg-background">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 text-center">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">EHRoy Photography</p>
          <h1
            className="text-4xl sm:text-5xl font-medium text-foreground mb-5"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Portfolio
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed mb-12">
            A curated selection of work across families, pets, personal branding and events. Every image shot in natural light.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-[0.1em] uppercase font-medium transition-colors duration-500 ${
                  active === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-2 opacity-50">
                    {images.filter(i => i.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry grid ── */}
      <section className="pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {filtered.map((img, i) => (
              <Link
                key={`${img.src}-${i}`}
                to={img.path}
                className="group block break-inside-avoid mb-4 rounded-3xl overflow-hidden bg-muted relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="inline-flex items-center self-start gap-1.5 px-3 py-1 bg-background text-foreground text-[10px] tracking-[0.15em] uppercase font-medium rounded-full mb-2">
                    {img.category}
                  </span>
                  <p className="text-white/80 text-xs">{img.alt}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-white text-[10px] tracking-wider uppercase font-medium">
                    View service <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-sm">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Category links ── */}
      <section className="pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium text-center">Explore by Service</p>
          <h2
            className="text-3xl sm:text-4xl font-medium text-foreground mb-14 text-center"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Find the right session for you.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(Object.entries(categoryMeta) as [Exclude<Category, "All">, { path: string; label: string }][]).map(([cat, meta]) => {
              const cover = images.find(i => i.category === cat);
              return (
                <Link
                  key={cat}
                  to={meta.path}
                  className="group relative rounded-3xl overflow-hidden bg-muted block"
                  style={{ aspectRatio: "3/4" }}
                >
                  {cover && (
                    <img
                      src={cover.src}
                      alt={`${cat} photography by EHRoy`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-white text-lg font-medium mb-1"
                      style={{ fontFamily: "'Lora', Georgia, serif" }}
                    >
                      {meta.label}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-white/70 text-xs tracking-wider uppercase font-medium group-hover:gap-2.5 transition-all duration-500">
                      View page <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="Seen something you like?"
        subtext="Get in touch to discuss your session. We'll find a time and place that works for you."
      />
    </>
  );
}
