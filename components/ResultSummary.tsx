import type { TestResult } from "@/lib/scoring";
import { dimensionExplanations, dimensionLabels } from "@/lib/questions";
import { getSocialDesirabilityLabel, resultTypes } from "@/lib/results";

type ResultSummaryProps = {
  result: TestResult;
};

export function ResultSummary({ result }: ResultSummaryProps) {
  const socialLabel = getSocialDesirabilityLabel(result.socialDesirabilityIndex);
  const dominantAffinity = resultTypes[result.dominantAffinity];

  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
      <p className="text-sm font-black text-peach">你的登味浓度</p>
      <div className="mt-3 flex items-end gap-2">
        <p className="text-6xl font-black leading-none text-ink">
          {result.totalScore}
        </p>
        <p className="pb-2 text-2xl font-black text-ink/70">%</p>
      </div>
      <div className="mt-5 rounded-2xl bg-cream px-4 py-4">
        <p className="text-sm font-bold text-ink/55">结果类型</p>
        <h1 className="mt-1 text-2xl font-black text-ink">
          {result.result.name}
        </h1>
        <p className="mt-2 text-sm font-bold leading-6 text-ink/72">
          {result.result.roast}
        </p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/75 px-4 py-3">
          <p className="text-xs font-black text-ink/50">最高登味维度</p>
          <p className="mt-1 text-sm font-black leading-6 text-ink">
            {dimensionLabels[result.dominantDimension]}
          </p>
        </div>
        <div className="rounded-2xl bg-white/75 px-4 py-3">
          <p className="text-xs font-black text-ink/50">主导结果亲和类型</p>
          <p className="mt-1 text-sm font-black leading-6 text-ink">
            {dominantAffinity.name}
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-2xl bg-cream px-4 py-4">
        <p className="text-sm font-black text-ink">登味来源</p>
        <p className="mt-2 text-sm font-bold leading-6 text-ink/72">
          {result.result.dengSource}
        </p>
        <p className="mt-3 text-sm font-bold leading-6 text-ink/62">
          {dimensionExplanations[result.dominantDimension]}
        </p>
      </div>
      <div className="mt-3 rounded-2xl bg-white/75 px-4 py-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm font-black text-ink">
            {socialLabel.title}
          </p>
          <p className="shrink-0 text-xl font-black text-peach">
            {result.socialDesirabilityIndex}%
          </p>
        </div>
        <p className="mt-2 text-sm font-bold leading-6 text-ink/65">
          {socialLabel.description}
        </p>
      </div>
    </section>
  );
}
