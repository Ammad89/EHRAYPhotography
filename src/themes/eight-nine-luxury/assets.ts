import heroBeachDog from "../../imports/optimized/woman-playing-with-dog-on-sandy-beach-2026-01-08-06-39-41-utc.JPG";
import portfolioFamilies from "../../imports/optimized/outdoor-shot-of-pleased-man-and-woman-stand-closel-2026-05-28-23-39-35-utc.JPG";
import portfolioPets from "../../imports/optimized/dog-in-autumn-foliage-wearing-a-red-collar-2026-03-25-00-44-16-utc.jpg";
import portfolioBranding from "../../imports/optimized/japanese-woman-in-office-portrait-2026-03-09-05-22-48-utc.jpg";
import portfolioEvents from "../../imports/optimized/celebrating-together-at-an-office-new-year-s-party-2026-01-09-09-10-33-utc.jpg";
import aboutPortrait from "../../imports/optimized/Gemini_Generated_Image_lfgepqlfgepqlfge.jpg";

export const eightNineLuxuryAssets: Record<string, string> = {
  "wedding-hero": portfolioWedding,
  "event-hero": portfolioEvents,
  "branding-hero": portfolioBranding,
  "pet-hero": portfolioPets,
  "family-hero": portfolioFamilies,
  "woman-playing-with-dog-on-sandy-beach-2026-01-08-06-39-41-utc.JPG": heroBeachDog,
  "outdoor-shot-of-pleased-man-and-woman-stand-closel-2026-05-28-23-39-35-utc.JPG": portfolioFamilies,
  "dog-in-autumn-foliage-wearing-a-red-collar-2026-03-25-00-44-16-utc.jpg": portfolioPets,
  "japanese-woman-in-office-portrait-2026-03-09-05-22-48-utc.jpg": portfolioBranding,
  "celebrating-together-at-an-office-new-year-s-party-2026-01-09-09-10-33-utc.jpg": portfolioEvents,
  "Gemini_Generated_Image_lfgepqlfgepqlfge.jpg": aboutPortrait,
};

export function resolveEightNineLuxuryAsset(assetKey: string, fallback = "") {
  if (!assetKey) return fallback;
  return eightNineLuxuryAssets[assetKey] || assetKey || fallback;
}
