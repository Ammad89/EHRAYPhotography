import brandingHeroImage from "../../imports/japanese-woman-in-office-portrait-2026-03-09-05-22-48-utc.jpg";
import brandingImg1 from "../../imports/athletic-woman-crouches-on-bridge-in-activewear-2026-03-25-07-26-56-utc.jpg";
import brandingImg2 from "../../imports/jumping-hurdler-top-view-2026-01-05-05-51-32-utc.jpg";
import brandingImg3 from "../../imports/young-woman-doing-gymnastics-top-view-2026-03-09-06-04-47-utc.jpg";
import brandingImg4 from "../../imports/young-woman-in-a-lake-rubbing-her-eyes-2026-03-09-05-46-08-utc.jpg";
import { ArrowRight, Check } from "lucide-react";
import { Star } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Personal Branding Photographer Dubai",
  "serviceType": "Photography",
  "description": "Personal branding photography for entrepreneurs, coaches and business owners in Dubai and the UAE. From AED 1,500.",
  "provider": { "@type": "LocalBusiness", "name": "EHRoy Photography", "url": "https://www.ehrayphotography.com" },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "url": "https://www.ehrayphotography.com/personal-branding",
};

const faqs = [
  { q: "Do I need to know how to pose?", a: "No. Emily will guide you through natural movements and expressions that don't look posed. Most clients are surprised at how relaxed the process feels." },
  { q: "What should I wear?", a: "Clothing that reflects how you want to be perceived professionally - but that you also feel completely comfortable in. Emily will discuss wardrobe options on your pre-session call." },
  { q: "Can we shoot in my office or workplace?", a: "Yes. Familiar environments often produce the most authentic results. Emily will assess the space and lighting in advance to ensure the best outcome." },
  { q: "How many images will I receive?", a: "Packages are clearly outlined above. All images are individually edited and delivered at full resolution with full commercial usage rights." },
  { q: "How quickly will I receive my images?", a: "Standard turnaround is 10–14 days. Executive packages include priority turnaround of 5–7 days. Rush delivery can be arranged for an additional fee." },
];

const packages = [
  { name: "Starter", price: "From AED 1,500", details: ["1 hour", "1 outfit", "1 location", "20+ edited images", "Full commercial licence", "Online gallery"], note: "For: Freelancers and early-stage professionals", featured: false },
  { name: "Professional", price: "From AED 2,200", details: ["2 hours", "2 outfits", "1 location", "40+ edited images", "Styling guidance included", "Full commercial licence", "Online gallery"], note: "For: Coaches, consultants, business owners", featured: true },
  { name: "Executive", price: "From AED 3,800", details: ["Half day", "4 outfits", "2 locations", "80+ edited images", "Priority turnaround (5–7 days)", "Social media crop set included", "Full commercial licence"], note: "For: Senior professionals, speakers, C-suite", featured: false },
];

const industries = ["Consulting", "Real Estate", "Legal", "Finance", "Healthcare & Wellness", "Coaching", "Technology", "Hospitality"];

const testimonials = [
  { name: "Layla Osman", role: "Brand Strategist, Dubai", text: "My brand presence changed overnight. Clients now comment on my photos before anything else. The enquiry rate from LinkedIn doubled within a month of updating my profile." },
  { name: "James Whitfield", role: "Executive Coach, Abu Dhabi", text: "I'd been putting it off for two years. Thirty minutes into the session I understood why I should have done it years ago. Emily made it effortless." },
  { name: "Nadia Al-Rashidi", role: "Real Estate Consultant, Dubai", text: "The investment paid for itself within the first week. Two clients mentioned my photograph as the reason they reached out. That doesn't happen with a selfie." },
];

const portfolioImages = [
  { src: brandingImg1, alt: "Woman in activewear crouching on a bridge" },
  { src: brandingImg2, alt: "Aerial view of athlete jumping a hurdle" },
  { src: brandingImg3, alt: "Top-down view of gymnast on dark floor" },
  { src: brandingImg4, alt: "Woman emerging from a lake in mountain light" },
];

export default function PersonalBranding() {
  return (
    <>
      <SEO
        title="Personal Branding Photographer Dubai | Professional Headshots UAE | EHRoy"
        description="Personal branding photographer in Dubai for entrepreneurs, coaches and business owners. Professional imagery that builds trust. From AED 1,500."
        keywords="Personal Branding Photographer Dubai, Professional Headshots Dubai, Personal Branding Photography UAE, Professional Photographer UAE"
        canonical="https://www.ehrayphotography.com/personal-branding"
        schema={pageSchema}
      />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden bg-muted pt-[72px]">
        <img src={brandingHeroImage} alt="Professional woman portrait in office - EHRoy Personal Branding Photography UAE" className="absolute inset-0 w-full h-full object-cover object-[center_35%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 w-full">
          <div>
            <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">EHRoy Photography &nbsp;·&nbsp; Personal Branding</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Be seen the way<br />you deserve to be seen.
            </h1>
            <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">Personal branding photography for entrepreneurs, consultants and business owners across the UAE.</p>
            <a href="#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
              <span className="group-hover:[order:1]">Book a Consultation</span>
              <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Why It Matters</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6 max-w-2xl leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Your image is working<br />before you say a word.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-14 max-w-2xl">Before a potential client reads your bio, watches your video or checks your credentials - they've already formed an opinion based on your photograph.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { stat: "0.1 seconds", body: "The time it takes someone to form a first impression. Your photograph is often the first impression." },
              { stat: "14× more views", body: "LinkedIn profiles with professional photographs receive significantly more profile views than those without." },
              { stat: "Trust before contact", body: "Clients choose people, not companies. A confident, authentic image builds the trust that starts relationships." },
            ].map(s => (
              <div key={s.stat} className="bg-card rounded-3xl p-8 text-center">
                <p className="text-3xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>{s.stat}</p>
                <p className="text-muted-foreground text-[14px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Branding Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Clients we&apos;ve worked with.</h2>
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
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Packages</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>Invest in your professional image.</h2>
          <p className="text-muted-foreground text-[15px] mb-14 max-w-xl">All packages include full commercial usage rights, online gallery and high-resolution downloads.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map(pkg => (
              <div key={pkg.name} className={`bg-card rounded-3xl p-8 flex flex-col ${pkg.featured ? "ring-2 ring-foreground" : ""}`}>
                {pkg.featured && <span className="inline-block mb-4 px-3 py-0.5 bg-foreground text-background text-[10px] tracking-[0.15em] uppercase rounded-full self-start">Recommended</span>}
                <h3 className="text-2xl font-medium text-foreground mb-1" style={{ fontFamily: "'Lora', Georgia, serif" }}>{pkg.name}</h3>
                <p className="text-3xl font-medium text-foreground mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>{pkg.price}</p>
                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {pkg.details.map(d => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check size={14} className="text-foreground flex-none" />{d}
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

      {/* Industries */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Industries Served</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>We work across sectors.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map(ind => (
              <div key={ind} className="bg-background rounded-full px-5 py-3 text-sm font-medium text-foreground text-center border border-border hover:bg-muted transition-colors duration-500">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Client Results</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>What changed for them.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card rounded-3xl p-8 flex flex-col">
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
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">FAQs</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Questions we hear often.</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Start with a conversation." subtext="A free 20-minute discovery call to understand your brand, your goals and what the right session looks like for you." sessionType="Personal Branding" />
      </div>
    </>
  );
}
