import { TRAJECTORY } from "@/lib/data";

/**
 * A small SVG career trajectory sparkline. Time on x, "role weight" on y.
 * Rendered as a step line with role markers — reads like a career P&L chart.
 */
export function SparkTrajectory() {
  const W = 1000;
  const H = 220;
  const PAD_X = 40;
  const PAD_Y_TOP = 30;
  const PAD_Y_BOT = 60;

  const points = TRAJECTORY.map((p, i) => {
    const x = PAD_X + (i / (TRAJECTORY.length - 1)) * (W - PAD_X * 2);
    const maxY = Math.max(...TRAJECTORY.map((t) => t.y));
    const y =
      H - PAD_Y_BOT -
      (p.y / maxY) * (H - PAD_Y_TOP - PAD_Y_BOT);
    return { x, y, ...p };
  });

  // Smooth line path
  const linePath = points.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = points[i - 1];
    const cx = (prev.x + pt.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${H - PAD_Y_BOT} L ${points[0].x} ${H - PAD_Y_BOT} Z`;

  return (
    <div className="border border-rule bg-panel/30 p-6 sm:p-8">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <div className="mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
            Trajectory · 2022 → 2026
          </div>
          <div className="mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
            Role weight over time · discrete engagement values
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 mono text-[9.5px] tracking-[0.16em] uppercase text-ink-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-[2px] bg-accent inline-block" />
            Engagement
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Milestone
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto min-w-[600px]"
          role="img"
          aria-label="Career trajectory sparkline from 2022 to 2026"
        >
          {/* Horizontal grid */}
          {[0.25, 0.5, 0.75, 1].map((f) => {
            const y = PAD_Y_TOP + f * (H - PAD_Y_TOP - PAD_Y_BOT);
            return (
              <line
                key={f}
                x1={PAD_X}
                x2={W - PAD_X}
                y1={y}
                y2={y}
                stroke="rgb(var(--rule))"
                strokeWidth={0.75}
                strokeDasharray="2 4"
              />
            );
          })}

          {/* Area fill */}
          <defs>
            <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.28" />
              <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#spark-fill)" />

          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Points */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={5} fill="rgb(var(--ground))" />
              <circle cx={p.x} cy={p.y} r={3.5} fill="rgb(var(--accent))" />
              {/* Year label below */}
              <text
                x={p.x}
                y={H - PAD_Y_BOT + 20}
                fill="rgb(var(--ink-3))"
                fontFamily="var(--font-mono)"
                fontSize="10.5"
                letterSpacing="1.5"
                textAnchor="middle"
              >
                {p.year}
              </text>
              {/* Role label above */}
              <text
                x={p.x}
                y={p.y - 14}
                fill="rgb(var(--ink))"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="0.5"
                textAnchor={i === 0 ? "start" : i === points.length - 1 ? "end" : "middle"}
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
