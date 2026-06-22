import petHeroImage from "../../imports/optimized/dog-in-autumn-foliage-wearing-a-red-collar-2026-03-25-00-44-16-utc.jpg";
import petImg1 from "../../imports/optimized/happy-young-woman-spending-time-with-lovely-spotte-2026-01-05-04-49-04-utc.jpg";
import petImg2 from "../../imports/optimized/a-soft-coated-wheaten-terrier-running-through-the-2026-03-13-01-52-31-utc.jpg";
import petImg3 from "../../imports/optimized/happy-dog-standing-on-a-rock-in-nature-2026-03-24-11-37-42-utc.jpg";
import petImg4 from "../../imports/optimized/cute-puppy-sitting-alert-in-green-grass-2026-03-19-08-12-02-utc.jpg";
import { ArrowRight, Star } from "lucide-react";
import BookingCTA from "../components/BookingCTA";
import FAQAccordion from "../components/FAQAccordion";
import SEO from "../components/SEO";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pet Photographer Dubai",
  "serviceType": "Photography",
  "description": "Specialist pet photographer in Dubai. Authentic portraits capturing the bond between owners and their animals across the UAE.",
  "provider": { "@type": "LocalBusiness", "name": "EHRay Photography", "url": "https://www.ehrayphotography.com" },
  "areaServed": { "@type": "City", "name": "Dubai" },
  "url": "https://www.ehrayphotography.com/pet-photography",
};

const faqs = [
  { q: "My dog doesn't sit still. Is that a problem?", a: "Not at all - it's actually an advantage. Action shots, mid-run portraits and spontaneous moments often make for more compelling images than a perfect sit-stay. Emily is experienced working with high-energy animals." },
  { q: "Can I be in the photographs too?", a: "Absolutely. Many of the most powerful pet portraits include the owner - the bond between you is the real subject. Just let us know when you enquire." },
  { q: "What if my pet gets stressed during the session?", a: "We stop. Your pet's wellbeing is the priority. Sessions are designed to be low-pressure, and we build in plenty of breaks. If it's not working on the day, we'll reschedule at no extra cost." },
  { q: "Indoor or outdoor sessions?", a: "Both are available. Outdoor sessions in natural light tend to produce the most striking results, but indoor sessions - especially for cats - can be equally beautiful. We'll discuss what suits your animal." },
  { q: "How long is a typical session?", a: "Between 60 and 90 minutes, depending on your pet's energy level. We never rush, and we'll always follow your pet's lead on pace." },
];

const testimonials = [
  { name: "Sample pet client", role: "Draft testimonial - Dubai", text: "I've tried photographing my dog a dozen times. He never stays still. Emily had him in the most stunning shots within twenty minutes." },
  { name: "Sample pet client", role: "Draft testimonial - Abu Dhabi", text: "Those photographs are everything to us now. Emily gave us something emotional, honest and irreplaceable." },
  { name: "Sample pet client", role: "Draft testimonial - Dubai", text: "Three cats. The chaos was real. The photos are extraordinary. Emily has a patience and gentleness that animals respond to immediately." },
];

const portfolioImages = [
  { src: petImg1, alt: "Woman with her Australian Shepherd on the grass" },
  { src: petImg2, alt: "Wheaten Terrier running through a bluebell field" },
  { src: petImg3, alt: "Dog standing on a rock with mountain backdrop" },
  { src: petImg4, alt: "German Shepherd puppy sitting alert in green grass" },
];

const steps = [
  { number: "01", title: "Tell us about them", desc: "A short call before your session. Breed, temperament, what they love, what stresses them. The more we know, the better we can plan." },
  { number: "02", title: "Choose the right location", desc: "We'll suggest spots that suit your pet's personality. High-energy dogs love open space. Cats often do best at home. We adapt." },
  { number: "03", title: "Play-led session", desc: "No posing, no commands. We let your pet move freely and capture the moments as they happen. Sessions are unhurried." },
  { number: "04", title: "Gallery in 10 days", desc: "Draft structure: a curated selection of your best images delivered to an online gallery within 10 days, ready to download and print." },
];

export default function PetPhotography() {
  return (
    <>
      <SEO
        title="Pet Photographer Dubai | Specialist Pet Photography UAE | EHRay Photography"
        description="Specialist pet photographer in Dubai. Authentic portraits capturing the bond between you and your animal. Dogs, cats and all pets. Serving the UAE."
        keywords="Pet Photographer Dubai, Pet Photography Dubai, Pet Photoshoot Dubai, Dog Photographer Dubai, Cat Photographer Dubai"
        canonical="https://www.ehrayphotography.com/pet-photography"
        schema={pageSchema}
      />
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[580px] overflow-hidden bg-muted pt-[72px]">
        <img src={petHeroImage} alt="Dog in autumn foliage with red collar - EHRay Pet Photography UAE" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 w-full">
          <div>
            <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 font-medium">EHRay Photography &nbsp;·&nbsp; Pet Photography</p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] max-w-2xl mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>
              Your pet isn&apos;t a prop.<br />They&apos;re the point.
            </h1>
            <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">Specialist pet photography across the UAE. Built around the bond - not the backdrop.</p>
            <a href="#contact" className="group inline-flex items-center gap-[18px] pl-8 pr-3.5 py-3.5 bg-white text-black text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:bg-white/90 transition-colors duration-500">
              <span className="group-hover:[order:1]">Book a Pet Session</span>
              <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-6 font-medium">Our Philosophy</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-6 max-w-2xl leading-tight" style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Most pet photos miss<br />what makes your animal yours.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-14 max-w-2xl">A golden retriever sitting perfectly still on a white background is a stock photo. Your golden retriever - bounding across the sand at you, or curled beside you in the evening light - is a portrait.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "We read the animal", body: "Every session starts with letting your pet explore. No commands, no marks on the floor. We work with their energy, not despite it." },
              { title: "Location is everything", body: "We choose environments that bring out your pet's character. Beach, park, garden or home - wherever they're most themselves." },
              { title: "The bond is the subject", body: "The best pet portraits aren't just of the animal. They're of the relationship. You in the frame, or just out of it - but always present." },
            ].map(p => (
              <div key={p.title} className="bg-card rounded-3xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{p.title}</h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Pet Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Recent sessions.</h2>
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map(img => (
              <div key={img.alt} className="rounded-3xl overflow-hidden bg-muted group relative aspect-square">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Process */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-16" style={{ fontFamily: "'Lora', Georgia, serif" }}>A session built around your pet.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(step => (
              <div key={step.number}>
                <p className="text-[3rem] font-medium text-muted/70 mb-4 leading-none" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.number}</p>
                <h3 className="text-base font-medium text-foreground mb-3" style={{ fontFamily: "'Lora', Georgia, serif" }}>{step.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-muted-foreground text-[10px] tracking-[0.35em] uppercase mb-4 font-medium">Sample Client Stories</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4" style={{ fontFamily: "'Lora', Georgia, serif" }}>In their owners&apos; words.</h2>
          <p className="text-muted-foreground text-sm mb-14 max-w-xl leading-relaxed">Draft testimonial examples for client review. Replace with verified pet-session quotes before launch.</p>
          <div className="grid md:grid-cols-3 gap-5">
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
          <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-14" style={{ fontFamily: "'Lora', Georgia, serif" }}>Common questions.</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <div id="contact">
        <BookingCTA headline="Let&apos;s photograph your animal." subtext="Spaces are limited each month. Get in touch to check availability and discuss what you have in mind." sessionType="Pet Photography" />
      </div>
    </>
  );
}
