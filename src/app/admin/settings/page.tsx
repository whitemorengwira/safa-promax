import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/lib/admin/auth";
import { getContentStore } from "@/lib/admin/content-store";

export default async function AdminSettingsPage() {
  const user = await requireAdminSession();
  const store = await getContentStore();

  return (
    <AdminShell user={user} title="Settings">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="border border-white/10 bg-surface/40 p-6">
          <p className="text-[10px] uppercase tracking-widest text-gold">Site</p>
          <dl className="mt-5 space-y-4 text-sm">
            <Row label="Name" value={store.siteSettings.siteName} />
            <Row label="Public URL" value={store.siteSettings.publicUrl} />
            <Row label="Brand line" value={store.siteSettings.brandLine} />
            <Row label="CMS mode" value={store.siteSettings.cmsMode} />
          </dl>
        </section>
        <section className="border border-gold/20 bg-bg-deep p-6">
          <p className="text-[10px] uppercase tracking-widest text-gold">Security Checklist</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>Bootstrap login configured through <code>SAFA_ADMIN_EMAIL</code> and <code>SAFA_ADMIN_PASSWORD</code>.</li>
            <li>Optional scrypt hash support remains available through <code>SAFA_ADMIN_PASSWORD_HASH</code>.</li>
            <li>HTTP-only signed session cookie with secure flag in production.</li>
            <li>Role-based editor, approver and admin permissions.</li>
            <li>Admins and super-admins can add additional approved CMS users.</li>
            <li>Locked approved hero images protected in the editor.</li>
            <li>Audit log written for draft and publish events.</li>
          </ul>
        </section>
      </div>
    </AdminShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 border-b border-white/10 pb-3">
      <dt className="text-muted">{label}</dt>
      <dd className="font-semibold text-white">{value}</dd>
    </div>
  );
}
