# Product Decisions

## WebsiteSchema

Decision:
Use WebsiteSchema as the central data model.

Reason:
A universal schema allows one CMS to power many websites and themes.

## Snapshot publishing

Decision:
Use snapshot-based publishing.

Reason:
Snapshots are simple, reversible and compatible with draft/published workflows.

## Renderer-based themes

Decision:
Use reusable renderers instead of duplicating page components.

Reason:
This reduces repeated code and makes future client websites faster to build.


## WebsiteSchema-native pages

Decision:
Build a new Pages Manager that edits WebsiteSchema pages directly instead of extending the legacy block editor.

Reason:
The platform needs a universal page model that can support many themes and industries.
