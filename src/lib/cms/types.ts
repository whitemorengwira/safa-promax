export type CmsRole = "super_admin" | "editor";
export type CmsPageStatus = "draft" | "published";
export type CmsFieldType = "text" | "rich_text" | "image" | "url";
export type CmsSectionType = "hero" | "rich_text" | "image" | "metrics" | "credits" | "table";

export interface CmsSession {
  id: string;
  email: string;
  name: string;
  role: CmsRole;
  status: "active";
  issuedAt: number;
  accessToken?: string;
  refreshToken?: string;
  provider: "supabase" | "local";
}

export interface CmsHero {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  backgroundImage: string;
  altText: string;
}

export interface CmsSeo {
  title: string;
  description: string;
}

export interface CmsField {
  id: string;
  label: string;
  type: CmsFieldType;
  value: string;
  altText?: string;
}

export interface CmsMetric {
  id: string;
  number: string;
  label: string;
  description: string;
}

export interface CmsProductionCredit {
  id: string;
  title: string;
  category: string;
  posterImage: string;
}

export interface CmsSection {
  id: string;
  label: string;
  type: CmsSectionType;
  collapsed: boolean;
  fields?: CmsField[];
  metrics?: CmsMetric[];
  credits?: CmsProductionCredit[];
}

export interface CmsPageDocument {
  slug: string;
  title: string;
  route: string;
  status: CmsPageStatus;
  seo: CmsSeo;
  hero: CmsHero;
  sections: CmsSection[];
  updatedAt: string;
}

export interface CmsVersion {
  id: string;
  pageId: string;
  slug: string;
  label: string;
  content: CmsPageDocument;
  publishedAt: string;
  publishedBy: string;
}

export interface CmsNavigationItem {
  id: string;
  label: string;
  href: string;
  parentId: string | null;
  sortOrder: number;
  isVisible: boolean;
}

export interface CmsBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImageUrl: string;
  author: string;
  tags: string[];
  status: CmsPageStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CmsMediaItem {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  altText?: string;
  uploadedBy?: string;
  uploadedAt: string;
}

export interface CmsAnnouncement {
  id: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  backgroundImage: string;
  isActive: boolean;
  updatedAt: string;
}

export interface CmsSettings {
  siteName: string;
  metaDescription: string;
  ogImage: string;
  footerText: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks: Record<string, string>;
}

export interface CmsSnapshot {
  pages: CmsPageDocument[];
  drafts?: Record<string, CmsPageDocument>;
  versions: CmsVersion[];
  navigation: CmsNavigationItem[];
  blogPosts: CmsBlogPost[];
  media: CmsMediaItem[];
  announcements: CmsAnnouncement[];
  productions: CmsProductionCredit[];
  settings: CmsSettings;
  source: "supabase" | "json";
}

export type CmsModuleName =
  | "pages"
  | "navigation"
  | "blog-posts"
  | "media"
  | "announcements"
  | "productions"
  | "settings";
