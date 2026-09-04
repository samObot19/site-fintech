"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Job } from "@/lib/data";

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

export function EngagementTable({ jobs }: { jobs: Job[] }) {
  return (
    <div className="border border-rule">
      {/* Table header */}
      <div className="hidden md:grid grid-cols-[60px_180px_1fr_140px] gap-x-6 px-6 py-3 border-b border-rule bg-panel-2/40 mono text-[9.5px] tracking-[0.2em] uppercase text-ink-3">
        <span>Ref</span>
        <span>Period</span>
        <span>Engagement</span>
        <span className="text-right">Industry</span>
      </div>

      {jobs.map((job, i) => (
        <JobRow key={job.ref} job={job} index={i} />
      ))}
    </div>
  );
}

function JobRow({ job, index }: { job: Job; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className="grid grid-cols-1 md:grid-cols-[60px_180px_1fr_140px] gap-x-6 gap-y-3 px-6 py-7 border-t border-rule first:border-t-0 hover:bg-panel/40 transition-colors"
    >
      <div className="mono text-[11px] tracking-[0.2em] text-accent uppercase">
        {job.ref}
      </div>

      <div className="mono text-[11px] text-ink-2 tracking-[0.04em] leading-relaxed">
        <div>{job.from}</div>
        <div className="text-ink-3">→ {job.to}</div>
        <div className="text-ink-3 uppercase tracking-[0.14em] text-[10px] mt-1.5">
          {job.place}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h4 className="m-0 font-sans font-normal text-[19px] tracking-[-0.01em] text-ink">
            {job.role}
          </h4>
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mono text-[11px] tracking-[0.06em] text-accent inline-flex items-center gap-1 hover:underline underline-offset-4"
          >
            {job.company}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <ul className="list-none m-0 p-0 grid gap-2 max-w-[70ch] mt-3">
          {job.bullets.map((b, i) => (
            <li key={i} className="grid grid-cols-[16px_1fr] gap-2 text-ink-2 text-[14px] leading-[1.55]">
              <span className="text-ink-3 mono text-[11px] pt-[3px]">·</span>
              <span>{renderStrong(b.text, b.strong)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mono text-[10.5px] tracking-[0.06em] text-ink-3 md:text-right leading-relaxed">
        {job.industry}
      </div>
    </motion.article>
  );
}
