export type AnalyticsEvent =
  | "lead_submit"
  | "click_whatsapp"
  | "click_phone"
  | "download_study"
  | "click_social";

type AnalyticsParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, parameters);
}
