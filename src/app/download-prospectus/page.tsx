import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FilmstripDivider } from "@/components/visuals/FilmstripDivider";
import { ProspectusForm } from "@/components/forms/ProspectusForm";

export const metadata: Metadata = {
  title: "Download Partnership Prospectus · SA Film Academy",
  description: "Request and download the SA Film Academy partnership prospectus.",
};

export default function DownloadProspectusPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg">
      <PageHero
        eyebrow="Partnership Prospectus"
        title="Download the _Prospectus._"
        subtitle="For production companies, funders, partners and board stakeholders reviewing the SA Film Academy 360 marketing strategy."
        imageSrc="/images/ai/foundation-ecosystem/stakeholder-roundtable.webp"
        imageAlt="Professional Black South African film-sector stakeholders in a strategic roundtable"
      />
      <FilmstripDivider />
      <section className="section-padding container-max">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4">Gated Download</p>
            <h2 className="mb-5 text-3xl font-black md:text-5xl">A board-safe summary for the room.</h2>
            <p className="text-muted">
              The prospectus captures the partnership story, route map, commercial value, and governance logic
              without replacing the full live strategy.
            </p>
          </div>
          <ProspectusForm />
        </div>
      </section>
    </main>
  );
}
