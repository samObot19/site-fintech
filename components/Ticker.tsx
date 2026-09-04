/**
 * Footer ticker — an infinite marquee of the tech stack. Duplicated content
 * with translateX(-50%) gives a seamless loop.
 */
const ITEMS = [
  "GO",
  "PYTHON",
  "FASTAPI",
  "POSTGRESQL",
  "PGVECTOR",
  "REDIS",
  "CELERY",
  "DOCKER",
  "MICROSOFT AZURE",
  "AWS",
  "TYPESCRIPT",
  "NEST.JS",
  "GRAPHQL",
  "REST",
  "LANGCHAIN",
  "LANGGRAPH",
  "REACT",
  "NEXT.JS",
  "CLEAN ARCHITECTURE",
  "HEXAGONAL",
  "EVENT-DRIVEN",
  "MICROSERVICES",
  "DISTRIBUTED SYSTEMS",
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-rule bg-panel/40 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap py-3.5 w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mono text-[11px] tracking-[0.24em] uppercase text-ink-3 mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
