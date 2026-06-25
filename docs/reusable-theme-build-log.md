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
