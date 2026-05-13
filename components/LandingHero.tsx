"use client";

import { useEffect } from "react";
import Link from "next/link";
import { questions } from "@/lib/questions";
import { trackEvent } from "@/lib/analytics";
import { clearTestState } from "@/lib/testState";
import { buttonClassName } from "./Button";

const stats = [
  { label: "道题", value: questions.length, tone: "bg-peach/18 text-peach" },
  { label: "分钟", value: 3, tone: "bg-sky/25 text-ink" },
  { label: "维度", value: 5, tone: "bg-mint/55 text-ink" },
];

export function LandingHero() {
  useEffect(() => {
    clearTestState();
  }, []);

  function handleStartTest() {
    clearTestState();
    trackEvent("click_start_test");
  }

  return (
    <section className="px-5 pb-10 pt-8">
      <div className="mx-auto w-full max-w-[480px]">
        <p className="inline-flex rounded-full bg-white/65 px-4 py-2 text-sm font-black text-peach shadow-sm">
          登味浓度测试
        </p>
        <h1 className="mt-5 text-5xl font-black leading-[1.05] text-ink">
          测测你的登味浓度超标了吗?
        </h1>
        <p className="mt-5 text-base leading-7 text-ink/72">
          登味不是年龄，而是一种社交表达方式。你是清爽人类，还是会议室老登？
        </p>
        <div className="mt-7 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div className={`rounded-2xl px-4 py-4 text-center ${stat.tone}`} key={stat.label}>
              <p className="text-3xl font-black">{stat.value}</p>
              <p className="mt-1 text-xs font-black text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <Link
            className={buttonClassName("primary", "w-full")}
            href="/test"
            onClick={handleStartTest}
          >
            开始测试
          </Link>
          <p className="text-center text-xs font-semibold leading-5 text-ink/55">
            结果仅供娱乐和自我反思，不构成心理诊断
          </p>
        </div>
      </div>
    </section>
  );
}
