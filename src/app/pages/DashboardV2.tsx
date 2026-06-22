import CmsShell from "../../cms-core/dashboard/CmsShell";
import PagesPanel from "../../cms-core/dashboard/PagesPanel";
import BlocksPanel from "../../cms-core/dashboard/BlocksPanel";
import FieldsPanel from "../../cms-core/dashboard/FieldsPanel";
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
        <FieldsPanel
          block={editor.selectedBlock}
          onChangeField={editor.updateBlockField}
        />
      }


     preview={
        <PreviewRenderer
          page={editor.selectedPage}
          theme={editor.theme}
        />
       }
          </pre>
        </div>
      }
    />
  );
}
