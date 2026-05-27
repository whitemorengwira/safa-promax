import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { canEdit, canPublish } from "@/lib/admin/permissions";
import {
  loadCmsSnapshot,
  publishCmsModule,
  publishCmsPage,
  restoreCmsVersion,
  saveCmsDraft,
  saveCmsMediaItems,
  saveCmsModule,
  saveCmsNavigation,
} from "@/lib/cms/server";
import type { CmsPageDocument, CmsSession } from "@/lib/cms/types";

function asCmsSession(session: Awaited<ReturnType<typeof getAdminSession>>): CmsSession {
  if (!session) throw new Error("Admin sign-in is required.");
  return {
    id: session.id,
    email: session.email,
    name: session.name,
    role: session.role === "super_admin" || session.role === "editor" ? session.role : "editor",
    status: "active",
    issuedAt: session.issuedAt,
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
    provider: session.provider === "supabase" ? "supabase" : "local",
  };
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const snapshot = await loadCmsSnapshot();
  return NextResponse.json({ snapshot, user: session });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Admin sign-in is required." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const action = String(body?.action ?? "");

  try {
    if (action === "save_page_draft") {
      if (!canEdit(session.role)) {
        return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
      }
      const page = await saveCmsDraft(String(body.slug), body.content as CmsPageDocument, asCmsSession(session));
      revalidatePath("/admin");
      return NextResponse.json({ page });
    }

    if (action === "publish_page") {
      if (!canPublish(session.role)) {
        return NextResponse.json({ error: "Publish access is required." }, { status: 403 });
      }
      const result = await publishCmsPage(String(body.slug), body.content as CmsPageDocument, asCmsSession(session));
      revalidatePath("/");
      revalidatePath(result.page.route);
      return NextResponse.json(result);
    }

    if (action === "restore_version") {
      if (!canPublish(session.role)) {
        return NextResponse.json({ error: "Publish access is required." }, { status: 403 });
      }
      const result = await restoreCmsVersion(String(body.versionId), asCmsSession(session));
      revalidatePath(result.page.route);
      return NextResponse.json(result);
    }

    if (action === "save_navigation") {
      if (!canEdit(session.role)) {
        return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
      }
      const navigation = await saveCmsNavigation(body.items ?? []);
      return NextResponse.json({ navigation });
    }

    if (action === "publish_navigation") {
      if (!canPublish(session.role)) {
        return NextResponse.json({ error: "Publish access is required." }, { status: 403 });
      }
      const navigation = await saveCmsNavigation(body.items ?? []);
      const result = await publishCmsModule("navigation", navigation);
      revalidatePath("/");
      return NextResponse.json({ navigation, ...result });
    }

    if (action === "save_media") {
      if (!canEdit(session.role)) {
        return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
      }
      const media = await saveCmsMediaItems(body.items ?? []);
      return NextResponse.json({ media });
    }

    if (action === "save_module" || action === "publish_module") {
      const moduleName = String(body.module);
      if (!["blog-posts", "announcements", "productions", "settings"].includes(moduleName)) {
        return NextResponse.json({ error: "Unknown CMS module." }, { status: 400 });
      }
      if (!canEdit(session.role)) {
        return NextResponse.json({ error: "Editor access is required." }, { status: 403 });
      }

      const payload = await saveCmsModule(
        moduleName as "blog-posts" | "announcements" | "productions" | "settings",
        body.payload,
      );
      if (action === "publish_module") {
        if (!canPublish(session.role)) {
          return NextResponse.json({ error: "Publish access is required." }, { status: 403 });
        }
        const result = await publishCmsModule(
          moduleName as "blog-posts" | "announcements" | "productions" | "settings",
          payload,
        );
        revalidatePath("/");
        return NextResponse.json({ payload, ...result });
      }

      return NextResponse.json({ payload });
    }

    return NextResponse.json({ error: "Unknown CMS action." }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "CMS operation failed." },
      { status: 500 },
    );
  }
}
