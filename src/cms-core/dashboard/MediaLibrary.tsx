interface MediaLibraryProps {
  assets?: string[];
  onSelect?: (url: string) => void;
}

export default function MediaLibrary({
  assets = [],
  onSelect,
}: MediaLibraryProps) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] opacity-60 mb-2">
          Media Library
        </p>

        <h2 className="text-2xl font-semibold">
          Images and assets
        </h2>

        <p className="text-sm opacity-70 mt-2">
          Upload, browse and reuse images across the website.
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-border p-6">
        <label className="block cursor-pointer">
          <span className="block font-medium mb-2">
            Upload image
          </span>

          <span className="block text-sm opacity-70 mb-4">
            Supabase upload will be connected in the next step.
          </span>

          <input
            type="file"
            accept="image/*"
            disabled
            className="block w-full text-sm"
          />
        </label>
      </div>

      {assets.length === 0 ? (
        <div className="rounded-xl border border-border p-6 text-sm opacity-70">
          No media assets yet. Uploaded images will appear here.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {assets.map((url) => (
            <button
              key={url}
              type="button"
              onClick={() => onSelect?.(url)}
              className="overflow-hidden rounded-xl border border-border text-left"
            >
              <img
                src={url}
                alt=""
                className="h-36 w-full object-cover"
              />

              <div className="p-3 text-xs opacity-70 truncate">
                {url}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
