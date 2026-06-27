# Components Reference

Current important components:
- Nav
- Footer
- BookingCTA
- SEO
- FAQAccordion

Current important renderers:
- ServicePageRenderer
- PortfolioRenderer
- AboutRenderer
- ContactRenderer


## Universal Section Components

### HeroSectionRenderer

Renders WebsiteSchema hero sections.

### SectionRenderer

Routes PageSection records to the matching section renderer.


## GenericPageRenderer

Renders a WebsiteSchema PageDefinition.

Inputs:
- page: PageDefinition

Responsibilities:
- SEO
- Section ordering
- Section rendering
- Empty page fallback
