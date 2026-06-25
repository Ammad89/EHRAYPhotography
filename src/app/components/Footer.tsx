import { Link } from "react-router";
import { getActiveSite } from "../../theme-engine";

export default function Footer() {
  const site = getActiveSite();
  const serviceLinks = site.navigation.services;
  const primaryLinks = site.navigation.primary;
  const whatsappUrl = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : "#";

  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img
            src={site.brand.logo}
            alt={`${site.brand.name} logo`}
            className="h-14 w-auto object-contain mb-4"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-background/40 text-sm leading-relaxed">
            {site.footer.description}
          </p>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {primaryLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="text-background/55 text-sm hover:text-background transition-colors duration-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Services</p>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map(link => (
              <li key={link.href}>
                <Link to={link.href} className="text-background/55 text-sm hover:text-background transition-colors duration-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-background/35 text-[10px] tracking-[0.25em] uppercase mb-5">Contact</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="text-background/55">{site.contact.address}</li>
            <li>
              <a href={`tel:${site.contact.phone}`} className="text-background/55 hover:text-background transition-colors duration-500">
                {site.contact.phoneDisplay || site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="text-background/55 hover:text-background transition-colors duration-500">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-background/55 hover:text-background transition-colors duration-500">
                WhatsApp Enquiries
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-background/25 text-xs">{site.footer.copyright}</p>
        <p className="text-background/20 text-xs">
          {site.footer.seoLine}
        </p>
      </div>
    </footer>
  );
}
