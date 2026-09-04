"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "@/lib/data";

function renderStrong(text: string, strong?: string[]) {
  if (!strong || strong.length === 0) return text;
  let out: (string | JSX.Element)[] = [text];
  strong.forEach((s, si) => {
    const next: (string | JSX.Element)[] = [];
    out.forEach((chunk) => {
      if (typeof chunk !== "string") return next.push(chunk);
      const parts = chunk.split(s);
      parts.forEach((p, idx) => {
        if (p) next.push(p);
        if (idx < parts.length - 1)
          next.push(
            <strong key={`${si}-${idx}`} className="text-accent font-medium">
              {s}
            </strong>
          );
      });
    });
    out = next;
  });
  return out;
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="border border-rule bg-panel/40">
      {/* Header row — report-style */}
      <header className="grid grid-cols-2 sm:grid-cols-4 border-b border-rule">
        <HeaderCell k="Ref" v="CS-01" />
        <HeaderCell k="Status" v={project.status} signal />
        <HeaderCell k="Period" v={project.dates} />
        <HeaderCell k="Class" v="Featured Engagement" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
        {/* Main content column */}
        <div className="p-7 sm:p-10">
          <div className="mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-3">
            Engagement · 01
          </div>
          <h3
            className="m-0 mb-3 font-sans font-light tracking-tighter text-ink"
            style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.02 }}
          >
            {project.name}
          </h3>
          {project.tagline && (
            <p className="text-ink-2 max-w-[52ch] text-[15.5px] leading-relaxed mb-8">
              {project.tagline}
            </p>
          )}

          {project.loomEmbedId && <LoomPoster embedId={project.loomEmbedId} />}

          <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-3 mb-3">
            Execution
          </div>
          <ul className="list-none p-0 m-0 mb-8 grid gap-3.5 max-w-[64ch]">
            {project.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                className="grid grid-cols-[28px_1fr] gap-3 text-[15px] leading-[1.55] text-ink-2"
              >
                <span className="mono text-accent text-[11px] tracking-[0.14em] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{renderStrong(b.text, b.strong)}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-rule">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2.5 mono text-[11px] tracking-[0.16em] uppercase px-4 py-3 border transition-colors ${
                  l.primary
                    ? "bg-accent text-ground border-accent hover:bg-accent-2 hover:border-accent-2"
                    : "text-ink border-rule-strong hover:text-accent hover:border-accent"
                }`}
              >
                {l.label}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Right rail: stack */}
        <aside className="border-t lg:border-t-0 lg:border-l border-rule bg-panel-2/40 p-6 sm:p-7">
          <div className="mono text-[10px] tracking-[0.2em] uppercase text-ink-3 mb-4">
            Instruments
          </div>
          <ul className="list-none m-0 p-0 grid gap-2 mono text-[12px] text-ink">
            {project.stack.map((s) => (
              <li key={s} className="border-l border-accent/40 pl-3">
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}

function HeaderCell({ k, v, signal }: { k: string; v: string; signal?: boolean }) {
  return (
    <div className="p-4 sm:p-5 border-b border-rule sm:border-b-0 sm:[&:not(:last-child)]:border-r sm:[&:not(:last-child)]:border-rule">
      <div className="mono text-[9.5px] tracking-[0.2em] uppercase text-ink-3 mb-1">
        {k}
      </div>
      <div className="mono text-[12px] tracking-[0.06em] text-ink flex items-center gap-2">
        {signal && <span className="signal-dot w-1.5 h-1.5 rounded-full bg-signal inline-block" />}
        {v}
      </div>
    </div>
  );
}

function LoomPoster({ embedId }: { embedId: string }) {
  return (
    <a
      href={`https://www.loom.com/share/${embedId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch demo on Loom"
      className="group relative block w-full aspect-[16/10] bg-ground border border-rule-strong overflow-hidden mb-8 isolate"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 70% at 30% 30%, rgb(var(--accent) / 0.18) 0%, transparent 60%), radial-gradient(80% 60% at 80% 80%, rgb(var(--signal) / 0.06) 0%, transparent 55%)",
        }}
      />
      {/* Grid mesh */}
      <div
        className="absolute inset-0 z-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--rule-strong) / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--rule-strong) / 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 55%, black 25%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 55%, black 25%, transparent 78%)",
        }}
      />

      {/* Ticker header */}
      <div className="absolute left-5 top-4 z-10 flex items-center gap-3 mono text-[10.5px] tracking-[0.16em] text-ink-3 uppercase">
        <span className="signal-dot w-1.5 h-1.5 rounded-full bg-signal inline-block" />
        Live · Loom
      </div>
      <div className="absolute right-5 top-4 z-10 mono text-[10.5px] tracking-[0.18em] text-ink-3 uppercase">
        venturescope · walkthrough
      </div>

      {/* Play button */}
      <div className="absolute inset-0 z-10 grid place-items-center p-7">
        <div className="relative w-[80px] h-[80px] rounded-full bg-accent text-ground grid place-items-center group-hover:scale-105 transition-transform duration-300 ease-precision shadow-[0_20px_50px_-20px_rgb(212_169_81/0.55)]">
          <Play className="w-6 h-6 ml-1 fill-current" />
          <span className="absolute inset-0 rounded-full border border-accent animate-ping [animation-duration:2.6s]" aria-hidden />
        </div>
      </div>

      {/* Bottom timecode */}
      <div className="absolute left-5 bottom-4 z-10 mono text-[10.5px] tracking-[0.14em] text-ink-3 uppercase">
        watch → full case study
      </div>
      <div className="absolute right-5 bottom-4 z-10 mono text-[10.5px] tracking-[0.14em] text-accent uppercase">
        00:00 · 4K
      </div>
    </a>
  );
}
