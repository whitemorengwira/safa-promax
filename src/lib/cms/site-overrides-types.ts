export type SiteOverrideElementType = "text" | "image";

export interface SiteOverrideRecord {
  id: string;
  route: string;
  elementType: SiteOverrideElementType;
  selector: string;
  originalFingerprint: string;
  value?: string;
  altText?: string;
  deleted?: boolean;
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
