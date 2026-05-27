import { notFound } from "next/navigation";
import { verifyPreviewToken } from "@/lib/cms/preview-token";
import { getCmsPageByRoute } from "@/lib/cms/server";

type PreviewPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

function valueOf(input: string | string[] | undefined) {
  return Array.isArray(input) ? input[0] : input;
}

export default async function CmsPreviewPage({ searchParams }: PreviewPageProps) {
  const params = await searchParams;
  const route = valueOf(params.route) || "/";
  const token = valueOf(params.token) || "";
  const verified = verifyPreviewToken(token, route);
  if (!verified) notFound();

  const page = await getCmsPageByRoute(route, true);
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-bg text-text">
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <img src={page.hero.backgroundImage} alt={page.hero.altText} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
        <div className="container-max relative z-10 pb-20 pt-32">
          <p className="eyebrow mb-5">CMS Preview</p>
          <h1 dangerouslySetInnerHTML={{ __html: page.hero.headline }} />
          <p className="mt-6 max-w-3xl font-body text-xl italic leading-relaxed text-gold-soft" dangerouslySetInnerHTML={{ __html: page.hero.subheadline }} />
        </div>
      </section>
      {page.sections.map((section, index) => (
        <section key={section.id} className={`section-padding ${index % 2 === 0 ? "bg-bg" : "bg-surface/20"}`}>
          <div className="container-max">
            <p className="eyebrow mb-4">{section.label}</p>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-5">
                {(section.fields ?? []).map((field) => (
                  <div key={field.id} className="text-lg leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: field.value }} />
                ))}
              </div>
              {section.metrics?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.metrics.map((metric) => (
                    <div key={metric.id} className="border border-line bg-surface/40 p-5">
                      <p className="text-3xl font-black text-gold">{metric.number}</p>
                      <p className="mt-2 text-sm font-bold text-text">{metric.label}</p>
                      <p className="mt-2 text-sm text-muted">{metric.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
