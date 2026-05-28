"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, Plus, ShieldCheck, UserMinus } from "lucide-react";
import {
  siteAccessRoleLabels,
  siteAccessRoles,
  siteAccessStatuses,
  type SafeSiteAccessUser,
  type SiteAccessAuditEntry,
  type SiteAccessRole,
  type SiteAccessStatus,
} from "@/lib/site-access/types";

export function SiteAccessManager({
  users,
  auditLog,
}: {
  users: SafeSiteAccessUser[];
  auditLog: SiteAccessAuditEntry[];
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<SiteAccessRole>("viewer");
  const [status, setStatus] = useState<SiteAccessStatus>("active");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const pendingUsers = users.filter((user) => user.status === "pending");
  const activeUsers = users.filter((user) => user.status !== "pending");

  async function addUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    const response = await fetch("/api/admin/site-access/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, organisation, password, role, status }),
    });
    const payload = await response.json().catch(() => null);
    setSaving(false);

    if (!response.ok) {
      setError(payload?.error || "Site-access user could not be added.");
      return;
    }

    setMessage(`${email} has been added.`);
    setName("");
    setEmail("");
    setOrganisation("");
    setPassword("");
    setRole("viewer");
    setStatus("active");
    router.refresh();
  }

  async function updateUser(id: string, nextRole: SiteAccessRole, nextStatus: SiteAccessStatus) {
    setSaving(true);
    setMessage("");
    setError("");

    const response = await fetch("/api/admin/site-access/users", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, role: nextRole, status: nextStatus }),
    });
    const payload = await response.json().catch(() => null);
    setSaving(false);

    if (!response.ok) {
      setError(payload?.error || "Site-access user could not be updated.");
      return;
    }

    setMessage(`${payload.user.email} has been updated.`);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <section className="border border-gold/20 bg-bg-deep p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Invitation Control</p>
                <h2 className="text-3xl font-black text-white">Site Access Portal</h2>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Approve board and stakeholder access to the protected presentation site. These users are separate from CMS administrators.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3">
            <Metric label="Pending" value={pendingUsers.length} />
            <Metric label="Active" value={users.filter((user) => user.status === "active").length} />
            <Metric label="Revoked" value={users.filter((user) => user.status === "revoked").length} />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <Panel title={`Pending Approvals (${pendingUsers.length})`}>
            {pendingUsers.length === 0 ? (
              <p className="px-5 py-6 text-sm italic text-muted">No pending users at this time.</p>
            ) : (
              pendingUsers.map((user) => (
                <SiteAccessRow
                  key={user.id}
                  user={user}
                  saving={saving}
                  primaryAction="Approve"
                  onUpdate={updateUser}
                />
              ))
            )}
          </Panel>

          <Panel title={`Active Users (${activeUsers.length})`}>
            {activeUsers.length === 0 ? (
              <p className="px-5 py-6 text-sm italic text-muted">No active site-access users yet.</p>
            ) : (
              activeUsers.map((user) => (
                <SiteAccessRow
                  key={user.id}
                  user={user}
                  saving={saving}
                  primaryAction="Save"
                  onUpdate={updateUser}
                />
              ))
            )}
          </Panel>
        </div>

        <aside className="space-y-6">
          <section className="border border-gold/20 bg-bg-deep p-6">
            <div className="flex items-center gap-3">
              <Plus className="h-5 w-5 text-gold" />
              <h3 className="text-xl font-black text-white">Quick Add User</h3>
            </div>
            <p className="mt-3 text-sm text-muted">Create an approved stakeholder account directly.</p>

            <form className="mt-5 space-y-4" onSubmit={addUser}>
              <AdminInput label="Name" value={name} onChange={setName} required />
              <AdminInput label="Email" value={email} onChange={setEmail} type="email" required />
              <AdminInput label="Organisation" value={organisation} onChange={setOrganisation} />
              <AdminInput label="Temporary Password" value={password} onChange={setPassword} type="password" minLength={8} required />
              <div className="grid grid-cols-2 gap-3">
                <SelectField label="Role" value={role} values={siteAccessRoles} onChange={(value) => setRole(value as SiteAccessRole)} />
                <SelectField label="Status" value={status} values={siteAccessStatuses} onChange={(value) => setStatus(value as SiteAccessStatus)} />
              </div>

              {message && <p className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">{message}</p>}
              {error && <p className="border border-red/40 bg-red/10 px-4 py-3 text-sm text-red-100">{error}</p>}

              <button
                type="submit"
                disabled={saving}
                className="inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-wait disabled:opacity-60"
              >
                <KeyRound className="h-4 w-4" />
                {saving ? "Saving..." : "Add User"}
              </button>
            </form>
          </section>

          <section className="border border-white/10 bg-surface/30 p-6">
            <h3 className="text-lg font-black text-white">Recent Access Activity</h3>
            <div className="mt-4 space-y-3">
              {auditLog.slice(0, 8).map((entry) => (
                <div key={entry.id} className="border-l border-gold/30 pl-3">
                  <p className="text-xs font-bold text-white">{entry.summary}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted">{new Date(entry.createdAt).toLocaleString()}</p>
                </div>
              ))}
              {auditLog.length === 0 && <p className="text-sm text-muted">No access activity yet.</p>}
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-white/10 bg-black/25 px-5 py-4">
      <p className="text-3xl font-black text-gold">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-gold/20 bg-bg-deep">
      <h3 className="border-b border-gold/20 px-5 py-4 text-2xl font-black text-gold">{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function SiteAccessRow({
  user,
  saving,
  primaryAction,
  onUpdate,
}: {
  user: SafeSiteAccessUser;
  saving: boolean;
  primaryAction: "Approve" | "Save";
  onUpdate: (id: string, role: SiteAccessRole, status: SiteAccessStatus) => void;
}) {
  const [role, setRole] = useState<SiteAccessRole>(user.role);
  const [status, setStatus] = useState<SiteAccessStatus>(user.status === "pending" ? "active" : user.status);

  return (
    <div className="grid grid-cols-1 gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-0 lg:grid-cols-[1.2fr_0.6fr_0.55fr_0.5fr] lg:items-center">
      <div>
        <p className="font-bold text-white">{user.name}</p>
        <p className="text-xs text-muted">{user.email}</p>
        {user.organisation && <p className="mt-1 text-xs text-gold-soft">{user.organisation}</p>}
      </div>
      <SelectField compact label="Role" value={role} values={siteAccessRoles} onChange={(value) => setRole(value as SiteAccessRole)} />
      <SelectField compact label="Status" value={status} values={siteAccessStatuses} onChange={(value) => setStatus(value as SiteAccessStatus)} />
      <div className="flex gap-2 lg:justify-end">
        <button
          type="button"
          disabled={saving}
          onClick={() => onUpdate(user.id, role, status)}
          className="border border-gold/40 px-3 py-2 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg disabled:cursor-wait disabled:opacity-50"
        >
          {primaryAction}
        </button>
        <button
          type="button"
          disabled={saving || user.status === "revoked"}
          onClick={() => onUpdate(user.id, role, "revoked")}
          className="grid h-9 w-9 place-items-center border border-red/30 text-red-soft transition hover:bg-red hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
          title={`Revoke ${user.name}`}
          aria-label={`Revoke ${user.name}`}
        >
          <UserMinus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function AdminInput({
  label,
  value,
  onChange,
  type = "text",
  required,
  minLength,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-muted">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        required={required}
        minLength={minLength}
        className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  values,
  onChange,
  compact,
}: {
  label: string;
  value: string;
  values: string[];
  onChange: (value: string) => void;
  compact?: boolean;
}) {
  return (
    <label className={`block text-xs font-bold uppercase tracking-widest text-muted ${compact ? "lg:text-[10px]" : ""}`}>
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-white/10 bg-bg px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
      >
        {values.map((item) => (
          <option key={item} value={item}>
            {item in siteAccessRoleLabels ? siteAccessRoleLabels[item as SiteAccessRole] : item}
          </option>
        ))}
      </select>
    </label>
  );
}
