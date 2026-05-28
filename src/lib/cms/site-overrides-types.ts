export type SiteOverrideElementType = "text" | "image" | "svg_text" | "background_image";
export type SiteOverrideFingerprintStatus = "ok" | "needs_review";

export interface SiteOverrideRecord {
  id: string;
  route: string;
  elementType: SiteOverrideElementType;
  elementKind?: string;
  selector: string;
  originalFingerprint: string;
  value?: string;
  sourceOriginalValue?: string;
  altText?: string;
  deleted?: boolean;
  previewedAt?: string;
  fingerprintStatus?: SiteOverrideFingerprintStatus;
  updatedAt: string;
  updatedBy?: string;
}

export interface SiteOverrideVersion {
  id: string;
  route: string;
  label: string;
  overrides: SiteOverrideRecord[];
  publishedAt: string;
  publishedBy: string;
}

export interface SiteRouteOverrideState {
  published: SiteOverrideRecord[];
  draft?: SiteOverrideRecord[];
  versions?: SiteOverrideVersion[];
  updatedAt?: string;
  updatedBy?: string;
}

export interface SiteOverrideSnapshot {
  version: 1;
  updatedAt: string;
  routes: Record<string, SiteRouteOverrideState>;
}

export interface SiteOverridePayload {
  route: string;
  draft: SiteOverrideRecord[];
  published: SiteOverrideRecord[];
  versions: SiteOverrideVersion[];
}
