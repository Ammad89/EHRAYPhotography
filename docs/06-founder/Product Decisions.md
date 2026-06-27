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
