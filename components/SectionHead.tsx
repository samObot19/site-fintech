import { cn } from "@/lib/cn";

/**
 * Section head styled like a report heading — dense metadata rail on the left,
 * uppercase mono title, and a right-side coordinate/aside.
 */
export function SectionHead({
  mark,
  title,
  aside,
  className,
}: {
  mark: string;
  title: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-rule">
        <div className="flex items-baseline gap-4">
          <span className="mono text-[10.5px] tracking-[0.2em] text-accent uppercase">
            {mark}
          </span>
          <h2 className="m-0 font-sans font-light tracking-tighter text-ink"
            style={{ fontSize: "clamp(24px, 3vw, 40px)", lineHeight: 1 }}>
            {title}
          </h2>
        </div>
        {aside && (
          <span className="hidden sm:inline mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
            {aside}
          </span>
        )}
      </div>
    </div>
  );
}
