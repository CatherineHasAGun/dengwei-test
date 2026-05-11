import type { Question } from "@/lib/questions";

type QuestionCardProps = {
  currentIndex: number;
  onSelectOption: (optionId: string) => void;
  question: Question;
  selectedOptionId?: string;
  totalQuestions: number;
};

export function QuestionCard({
  currentIndex,
  onSelectOption,
  question,
  selectedOptionId,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <section className="rounded-[24px] border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur">
      <p className="text-sm font-black text-peach">
        第 {currentIndex + 1} / {totalQuestions} 题
      </p>
      <h1 className="mt-4 text-2xl font-black leading-snug text-ink">
        {question.text}
      </h1>
      <div className="mt-6 space-y-3">
        {question.options.map((option) => {
          const selected = option.id === selectedOptionId;

          return (
            <button
              aria-pressed={selected}
              className={[
                "flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-bold leading-6 transition active:scale-[0.99]",
                selected
                  ? "scale-[1.01] border-peach bg-peach/12 text-ink shadow-[0_12px_28px_rgba(255,107,157,0.16)]"
                  : "border-ink/8 bg-white/78 text-ink/78 hover:border-peach/45 hover:bg-white",
              ].join(" ")}
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              type="button"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-black text-white">
                {option.id}
              </span>
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
