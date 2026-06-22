import eventHeroImage from "../../imports/optimized/celebrating-together-at-an-office-new-year-s-party-2026-01-09-09-10-33-utc.jpg";
import eventImg1 from "../../imports/optimized/smiling-people-celebrating-new-year-s-eve-with-spa-2026-03-24-09-00-03-utc.jpg";
import eventImg2 from "../../imports/optimized/friends-celebrate-new-year-s-eve-with-sparklers-2026-03-24-07-23-58-utc.jpg";
import eventImg3 from "../../imports/optimized/celebratory-evening-couple-cheers-with-champagne-2026-03-24-05-10-35-utc.jpg";
import eventImg4 from "../../imports/optimized/friends-celebrating-with-champagne-on-yellow-backg-2026-03-17-08-58-10-utc.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Event Photographer Dubai",
  "serviceType": "Photography",
  "description": "Corporate, private and community event photographer in Dubai and across the UAE. Reliable, professional, 7-day delivery.",
  "provider": { "@type": "LocalBusiness", "name": "EHRay Photography", "url": "https://www.ehrayphotography.com" },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "url": "https://www.ehrayphotography.com/event-photography",
};

const eventTypes = [
  {
    title: "Corporate Events",
    examples: "Conferences · Product launches · Award ceremonies · Team days · Media events",
    body: "We arrive briefed, work efficiently without disrupting proceedings, and deliver a complete record of your event with the professionalism your brand demands.",
  },
  {
    title: "Private Events",
    examples: "Milestone birthdays · Anniversaries · Engagement parties · Farewell gatherings",
    body: "Private events deserve the same quality of coverage as corporate ones. We work discreetly and deliver images that honour the occasion and the people in it.",
  },
  {
    title: "Community Events",
    examples: "Cultural celebrations · Charity fundraisers · Public gatherings · Sports events",
    body: "Community events are often the richest in human moments. We bring a documentary eye to every gathering - large or small.",
  },
];

const process = [
  { number: "01", title: "Brief", desc: "We discuss the event format, key moments, guests and deliverables. Every event is different - we plan accordingly." },
  { number: "02", title: "Location visit", desc: "For larger events, we walk the venue in advance to understand light, layout and the best positions for key moments." },
  { number: "03", title: "Day coverage", desc: "We arrive early, work quietly and professionally throughout, and stay until the brief is complete." },
  { number: "04", title: "Editing", desc: "Every image is individually edited to a consistent, clean standard. No heavy filters. No artificial processing." },
  { number: "05", title: "Delivery", desc: "Draft structure: your gallery is delivered within 7 days. Corporate clients receive a commercial licence as standard." },
];

const included = [
  "Pre-event briefing call",
  "Arrival 30 minutes before start",
  "Full event coverage - no gaps",
  "Individual image editing",
  "Online gallery delivery",
  "Commercial usage licence",
  "High-resolution downloads",
  "7-day turnaround (rush available)",
];

const portfolioImages = [
  { src: eventImg1, alt: "Group celebrating New Year with sparklers" },
  { src: eventImg2, alt: "Friends raising sparklers at a New Year event" },
  { src: eventImg3, alt: "Couple toasting champagne at an evening celebration" },
  { src: eventImg4, alt: "Friends celebrating with champagne and confetti" },
];

export default function EventPhotography() {
  return (
    <>
      <SEO
        title="Event Photographer Dubai | Corporate Event Photography UAE | EHRay Photography"
        description="Event photographer in Dubai covering corporate, private and community events across the UAE. Reliable, professional, 7-day delivery. Enquire today."
        keywords="Event Photographer Dubai, Corporate Event Photographer Dubai, Event Photography UAE, Corporate Photographer Dubai"
        canonical="https://www.ehrayphotography.com/event-photography"
        schema={pageSchema}
      />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden bg-muted pt-[72px]">
        <img src={eventHeroImage} alt="Office celebration party - EHRay Event Photography UAE" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 w-full">
          <div>
            <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">EHRay Photography &nbsp;·&nbsp; Event Photography</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              The moments that make<br />an event worth remembering.
            </h1>
            <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">Corporate, private and community event photography across the UAE. Reliable, professional, precise.</p>
            <a href="#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
              <span className="group-hover:[order:1]">Book Event Coverage</span>
              <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">What We Cover</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14 max-w-2xl leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Every kind of event.<br />The same standard of care.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {eventTypes.map(e => (
              <div key={e.title} className="bg-card rounded-3xl p-8">
                <h3 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{e.title}</h3>
                <p className="text-muted-foreground text-xs tracking-wide mb-4 leading-relaxed">{e.examples}</p>
                <p className="text-muted-foreground text-[14px] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Event Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Recent events covered.</h2>
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map(img => (
              <div key={img.alt} className="rounded-3xl overflow-hidden bg-muted group relative" style={{ aspectRatio: "16/10" }}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-16" style={{ fontFamily: "'Lora', Georgia, serif" }}>From brief to delivery.<br />Five steps.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map(step => (
              <div key={step.number}>
                <p className="text-[2.5rem] font-medium text-muted/70 mb-4 leading-none" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.number}</p>
                <h3 className="text-base font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Sample Package Includes</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>No surprises. No extras.</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-xl leading-relaxed">Draft deliverables for client review. Final usage rights and turnaround should be confirmed before launch.</p>
          <div className="bg-background rounded-3xl p-10 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-foreground flex-none" />
                  <span className="text-foreground text-[14px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Planning an event?" subtext="Get in touch with your event date, type and scale. We'll confirm availability and put together a coverage proposal." sessionType="Event Photography" />
      </div>
    </>
  );
}
