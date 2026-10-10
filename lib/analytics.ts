/**
 * Client-Side Real-Time Interaction Tracking Helper
 * Dispatches click, call, WhatsApp, and form interactions to Telegram.
 */

export interface TrackClickOptions {
  eventType: "CALL_CLICK" | "WHATSAPP_CLICK" | "MODAL_OPEN" | "FORM_INTERACTION" | "RATE_CARD_CLICK";
  buttonLabel: string;
  service?: string;
  subService?: string;
  price?: string;
  area?: string;
  additionalInfo?: string;
}

function detectDevice(): string {
  if (typeof window === "undefined") return "Server";
  const ua = navigator.userAgent;
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
  const width = window.innerWidth;

  if (isMobile) {
    if (/iPhone|iPad|iPod/i.test(ua)) return `Mobile (iOS / ${width}px)`;
    if (/Android/i.test(ua)) return `Mobile (Android / ${width}px)`;
    return `Mobile (${width}px)`;
  }
  return `Desktop (${width}px)`;
}

export function trackUserAction(options: TrackClickOptions): void {
  if (typeof window === "undefined") return;

  try {
    const payload = {
      ...options,
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      referrer: document.referrer || "Direct Visit",
      device: detectDevice(),
    };

    const bodyString = JSON.stringify(payload);

    // Use sendBeacon if available for guaranteed delivery when navigating to external links
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([bodyString], { type: "application/json" });
      const sent = navigator.sendBeacon("/api/track-event", blob);
      if (sent) return;
    }

    // Fallback to fetch with keepalive
    fetch("/api/track-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyString,
      keepalive: true,
    }).catch((err) => {
      console.warn("[trackUserAction non-blocking error]:", err);
    });
  } catch (e) {
    // Non-blocking: never degrade user experience
    console.warn("[trackUserAction error]:", e);
  }
}
