import { useEffect, useState } from "react";
import CmsShell from "../../cms-core/dashboard/CmsShell";
import PagesPanel from "../../cms-core/dashboard/PagesPanel";
import BlocksPanel from "../../cms-core/dashboard/BlocksPanel";
import FieldsPanel from "../../cms-core/dashboard/FieldsPanel";
import PreviewRenderer from "../../cms-core/dashboard/PreviewRenderer";
import ThemePanel from "../../cms-core/dashboard/ThemePanel";
import SiteSettingsPanel from "../../cms-core/dashboard/SiteSettingsPanel";
import MediaLibrary from "../../cms-core/dashboard/MediaLibrary";
import VersionHistoryPanel from "../../cms-core/dashboard/VersionHistoryPanel";
import {
  loadLocalVersions,
  saveLocalVersion,
} from "../../cms-core/versioning/version-storage";
import {
  loadPublishedSnapshot,
  publishSnapshot,
} from "../../cms-core/versioning/publish-storage";
import { saveRemoteSnapshot } from "../../cms-core/versioning/remote-publish-storage";
import {
  getDashboardUser,
  getSupabaseClient,
  isSupabaseConfigured,
} from "../../app/cms/remoteStorage";
import type { User } from "@supabase/supabase-js";
import { useCmsEditor } from "../../cms-core/dashboard/useCmsEditor";

type EditorTab =
  | "content"
  | "theme"
  | "settings"
  | "media"
  | "versions";

export default function DashboardV2() {
  const editor = useCmsEditor();
  const [activeTab, setActiveTab] = useState<EditorTab>("content");
  const [versions, setVersions] = useState(() => loadLocalVersions());
  const [published, setPublished] = useState(() => loadPublishedSnapshot());

  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setAuthChecked(true);
      return;
    }

    const supabase = getSupabaseClient();
    let active = true;

    getDashboardUser()
      .then(currentUser => {
        if (!active) return;
        setUser(currentUser);
        setAuthChecked(true);
      })
      .catch(() => {
        if (!active) return;
        setAuthChecked(true);
      });

    const subscription = supabase?.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    }).data.subscription;

    return () => {
      active = false;
      subscription?.unsubscribe();
    };
  }, []);

  if (!authChecked) {
    return <div className="p-8">Checking authentication...</div>;
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-lg">
        Please sign in through the CMS dashboard first.
      </div>
    );
  }

  return (
    <CmsShell
      sidebar={
        <div>
          <PagesPanel
            selectedSlug={editor.selectedPageSlug}
            onSelect={editor.selectPage}
          />

          <BlocksPanel
            blocks={editor.selectedPage?.blocks || []}
            allowedBlocks={editor.allowedBlocks}
            selectedBlockId={editor.selectedBlock?.id}
            onSelect={editor.selectBlock}
            onDelete={editor.removeBlock}
            onAddBlock={editor.addBlock}
          />
        </div>
      }
      editor={
        <div>
          <div className="flex items-center justify-between gap-3 border-b border-border p-4">
            <div className="text-xs opacity-70">
              {published
                ? `Published ${new Date(published.publishedAt).toLocaleString()}`
                : "Not published yet"}
            </div>

            <div className="flex gap-2">
              <button
              type="button"
              onClick={() => {
                saveLocalVersion(
                  {
                    pages: editor.pages,
                    theme: editor.theme,
                    siteSettings: editor.siteSettings,
                  },
                  `Manual Save ${new Date().toLocaleTimeString()}`
                );

                setVersions(loadLocalVersions());
                setActiveTab("versions");
              }}
              className="rounded-lg bg-foreground px-4 py-2 text-sm text-background"
            >
              Save Version
              </button>

              <button
                type="button"
                onClick={async () => {
                  const snapshot = {
                    pages: editor.pages,
                    theme: editor.theme,
                    siteSettings: editor.siteSettings,
                  };

                  const nextPublished = publishSnapshot(snapshot);
                  setPublished(nextPublished);

                  try {
                    await saveRemoteSnapshot("published", snapshot);
                    alert("Published current CMS state to Supabase");
                  } catch (error) {
                    console.error(error);
                    alert(
                      "Saved locally, but Supabase publish failed. Check the CMS v2 schema and admin permissions."
                    );
                  }
                }}
                className="rounded-lg border border-border px-4 py-2 text-sm"
              >
                Publish
              </button>
            </div>
          </div>

          <div className="sticky top-0 z-10 flex gap-2 border-b border-border bg-background p-4">
            {(["content", "theme", "settings", "media", "versions"] as EditorTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-sm capitalize ${
                  activeTab === tab
                    ? "bg-foreground text-background"
                    : "border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "content" && (
            <FieldsPanel
              block={editor.selectedBlock}
              onChangeField={editor.updateBlockField}
            />
          )}

          {activeTab === "theme" && (
            <ThemePanel
              theme={editor.theme}
              onChange={editor.setTheme}
            />
          )}

          {activeTab === "settings" && (
            <SiteSettingsPanel
              settings={editor.siteSettings}
              onChange={editor.setSiteSettings}
            />
          )}

          {activeTab === "media" && (
            <MediaLibrary
              onSelect={(url) => {
                if (!editor.selectedBlock) return;

                const imageField = Object.keys(editor.selectedBlock.fields).find((key) =>
                  key.toLowerCase().includes("image")
                );

                if (!imageField) return;

                editor.updateBlockField(imageField, url);
                setActiveTab("content");
              }}
            />
          )}

          {activeTab === "versions" && (
            <VersionHistoryPanel
              versions={versions}
              onRestore={(version) => {
                editor.restoreSnapshot(version.snapshot);

                alert(
                   `Restored ${version.label}`
               );
              }}
            />
          )}
        </div>
      }
      preview={
        <PreviewRenderer
          page={editor.selectedPage}
          theme={editor.theme}
          siteSettings={editor.siteSettings}
        />
      }
    />
  );
}
