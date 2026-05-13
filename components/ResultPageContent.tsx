"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonClassName } from "./Button";
import { DimensionBreakdown } from "./DimensionBreakdown";
import { ImprovementCard } from "./ImprovementCard";
import { RadarChart } from "./RadarChart";
import { RestartTestButton } from "./RestartTestButton";
import { ResultSummary } from "./ResultSummary";
import { ShareCopyCard } from "./ShareCopyCard";
import { trackEvent, trackEventOnce } from "@/lib/analytics";
import { questions } from "@/lib/questions";
import { calculateTestResult, type TestResult } from "@/lib/scoring";
import {
  hasCompletedTest,
  parseTestState,
  TEST_STATE_STORAGE_KEY,
  type TestState,
} from "@/lib/testState";

export function ResultPageContent() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(TEST_STATE_STORAGE_KEY);
    const storedState = parseTestState(storedValue, questions.length);

    if (hasCompletedTest(storedState.answers, questions.length)) {
      let calculatedResult: TestResult;

      try {
        calculatedResult = calculateTestResult(storedState.answers);
      } catch {
        setHydrated(true);
        return;
      }

      setResult(calculatedResult);
      trackEventOnce(
        `view_result:${calculatedResult.resultType}:${calculatedResult.totalScore}`,
        "view_result",
        {
          resultType: calculatedResult.resultType,
          totalScore: calculatedResult.totalScore,
        },
      );

      window.localStorage.setItem(
        TEST_STATE_STORAGE_KEY,
        JSON.stringify({
          ...storedState,
          result: {
            affinityScores: calculatedResult.affinityScores,
            dimensions: calculatedResult.dimensions,
            dominantAffinity: calculatedResult.dominantAffinity,
            dominantDimension: calculatedResult.dominantDimension,
            highDimensionCount: calculatedResult.highDimensionCount,
            resultType: calculatedResult.resultType,
            socialDesirabilityIndex: calculatedResult.socialDesirabilityIndex,
            totalScore: calculatedResult.totalScore,
          },
        } satisfies TestState),
      );
    }

    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 text-center shadow-soft">
        <p className="text-sm font-black text-ink/60">正在读取测试结果</p>
      </section>
    );
  }

  if (!result) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 text-center shadow-soft">
        <h1 className="text-2xl font-black text-ink">还没有完整结果</h1>
        <p className="mt-3 text-sm font-bold leading-6 text-ink/65">
          完成 18 道题后，这里会展示你的登味浓度报告。
        </p>
        <Link className={buttonClassName("primary", "mt-6 w-full")} href="/test">
          去答题
        </Link>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <ResultSummary result={result} />
      <RadarChart dimensions={result.dimensions} />
      <DimensionBreakdown dimensions={result.dimensions} />
      <ImprovementCard result={result} />
      <ShareCopyCard result={result.result} />
      <div className="flex gap-3">
        <Link
          className={buttonClassName("secondary", "flex-1")}
          href="/poster"
          onClick={() =>
            trackEvent("click_generate_poster", {
              resultType: result.resultType,
              totalScore: result.totalScore,
            })
          }
        >
          生成海报
        </Link>
        <RestartTestButton className="flex-1" variant="ghost">
          重新测试
        </RestartTestButton>
      </div>
    </div>
  );
}
