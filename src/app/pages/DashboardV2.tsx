import { useState } from "react";
import CmsShell from "../../cms-core/dashboard/CmsShell";
import PagesPanel from "../../cms-core/dashboard/PagesPanel";
import BlocksPanel from "../../cms-core/dashboard/BlocksPanel";
import FieldsPanel from "../../cms-core/dashboard/FieldsPanel";
import PreviewRenderer from "../../cms-core/dashboard/PreviewRenderer";
import MediaLibrary from "../../cms-core/dashboard/MediaLibrary";
import ThemePanel from "../../cms-core/dashboard/ThemePanel";
import SiteSettingsPanel from "../../cms-core/dashboard/SiteSettingsPanel";
import { useCmsEditor } from "../../cms-core/dashboard/useCmsEditor";

type EditorTab = "content" | "theme" | "settings" | "media";

export default function DashboardV2() {
  const editor = useCmsEditor();
  const [activeTab, setActiveTab] = useState<EditorTab>("content");

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
          <div className="sticky top-0 z-10 flex gap-2 border-b border-border bg-background p-4">
            {(["content", "theme", "settings", "media"] as EditorTab[]).map((tab) => (
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
        </div>
      }
      preview={
        <PreviewRenderer
          page={editor.selectedPage}
          theme={editor.theme}
        />
      }
    />
  );
}
