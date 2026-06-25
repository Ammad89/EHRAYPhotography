# Reusable Theme Build Log

This document records the files created or edited during the rebuild of the EHRAY design into a reusable CMS-powered theme.

The goal is to preserve the current live website design while converting hardcoded text, images, links, navigation, SEO and repeatable content into editable theme content.

## Safety Rule

The client-facing live website must remain visually unchanged during this rebuild.

All reusable theme work should happen on the reusable-theme-v1 branch and should be deployed only to a separate staging subdomain until approved.

## Files

### docs/reusable-theme-build-log.md

Purpose:
Records every created or edited file, what it does, how it can be edited and why it exists.

Editing Notes:
Add a new section every time a file is created or significantly changed.


---

### src/theme-content/types.ts

Purpose

Defines the reusable data model for Theme Version 1.

This file intentionally contains no React code.

Every future client website should conform to this interface so that the rendering engine can remain identical while only the content changes.

Current Status

Foundation complete.

No existing pages have been migrated to use these types yet.


---

## Build 2: Theme Product Rebrand

Purpose

This build begins the rebrand from the original client-specific EHRAY Photography codebase into the reusable Eight Nine Web Studio theme platform.

New product name:

Eight Nine Web Studio Theme

Brand used for the first reusable theme implementation:

Eight Nine Photography

Owner and lead photographer:

Ammad Shafique

Safety Rule

This work is happening only on the reusable-theme-v1 branch.

The current client-facing EHRAY live website must remain untouched.

Scope

This phase will gradually replace client-specific naming, displayed content, SEO text, schema text and default CMS content.

Server paths such as /var/www/EHRAYPhotography will not be renamed yet to avoid deployment disruption.


---

## Build 3: Theme Package Architecture

Purpose

Creates the first reusable theme package:

Eight Nine Luxury

This theme will hold the reusable data schema, default content, settings and rendering logic for the Eight Nine Web Studio Theme platform.

Files

### src/themes/eight-nine-luxury/types.ts

Purpose:
Defines the editable content structure for the Eight Nine Luxury theme.

This file describes what content a client website can customize without changing the design code.

Editing Notes:
Add new interfaces here only when the theme needs new editable content fields.

Do not place React components or styling logic in this file.

Architectural Decision:
Theme-specific content types live inside the theme package instead of a global theme-content folder. This allows future themes to have their own schema while sharing the same platform.

---

## Build 4: Eight Nine Luxury Theme Definition

Purpose

Creates the first complete theme definition for the Eight Nine Web Studio Theme platform.

Files

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Exports the first default content object for the reusable Eight Nine Luxury theme.

This file is the starting point for converting hardcoded page content into reusable theme data.

Editing Notes:
Change client-specific copy, navigation labels, service titles, testimonials, SEO values and default content here.

Current Limitations:
Image values are currently stored as filenames or empty strings. They will later be connected to the asset resolver or CMS media library.

Safety:
This file is not yet consumed by the live homepage, so it does not alter the public website view.

---

## Build 5: Eight Nine Luxury Asset Resolver

Purpose

Adds an asset resolver for the Eight Nine Luxury theme.

Files

### src/themes/eight-nine-luxury/assets.ts

Purpose:
Maps stable theme asset keys to imported optimized image files.

This allows theme content to reference images by key or filename while the rendering components receive real image URLs.

Editing Notes:
Add new local theme images to eightNineLuxuryAssets.

If a value is already a full URL, the resolver returns it as-is when no local asset match exists.

Architectural Decision:
Theme content should not import images directly. Content stores image identifiers. The asset resolver converts those identifiers into usable image URLs.

Safety:
This file is not yet consumed by the public homepage, so it does not alter the current website view.

---

## Build 6: Eight Nine Luxury Theme Public API

Purpose

Adds a single public entry point for the Eight Nine Luxury theme package.

Files

### src/themes/eight-nine-luxury/index.ts

Purpose:
Exports the theme definition, asset resolver and theme content types from one location.

Editing Notes:
When adding new theme helpers, export them here so consuming pages do not need to know the internal file structure of the theme package.

Architectural Decision:
Pages and CMS tools should import from the theme package index instead of importing directly from theme.ts, assets.ts or types.ts. This makes future refactors safer.

