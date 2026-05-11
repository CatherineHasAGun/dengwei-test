type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, Math.round((current / total) * 100)));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-black text-ink/55">
        <span>
          第 {current} / {total} 题
        </span>
        <span>{progress}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-peach via-sunshine to-sky transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
