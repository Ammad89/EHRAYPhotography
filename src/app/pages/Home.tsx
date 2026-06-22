import heroImage from "../../imports/optimized/woman-playing-with-dog-on-sandy-beach-2026-01-08-06-39-41-utc.JPG";
import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import SEO from "../components/SEO";
import emilyImage from "../../imports/optimized/Gemini_Generated_Image_lfgepqlfgepqlfge.jpg";
import portfolioFamilies from "../../imports/optimized/outdoor-shot-of-pleased-man-and-woman-stand-closel-2026-05-28-23-39-35-utc.JPG";
import portfolioPets from "../../imports/optimized/dog-in-autumn-foliage-wearing-a-red-collar-2026-03-25-00-44-16-utc.jpg";
import portfolioBranding from "../../imports/optimized/japanese-woman-in-office-portrait-2026-03-09-05-22-48-utc.jpg";
import portfolioEvents from "../../imports/optimized/celebrating-together-at-an-office-new-year-s-party-2026-01-09-09-10-33-utc.jpg";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ehrayphotography.com",
  "name": "EHRay Photography",
  "description": "Natural light lifestyle photographer in Dubai, UAE. Family, pet, personal branding and event photography.",
  "url": "https://www.ehrayphotography.com",
  "telephone": "+971569358629",
  "image": "https://static.wixstatic.com/media/7cfb53_8c7fcb8badd6496dbd89b9ca004f575d~mv2.png",
  "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
  "geo": { "@type": "GeoCoordinates", "latitude": 25.2048, "longitude": 55.2708 },
  "priceRange": "Indicative AED 1,200+",
  "areaServed": [{ "@type": "City", "name": "Dubai" }, { "@type": "Country", "name": "United Arab Emirates" }],
};

const testimonials = [
  { name: "Sample family client", role: "Draft testimonial - Dubai", text: "Emily sees the moments you miss when you're living them. Our photographs don't look like a session - they look like our life.", rating: 5 },
  { name: "Sample pet client", role: "Draft testimonial - UAE", text: "The session felt relaxed from the first few minutes. Nothing was forced, and the final images captured the bond we wanted to remember.", rating: 5 },
  { name: "Sample brand client", role: "Draft testimonial - Dubai", text: "The new photographs made my brand feel more credible immediately. Clients understood the tone of my work before we even spoke.", rating: 5 },
];

const portfolio = [
  { label: "Families", path: "/family-photography", image: portfolioFamilies, desc: "Real moments. Natural light. No posing." },
  { label: "Pets", path: "/pet-photography", image: portfolioPets, desc: "The bond between you and your animal, captured honestly." },
  { label: "Personal Branding", path: "/personal-branding", image: portfolioBranding, desc: "Images that build trust before you say a word." },
  { label: "Events", path: "/event-photography", image: portfolioEvents, desc: "Every detail, every moment - documented." },
];

const services = [
  { title: "Family Photography", path: "/family-photography", desc: "Your location. Natural light. No posing. Just the real moments that make your family yours.", tag: "Most popular" },
  { title: "Pet Photography", path: "/pet-photography", desc: "Dogs, cats and everything in between. Portraits built around the bond - not the breed.", tag: "" },
  { title: "Personal Branding", path: "/personal-branding", desc: "For entrepreneurs, coaches and founders who need imagery that does the talking for them.", tag: "" },
  { title: "Event Photography", path: "/event-photography", desc: "Corporate and private events covered with precision - and an eye for the moments that matter.", tag: "" },
];