Safety:
This file does not alter current rendering. It only creates a cleaner import path for future builds.

---

## Build 7: Home Hero Theme Data Migration

Purpose

Migrates the Home page hero content source from hardcoded values to the Eight Nine Luxury theme definition.

Files Modified

### src/app/pages/Home.tsx

Purpose:
The visual homepage remains the same, but the hero section now reads its editable content from eightNineLuxuryTheme.

Fields now sourced from theme:
- hero.eyebrow
- hero.heading
- hero.description
- hero.primaryButtonText
- hero.primaryButtonLink
- hero.secondaryButtonText
- hero.secondaryButtonLink
- hero.backgroundImage

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Acts as the source of truth for the hero content.

### src/themes/eight-nine-luxury/assets.ts

Purpose:
Resolves the hero background image key into the optimized imported image asset.

Safety:
The visual layout, classes, spacing, animation behavior and section structure remain unchanged.

---

## Build 8: Home Stats Theme Data Migration

Purpose

Migrates the Home page stats section from hardcoded inline values to the Eight Nine Luxury theme definition.

Files Modified

### src/app/pages/Home.tsx

Purpose:
The stats section now reads from theme.stats.

Fields now sourced from theme:
- stats[].value
- stats[].label

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Acts as the source of truth for homepage statistics.

Safety:
The visual layout, styling, grid behavior and animation behavior remain unchanged.

---

## Build 9: Home Portfolio Theme Data Migration

Purpose

Migrates the Home page portfolio cards from hardcoded local data to the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds description to ThemePortfolioItem because the live portfolio card design includes hover description text.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds portfolio descriptions to the reusable theme data.

### src/app/pages/Home.tsx

Purpose:
Removes the local portfolio array and reads portfolio items from theme.portfolio.

Fields now sourced from theme:
- portfolio[].title
- portfolio[].href
- portfolio[].image
- portfolio[].description

Safety:
The portfolio card layout, hover animation, grid, styling and aspect ratio remain unchanged.

---

## Build 10: Home Testimonials Theme Data Migration

Purpose

Migrates the Home page testimonials from hardcoded local data to the Eight Nine Luxury theme definition.

Files Modified

### src/app/pages/Home.tsx

Purpose:
Removes the local testimonials array and reads testimonial cards from theme.testimonials.

Fields now sourced from theme:
- testimonials[].quote
- testimonials[].author
- testimonials[].role

Current Limitation:
The rating remains fixed at 5 stars in the renderer because ThemeTestimonial does not yet include a rating field.

Safety:
The testimonial card layout, styling, star display and grid remain unchanged.

---

## Build 11: Home Services Theme Data Migration

Purpose

Migrates the Home page services section from hardcoded local data to the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds href and optional tag to ThemeService so the service cards can preserve their existing live behavior and badge support.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds service links and the Most popular tag to theme.services.

### src/app/pages/Home.tsx

Purpose:
Removes the local services array and reads service cards from theme.services.

Fields now sourced from theme:
- services[].title
- services[].description
- services[].href
- services[].tag

Safety:
The services grid, card design, badge design, CTA link styling and hover behavior remain unchanged.

---

## Build 12: Home Process Theme Data Migration

Purpose

Migrates the Home page How It Works section from hardcoded local data to the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds number to ThemeProcessStep so the process section can preserve its current visual numbering.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds process step numbers to theme.process.

### src/app/pages/Home.tsx

Purpose:
Removes the local steps array and reads process steps from theme.process.

Fields now sourced from theme:
- process[].number
- process[].title
- process[].description

Safety:
The process section layout, step connector line, typography and spacing remain unchanged.

---

## Build 13: Home Philosophy Theme Data Migration

Purpose

Migrates the Home page Philosophy section from hardcoded text into the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds ThemePhilosophy for homepage philosophy copy, CTA and quote content.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds theme.philosophy with Eight Nine Photography and Ammad Shafique content.

### src/app/pages/Home.tsx

Purpose:
Replaces hardcoded Philosophy text, CTA and quote with theme.philosophy values.

Fields now sourced from theme:
- philosophy.eyebrow
- philosophy.heading
- philosophy.paragraphs
- philosophy.buttonText
- philosophy.buttonLink
- philosophy.quote
- philosophy.quoteAuthor

