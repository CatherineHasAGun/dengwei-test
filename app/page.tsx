import { questions } from "@/lib/questions";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col justify-center px-5 py-10">
      <section className="rounded-[24px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur">
        <p className="mb-3 inline-flex rounded-full bg-mint px-3 py-1 text-sm font-semibold text-ink">
          MVP 基础工程已就绪
        </p>
        <h1 className="text-4xl font-black leading-tight text-ink">
          登味浓度测试
        </h1>
        <p className="mt-3 text-lg font-semibold text-ink/80">
          测测你的表达方式是不是先退休了
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-peach/20 px-3 py-4">
            <p className="text-2xl font-black text-peach">{questions.length}</p>
            <p className="mt-1 text-xs font-bold text-ink/70">道题</p>
          </div>
          <div className="rounded-2xl bg-sky/25 px-3 py-4">
            <p className="text-2xl font-black text-ink">5</p>
            <p className="mt-1 text-xs font-bold text-ink/70">个维度</p>
          </div>
          <div className="rounded-2xl bg-sunshine/35 px-3 py-4">
            <p className="text-2xl font-black text-ink">3</p>
            <p className="mt-1 text-xs font-bold text-ink/70">分钟</p>
          </div>
        </div>
        <p className="mt-8 rounded-2xl bg-cream px-4 py-3 text-sm leading-6 text-ink/75">
          下一步会把首页、答题流程、loading 和结果页接到这套核心数据上。
        </p>
      </section>
    </main>
  );
}
