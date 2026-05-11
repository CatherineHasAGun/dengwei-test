const loadingCopies = [
  "正在检测你的经验包浆……",
  "正在分析你的上价值频率……",
  "正在计算你的边界感库存……",
  "正在识别你的会议室灵魂……",
];

export function LoadingAnalysis() {
  return (
    <section className="rounded-[24px] border border-white/70 bg-white/78 p-6 text-center shadow-soft backdrop-blur">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-peach via-sunshine to-sky p-2">
        <div className="h-full w-full animate-pulse rounded-full bg-white/86" />
      </div>
      <h1 className="mt-6 text-2xl font-black text-ink">正在生成报告</h1>
      <div className="mt-5 space-y-3 text-sm font-bold text-ink/68">
        {loadingCopies.map((copy) => (
          <p className="rounded-2xl bg-cream px-4 py-3" key={copy}>
            {copy}
          </p>
        ))}
      </div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white">
        <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-peach to-sky" />
      </div>
    </section>
  );
}
