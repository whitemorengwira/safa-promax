"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, Save, ShieldCheck, UserPlus } from "lucide-react";
import type { AdminRole, AdminStatus, AdminUser } from "@/lib/admin/types";

type SafeAdminUser = Omit<AdminUser, "passwordHash">;

const roleOptions: AdminRole[] = ["viewer", "editor", "approver", "admin", "super_admin"];
const statusOptions: AdminStatus[] = ["active", "pending", "suspended"];

export function AdminUsersManager({
  users,
  canManageUsers,
}: {
  users: SafeAdminUser[];
  canManageUsers: boolean;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<AdminRole>("editor");
  const [status, setStatus] = useState<AdminStatus>("active");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  async function addUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsSaving(true);

    const response = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role, status }),
    });
    const payload = await response.json().catch(() => ({}));

    setIsSaving(false);

    if (!response.ok) {
      setError(payload.error || "The administrator could not be added.");
      return;
    }

    setMessage(`${email} has been added as ${role}.`);
    setName("");
    setEmail("");
    setPassword("");
    setRole("editor");
    setStatus("active");
    router.refresh();
  }

  async function updateUser(id: string, nextRole: AdminRole, nextStatus: AdminStatus) {
    setMessage("");
    setError("");
    setIsSaving(true);

    const response = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, role: nextRole, status: nextStatus }),
    });
    const payload = await response.json().catch(() => ({}));

    setIsSaving(false);

    if (!response.ok) {
      setError(payload.error || "The user could not be updated.");
      return;
    }

    setMessage(`${payload.user.email} has been updated.`);
    router.refresh();
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">
      <section className="border border-white/10 bg-surface/40">
        <div className="grid grid-cols-[1.25fr_0.7fr_0.7fr_0.45fr] border-b border-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-gold">
          <span>User</span>
          <span>Role</span>
          <span>Status</span>
          <span>Save</span>
        </div>
        {users.length === 0 && (
          <p className="p-5 text-sm text-muted">No stored users yet. The environment admin is created at first sign-in.</p>
        )}
        {users.map((item) => (
          <UserRow
            key={item.id}
            user={item}
            canManageUsers={canManageUsers}
            isSaving={isSaving}
            onUpdate={updateUser}
          />
        ))}
      </section>

      <aside className="space-y-5">
        <section className="border border-gold/20 bg-bg-deep p-6">
          <div className="flex items-center gap-3">
            <UserPlus className="h-5 w-5 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold">Add Administrator</p>
              <h3 className="text-xl font-black text-white">Create CMS access</h3>
            </div>
          </div>

          {canManageUsers ? (
            <form className="mt-6 space-y-4" onSubmit={addUser}>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                  required
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted">
                Email
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                  required
                />
              </label>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted">
                Temporary Password
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  minLength={8}
                  className="mt-2 w-full border border-white/10 bg-bg px-4 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                  required
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted">
                  Role
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value as AdminRole)}
                    className="mt-2 w-full border border-white/10 bg-bg px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                  >
                    {roleOptions.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted">
                  Status
                  <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value as AdminStatus)}
                    className="mt-2 w-full border border-white/10 bg-bg px-3 py-3 text-sm normal-case tracking-normal text-white outline-none focus:border-gold"
                  >
                    {statusOptions.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>

              {message && <p className="border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">{message}</p>}
              {error && <p className="border border-red/40 bg-red/10 px-4 py-3 text-sm text-red-100">{error}</p>}

              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
              >
                <KeyRound className="h-4 w-4" />
                {isSaving ? "Adding..." : "Add Admin User"}
              </button>
            </form>
          ) : (
            <p className="mt-5 text-sm text-muted">Only admins and super-admins can create CMS users.</p>
          )}
        </section>

        <section className="border border-gold/20 bg-bg-deep p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <p className="text-[10px] uppercase tracking-widest text-gold">Role Model</p>
          </div>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p><strong className="text-white">Viewer:</strong> read-only board and CMS access.</p>
            <p><strong className="text-white">Editor:</strong> save drafts and request approval.</p>
            <p><strong className="text-white">Approver:</strong> publish approved changes.</p>
            <p><strong className="text-white">Admin:</strong> manage users, approvals and settings.</p>
            <p><strong className="text-white">Super admin:</strong> manage site access and elevated publishing.</p>
          </div>
        </section>
      </aside>
    </div>
  );
}

function UserRow({
  user,
  canManageUsers,
  isSaving,
  onUpdate,
}: {
  user: SafeAdminUser;
  canManageUsers: boolean;
  isSaving: boolean;
  onUpdate: (id: string, role: AdminRole, status: AdminStatus) => void;
}) {
  const [role, setRole] = useState<AdminRole>(user.role);
  const [status, setStatus] = useState<AdminStatus>(user.status);

  return (
    <div className="grid grid-cols-[1.25fr_0.7fr_0.7fr_0.45fr] items-center gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-0">
      <div>
        <p className="font-bold text-white">{user.name}</p>
        <p className="text-xs text-muted">{user.email}</p>
      </div>
      {canManageUsers ? (
        <select
          value={role}
          onChange={(event) => setRole(event.target.value as AdminRole)}
          className="w-full border border-white/10 bg-bg px-2 py-2 text-xs text-gold-soft outline-none focus:border-gold"
        >
          {roleOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      ) : (
        <p className="text-gold-soft">{user.role}</p>
      )}
      {canManageUsers ? (
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as AdminStatus)}
          className="w-full border border-white/10 bg-bg px-2 py-2 text-xs text-muted outline-none focus:border-gold"
        >
          {statusOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      ) : (
        <p className="text-muted">{user.status}</p>
      )}
      <button
        type="button"
        disabled={!canManageUsers || isSaving}
        onClick={() => onUpdate(user.id, role, status)}
        className="inline-flex h-10 w-10 items-center justify-center border border-gold/30 text-gold transition hover:bg-gold hover:text-bg disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={`Save ${user.name}`}
        title={`Save ${user.name}`}
      >
        <Save className="h-4 w-4" />
      </button>
    </div>
  );
}
