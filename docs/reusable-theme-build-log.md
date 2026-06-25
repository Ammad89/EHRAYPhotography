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
