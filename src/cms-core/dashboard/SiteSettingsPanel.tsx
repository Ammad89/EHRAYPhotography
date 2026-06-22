import type { CmsSiteSettings } from "../types";

interface SiteSettingsPanelProps {
  settings: CmsSiteSettings;
  onChange: (settings: CmsSiteSettings) => void;
}

export default function SiteSettingsPanel({
  settings,
  onChange,
}: SiteSettingsPanelProps) {
  function update<K extends keyof CmsSiteSettings>(
    key: K,
    value: CmsSiteSettings[K],
  ) {
    onChange({
      ...settings,
      [key]: value,
    });
  }

  return (
    <div className="p-6 space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] opacity-60 mb-2">
          Site Settings
        </p>

        <h2 className="text-2xl font-semibold">
          Global Website Settings
        </h2>

        <p className="text-sm opacity-70 mt-2">
          These settings affect the entire website.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="font-semibold">
          Branding
        </h3>

        <label className="block">
          <span className="block text-sm mb-2">
            Site Name
          </span>

          <input
            value={settings.siteName}
            onChange={(e) => update("siteName", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-2">
            Logo URL
          </span>

          <input
            value={settings.logoUrl}
            onChange={(e) => update("logoUrl", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-2">
            Tagline
          </span>

          <input
            value={settings.tagline}
            onChange={(e) => update("tagline", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">
          Contact Information
        </h3>

        <label className="block">
          <span className="block text-sm mb-2">
            Email
          </span>

          <input
            value={settings.contactEmail}
            onChange={(e) => update("contactEmail", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-2">
            Phone
          </span>

          <input
            value={settings.contactPhone}
            onChange={(e) => update("contactPhone", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-2">
            Address
          </span>

          <textarea
            value={settings.address}
            onChange={(e) => update("address", e.target.value)}
            className="w-full min-h-24 rounded-lg border border-border px-3 py-2"
          />
        </label>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">
          SEO Defaults
        </h3>

        <label className="block">
          <span className="block text-sm mb-2">
            Default SEO Title
          </span>

          <input
            value={settings.defaultSeoTitle}
            onChange={(e) => update("defaultSeoTitle", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-2">
            Default SEO Description
          </span>

          <textarea
            value={settings.defaultSeoDescription}
            onChange={(e) => update("defaultSeoDescription", e.target.value)}
            className="w-full min-h-24 rounded-lg border border-border px-3 py-2"
          />
        </label>
      </section>

      <section className="space-y-4">
        <h3 className="font-semibold">
          Footer
        </h3>

        <label className="block">
          <span className="block text-sm mb-2">
            Copyright Text
          </span>

          <input
            value={settings.footerCopyright}
            onChange={(e) => update("footerCopyright", e.target.value)}
            className="w-full rounded-lg border border-border px-3 py-2"
          />
        </label>
      </section>
    </div>
  );
}
