import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { WebsiteSchema } from "../schema";
import { createDefaultWebsiteSchema } from "../default-website";

interface WebsiteContextValue {
  website: WebsiteSchema;
  setWebsite: React.Dispatch<React.SetStateAction<WebsiteSchema>>;
  resetWebsite: () => void;
}

const WebsiteContext = createContext<WebsiteContextValue | null>(null);

export function WebsiteProvider({ children }: { children: ReactNode }) {
  const defaultWebsite = useMemo(() => createDefaultWebsiteSchema(), []);
  const [website, setWebsite] = useState<WebsiteSchema>(defaultWebsite);

  const value = useMemo(
    () => ({
      website,
      setWebsite,
      resetWebsite: () => setWebsite(createDefaultWebsiteSchema()),
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
