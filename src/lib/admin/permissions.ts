import type { AdminRole } from "./types";

const editRoles: AdminRole[] = ["editor", "approver", "admin", "super-admin"];
const approvalRoles: AdminRole[] = ["editor", "approver", "admin", "super-admin"];
const adminRoles: AdminRole[] = ["admin", "super-admin"];

export function canEdit(role: AdminRole) {
  return editRoles.includes(role);
}

export function canPublish(role: AdminRole) {
  return approvalRoles.includes(role);
}

export function canManageUsers(role: AdminRole) {
  return adminRoles.includes(role);
}
