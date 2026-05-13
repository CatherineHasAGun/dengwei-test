import {
  DIMENSION_KEYS,
  dimensionLabels,
  type NormalizedDimensionScores,
} from "@/lib/questions";

type DimensionBreakdownProps = {
  dimensions: NormalizedDimensionScores;
};

export function DimensionBreakdown({ dimensions }: DimensionBreakdownProps) {
  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <h2 className="text-lg font-black text-ink">五维分析</h2>
      <div className="mt-5 space-y-4">
        {DIMENSION_KEYS.map((key) => (
          <div key={key}>
            <div className="flex items-center justify-between text-sm font-black text-ink">
              <span>{dimensionLabels[key]}</span>
              <span>{dimensions[key]}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-cream">
              <div
                className="h-full rounded-full bg-gradient-to-r from-peach to-sky"
                style={{ width: `${dimensions[key]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
