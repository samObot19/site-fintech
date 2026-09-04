import { TerminalBar } from "@/components/TerminalBar";
import { DossierHero } from "@/components/DossierHero";
import { StatusStrip } from "@/components/StatusStrip";
import { KPIStrip } from "@/components/KPIStrip";
import { SectionHead } from "@/components/SectionHead";
import { CaseStudy } from "@/components/CaseStudy";
import { EngagementRow } from "@/components/EngagementRow";
import { EngagementTable } from "@/components/EngagementTable";
import { Instruments } from "@/components/Instruments";
import { TrackRecord } from "@/components/TrackRecord";
import { SparkTrajectory } from "@/components/SparkTrajectory";
import { CallSheet } from "@/components/CallSheet";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";
import { PROJECTS, JOBS } from "@/lib/data";

export default function Page() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <TerminalBar />

      <main className="page-shell">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <DossierHero />
        </div>

        <StatusStrip />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <KPIStrip />

          {/* Career trajectory */}
          <section className="pt-16 pb-10">
            <SectionHead mark="§ 01" title="Trajectory" aside="2022 → present · discrete milestones" />
            <SparkTrajectory />
          </section>

          {/* Engagements */}
          <section id="engagements" className="pt-8 pb-10 border-t border-rule">
            <SectionHead mark="§ 02" title="Engagements" aside="Featured case study + shipped work" />
            <div className="mb-8">
              <CaseStudy project={featured} />
            </div>
            <div className="grid gap-4">
              {rest.map((p, i) => (
                <EngagementRow key={p.id} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Engagement history — experience */}
          <section id="history" className="pt-16 pb-10 border-t border-rule">
            <SectionHead mark="§ 03" title="History" aside="Three years shipping" />
            <EngagementTable jobs={JOBS} />
          </section>

          {/* Instruments — capabilities */}
          <section id="instruments" className="pt-16 pb-10 border-t border-rule">
            <SectionHead mark="§ 04" title="Instruments" aside="Backend-first stack" />
            <Instruments />
          </section>

          {/* Track record — recognitions */}
          <section className="pt-16 pb-10 border-t border-rule">
            <SectionHead mark="§ 05" title="Track Record" aside="Education & distinctions" />
            <TrackRecord />
          </section>

          {/* Contact */}
          <section id="contact" className="pt-16 pb-16 border-t border-rule">
            <SectionHead mark="§ 06" title="Contact" aside="Open to full-time roles" />
            <CallSheet />
          </section>
        </div>

        <Ticker />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <Footer />
        </div>
      </main>
    </>
  );
}
