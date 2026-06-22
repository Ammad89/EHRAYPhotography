import { ArrowRight, Star } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Photographer Dubai",
  "serviceType": "Photography",
  "description": "Intimate documentary wedding photographer in Dubai and the UAE. Natural light only, no staging. Available internationally. Indicative coverage from AED 6,500.",
  "provider": { "@type": "LocalBusiness", "name": "EHRay Photography", "url": "https://www.ehrayphotography.com" },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "url": "https://www.ehrayphotography.com/wedding-photography",
};

const faqs = [
  { q: "Do you work with a second photographer?", a: "For larger weddings (100+ guests), we recommend a second shooter. This can be arranged and quoted separately. For intimate weddings and elopements, one photographer is almost always sufficient." },
  { q: "Will you travel internationally?", a: "Yes. Emily is available for destination weddings worldwide. Travel and accommodation costs are agreed at enquiry stage and added to the package." },
  { q: "Can we have an engagement session first?", a: "Yes - and we encourage it. An engagement session gives you a chance to understand how Emily works and feel comfortable in front of the camera before your wedding day. It can be added to any wedding package." },
  { q: "How far in advance should we book?", a: "As early as possible. Wedding dates fill up significantly in advance, particularly for autumn and spring. Some couples book 12–18 months ahead." },
  { q: "What if you're unavailable on our date?", a: "Get in touch anyway. We may be able to recommend a trusted photographer whose style aligns with ours, and who we'd be comfortable handing you to." },
];

const testimonials = [
  { name: "Sample wedding couple", role: "Draft testimonial - Dubai", text: "We nearly chose someone else because they were 'bigger.' We're so glad we didn't. Emily was invisible during the ceremony - and the photographs are extraordinary. Every real moment, caught." },
  { name: "Sample wedding couple", role: "Draft testimonial - Abu Dhabi", text: "We wanted photographs that looked like our wedding, not a wedding. That's exactly what we got. No staged shots, no lighting setup, no instructions. Just our day, beautifully documented." },
];

const included = [
  "Full day coverage (ceremony to first dance)",
  "One photographer, natural light only",
  "400+ individually edited images",
  "Online gallery with full download access",
  "Print release included",
  "International travel available",
  "Delivery within 21 days",
  "Engagement session available as add-on",
];

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=900&fit=crop&auto=format", alt: "Wedding couple intimate portrait" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&h=900&fit=crop&auto=format", alt: "Wedding ceremony moment" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&h=900&fit=crop&auto=format", alt: "Bride preparation" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&h=900&fit=crop&auto=format", alt: "Wedding reception" },
];

export default function WeddingPhotography() {
  return (
    <>
      <SEO
        title="Wedding Photographer Dubai | Intimate Documentary Wedding Photography | EHRay"
        description="Intimate documentary wedding photographer in Dubai. Natural light only, no staging. Available across the UAE and internationally. Indicative coverage from AED 6,500."
        keywords="Wedding Photographer Dubai, Wedding Photography Dubai, Documentary Wedding Photographer UAE, Natural Light Wedding Photography"
        canonical="https://www.ehrayphotography.com/wedding-photography"
        schema={pageSchema}
      />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden bg-muted pt-[72px]">
        <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&h=1100&fit=crop&auto=format" alt="Wedding photography - EHRay Photography UAE" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 w-full">
          <div>
            <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">EHRay Photography &nbsp;·&nbsp; Wedding Photography</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Your wedding,<br />told as a story.
            </h1>
            <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">Intimate, documentary wedding photography across the UAE and internationally. No posing. No staging. Just your day, honestly recorded.</p>
            <a href="#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
              <span className="group-hover:[order:1]">Enquire About Availability</span>
              <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-8 leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Not a production.<br />A presence.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">We don&apos;t work with lighting rigs, large teams or rigid shot lists. We work with one photographer, natural light and an instinct for the moment.</p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">EHRay Photography is not a luxury wedding studio. We&apos;re for couples who value intimacy over spectacle - who want their wedding day documented with honesty and quiet craft.</p>
            <p className="text-muted-foreground leading-relaxed mb-0 text-[15px]">If you&apos;re looking for dramatic editorial compositions and a team of ten, we&apos;ll happily recommend someone who does that well. If you want real photographs of your real day - we&apos;d love to talk.</p>
          </div>
          <div className="rounded-3xl overflow-hidden bg-muted" style={{ aspectRatio: "3/4" }}>
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&h=900&fit=crop&auto=format" alt="Intimate wedding ceremony moment" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Wedding Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>A selection from recent weddings.</h2>
          <p className="text-muted-foreground text-[15px] mb-14">All images shot in natural light, without flash.</p>
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map(img => (
              <div key={img.alt} className="rounded-3xl overflow-hidden bg-muted group relative" style={{ aspectRatio: "3/4" }}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">What&apos;s Included</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>One package. Everything you need.</h2>
          <p className="text-muted-foreground text-[15px] mb-14">Draft single-package structure for client review. Final coverage, delivery and pricing should be confirmed by EHRay before launch.</p>
          <div className="bg-card rounded-3xl p-10 max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {included.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-none" />
                  <span className="text-foreground text-[14px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase mb-2 font-medium">Investment</p>
              <p className="text-4xl font-medium text-foreground" style={{ fontFamily: "'Lora', Georgia, serif" }}>Indicative AED 6,500</p>
              <p className="text-muted-foreground text-sm mt-3 italic">Draft pricing anchor. Availability is limited. Enquire early to avoid disappointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Sample Couple Feedback</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>Their words.</h2>
          <p className="text-muted-foreground text-sm mb-14 max-w-xl leading-relaxed">Draft testimonial examples for client review. Replace with verified couple feedback before launch.</p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {testimonials.map((t, index) => (
              <div key={`${t.role}-${index}`} className="bg-background rounded-3xl p-8 flex flex-col">
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
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">FAQs</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Questions from couples.</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Tell us about your day." subtext="Every wedding is different. Reach out with your date, location and a sense of what matters most - and we'll take it from there." sessionType="Wedding Photography" />
      </div>
    </>
  );
}
