"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonClassName } from "./Button";
import { PosterActions } from "./PosterActions";
import { RestartTestButton } from "./RestartTestButton";
import { ResultPoster } from "./ResultPoster";
import { questions } from "@/lib/questions";
import { calculateTestResult, type TestResult } from "@/lib/scoring";
import {
  hasCompletedTest,
  parseTestState,
  TEST_STATE_STORAGE_KEY,
} from "@/lib/testState";

export function PosterPageContent() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(TEST_STATE_STORAGE_KEY);
    const storedState = parseTestState(storedValue, questions.length);

    if (hasCompletedTest(storedState.answers, questions.length)) {
      try {
        setResult(calculateTestResult(storedState.answers));
      } catch {
        setResult(null);
      }
    }

    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 text-center shadow-soft">
        <p className="text-sm font-black text-ink/60">正在读取海报数据</p>
      </section>
    );
  }

  if (!result) {
    return (
      <section className="rounded-[24px] border border-white/70 bg-white/80 p-6 text-center shadow-soft">
        <h1 className="text-2xl font-black text-ink">还不能生成海报</h1>
        <p className="mt-3 text-sm font-bold leading-6 text-ink/65">
          先完成测试，再生成适合分享的结果卡。
        </p>
        <Link className={buttonClassName("primary", "mt-6 w-full")} href="/test">
          去答题
        </Link>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-soft">
        <div
          className="mx-auto h-[396px] w-[297px] overflow-hidden rounded-[18px] min-[410px]:h-[444px] min-[410px]:w-[333px] min-[460px]:h-[504px] min-[460px]:w-[378px]"
          data-testid="poster-preview"
        >
          <div className="origin-top-left scale-[0.33] min-[410px]:scale-[0.37] min-[460px]:scale-[0.42]">
            <ResultPoster result={result} />
          </div>
        </div>
      </div>
      <PosterActions result={result} />
      <div className="flex gap-3">
        <Link className={buttonClassName("secondary", "flex-1")} href="/result">
          返回结果
        </Link>
        <RestartTestButton className="flex-1" variant="primary">
          重新测试
        </RestartTestButton>
      </div>
    </div>
  );
}
