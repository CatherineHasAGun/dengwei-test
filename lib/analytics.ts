export type AnalyticsEventName =
  | "page_view_home"
  | "answer_question"
  | "click_start_test"
  | "complete_test"
  | "view_result"
  | "click_generate_poster"
  | "click_save_poster"
  | "click_copy_xiaohongshu"
  | "click_copy_wechat"
  | "click_copy_weibo"
  | "click_restart";

export type AnalyticsPayload = {
  timestamp?: string;
  device?: "mobile" | "desktop";
  resultType?: string;
  totalScore?: number;
  questionId?: number;
  optionId?: string;
  route?: string;
};

const trackedOnceKeys = new Set<string>();

function getDevice(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  const eventPayload = {
    timestamp: new Date().toISOString(),
    device: getDevice(),
    ...payload,
  };

  console.info("[analytics]", eventName, eventPayload);
}

export function trackEventOnce(
  dedupeKey: string,
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
) {
  if (trackedOnceKeys.has(dedupeKey)) return;

  trackedOnceKeys.add(dedupeKey);
  trackEvent(eventName, payload);
}
