export type AdminRole = "super_admin" | "editor" | "viewer" | "approver" | "admin" | "super-admin";
export type AdminStatus = "pending" | "active" | "suspended";
export type PageStatus = "draft" | "review" | "published";

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  status: AdminStatus;
  passwordHash?: string;
  createdAt: string;
  approvedAt?: string;
}

export interface CmsPage {
  slug: string;
  title: string;
  navLabel?: string;
  route: string;
  category: string;
  status: PageStatus;
  lockedImage: boolean;
  visibleInNavigation?: boolean;
  sortOrder?: number;
  template?: "standard" | "landing" | "tool" | "cms";
  heroTitle: string;
  heroSubtitle: string;
  summary: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  sections?: CmsEditableSection[];
  updatedAt: string;
  publishedAt?: string;
  workingCopy?: CmsPageWorkingCopy;
  draft?: Partial<Omit<CmsPage, "draft">>;
}

export interface CmsEditableSection {
  id: string;
  label: string;
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  locked?: boolean;
}

export interface CmsMediaAsset {
  id: string;
  title: string;
  type: "image" | "document" | "video";
  url: string;
  source: string;
  locked: boolean;
  tags: string[];
  storagePath?: string;
  mimeType?: string;
  size?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CmsPageWorkingCopy {
  title?: string;
  navLabel?: string;
  route?: string;
  category?: string;
  visibleInNavigation?: boolean;
  sortOrder?: number;
  template?: "standard" | "landing" | "tool" | "cms";
  heroTitle?: string;
  heroSubtitle?: string;
  summary?: string;
  image?: string;
  seoTitle?: string;
  seoDescription?: string;
  sections?: CmsEditableSection[];
  updatedAt?: string;
}

export interface CmsApproval {
  id: string;
  pageSlug: string;
  requester: string;
  reviewer?: string;
  status: "pending" | "approved" | "rejected";
  summary: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface CmsAuditLogEntry {
  id: string;
  action: string;
  actor: string;
  summary: string;
  createdAt: string;
}

export interface ContentStore {
  updatedAt: string;
  siteSettings: {
    siteName: string;
    publicUrl: string;
    brandLine: string;
    cmsMode: string;
    requiresApproval: boolean;
  };
  pages: CmsPage[];
  media: CmsMediaAsset[];
  users: AdminUser[];
  approvals: CmsApproval[];
  auditLog: CmsAuditLogEntry[];
}

export interface AdminSession {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  status: AdminStatus;
  issuedAt: number;
  accessToken?: string;
  refreshToken?: string;
  provider?: "supabase" | "local";
}
