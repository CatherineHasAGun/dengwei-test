"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonClassName } from "./Button";
import { LoadingAnalysis } from "./LoadingAnalysis";
import { trackEventOnce } from "@/lib/analytics";
import { questions } from "@/lib/questions";
import { calculateTestResult, type TestResult } from "@/lib/scoring";
import {
  hasCompletedTest,
  persistTestState,
  readTestState,
  type TestState,
} from "@/lib/testState";

export function LoadingRedirect() {
  const router = useRouter();
  const [isComplete, setIsComplete] = useState<boolean | null>(null);
  const delay = useMemo(() => 2200 + Math.round(Math.random() * 700), []);

  useEffect(() => {
    const storedState = readTestState(questions.length);
    const completed = hasCompletedTest(storedState.answers, questions.length);

    setIsComplete(completed);

    if (!completed) return;

    let result: TestResult;

    try {
      result = calculateTestResult(storedState.answers);
    } catch {
      setIsComplete(false);
      return;
    }

    persistTestState({
      ...storedState,
      result: {
        affinityScores: result.affinityScores,
        dimensions: result.dimensions,
        dominantAffinity: result.dominantAffinity,
        dominantDimension: result.dominantDimension,
        highDimensionCount: result.highDimensionCount,
        resultType: result.resultType,
        socialDesirabilityIndex: result.socialDesirabilityIndex,
        totalScore: result.totalScore,
      },
    } satisfies TestState);
    trackEventOnce(
      `complete_test:${storedState.answers.map((answer) => `${answer.questionId}-${answer.optionId}`).join("|")}`,
      "complete_test",
      {
        resultType: result.resultType,
        totalScore: result.totalScore,
      },
    );

    const timer = window.setTimeout(() => {
      router.push("/result");
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay, router]);

  if (isComplete === false) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 text-center shadow-soft">
        <h1 className="text-2xl font-black text-ink">还没答完</h1>
        <p className="mt-3 text-sm font-bold leading-6 text-ink/65">
          结果页会等你完成 18 道题后再开放。
        </p>
        <Link className={buttonClassName("primary", "mt-6 w-full")} href="/test">
          继续答题
        </Link>
      </section>
    );
  }

  return <LoadingAnalysis />;
}
