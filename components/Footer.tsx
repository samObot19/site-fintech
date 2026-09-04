import { HEADER } from "@/lib/data";

export function Footer() {
  return (
    <footer className="pt-8 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-baseline mono text-[10px] tracking-[0.16em] uppercase text-ink-3">
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <span>
            <span className="text-ink-2">Set in</span> Manrope · JetBrains Mono
          </span>
          <span>
            <span className="text-ink-2">Built</span> Addis Ababa · {HEADER.updated}
          </span>
          <span>
            <span className="text-ink-2">Stack</span> Next.js · Tailwind · Framer Motion
          </span>
        </div>
        <div>© Samuel Fikadesilassie Legesse · v2026.09</div>
      </div>
    </footer>
  );
}
