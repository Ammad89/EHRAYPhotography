import familyImg1 from "../../imports/optimized/happy-family-laughing-while-lying-in-green-grass-2026-03-25-05-03-58-utc.jpg";
import familyImg2 from "../../imports/optimized/young-happy-mixed-race-family-relaxing-and-sitting-2026-03-25-08-29-12-utc.jpg";
import familyImg3 from "../../imports/optimized/loving-family-together-in-sunny-field-outdoors-2026-01-05-05-42-43-utc.jpg";
import familyImg4 from "../../imports/optimized/happy-family-sitting-in-the-autumn-grass-2026-03-26-09-13-29-utc.jpg";
import { ArrowRight, Check, Star } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";
import {
  getActiveSite,
  resolveThemeAsset,
} from "../../theme-engine";
import { familyServicePage } from "../../themes/eight-nine-luxury/pages";

const site = getActiveSite();
const page = familyServicePage;
const familyHeroImage = resolveThemeAsset(page.hero.backgroundImage);

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": page.seo.title,
  "serviceType": "Photography",
  "description": page.seo.description,
  "provider": { "@type": "LocalBusiness", "name": site.business.name, "url": site.domain.siteUrl },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "url": `${site.domain.siteUrl}${page.seo.slug}`,
};

const faqs = [
  { q: "What should we wear?", a: "Choose outfits that feel like you - comfortable, coordinated but not matching. Earthy tones and soft colours photograph beautifully. Avoid large logos or very busy patterns. Emily can advise further on your pre-session call." },
  { q: "How do we keep kids calm and cooperative?", a: "You don't need to. Emily works with children's natural energy, not against it. Running, hiding, ignoring the camera - it all makes for better photographs than a forced smile ever could." },
  { q: "Where do sessions take place?", a: "Anywhere that feels meaningful to your family - a favourite park, your neighbourhood, the beach, or your own home. Emily will suggest locations based on the time of day and what you're hoping to capture." },
  { q: "When do we receive our photographs?", a: "Draft package structure: online galleries are typically positioned around a 14-day delivery promise, with rush options confirmed before booking." },
  { q: "Do you travel outside Dubai?", a: "Yes. Emily covers the whole UAE and is available for travel internationally. Travel costs are discussed at enquiry stage." },
  { q: "What if the weather is bad on the day?", a: "We'll reschedule at no cost. Overcast days can actually produce the most beautiful, even light - so don't always assume that clouds are a problem." },
];

const packages = [
  { name: "Essentials", price: "Indicative AED 1,200", duration: "1 hour", images: "30+ edited images", locations: "1 location", features: ["Full print release", "Online gallery", "Standard turnaround (14 days)"], note: "Best for: Small families, intimate sessions", featured: false },
  { name: "Classic", price: "Indicative AED 1,800", duration: "2 hours", images: "60+ edited images", locations: "1 location", features: ["Full print release", "Online gallery", "Priority booking", "Standard turnaround (14 days)"], note: "Best for: Families with young children", featured: true },
  { name: "Premium", price: "Indicative AED 2,800", duration: "3 hours", images: "100+ edited images", locations: "2 locations", features: ["Full print release", "Online gallery", "Priority booking", "Same-week turnaround available"], note: "Best for: Extended families, special occasions", featured: false },
];

const testimonials = [
  { name: "Sample family client", role: "Draft testimonial - Dubai", text: "I cried when I saw the photos. Not because they were 'nice' - because they were exactly us. Emily captured something I'd never seen in a photograph before." },
  { name: "Sample family client", role: "Draft testimonial - Abu Dhabi", text: "Three kids under six. We thought it would be chaos. It was - and the photos are all the better for it. Emily works like a ghost. You forget she's there." },
  { name: "Sample family client", role: "Draft testimonial - Sharjah", text: "Our session was the most relaxed hour we've had as a family in months. The photographs feel like a love letter to the four of us." },
];

const portfolioImages = [
  { src: familyImg1, alt: "Family laughing together lying in the grass" },
  { src: familyImg2, alt: "Mixed-race family sitting on the grass with two children" },
  { src: familyImg3, alt: "Couple with young child in a sunny outdoor field" },
  { src: familyImg4, alt: "Family sitting together in autumn grass" },
];

