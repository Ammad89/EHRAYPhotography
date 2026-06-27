import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { WebsiteSchema } from "../schema";
import { createDefaultWebsiteSchema } from "../default-website";

interface WebsiteContextValue {
  website: WebsiteSchema;
  setWebsite: React.Dispatch<React.SetStateAction<WebsiteSchema>>;
  resetWebsite: () => void;
}

const WebsiteContext = createContext<WebsiteContextValue | null>(null);

const WEBSITE_STORAGE_KEY = "eight-nine-web-studio.website-schema";

function loadStoredWebsite() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(WEBSITE_STORAGE_KEY);
    if (!raw) return null;

    return JSON.parse(raw) as WebsiteSchema;
  } catch (error) {
    console.warn("Unable to load stored website schema.", error);
    return null;
  }
}

function saveStoredWebsite(website: WebsiteSchema) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(WEBSITE_STORAGE_KEY, JSON.stringify(website));
  } catch (error) {
    console.warn("Unable to save website schema.", error);
  }
}

export function WebsiteProvider({ children }: { children: ReactNode }) {
  const defaultWebsite = useMemo(() => createDefaultWebsiteSchema(), []);
  const [website, setWebsite] = useState<WebsiteSchema>(() => loadStoredWebsite() || defaultWebsite);

  useEffect(() => {
    saveStoredWebsite(website);
  }, [website]);

  const value = useMemo(
    () => ({
      website,
      setWebsite,
      resetWebsite: () => {
        const nextWebsite = createDefaultWebsiteSchema();
        setWebsite(nextWebsite);
        saveStoredWebsite(nextWebsite);
      },
    }),
    [website],
  );

  return (
    <WebsiteContext.Provider value={value}>
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  const context = useContext(WebsiteContext);

  if (!context) {
    throw new Error("useWebsite must be used inside WebsiteProvider");
  }

  return context;
}
