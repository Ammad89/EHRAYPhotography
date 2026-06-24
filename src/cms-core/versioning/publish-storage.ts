import type { CmsPage, CmsSiteSettings, CmsTheme } from "../types";

export interface CmsPublishedSnapshot {
  pages: CmsPage[];
  theme: CmsTheme;
  siteSettings: CmsSiteSettings;
  publishedAt: string;
}

const PUBLISHED_STORAGE_KEY = "cms-v2-published-state";

export function loadPublishedSnapshot(): CmsPublishedSnapshot | null {
  if (typeof localStorage === "undefined") return null;

  try {
    const stored = localStorage.getItem(PUBLISHED_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function publishSnapshot(snapshot: {
  pages: CmsPage[];
  theme: CmsTheme;
  siteSettings: CmsSiteSettings;
}): CmsPublishedSnapshot {
  const published: CmsPublishedSnapshot = {
    ...snapshot,
    publishedAt: new Date().toISOString(),
  };

  localStorage.setItem(PUBLISHED_STORAGE_KEY, JSON.stringify(published));

  return published;
}

export function clearPublishedSnapshot() {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(PUBLISHED_STORAGE_KEY);
}
