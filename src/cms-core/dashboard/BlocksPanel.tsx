import type { CmsBlock } from "../types";

interface BlocksPanelProps {
  blocks: CmsBlock[];
  selectedBlockId?: string | null;
  onSelect?: (blockId: string) => void;
  onDelete?: (blockId: string) => void;
}

export default function BlocksPanel({
  blocks,
  selectedBlockId,
  onSelect,
  onDelete,
}: BlocksPanelProps) {
  return (
    <div className="p-4 border-b border-border">
      <div className="mb-4">
        <h3 className="font-semibold">
          Blocks
        </h3>
      </div>

      <div className="space-y-2">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`rounded-lg border p-3 ${
              selectedBlockId === block.id
                ? "border-foreground"
                : "border-border"
            }`}
          >
            <button
              type="button"
              className="w-full text-left"
              onClick={() => onSelect?.(block.id)}
            >
              <div className="font-medium">
                {block.label}
              </div>

              <div className="text-xs opacity-70">
                {block.type}
              </div>
            </button>

            <button
              type="button"
              className="mt-2 text-xs text-red-500"
              onClick={() => onDelete?.(block.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
