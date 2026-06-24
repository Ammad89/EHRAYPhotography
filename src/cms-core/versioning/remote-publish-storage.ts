import { getBackendSetupMessage, getSupabaseClient } from "../../app/cms/remoteStorage";
import type { CmsPage, CmsSiteSettings, CmsTheme } from "../types";

export interface RemoteCmsSnapshot {
  pages: CmsPage[];
  theme: CmsTheme;
  siteSettings: CmsSiteSettings;
}

export async function saveRemoteSnapshot(
  id: "draft" | "published",
  snapshot: RemoteCmsSnapshot,
) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error(getBackendSetupMessage());
  }

  const { data: userData } = await supabase.auth.getUser();

  const { error } = await supabase
    .from("cms_site_snapshots")
    .upsert(
      {
        id,
        snapshot,
        updated_by: userData.user?.id || null,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "id",
      },
    );

  if (error) throw error;
}

export async function loadRemoteSnapshot(id: "draft" | "published") {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error(getBackendSetupMessage());
  }

  const { data, error } = await supabase
    .from("cms_site_snapshots")
    .select("snapshot, updated_at")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;

  if (!data?.snapshot) return null;

  return {
    snapshot: data.snapshot as RemoteCmsSnapshot,
    updatedAt: data.updated_at as string,
  };
}
