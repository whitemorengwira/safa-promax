import Link from "next/link";
import type { CmsPage, CmsPageWorkingCopy } from "@/lib/admin/types";

export function mergeCmsPage(page: CmsPage, workingCopy?: CmsPageWorkingCopy) {
  return {
    ...page,
    ...(workingCopy ?? {}),
  };
}

export function CmsRenderedPage({
  page,
  preview = false,
}: {
  page: CmsPage & CmsPageWorkingCopy;
  preview?: boolean;
}) {
  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${page.image}")` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/10" />
        <div className="absolute inset-0 bg-red-deep/10" />

        <div className="container-max relative z-10 pb-20 pt-28">
          <p className="eyebrow mb-5">{page.category}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-none text-white md:text-7xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-xl italic leading-relaxed text-gold-soft">
            {page.heroSubtitle}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{page.summary}</p>
          {!preview && (
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gold px-7 py-4 text-xs font-black uppercase tracking-widest text-bg transition hover:bg-gold-soft"
              >
                Contact SAFA
              </Link>
              <Link
                href="/strategy-index"
                className="border border-gold px-7 py-4 text-xs font-black uppercase tracking-widest text-gold transition hover:bg-gold hover:text-bg"
              >
                View Strategy
              </Link>
            </div>
          )}
        </div>

        {preview && (
          <div className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
            CMS Preview
          </div>
        )}
      </section>
    </main>
  );
}
