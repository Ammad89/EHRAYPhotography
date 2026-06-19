import { Link } from "react-router";

const serviceLinks = [
  { label: "Family Photography", path: "/family-photography" },
  { label: "Pet Photography", path: "/pet-photography" },
  { label: "Personal Branding", path: "/personal-branding" },
  { label: "Event Photography", path: "/event-photography" },
  { label: "Wedding Photography", path: "/wedding-photography" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img
            src="https://static.wixstatic.com/media/7cfb53_8c7fcb8badd6496dbd89b9ca004f575d~mv2.png"
            alt="EHRoy Photography logo"
            className="h-14 w-auto object-contain mb-4"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-background/40 text-sm leading-relaxed">
            Natural light and authentic lifestyle photography across the UAE.
          </p>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            <li><a href="/#portfolio" className="text-background/55 text-sm hover:text-background transition-colors duration-500">Portfolio</a></li>
            <li><a href="/#about" className="text-background/55 text-sm hover:text-background transition-colors duration-500">About</a></li>
            <li><a href="/#contact" className="text-background/55 text-sm hover:text-background transition-colors duration-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Services</p>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-background/55 text-sm hover:text-background transition-colors duration-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Contact</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="text-background/55">Dubai, United Arab Emirates</li>
            <li>
              <a href="tel:+971569358629" className="text-background/55 hover:text-background transition-colors duration-500">
                +971 (0)56 935 8629
              </a>
            </li>
            <li>
              <a href="https://wa.me/971569358629" target="_blank" rel="noopener noreferrer" className="text-background/55 hover:text-background transition-colors duration-500">
                WhatsApp Enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-background/25 text-xs">© 2026 EHRoy Photography. Website Design by Eight Nine Global.</p>
        <p className="text-background/20 text-xs">
          Family Photographer Dubai &nbsp;·&nbsp; Pet Photographer UAE &nbsp;·&nbsp; Personal Branding Dubai
        </p>
      </div>
    </footer>
  );
}
