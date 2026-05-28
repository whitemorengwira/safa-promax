import type { AdminRole } from "./types";

const editRoles: AdminRole[] = ["editor", "super_admin", "approver", "admin", "super-admin"];
const approvalRoles: AdminRole[] = ["super_admin", "approver", "admin", "super-admin"];
const adminRoles: AdminRole[] = ["super_admin", "admin", "super-admin"];
const superAdminRoles: AdminRole[] = ["super_admin", "super-admin"];

export function canEdit(role: AdminRole) {
  return editRoles.includes(role);
}

export function canPublish(role: AdminRole) {
  return approvalRoles.includes(role);
}

export function canManageUsers(role: AdminRole) {
  return adminRoles.includes(role);
}

export function isSuperAdmin(role: AdminRole) {
  return superAdminRoles.includes(role);
}

export function canManageSiteAccess(role: AdminRole) {
  return isSuperAdmin(role);
}
