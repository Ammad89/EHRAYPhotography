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

