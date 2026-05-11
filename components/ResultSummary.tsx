import type { TestResult } from "@/lib/scoring";

type ResultSummaryProps = {
  result: TestResult;
};

export function ResultSummary({ result }: ResultSummaryProps) {
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
    </section>
  );
}
