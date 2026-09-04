import { CONTACT } from "@/lib/data";

export function CallSheet() {
  return (
    <div className="border border-rule bg-panel/30">
      <header className="grid grid-cols-2 border-b border-rule">
        <Cell k="Class" v="Direct Contact" />
        <Cell k="Preferred" v="Email" />
      </header>

      <div className="p-8 sm:p-12">
        <p
          className="m-0 mb-10 max-w-[24ch] text-ink font-sans font-extralight tracking-tighter"
          style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}
        >
          A good <span className="text-accent">backend</span> is a good
          conversation — let&rsquo;s start one.
          <span className="cursor bg-accent" aria-hidden />
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 max-w-[720px]">
          <Channel k="Email" v={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <Channel k="Telephone" v={CONTACT.phoneDisplay} href={`tel:${CONTACT.phone}`} />
          <Channel k="LinkedIn" v={CONTACT.linkedinLabel} href={CONTACT.linkedin} />
          <Channel k="GitHub" v={CONTACT.githubLabel} href={CONTACT.github} />
          <Channel k="Location" v={`${CONTACT.location}`} />
          <Channel k="Timezone" v={CONTACT.timezone} />
        </div>
      </div>
    </div>
  );
}

function Cell({ k, v }: { k: string; v: string }) {
  return (
    <div className="p-4 [&:not(:last-child)]:border-r border-rule">
      <div className="mono text-[9.5px] tracking-[0.2em] uppercase text-ink-3 mb-1">{k}</div>
      <div className="mono text-[12px] text-ink">{v}</div>
    </div>
  );
}

function Channel({
  k,
  v,
  href,
}: {
  k: string;
  v: string;
  href?: string;
}) {
  const external = href?.startsWith("http");
  const inner = (
    <>
      <div className="mono text-[10px] tracking-[0.18em] uppercase text-ink-3 mb-1.5">{k}</div>
      <span className="mono text-[13.5px] text-ink border-b border-rule-strong pb-1 inline-block break-words">
        {v}
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block hover:[&_span]:text-accent hover:[&_span]:border-accent transition-colors"
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}
