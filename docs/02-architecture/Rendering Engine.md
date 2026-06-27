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