const steps = [
  { number: "01", title: "Consultation", desc: "A quick, relaxed call to understand what you need and what matters most." },
  { number: "02", title: "Session Planning", desc: "We agree on location, timing and wardrobe. You bring nothing but yourselves." },
  { number: "03", title: "The Session", desc: "No directing. No posing. Just you, being you - while Emily works." },
  { number: "04", title: "Your Gallery", desc: "A curated online gallery delivered within two weeks, ready to download and print." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="EHRay Photography Dubai | Natural Light Lifestyle Photography UAE"
        description="Natural light lifestyle photographer in Dubai, UAE. Authentic family, pet, personal branding and event photography. Book a session today."
        keywords="Photographer Dubai, Family Photographer Dubai, Pet Photographer Dubai, Lifestyle Photographer UAE, Natural Light Photographer Dubai"
        canonical="https://www.ehrayphotography.com"
        schema={homeSchema}
      />
      {/* ── Sticky backdrop: Hero + Philosophy + Stats ── */}
      <div className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-muted" style={{ marginBottom: "-100vh", zIndex: 0 }}>
          <img src={heroImage} alt="A woman and her dog on a sandy beach - EHRay Photography, UAE" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        </div>

        {/* Hero */}
        <section className="relative h-screen min-h-[640px] flex items-end pb-20" style={{ zIndex: 1 }}>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="text-white/60 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">EHRay Photography &nbsp;·&nbsp; United Arab Emirates</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium leading-[1.08] max-w-3xl mb-7" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Natural Light &amp; Authentic<br />Lifestyle Photography<br />Across the UAE
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
              Families. Pets. Personal brands. Photographed in natural light, across the UAE - without staging, without posing, without compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
                <span className="group-hover:[order:1]">Book a Consultation</span>
                <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
              </a>
              <a href="#portfolio" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 border border-white/50 text-white text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:border-white/90 transition-colors duration-500">
                <span className="group-hover:[order:1]">View Portfolio</span>
                <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative py-28" style={{ zIndex: 1, background: "rgba(0,0,0,0.82)" }}>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Philosophy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-tight mb-8 text-white" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                Real moments.<br />Not perfect ones.
              </h2>
              <p className="text-white/65 leading-relaxed mb-5 text-[15px]">Most photographers compete on editing. EHRay Photography competes on something harder to fake - authenticity. The most powerful images aren't constructed. They're caught.</p>
              <p className="text-white/65 leading-relaxed mb-8 text-[15px]">Emily works exclusively in natural light. No studio setups, no forced expressions. She creates the space for you to relax and connect - then quietly captures what happens next.</p>
              <a href="#about" className="group inline-flex items-center gap-2.5 text-white text-xs tracking-[0.12em] uppercase font-medium">
                <span className="group-hover:[order:1]">Meet Emily</span>
                <span className="group-hover:[order:0] flex items-center"><ArrowRight size={13} /></span>
              </a>
            </div>
            <div className="pl-0 md:pl-6">
              <div className="border-l-[3px] border-white/30 pl-8 py-2">
                <blockquote className="italic text-2xl sm:text-3xl text-white leading-[1.4]" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  "I don&apos;t chase the perfect shot.<br />I wait for the real one."
                </blockquote>
                <p className="mt-6 text-white/40 text-xs tracking-wider uppercase">- Emily Ray, Founder of EHRay Photography</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-14" style={{ zIndex: 1, background: "rgba(0,0,0,0.68)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[{ value: "8+", label: "Years of Experience (draft)" }, { value: "1,400+", label: "Sessions Completed (draft)" }, { value: "4.9 ★", label: "Google Rating (draft)" }, { value: "UAE", label: "Based - Global Availability" }].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-medium text-white mb-2" style={{ fontFamily: "'Lora', Georgia, serif" }}>{stat.value}</p>
                <p className="text-white/50 text-xs tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "'Lora', Georgia, serif" }}>Selected Work</h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">A small selection. Every image chosen deliberately.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map(item => (
              <Link key={item.label} to={item.path} className="group relative overflow-hidden bg-muted rounded-3xl block" style={{ aspectRatio: "3/4" }}>
                <img src={item.image} alt={`${item.label} photography by EHRay - UAE`} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-700 group-hover:translate-y-1 group-hover:opacity-0">
                  <p className="text-white text-base font-medium drop-shadow" style={{ fontFamily: "'Lora', Georgia, serif" }}>{item.label}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <p className="text-white text-base font-medium mb-1.5" style={{ fontFamily: "'Lora', Georgia, serif" }}>{item.label}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-white/80 text-xs tracking-wider uppercase font-medium">View work <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Sample Client Proof</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground max-w-xl leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>What clients could say</h2>
            <p className="text-muted-foreground text-sm mt-4 max-w-xl leading-relaxed">Draft examples for client review. Final testimonials and figures should be replaced with verified EHRay client proof before launch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="bg-background p-8 rounded-3xl flex flex-col">
                <div className="flex gap-0.5 mb-5">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={13} className="fill-foreground text-foreground" />)}</div>
                <p className="italic text-foreground leading-relaxed mb-6 text-[17px] flex-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5 tracking-wide">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">Services</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "'Lora', Georgia, serif" }}>Choose your session</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(service => (
              <div key={service.title} className="bg-card rounded-3xl p-8 flex flex-col hover:bg-muted transition-colors duration-500">
                <div className="mb-5 h-5 flex items-center">
                  {service.tag && <span className="inline-block px-3 py-0.5 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase rounded-full">{service.tag}</span>}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{service.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed mb-7 flex-1">{service.desc}</p>
                <Link to={service.path} className="group inline-flex items-center gap-2.5 text-foreground text-[11px] tracking-[0.12em] uppercase font-medium">
                  <span className="group-hover:[order:1]">Learn more</span>
                  <span className="group-hover:[order:0] flex items-center"><ArrowRight size={11} /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-3xl max-w-md">
              <img src={emilyImage} alt="Emily Ray, founder of EHRay Photography, with cameras in a mountain landscape at golden hour" className="w-full h-full object-cover object-[center_20%]" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">About Emily</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-7 leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>Trained to wait<br />for the real moment.</h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">Emily spent years photographing wildlife before turning her lens on families and brands. That background gave her something most photographers never develop - the patience to wait, and the instinct to know when.</p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">She doesn&apos;t direct. She observes. The laugh nobody asked for. The glance between two people. The light that lasts ten seconds. Those are the shots she&apos;s after.</p>
            <p className="text-muted-foreground leading-relaxed mb-9 text-[15px]">You&apos;re trusting someone with moments you can&apos;t repeat. Emily takes that seriously.</p>
            <a href="#contact" className="group inline-flex items-center gap-2.5 text-foreground text-xs tracking-[0.12em] uppercase font-medium">
              <span className="group-hover:[order:1]">Work with Emily</span>
              <span className="group-hover:[order:0] flex items-center"><ArrowRight size={13} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-lg mx-auto">
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-3 font-medium">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground" style={{ fontFamily: "'Lora', Georgia, serif" }}>Four steps.<br />Zero stress.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-9 left-full w-full h-px bg-border -translate-x-3 z-0 pointer-events-none" />}
                <p className="text-[3.5rem] font-medium text-muted/80 mb-4 leading-none" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.number}</p>
                <h3 className="text-base font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Ready when you are." subtext="Family session, brand shoot or special event - get in touch and we'll find a time that works. No obligation. Just a conversation." />
      </div>
    </>
  );
}
