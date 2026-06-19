import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "Family Photography", path: "/family-photography" },
  { label: "Pet Photography", path: "/pet-photography" },
  { label: "Personal Branding", path: "/personal-branding" },
  { label: "Event Photography", path: "/event-photography" },
  { label: "Wedding Photography", path: "/wedding-photography" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

        <Link to="/" aria-label="EHRoy Photography - Home" className="flex-none">
          <img
            src="https://static.wixstatic.com/media/7cfb53_8c7fcb8badd6496dbd89b9ca004f575d~mv2.png"
            alt="EHRoy Photography logo"
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center">
          <li>
            <Link to="/portfolio" className="group relative inline-flex items-center px-[18px] py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500">
              Portfolio
              <span className="absolute bottom-0 left-[18px] right-[18px] h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="relative group">
            <button className="relative inline-flex items-center gap-1.5 px-[18px] py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500">
              Services
              <ChevronDown size={13} className="transition-transform duration-500 group-hover:rotate-180" />
              <span className="absolute bottom-0 left-[18px] right-[18px] h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </button>
            <div className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 bg-background border border-border rounded-2xl shadow-xl p-2 min-w-[220px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
              {serviceLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <a href="/#about" className="group relative inline-flex items-center px-[18px] py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500">
              About
              <span className="absolute bottom-0 left-[18px] right-[18px] h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          </li>
          <li>
            <a href="/#contact" className="group relative inline-flex items-center px-[18px] py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500">
              Contact
              <span className="absolute bottom-0 left-[18px] right-[18px] h-px bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="group hidden md:inline-flex items-center gap-[18px] h-10 pl-6 pr-3.5 bg-primary text-primary-foreground text-xs tracking-[0.12em] uppercase font-medium rounded-full hover:opacity-80 transition-opacity duration-500"
          >
            <span className="group-hover:[order:1]">Book a Consultation</span>
            <span className="group-hover:[order:0] flex items-center justify-center w-5 h-5">
              <ArrowRight size={14} />
            </span>
          </a>
          <button
            className="md:hidden text-foreground p-2 rounded-full hover:bg-muted transition-colors duration-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-1">
          <Link to="/portfolio" className="px-[18px] py-2 text-base text-muted-foreground hover:text-foreground transition-colors rounded-full" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Link>

          <div>
            <button
              className="w-full text-left px-[18px] py-2 text-base text-muted-foreground hover:text-foreground flex items-center justify-between transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown size={15} className={`transition-transform duration-500 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-0.5 mt-1">
                {serviceLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-[18px] py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="/#about" className="px-[18px] py-2 text-base text-muted-foreground hover:text-foreground transition-colors rounded-full" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/#contact" className="px-[18px] py-2 text-base text-muted-foreground hover:text-foreground transition-colors rounded-full" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="/#contact"
            className="mt-4 inline-flex items-center justify-between gap-[18px] h-10 pl-6 pr-3.5 bg-primary text-primary-foreground text-xs tracking-[0.12em] uppercase font-medium rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            <span>Book a Consultation</span>
            <span className="flex items-center justify-center w-5 h-5"><ArrowRight size={14} /></span>
          </a>
        </div>
      )}
    </header>
  );
}
