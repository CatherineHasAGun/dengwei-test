"use client";

import { type RefObject, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { TestResult } from "@/lib/scoring";
import { copyTextToClipboard } from "@/lib/clipboard";
import { Button } from "./Button";

type PosterActionsProps = {
  posterRef: RefObject<HTMLDivElement | null>;
  result: TestResult;
};

const EXPORT_HEIGHT = 2400;
const EXPORT_WIDTH = 1800;

const waitForLayoutFrame = () =>
  new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve());
  });

function isWeChatBrowser() {
  return /MicroMessenger/i.test(window.navigator.userAgent);
}

function triggerImageDownload(imageUrl: string) {
  const link = document.createElement("a");

  link.download = "登味浓度测试结果.png";
  link.href = imageUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

const shareItems = [
  {
    eventName: "click_copy_xiaohongshu",
    key: "xiaohongshuCopy",
    label: "小红书文案",
  },
  { eventName: "click_copy_wechat", key: "wechatCopy", label: "朋友圈文案" },
  { eventName: "click_copy_weibo", key: "weiboCopy", label: "微博文案" },
] as const;

export function PosterActions({ posterRef, result }: PosterActionsProps) {
  const generatedImageRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!generatedImageUrl) return;

    const timer = window.setTimeout(() => {
      generatedImageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [generatedImageUrl]);

  async function handleSavePoster() {
    const posterElement = posterRef.current;

    if (!posterElement || saving) return;

    setSaving(true);
    setSaved(false);
    setSaveError(null);

    try {
      if ("fonts" in document) {
        await document.fonts.ready;
      }
      await waitForLayoutFrame();
      await waitForLayoutFrame();

      const posterRect = posterElement.getBoundingClientRect();
      const posterHeight = Math.ceil(posterRect.height);
      const posterWidth = Math.ceil(posterRect.width);
      const exportScale = EXPORT_WIDTH / posterWidth;
      const html2canvas = (await import("html2canvas")).default;
      const capturedCanvas = await html2canvas(posterElement, {
        backgroundColor: null,
        height: posterHeight,
        logging: false,
        scale: exportScale,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        width: posterWidth,
        windowHeight: Math.max(document.documentElement.clientHeight, posterHeight),
        windowWidth: Math.max(document.documentElement.clientWidth, posterWidth),
      });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.height = EXPORT_HEIGHT;
      canvas.width = EXPORT_WIDTH;
      context?.drawImage(capturedCanvas, 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT);

      const imageUrl = canvas.toDataURL("image/png");
      setGeneratedImageUrl(imageUrl);

      if (!isWeChatBrowser()) {
        triggerImageDownload(imageUrl);
      }

      setSaved(true);
      trackEvent("click_save_poster", {
        resultType: result.resultType,
        totalScore: result.totalScore,
      });
    } catch {
      setSaveError("图片生成失败，请刷新页面后再试一次。");
    } finally {
      setSaving(false);
    }
  }

  async function handleCopy(item: (typeof shareItems)[number]) {
    await copyTextToClipboard(result.result[item.key]);
    setCopiedKey(item.key);
    trackEvent(item.eventName, {
      resultType: result.resultType,
      totalScore: result.totalScore,
    });
  }

  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <h2 className="text-lg font-black text-ink">保存和分享</h2>
      <div className="mt-4 space-y-3">
        <Button className="w-full" disabled={saving} onClick={handleSavePoster}>
          {saving ? "正在生成图片" : saved ? "重新生成图片" : "保存结果卡"}
        </Button>
        {saveError ? (
          <p className="rounded-2xl bg-peach/10 px-4 py-3 text-xs font-bold leading-5 text-peach">
            {saveError}
          </p>
        ) : null}
        <div className="grid grid-cols-1 gap-3">
          {shareItems.map((item) => (
            <Button
              className="w-full"
              key={item.key}
              onClick={() => void handleCopy(item)}
              variant={copiedKey === item.key ? "secondary" : "ghost"}
            >
              {copiedKey === item.key ? "已复制" : `复制${item.label}`}
            </Button>
          ))}
        </div>
      </div>
      {generatedImageUrl ? (
        <div className="mt-5 rounded-2xl bg-cream p-3" ref={generatedImageRef}>
          <p className="px-1 text-xs font-bold leading-5 text-ink/60">
            图片已生成。微信里请长按下方图片保存到手机。
          </p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-white bg-white">
            <img
              alt="登味浓度测试结果卡"
              className="h-auto w-full select-auto"
              data-testid="generated-poster-image"
              src={generatedImageUrl}
              style={{
                WebkitTouchCallout: "default",
                userSelect: "auto",
              }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