export default function FamilyPhotography() {
  return (
    <>
      <SEO
        title={page.seo.title}
        description={page.seo.description}
        keywords={page.seo.keywords}
        canonical={`${site.domain.canonicalUrl}${page.seo.slug}`}
        schema={pageSchema}
      />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden bg-muted pt-[72px]">
        <img src={familyHeroImage} alt={`${site.brand.name} family photography hero`} className="absolute inset-0 w-full h-full object-cover object-[center_55%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 w-full">
          <div>
            <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">{page.hero.eyebrow}</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              {page.hero.title.split("\n").map((line, index) => (
                <span key={line}>
                  {line}
                  {index < page.hero.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">{page.hero.subtitle}</p>
            <a href="#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
              <span className="group-hover:[order:1]">{page.hero.cta}</span>
              <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Family Photography</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-8 leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Because the messy moments<br />are the meaningful ones.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">Families are chaotic, loving, funny and complicated. The best photographs of your family don&apos;t pretend otherwise.</p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">Emily works without a shot list. She arrives, she watches, she waits - and the real moments emerge on their own. Kids being kids. Parents being present. The in-between bits that define a family.</p>
            <p className="text-muted-foreground leading-relaxed mb-0 text-[15px]">Sessions take place outdoors, in natural light, at a location that feels like yours. There is no studio backdrop. There is no forced smile count.</p>
          </div>
          <div className="pl-0 md:pl-6">
            <div className="border-l-[3px] border-foreground pl-8 py-4">
              <blockquote className="italic text-2xl sm:text-3xl text-foreground leading-[1.4]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                "We don&apos;t tell your family how to look. We let them show us."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Session Experience */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">What to Expect</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Three stages. Zero stress.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Before", body: "A short consultation call to understand your family, your children's personalities, and what you'd love to capture. We agree on location, timing and a rough plan." },
              { title: "During", body: "One to two hours in a location that feels natural to you. Emily works quietly, never directing, always watching. Kids are encouraged to play, not pose." },
              { title: "After", body: "Draft structure: a curated online gallery delivered within 14 days. High-resolution downloads, print release included. No upsell, no extra fees." },
            ].map(stage => (
              <div key={stage.title} className="bg-background rounded-3xl p-8">
                <p className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase mb-4 font-medium">{stage.title}</p>
                <p className="text-foreground text-[15px] leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Family Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>A selection of real family sessions.</h2>
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map(img => (
              <div key={img.alt} className="rounded-3xl overflow-hidden bg-muted group relative" style={{ aspectRatio: "4/5" }}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Packages</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>Choose what&apos;s right for your family.</h2>
          <p className="text-muted-foreground text-[15px] mb-14 max-w-xl">Indicative package structure for client review. Final pricing, deliverables and turnaround should be confirmed by EHRay before launch.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map(pkg => (
              <div key={pkg.name} className={`bg-background rounded-3xl p-8 flex flex-col ${pkg.featured ? "ring-2 ring-foreground" : ""}`}>
                {pkg.featured && <span className="inline-block mb-4 px-3 py-0.5 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase rounded-full self-start">Most popular</span>}
                <h3 className="text-2xl font-medium text-foreground mb-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>{pkg.name}</h3>
                <p className="text-3xl font-medium text-foreground mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-1">{pkg.duration}</p>
                <p className="text-muted-foreground text-sm mb-1">{pkg.images}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.locations}</p>
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check size={14} className="text-foreground flex-none" />{f}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-xs mb-6 italic">{pkg.note}</p>
                <a href="#contact" className="group inline-flex items-center justify-center gap-[18px] pl-8 pr-3.5 py-3 bg-foreground text-background text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:opacity-80 transition-opacity duration-500">
                  <span className="group-hover:[order:1]">Book This Package</span>
                  <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={13} /></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Sample Kind Words</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>What families could say.</h2>
          <p className="text-muted-foreground text-sm mb-14 max-w-xl leading-relaxed">Draft testimonial examples for client review. Replace with verified client quotes before launch.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, index) => (
              <div key={`${t.role}-${index}`} className="bg-card rounded-3xl p-8 flex flex-col">
                <div className="flex gap-0.5 mb-5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-foreground text-foreground" />)}</div>
                <p className="italic text-foreground leading-relaxed mb-6 text-[17px] flex-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Frequently Asked</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Your questions, answered.</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Let&apos;s photograph your family." subtext="Reach out to check availability or ask any questions. Sessions book out quickly - especially at golden hour." sessionType="Family Photography" />
      </div>
    </>
  );
}
