"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function EngagementRow({ project, index }: { project: Project; index: number }) {
  const ref = `CS-${String(index + 2).padStart(2, "0")}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-x-8 gap-y-3 p-6 sm:p-7 border border-rule bg-panel/30 hover:bg-panel/60 transition-colors"
    >
      <div className="flex flex-col gap-2">
        <span className="mono text-[10.5px] tracking-[0.2em] uppercase text-accent">
          {ref}
        </span>
        <span className="mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
          {project.dates}
        </span>
        <span className="mono text-[10px] tracking-[0.14em] uppercase text-ink-3 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-ink-3 inline-block" />
          {project.status}
        </span>
      </div>

      <div>
        <h4 className="m-0 mb-2 font-sans font-normal text-[20px] tracking-[-0.01em] text-ink">
          {project.name}
        </h4>
        {project.bullets.map((b, i) => (
          <p key={i} className="m-0 mb-3 text-ink-2 text-[14.5px] leading-[1.6] max-w-[62ch]">
            {b.text}
          </p>
        ))}
        <div className="mono text-[10.5px] text-ink-3 tracking-[0.06em] mt-3">
          {project.stack.join(" · ")}
        </div>
      </div>

      <div className="self-start mt-2 lg:mt-0">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mono text-[10.5px] tracking-[0.18em] uppercase text-ink border border-rule-strong px-3 py-2 hover:text-ground hover:bg-accent hover:border-accent transition-colors"
          >
            {l.label}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        ))}
      </div>
    </motion.article>
  );
}
