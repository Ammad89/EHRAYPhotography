# Rendering Engine

Renderers convert structured data into user-facing UI.

Current renderers:
- ServicePageRenderer
- PortfolioRenderer
- AboutRenderer
- ContactRenderer

Future renderers:
- HomeRenderer
- GenericPageRenderer
- SectionRenderer


## Universal Section Rendering

Build 62 introduced the first universal section renderer.

Current section renderers:
- HeroSectionRenderer

SectionRenderer now routes section.type values to the correct renderer.

Unsupported section types render a safe placeholder.


## GenericPageRenderer

Build 63 introduced GenericPageRenderer.

GenericPageRenderer converts a WebsiteSchema PageDefinition into a rendered page by:
1. Reading SEO metadata
2. Sorting visible sections
3. Passing each section to SectionRenderer
4. Rendering an empty-page placeholder when no sections exist

This is the foundation for CMS-created pages.
