import { dimensionLabels } from "@/lib/questions";
import type { TestResult } from "@/lib/scoring";

type ImprovementCardProps = {
  result: TestResult;
};

export function ImprovementCard({ result }: ImprovementCardProps) {
  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <p className="text-sm font-black text-peach">
        最高维度：{dimensionLabels[result.dominantDimension]}
      </p>
      <h2 className="mt-2 text-xl font-black text-ink">
        {result.improvement.keyword}
      </h2>
      <p className="mt-3 text-sm font-bold leading-7 text-ink/72">
        {result.improvement.advice}
      </p>
      <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-sm font-bold leading-6 text-ink/72">
        {result.result.improvement}
      </p>
    </section>
  );
}
