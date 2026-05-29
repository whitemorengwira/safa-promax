export type GalleryAssetOrigin = "public" | "cms" | "merged";

export interface GalleryAsset {
  id: string;
  url: string;
  title: string;
  source: string;
  tags: string[];
  locked: boolean;
  width: number;
  height: number;
  size: number;
  extension: string;
  usedOn: string[];
  origin: GalleryAssetOrigin;
  cmsId?: string;
  type: "image" | "document" | "video";
}

export interface GalleryResponse {
  assets: GalleryAsset[];
  generatedAt: string;
}
