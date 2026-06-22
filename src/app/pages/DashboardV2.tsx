import CmsShell from "../../cms-core/dashboard/CmsShell";
import PagesPanel from "../../cms-core/dashboard/PagesPanel";
import BlocksPanel from "../../cms-core/dashboard/BlocksPanel";
import FieldsPanel from "../../cms-core/dashboard/FieldsPanel";
import PreviewRenderer from "../../cms-core/dashboard/PreviewRenderer";
import ThemePanel from "../../cms-core/dashboard/ThemePanel";
import SiteSettingsPanel from "../../cms-core/dashboard/SiteSettingsPanel";
import { useCmsEditor } from "../../cms-core/dashboard/useCmsEditor";

export default function DashboardV2() {
  const editor = useCmsEditor();

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
          <FieldsPanel
            block={editor.selectedBlock}
            onChangeField={editor.updateBlockField}
          />

          <div className="border-t border-border mt-6">
            <ThemePanel
              theme={editor.theme}
              onChange={editor.setTheme}
            />
          </div>

          <div className="border-t border-border mt-6">
            <SiteSettingsPanel
              settings={editor.siteSettings}
              onChange={editor.setSiteSettings}
            />
          </div>
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
