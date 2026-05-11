"use client";

import { useState } from "react";
import type { ResultType } from "@/lib/results";
import { trackEvent } from "@/lib/analytics";
import { copyTextToClipboard } from "@/lib/clipboard";
import { Button } from "./Button";

type ShareCopyCardProps = {
  result: ResultType;
};

const copyItems = [
  {
    eventName: "click_copy_xiaohongshu",
    key: "xiaohongshuCopy",
    label: "复制小红书文案",
  },
  { eventName: "click_copy_wechat", key: "wechatCopy", label: "复制朋友圈文案" },
  { eventName: "click_copy_weibo", key: "weiboCopy", label: "复制微博文案" },
] as const;

export function ShareCopyCard({ result }: ShareCopyCardProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  async function handleCopy(item: (typeof copyItems)[number]) {
    await copyTextToClipboard(result[item.key]);
    setCopiedKey(item.key);
    trackEvent(item.eventName, {
      resultType: result.id,
    });
  }

  return (
    <section className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
      <h2 className="text-lg font-black text-ink">分享文案</h2>
      <div className="mt-4 space-y-3">
        {copyItems.map((item) => (
          <Button
            className="w-full"
            key={item.key}
            onClick={() => void handleCopy(item)}
            variant={copiedKey === item.key ? "secondary" : "primary"}
          >
            {copiedKey === item.key ? "已复制" : item.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
