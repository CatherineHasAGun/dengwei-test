import {
  DIMENSION_KEYS,
  dimensionExplanations,
  dimensionLabels,
} from "@/lib/questions";
import { getSocialDesirabilityLabel, resultTypes } from "@/lib/results";
import type { TestResult } from "@/lib/scoring";

type ResultPosterProps = {
  result: TestResult;
};

export function ResultPoster({ result }: ResultPosterProps) {
  const dominantAffinity = resultTypes[result.dominantAffinity];
  const socialLabel = getSocialDesirabilityLabel(result.socialDesirabilityIndex);
  const dimensionRows = DIMENSION_KEYS.map((key) => ({
    key,
    label: dimensionLabels[key],
    value: result.dimensions[key],
  }));

  return (
    <section className="relative h-[1200px] w-[900px] overflow-hidden rounded-[46px] bg-[#fff3df] text-ink shadow-soft">
      <div className="absolute inset-[28px] rounded-[36px] bg-white/48" />

      <div className="absolute left-[68px] top-[48px] flex h-[56px] w-[248px] items-center justify-center rounded-full bg-peach text-center text-[28px] font-black leading-none text-white shadow-[0_8px_0_rgba(255,255,255,0.78)]">
        登味浓度测试
      </div>
      <p className="absolute right-[68px] top-[47px] w-[260px] text-right text-[23px] font-black leading-snug text-ink/50">
        测测你的表达方式
        <br />
        是不是先退休了
      </p>

      <div className="absolute left-[68px] top-[144px] h-[166px] w-[218px] rounded-[28px] bg-cream/70 px-7 py-6">
        <p className="text-[22px] font-black leading-none text-peach">
          你的登味浓度
        </p>
        <div className="mt-6 flex items-end gap-2">
          <p className="text-[82px] font-black leading-none tracking-normal">
            {result.totalScore}
          </p>
          <p className="pb-3 text-[35px] font-black leading-none text-ink/65">
            %
          </p>
        </div>
      </div>

      <div className="absolute left-[310px] top-[144px] h-[172px] w-[522px] overflow-hidden rounded-[30px] bg-cream/82 px-7 py-6">
        <p className="text-[22px] font-black leading-none text-ink/45">
          结果类型
        </p>
        <h1 className="mt-4 text-[46px] font-black leading-none text-ink">
          {result.result.name}
        </h1>
        <p className="mt-4 text-[22px] font-black leading-[1.32] text-ink/72">
          {result.result.roast}
        </p>
      </div>

      <div className="absolute left-[68px] top-[336px] h-[86px] w-[764px] border-y border-white/72">
        <div className="absolute left-0 top-0 h-full w-[246px] px-4 py-4">
          <p className="text-[17px] font-black leading-none text-ink/42">
            最高登味维度
          </p>
          <p className="mt-3 text-[22px] font-black leading-tight">
            {dimensionLabels[result.dominantDimension]}
          </p>
        </div>
        <div className="absolute left-[260px] top-[13px] h-[60px] border-l border-white/72" />
        <div className="absolute left-[284px] top-0 h-full w-[236px] px-2 py-4">
          <p className="text-[17px] font-black leading-none text-ink/42">
            主导亲和类型
          </p>
          <p className="mt-3 text-[22px] font-black leading-tight">
            {dominantAffinity.name}
          </p>
        </div>
        <div className="absolute left-[544px] top-[13px] h-[60px] border-l border-white/72" />
        <div className="absolute left-[568px] top-0 h-full w-[180px] px-2 py-4">
          <p className="text-[17px] font-black leading-none text-ink/42">
            朋友圈滤镜
          </p>
          <p className="mt-3 text-[34px] font-black leading-none text-peach">
            {result.socialDesirabilityIndex}%
          </p>
        </div>
      </div>

      <div className="absolute left-[68px] top-[454px] h-[190px] w-[764px] overflow-hidden rounded-[28px] bg-cream/78 px-7 py-5">
        <p className="text-[22px] font-black leading-none text-ink">登味来源</p>
        <p className="mt-3 text-[20px] font-black leading-[1.38] text-ink/74">
          {result.result.dengSource}
        </p>
        <p className="mt-2 text-[19px] font-black leading-[1.38] text-ink/62">
          {dimensionExplanations[result.dominantDimension]}
        </p>
      </div>

      <div className="absolute left-[68px] top-[674px] h-[340px] w-[490px]">
        <p className="absolute left-0 top-0 text-[22px] font-black leading-none">
          五维分析
        </p>
        <p className="absolute right-0 top-[3px] text-[16px] font-black leading-none text-ink/38">
          0-100
        </p>
        <div className="absolute left-0 top-[44px] w-full">
          {dimensionRows.map((row, index) => (
            <div
              className="absolute left-0 h-[54px] w-full"
              key={row.key}
              style={{ top: index * 59 }}
            >
              <p className="absolute left-0 top-0 text-[19px] font-black leading-none">
                {row.label}
              </p>
              <p className="absolute right-0 top-0 text-[20px] font-black leading-none">
                {row.value}
              </p>
              <div className="absolute bottom-0 left-0 h-[12px] w-[430px] overflow-hidden rounded-full bg-cream shadow-[inset_0_0_0_1px_rgba(45,45,45,0.04)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-peach via-[#f1a2bd] to-sky"
                  style={{ width: `${row.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[586px] top-[674px] h-[340px] w-[246px] border-l border-white/72 pl-6">
        <p className="text-[18px] font-black leading-snug text-ink/45">
          {socialLabel.title}
        </p>
        <p className="mt-4 h-[98px] overflow-hidden text-[19px] font-black leading-[1.42] text-ink/66">
          {socialLabel.description}
        </p>
        <div className="mt-5 h-[176px] overflow-hidden rounded-[26px] bg-sunshine/48 px-6 py-5">
          <p className="text-[18px] font-black leading-none text-ink/48">
            改善关键词
          </p>
          <p className="mt-4 text-[24px] font-black leading-tight">
            {result.improvement.keyword}
          </p>
          <p className="mt-3 text-[18px] font-black leading-[1.36] text-ink/66">
            {result.improvement.advice}
          </p>
        </div>
      </div>

      <div className="absolute bottom-[48px] left-[68px] h-[86px] w-[764px] border-t border-white/72 pt-5">
        <div className="text-[18px] font-black leading-[1.35] text-ink/62">
          <p>保存图片发给朋友</p>
          <p>看看谁的表达方式更包浆</p>
        </div>
        <div className="absolute right-0 top-[20px] grid h-[76px] w-[76px] grid-cols-4 grid-rows-4 gap-1.5 rounded-[22px] bg-white p-3 shadow-[0_8px_24px_rgba(45,45,45,0.08)]">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              className={[
                "rounded-full",
                index % 3 === 0 || index === 5 || index === 14
                  ? "bg-ink"
                  : "bg-ink/12",
              ].join(" ")}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