Safety:
The section layout, dark overlay, typography, quote styling and spacing remain unchanged.

---

## Build 14: Home About Theme Data Migration

Purpose

Migrates the Home page About section from hardcoded Ammad or legacy Emily content into the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds ThemeAbout for the reusable theme biography/about section.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds theme.about with Eight Nine Photography and Ammad Shafique content.

### src/app/pages/Home.tsx

Purpose:
Replaces hardcoded About copy, CTA and image metadata with theme.about values.

Fields now sourced from theme:
- about.eyebrow
- about.heading
- about.paragraphs
- about.buttonText
- about.buttonLink
- about.image
- about.imageAlt

Safety:
The About section layout, responsive order, image ratio, typography and CTA styling remain unchanged.

---

## Build 15: Home Booking CTA Theme Data Migration

Purpose

Migrates the Home page Booking CTA content into the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds ThemeBookingCta for the reusable theme contact CTA section.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds theme.bookingCta with default Eight Nine Photography CTA content.

### src/app/pages/Home.tsx

Purpose:
Replaces hardcoded BookingCTA headline and subtext with theme.bookingCta values.

Fields now sourced from theme:
- bookingCta.headline
- bookingCta.subtext

Safety:
The BookingCTA component, form behavior, layout, styling and contact section anchor remain unchanged.

---

## Build 16: Home SEO Theme Data Migration

Purpose

Migrates Home page SEO title, description and keywords into the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Updates theme.seo to hold the reusable homepage SEO values.

### src/app/pages/Home.tsx

Purpose:
SEO component now reads title, description and keywords from theme.seo. LocalBusiness schema now reads brand name and description from theme data.

Fields now sourced from theme:
- seo.title
- seo.description
- seo.keywords
- brand.name

Safety:
This does not change layout or visible page design.

---

## Build 17: Home Legacy Brand Cleanup

Purpose

Removes remaining visible EHRay wording from the migrated Home page content.

Files Modified

### src/app/pages/Home.tsx

Purpose:
Updates the testimonial helper copy from EHRay-specific wording to Eight Nine Photography wording.

Remaining Notes:
The old ehrayphotography.com canonical and schema URL references remain temporarily. These will later move into the theme SEO/domain settings layer.

Safety:
No layout, styling or behavior changed.

---

## Build 18: Home Domain SEO Theme Migration

Purpose

Moves the remaining Home page domain, canonical and schema URL references into the Eight Nine Luxury theme definition.

Files Modified

### src/themes/eight-nine-luxury/types.ts

Purpose:
Adds siteUrl, canonicalUrl and schemaId to ThemeSeo.

### src/themes/eight-nine-luxury/theme.ts

Purpose:
Adds default Eight Nine Photography domain values to theme.seo.

### src/app/pages/Home.tsx

Purpose:
Removes hardcoded ehrayphotography.com references from Home schema and SEO canonical props.

Fields now sourced from theme:
- seo.siteUrl
- seo.canonicalUrl
- seo.schemaId

Safety:
No visible layout, styling or behavior changed.

---

## Build 19: Theme Engine Foundation

Purpose

Introduces the first Theme Engine layer for the Eight Nine Web Studio Theme platform.

Files Created

### src/theme-engine/active-theme.ts

Purpose:
Defines the active theme used by the application.

Currently returns the Eight Nine Luxury theme directly, but this layer will later support per-site theme selection, domain-based theme loading and CMS-published theme overrides.

Exports:
- getActiveTheme()
- resolveThemeAsset()

### src/theme-engine/index.ts

Purpose:
Provides a clean public API for the theme engine.

Files Modified

### src/app/pages/Home.tsx

Purpose:
Updates Home to read the active theme through the theme engine instead of importing the Eight Nine Luxury theme package directly.

Architectural Decision:
Application pages should not know which specific theme package they are rendering. They should ask the Theme Engine for the active theme. This makes the platform reusable across future sites and theme variants.

Safety:
The active theme still resolves to Eight Nine Luxury, so visual output should remain unchanged.


---

## Build 20: Site Configuration Engine

Purpose

Introduces the Site Configuration layer for the Eight Nine Web Studio Theme platform.

