import { DIMENSION_KEYS, dimensionLabels } from "@/lib/questions";
import type { TestResult } from "@/lib/scoring";

type ResultPosterProps = {
  result: TestResult;
};

export function ResultPoster({ result }: ResultPosterProps) {
  return (
    <section className="h-[1200px] w-[900px] overflow-hidden rounded-[48px] bg-cream p-16 text-ink shadow-soft">
      <div className="flex h-full flex-col justify-between rounded-[40px] border-4 border-white bg-white/72 p-12">
        <div>
          <div className="flex items-center justify-between gap-8">
            <p className="rounded-full bg-peach px-7 py-3 text-3xl font-black text-white">
              登味浓度测试
            </p>
            <p className="text-right text-2xl font-black leading-snug text-ink/55">
              测测你的表达方式
              <br />
              是不是先退休了
            </p>
          </div>
          <h1 className="mt-8 text-7xl font-black leading-tight">
            {result.totalScore}%
          </h1>
          <h2 className="mt-4 text-5xl font-black leading-tight text-ink">
            {result.result.name}
          </h2>
          <p className="mt-7 text-3xl font-black leading-snug text-ink/75">
            {result.result.roast}
          </p>
        </div>
        <div className="space-y-7">
          {DIMENSION_KEYS.map((key) => (
            <div key={key}>
              <div className="flex items-center justify-between text-2xl font-black">
                <span>{dimensionLabels[key]}</span>
                <span>{result.dimensions[key]}</span>
              </div>
              <div className="mt-3 h-7 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-peach to-sky"
                  style={{ width: `${result.dimensions[key]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="rounded-[32px] bg-sunshine/45 px-8 py-6">
            <p className="text-2xl font-black text-ink/55">改善关键词</p>
            <p className="mt-2 text-4xl font-black leading-snug">
              {result.improvement.keyword}
            </p>
          </div>
          <div className="mt-8 flex items-end justify-between gap-8">
            <div className="text-2xl font-black leading-snug text-ink/65">
              <p>保存图片发给朋友</p>
              <p>看看谁的表达方式更包浆</p>
            </div>
            <div className="grid h-32 w-32 shrink-0 grid-cols-4 grid-rows-4 gap-2 rounded-3xl bg-white p-4">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  className={[
                    "rounded-md",
                    index % 3 === 0 || index === 5 || index === 14
                      ? "bg-ink"
                      : "bg-ink/12",
                  ].join(" ")}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
