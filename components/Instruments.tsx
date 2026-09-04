"use client";

import { motion } from "framer-motion";
import { INSTRUMENTS } from "@/lib/data";

export function Instruments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-rule">
      {INSTRUMENTS.map((cap, i) => (
        <motion.div
          key={cap.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ delay: (i % 3) * 0.05 + Math.floor(i / 3) * 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className={`
            p-6 sm:p-7 border-b border-rule
            md:[&:not(:nth-child(2n+1))]:border-l md:[&:not(:nth-child(2n+1))]:border-rule
            lg:[&]:border-l-0
            lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-rule
            hover:bg-panel/40 transition-colors
          `}
        >
          <div className="flex items-baseline justify-between mb-4">
            <div className="mono text-[10.5px] tracking-[0.18em] uppercase text-accent">
              {cap.title}
            </div>
            <div className="mono text-[9.5px] tracking-[0.16em] text-ink-3">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
          <ul className="list-none m-0 p-0 grid grid-cols-1 gap-1.5">
            {cap.items.map((item) => (
              <li key={item} className="mono text-[12.5px] text-ink flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent/60 inline-block" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
