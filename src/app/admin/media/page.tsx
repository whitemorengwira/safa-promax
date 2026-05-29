import Image from "next/image";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminMediaPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();

  return (
    <AdminShell user={user} title="Media Library">
      <div className="mb-6 border border-gold/20 bg-bg-deep p-5">
        <p className="text-sm leading-relaxed text-muted">
          Locked hero images are protected from replacement. New generated or approved assets can be added to
          the store and selected from the editor once connected to permanent storage.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {store.media.map((asset) => (
          <article key={asset.id} className="overflow-hidden border border-white/10 bg-surface/40">
            <div className="relative aspect-[4/3] bg-bg">
              {asset.type === "image" && (
                <Image src={asset.url} alt={asset.title} fill sizes="320px" className="object-contain" />
              )}
              {asset.locked && (
                <span className="absolute right-3 top-3 bg-gold px-2 py-1 text-[10px] font-black uppercase tracking-widest text-bg">
                  Locked
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="font-bold text-white">{asset.title}</p>
              <p className="mt-1 text-xs text-muted">{asset.source}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {asset.tags.map((tag) => (
                  <span key={tag} className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
