"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { METRICS } from "@/lib/data";

export function KPIStrip() {
  return (
    <section aria-label="Key production metrics" className="border-b border-rule">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <KPI key={m.label} metric={m} index={i} />
        ))}
      </div>
    </section>
  );
}

function KPI({ metric, index }: { metric: (typeof METRICS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative p-7 sm:p-8 border-b border-rule sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-rule lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-rule bg-panel/30 hover:bg-panel/60 transition-colors"
    >
      {/* Cell coordinate — subtle */}
      <div className="absolute top-3 right-4 mono text-[9.5px] tracking-[0.2em] text-ink-3">
        0{index + 1} / 04
      </div>

      <div className="mono text-[10px] tracking-[0.18em] uppercase text-accent mb-4">
        Metric · 0{index + 1}
      </div>

      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="num font-sans text-ink font-extralight tracking-tighter"
          style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 0.95 }}>
          <CountUp target={metric.value} play={inView} />
        </span>
        {metric.unit && (
          <span className="mono text-accent text-[13px] tracking-wide">
            {metric.unit}
          </span>
        )}
      </div>

      <div className="text-ink text-[14px] leading-snug font-medium mb-1.5">
        {metric.label}
      </div>
      <div className="mono text-[10.5px] tracking-[0.06em] text-ink-3 leading-relaxed">
        {metric.caption}
      </div>
    </motion.div>
  );
}

function CountUp({ target, play }: { target: string; play: boolean }) {
  const clean = target.replace(/,/g, "");
  const numeric = parseFloat(clean);
  const isNumeric = !isNaN(numeric);

  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => {
    if (!isNumeric) return target;
    if (numeric >= 1000) return Math.round(v).toLocaleString();
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (!play || !isNumeric) return;
    const controls = animate(mv, numeric, { duration: 1.4, ease: [0.2, 0.7, 0.2, 1] });
    return () => controls.stop();
  }, [play, isNumeric, numeric, mv]);

  if (!isNumeric) return <span>{target}</span>;
  return <motion.span>{display}</motion.span>;
}
