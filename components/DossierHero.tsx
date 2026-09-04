"use client";

import { motion } from "framer-motion";
import { CONTACT, HEADER, HERO_TAGLINE } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.1, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export function DossierHero() {
  return (
    <section id="dossier" className="pt-14 pb-16 border-b border-rule">
      {/* Subject profile top matter */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={0}
        variants={fade}
        className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-2 mb-10 pb-6 border-b border-rule/60"
      >
        <span className="eyebrow">Subject Dossier</span>
        <span className="mono text-[11px] tracking-[0.14em] uppercase text-ink-3 sm:justify-self-center">
          {HEADER.role}
        </span>
        <span className="mono text-[11px] tracking-[0.14em] uppercase text-ink-3 sm:justify-self-end">
          {CONTACT.location} · {CONTACT.timezone}
        </span>
      </motion.div>

      {/* Name — thin, precision-engineered */}
      <motion.h1
        custom={1}
        initial="hidden"
        animate="show"
        variants={fade}
        className="m-0 font-sans font-extralight tracking-tighter text-ink"
        style={{ fontSize: "clamp(48px, 10vw, 132px)", lineHeight: 0.96 }}
      >
        Samuel Fikadesilassie
        <span className="block text-accent">Legesse.</span>
      </motion.h1>

      {/* Meta table under the name — dossier-style */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-10 grid grid-cols-2 lg:grid-cols-4 border border-rule bg-panel/50"
      >
        <MetaCell k="Position" v="Backend Engineer" />
        <MetaCell k="Domain" v="Financial Infrastructure" />
        <MetaCell k="Experience" v="3+ years, production" />
        <MetaCell k="Availability" v="Open · Full-time" signal />
      </motion.div>

      {/* Tagline */}
      <motion.p
        custom={3}
        initial="hidden"
        animate="show"
        variants={fade}
        className="mt-10 max-w-[64ch] text-ink font-light"
        style={{ fontSize: "clamp(18px, 1.9vw, 23px)", lineHeight: 1.5 }}
      >
        {HERO_TAGLINE}
        <span className="cursor bg-accent align-baseline" aria-hidden />
      </motion.p>
    </section>
  );
}

function MetaCell({ k, v, signal }: { k: string; v: string; signal?: boolean }) {
  return (
    <div className="border-t border-rule sm:border-t-0 sm:[&:not(:nth-child(-n+2))]:border-t lg:[&:not(:first-child)]:border-l border-rule px-5 py-4">
      <div className="mono text-[10px] tracking-[0.16em] uppercase text-ink-3 mb-1.5">
        {k}
      </div>
      <div className="flex items-center gap-2 text-ink text-[14px]">
        {signal && <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />}
        <span>{v}</span>
      </div>
    </div>
  );
}
