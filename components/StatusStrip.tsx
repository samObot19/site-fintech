import { STATUS_ITEMS } from "@/lib/data";

/**
 * Trading-terminal-style status strip — sits below the hero.
 * Reads like a Bloomberg session bar: static content, one live-looking
 * signal dot, monospace throughout.
 */
export function StatusStrip() {
  return (
    <div className="border-b border-rule bg-panel/40">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-3 mono text-[10.5px] tracking-[0.14em] uppercase text-ink-2">
          {STATUS_ITEMS.map((it, i) => (
            <span key={it.k} className="flex items-center gap-2">
              {it.signal && (
                <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />
              )}
              <span className="text-ink-3">{it.k}</span>
              <span className="text-ink">{it.v}</span>
              {i < STATUS_ITEMS.length - 1 && (
                <span className="text-rule-strong ml-4 hidden sm:inline">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
