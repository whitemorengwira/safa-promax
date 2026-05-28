export type SiteAccessRole = "board_member" | "executive" | "partner_funder" | "production_company" | "viewer";
export type SiteAccessStatus = "pending" | "active" | "suspended" | "revoked";

export interface SiteAccessUser {
  id: string;
  email: string;
  name: string;
  organisation: string;
  role: SiteAccessRole;
  status: SiteAccessStatus;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  revokedAt?: string;
  approvedBy?: string;
}

export interface SiteAccessAuditEntry {
  id: string;
  action: string;
  actor: string;
  summary: string;
  createdAt: string;
}

export interface SiteAccessSession {
  id: string;
  email: string;
  name: string;
  organisation: string;
  role: SiteAccessRole;
  status: "active";
  issuedAt: number;
}

export interface SiteAccessState {
  updatedAt: string;
  users: SiteAccessUser[];
  auditLog: SiteAccessAuditEntry[];
}

export type SafeSiteAccessUser = Omit<SiteAccessUser, "passwordHash">;

export const siteAccessRoles: SiteAccessRole[] = [
  "board_member",
  "executive",
  "partner_funder",
  "production_company",
  "viewer",
];

export const siteAccessStatuses: SiteAccessStatus[] = ["pending", "active", "suspended", "revoked"];

export const siteAccessRoleLabels: Record<SiteAccessRole, string> = {
  board_member: "Board Member",
  executive: "Executive",
  partner_funder: "Partner / Funder",
  production_company: "Production Company",
  viewer: "Viewer",
};
