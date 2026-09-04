import { HEADER } from "@/lib/data";

export function TerminalBar() {
  return (
    <header className="sticky top-0 z-40 bg-ground/85 backdrop-blur-md border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 flex items-center justify-between h-12">
        <div className="flex items-center gap-4">
          <span className="mono text-[11px] tracking-[0.18em] text-ink uppercase">
            S<span className="text-accent">·</span>F<span className="text-accent">·</span>L
          </span>
          <span className="hidden sm:inline mono text-[10.5px] tracking-[0.14em] text-ink-3 uppercase">
            {HEADER.ref}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 mono text-[11px] tracking-[0.14em] text-ink-2 uppercase">
          <a href="#dossier" className="hover:text-accent transition-colors">Dossier</a>
          <a href="#engagements" className="hover:text-accent transition-colors">Engagements</a>
          <a href="#history" className="hover:text-accent transition-colors">History</a>
          <a href="#instruments" className="hover:text-accent transition-colors">Instruments</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2.5 mono text-[10.5px] tracking-[0.16em] text-ink-2 uppercase">
          <span className="signal-dot inline-block w-1.5 h-1.5 rounded-full bg-signal" />
          <span className="hidden sm:inline">{HEADER.status}</span>
          <span className="sm:hidden">OPEN</span>
        </div>
      </div>
    </header>
  );
}
