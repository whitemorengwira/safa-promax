"use client";

import { Activity, Clock3, ShieldAlert, UserCheck } from "lucide-react";
import type { CmsActivityEntry, CmsEditJournalEntry, CmsTrackedSession } from "@/lib/cms/safety";

function timeAgo(value: string) {
  const delta = Date.now() - new Date(value).getTime();
  if (!Number.isFinite(delta)) return value;
  const minutes = Math.max(0, Math.round(delta / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function activeOnly(session: CmsTrackedSession) {
  return session.status === "active" && Date.now() - new Date(session.lastSeenAt).getTime() < 1000 * 60 * 60 * 8;
}

export function CmsSafetyDashboard({
  activityLog,
  editJournal,
  adminSessions,
  siteSessions,
}: {
  activityLog: CmsActivityEntry[];
  editJournal: CmsEditJournalEntry[];
  adminSessions: CmsTrackedSession[];
  siteSessions: CmsTrackedSession[];
}) {
  const activeSessions = [...adminSessions, ...siteSessions].filter(activeOnly);
  const publishes = activityLog.filter((entry) => entry.action.includes("publish") || entry.action.includes("restore"));
  const draftEdits = activityLog.filter((entry) => entry.action.includes("draft") || entry.action.includes("edit"));

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        <Metric icon={<UserCheck className="h-5 w-5" />} label="Currently signed in" value={String(activeSessions.length)} />
        <Metric icon={<Activity className="h-5 w-5" />} label="Recent changes" value={String(activityLog.length)} />
        <Metric icon={<ShieldAlert className="h-5 w-5" />} label="Published actions" value={String(publishes.length)} />
        <Metric icon={<Clock3 className="h-5 w-5" />} label="Journal entries" value={String(editJournal.length)} />
      </div>

      <Panel title="Currently Signed In">
        <div className="divide-y divide-white/10">
          {activeSessions.length ? activeSessions.map((session) => (
            <div key={`${session.type}-${session.id}`} className="grid gap-3 py-4 md:grid-cols-[1fr_140px_160px] md:items-center">
              <div>
                <p className="font-bold text-white">{session.name}</p>
                <p className="text-sm text-muted">{session.email}</p>
              </div>
              <span className="w-fit border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-gold">
                {session.type} · {session.role.replace(/_/g, " ")}
              </span>
              <p className="text-xs text-muted">{timeAgo(session.lastSeenAt)}{session.route ? ` · ${session.route}` : ""}</p>
            </div>
          )) : (
            <p className="py-5 text-sm italic text-muted">No active tracked sessions yet.</p>
          )}
        </div>
      </Panel>

      <div className="grid gap-8 xl:grid-cols-2">
        <Panel title="Recent Changes">
          <Timeline entries={activityLog.slice(0, 18)} />
        </Panel>
        <Panel title="Edit Journal">
          <div className="divide-y divide-white/10">
            {editJournal.slice(0, 18).map((entry) => (
              <div key={entry.id} className="py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-bold text-white">{entry.summary}</p>
                  <span className="text-xs text-muted">{timeAgo(entry.createdAt)}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{entry.actor} · {entry.route} · {entry.afterOverrides.length} current override(s)</p>
              </div>
            ))}
            {!editJournal.length && <p className="py-5 text-sm italic text-muted">No edit journal entries yet.</p>}
          </div>
        </Panel>
      </div>

      <Panel title="Risky / Unpreviewed Draft Signals">
        <div className="divide-y divide-white/10">
          {draftEdits.slice(0, 10).map((entry) => (
            <div key={entry.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
              <div>
                <p className="font-bold text-white">{entry.summary}</p>
                <p className="text-sm text-muted">{entry.actor}{entry.route ? ` · ${entry.route}` : ""}</p>
              </div>
              <span className="border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-amber-100">
                Review before publish
              </span>
            </div>
          ))}
          {!draftEdits.length && <p className="py-5 text-sm italic text-muted">No draft-risk signals logged yet.</p>}
        </div>
      </Panel>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border border-gold/20 bg-bg-deep p-5">
      <div className="mb-4 flex items-center justify-between text-gold">
        {icon}
        <span className="text-[10px] font-black uppercase tracking-widest text-muted">{label}</span>
      </div>
      <p className="font-display text-4xl font-black text-white">{value}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border border-gold/20 bg-black/25 p-6">
      <h3 className="mb-4 font-display text-2xl font-black text-gold">{title}</h3>
      {children}
    </section>
  );
}

function Timeline({ entries }: { entries: CmsActivityEntry[] }) {
  return (
    <div className="divide-y divide-white/10">
      {entries.map((entry) => (
        <div key={entry.id} className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold text-white">{entry.summary}</p>
            <span className="text-xs text-muted">{timeAgo(entry.createdAt)}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{entry.actor}{entry.route ? ` · ${entry.route}` : ""} · {entry.action.replace(/_/g, " ")}</p>
        </div>
      ))}
      {!entries.length && <p className="py-5 text-sm italic text-muted">No activity logged yet.</p>}
    </div>
  );
}
