import type { AdminRole } from "./types";

const editRoles: AdminRole[] = ["editor", "super_admin", "approver", "admin", "super-admin"];
const approvalRoles: AdminRole[] = ["editor", "super_admin", "approver", "admin", "super-admin"];
const adminRoles: AdminRole[] = ["super_admin", "admin", "super-admin"];

export function canEdit(role: AdminRole) {
  return editRoles.includes(role);
}

export function canPublish(role: AdminRole) {
  return approvalRoles.includes(role);
}

export function canManageUsers(role: AdminRole) {
  return adminRoles.includes(role);
}