This separates the reusable theme from the identity of a specific website.

Files Created

### src/sites/eight-nine-photography/site.ts

Purpose:
Defines the first site implementation using the reusable platform.

This file stores brand identity, owner name, domain settings, contact details, social links and business metadata for Eight Nine Photography.

Editing Notes:
For a future client website, create a new folder under src/sites and duplicate this structure with that client's brand, domain, contact and business details.

### src/sites/eight-nine-photography/index.ts

Purpose:
Provides a clean export entry point for the Eight Nine Photography site configuration.

### src/theme-engine/active-site.ts

Purpose:
Defines which site configuration is currently active.

Currently returns Eight Nine Photography directly. Later this can become domain-based, environment-based or CMS-driven.

Files Modified

### src/theme-engine/index.ts

Purpose:
Exports getActiveSite and ActiveSite from the Theme Engine public API.

Architectural Decision:
Theme answers how the website looks. Site configuration answers whose website it is.

Safety:
No existing page has been changed to consume site config yet, so visual output remains unchanged.

---

## Build 21: Home Site Configuration Migration

Purpose

Updates the Home page to consume active site configuration for brand identity, domain values and business schema metadata.

Files Modified

### src/app/pages/Home.tsx

Purpose:
Home now reads site identity and domain values from getActiveSite() instead of theme content.

Fields now sourced from site configuration:
- site.brand.name
- site.domain.siteUrl
- site.domain.canonicalUrl
- site.domain.schemaId
- site.contact.phone
- site.contact.address
- site.business.priceRange

Architectural Decision:
Theme content controls what the page says. Site configuration controls whose website it is.

Safety:
No visual layout, styling or component behavior changed.

---

## Build 22: Shared Site Navigation and Footer Migration

Purpose

Moves shared navigation, service navigation, footer text and contact details into the active site configuration layer.

Files Created

### src/sites/eight-nine-photography/navigation.ts

Purpose:
Stores primary navigation, services dropdown links and header CTA for the Eight Nine Photography site.

### src/sites/eight-nine-photography/footer.ts

Purpose:
Stores footer description, copyright and SEO service line.

Files Modified

### src/sites/eight-nine-photography/site.ts

Purpose:
Imports navigation and footer config into the active site object. Adds logo, contact email, phone display and WhatsApp values.

### src/app/components/Nav.tsx

Purpose:
Reads logo, primary links, service links and CTA values from getActiveSite().

### src/app/components/Footer.tsx

Purpose:
Reads logo, footer description, navigation links, services, contact details, WhatsApp link, copyright and SEO line from getActiveSite().

Architectural Decision:
Shared layout components should consume site configuration rather than hardcoded site-specific values. This keeps the theme reusable for future client sites.

Safety:
The Nav and Footer visual layout, animation behavior, responsive menu structure and styling remain unchanged.

---

## Build 23: Shared Component Brand Cleanup

Purpose

Removes remaining legacy EHRay brand and contact references from shared components.

Files Modified

### src/app/components/BookingCTA.tsx

Purpose:
BookingCTA now reads the contact email and source label from getActiveSite() instead of hardcoded EHRay values.

Fields now sourced from site configuration:
- site.contact.email
- site.brand.name

### src/app/components/CmsPublicPage.tsx

Purpose:
The not-found SEO title now reads from site.brand.name instead of EHRay Photography.

Architectural Decision:
Shared components should not contain client-specific brand names, contact emails or source labels.

Safety:
CTA layout, form behavior and visual styling remain unchanged.

---

## Build 24: Service Page Theme Model

Purpose

Introduces a reusable data model for service pages. Instead of embedding all content directly in React components, service pages can now read structured content from theme files.

Files Created

### src/themes/eight-nine-luxury/pages/types.ts

Defines reusable interfaces for:
- SEO
- Hero
- Introduction
- Stages
- Packages
- FAQs
- Testimonials

### src/themes/eight-nine-luxury/pages/family.ts

Creates the first structured service page model for Family Photography.

### src/themes/eight-nine-luxury/pages/index.ts

Exports the service page models for use throughout the application.

Safety

No existing page has been modified yet. This build only introduces the reusable content model and has no impact on the live UI.

---

## Build 25: Family Service Page SEO and Hero Migration

