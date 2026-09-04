"use client";

import { motion } from "framer-motion";
import { TRACK_RECORD } from "@/lib/data";

export function TrackRecord() {
  return (
    <div className="border border-rule">
      {TRACK_RECORD.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-[60px_120px_1fr_auto] gap-x-6 gap-y-2 px-6 py-6 border-t border-rule first:border-t-0 hover:bg-panel/40 transition-colors items-start"
        >
          <div className="mono text-[10.5px] tracking-[0.2em] text-accent uppercase">{r.ref}</div>
          <div className="mono text-[10.5px] text-ink-3 tracking-[0.04em] pt-0.5">{r.date}</div>
          <div>
            <h5 className="m-0 mb-1 font-sans text-[16px] font-medium tracking-[-0.005em] text-ink">
              {r.title}
            </h5>
            <p className="m-0 text-ink-2 text-[13.5px] leading-[1.55] max-w-[62ch]">{r.body}</p>
          </div>
          {r.href ? (
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[9.5px] tracking-[0.18em] uppercase text-ink-3 hover:text-accent transition-colors pt-1"
            >
              {r.aside} ↗
            </a>
          ) : (
            <span className="mono text-[9.5px] tracking-[0.18em] uppercase text-ink-3 pt-1">
              {r.aside}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