Purpose

Begins migrating FamilyPhotography.tsx from hardcoded client-specific content into the reusable service page model.

Files Modified

### src/themes/eight-nine-luxury/assets.ts

Purpose:
Adds the family-hero asset key so service pages can reference hero imagery through the theme asset resolver.

### src/app/pages/FamilyPhotography.tsx

Purpose:
Reads SEO, schema provider data and hero content from:
- getActiveSite()
- familyServicePage
- resolveThemeAsset()

Fields now sourced from service page model:
- page.seo.title
- page.seo.description
- page.seo.keywords
- page.seo.slug
- page.hero.eyebrow
- page.hero.title
- page.hero.subtitle
- page.hero.cta
- page.hero.backgroundImage

Fields now sourced from site config:
- site.brand.name
- site.business.name
- site.domain.siteUrl
- site.domain.canonicalUrl

Safety:
The family page visual layout, classes, spacing and CTA behavior remain unchanged.

---

## Build 26: Family Service Page Content Migration

Purpose

Moves the remaining Family Photography page content into the reusable familyServicePage model.

Files Modified

### src/themes/eight-nine-luxury/pages/family.ts

Purpose:
Stores family page stages, packages, FAQs and testimonials as reusable theme data.

### src/app/pages/FamilyPhotography.tsx

Purpose:
Removes local hardcoded FAQs, packages and testimonials. The page now reads those collections from familyServicePage.

Fields now sourced from service page model:
- introduction.paragraphs
- stages
- packages
- faqs
- testimonials

Safety:
The page layout, styling, section order and component behavior remain unchanged.

---

## Build 27: Generic Service Page Renderer

Purpose

Creates a reusable renderer for service pages.

This renderer allows pages such as Family Photography, Pet Photography, Event Photography, Wedding Photography and Personal Branding to share one visual structure while loading different content from theme data.

Files Created

### src/theme-engine/renderers/ServicePageRenderer.tsx

Purpose:
Renders reusable service page content from a ServicePage data object.

Supported sections:
- SEO
- Service schema
- Hero
- Introduction
- Stages
- Portfolio
- Packages
- Testimonials
- FAQs
- Booking CTA

Architectural Decision:
Service page React components should become thin wrappers around data. This reduces duplicate JSX and makes new service pages faster to create.

Safety:
No existing public route imports this renderer yet, so this build does not alter visible website output.

---

## Build 28: Family Page Renderer Switch

Purpose

Switches FamilyPhotography.tsx from a full custom page component to a thin wrapper around the generic ServicePageRenderer.

Files Modified

### src/app/pages/FamilyPhotography.tsx

Purpose:
Now imports familyServicePage and passes it into ServicePageRenderer.

The page keeps its family-specific portfolio images and section labels as wrapper props.

Architectural Decision:
Service pages should be data-driven and share one renderer wherever possible. This reduces duplicate JSX and makes future service pages faster to create.

Safety:
The visual page structure should remain equivalent because ServicePageRenderer was modeled from the original FamilyPhotography.tsx layout.

---

## Build 29: Pet Service Page Theme Data

Purpose

Adds the reusable theme data model for the Pet Photography service page.

Files Created

### src/themes/eight-nine-luxury/pages/pet.ts

Purpose:
Stores Pet Photography SEO, hero, introduction, stages, FAQs and testimonials as reusable theme data.

Files Modified

### src/themes/eight-nine-luxury/pages/index.ts

Purpose:
Exports petServicePage.

### src/themes/eight-nine-luxury/assets.ts

Purpose:
Adds the pet-hero asset key.

Safety:
No visible page uses petServicePage yet, so this build does not alter the public UI.

---

## Build 30: Pet Page Renderer Switch

Purpose

Switches PetPhotography.tsx from a full custom page component to a thin wrapper around the generic ServicePageRenderer.

Files Modified

### src/app/pages/PetPhotography.tsx

Purpose:
Now imports petServicePage and passes it into ServicePageRenderer.

The page keeps its pet-specific portfolio images and section labels as wrapper props.

Architectural Decision:
The Pet service page now follows the same renderer pattern as Family Photography.

Safety:
The visual page structure should remain equivalent because ServicePageRenderer was designed to support the original service page layout.
