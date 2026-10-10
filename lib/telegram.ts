/**
 * Telegram Bot Notification Service
 * Sends real-time lead and user action notifications directly to your Telegram chat.
 */

export interface BookingEventData {
  name?: string;
  phone?: string;
  area?: string;
  service?: string;
  subService?: string;
  price?: string;
  preferredDate?: string;
  preferredSlot?: string;
  propertyType?: string;
  notes?: string;
  source?: string;
  pageUrl?: string;
  pagePath?: string;
  referrer?: string;
  device?: string;
}

export interface UserClickEventData {
  eventType: "CALL_CLICK" | "WHATSAPP_CLICK" | "MODAL_OPEN" | "FORM_INTERACTION" | "RATE_CARD_CLICK";
  buttonLabel?: string;
  pageUrl?: string;
  pagePath?: string;
  referrer?: string;
  device?: string;
  service?: string;
  subService?: string;
  price?: string;
  area?: string;
  additionalInfo?: string;
}

/**
 * Low-level function to dispatch a message to the configured Telegram chat.
 */
export async function sendTelegramNotification(htmlMessage: string): Promise<boolean> {
  const token = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || "").trim();

  if (!token || !chatId) {
    // Graceful skip if credentials are not yet entered in .env.local
    console.warn(
      "[Telegram Service] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in .env.local. Skipping message dispatch."
    );
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("[Telegram Service Error]:", response.status, errBody);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Telegram Service Network Error]:", error);
    return false;
  }
}

/**
 * Formats a comprehensive booking lead alert for Telegram
 */
export function buildBookingTelegramMessage(data: BookingEventData): string {
  const cleanPhone = (data.phone || "").replace(/\D/g, "");
  const callLink = cleanPhone ? `tel:+91${cleanPhone.slice(-10)}` : "";
  const waLink = cleanPhone ? `https://wa.me/91${cleanPhone.slice(-10)}` : "";

  const timestampIST = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return `
🚨 <b>NEW CARPENTER BOOKING!</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Customer:</b> <code>${escapeHtml(data.name || "Customer")}</code>
📱 <b>Phone:</b> <code>+91 ${escapeHtml(data.phone || "Not provided")}</code>
📍 <b>Area:</b> ${escapeHtml(data.area || "Hyderabad")}
🔨 <b>Service:</b> ${escapeHtml(data.service || "General Carpentry")}
📦 <b>Task / SKU:</b> <b>${escapeHtml(data.subService || "Doorstep Inspection")}</b>
${data.price ? `💰 <b>Estimated Rate:</b> ${escapeHtml(data.price)}\n` : ""}📅 <b>Date:</b> ${escapeHtml(data.preferredDate || "Today")}
⏰ <b>Time Slot:</b> ${escapeHtml(data.preferredSlot || "Immediate")}
🏠 <b>Property:</b> ${escapeHtml(data.propertyType || "Apartment/Villa")}
📝 <b>Notes:</b> <i>"${escapeHtml(data.notes || "None")}"</i>

━━━━━━━━━━━━━━━━━━━━
🌐 <b>Page URL:</b> <code>${escapeHtml(data.pageUrl || data.pagePath || "/")}</code>
🧭 <b>Referrer:</b> <code>${escapeHtml(data.referrer || "Direct / Internal")}</code>
📱 <b>Device:</b> ${escapeHtml(data.device || "Browser")}
📋 <b>Source:</b> <i>${escapeHtml(data.source || "Website Form")}</i>
⏱ <b>Time:</b> ${timestampIST}

${callLink ? `📞 <a href="${callLink}">Call Customer</a>` : ""}${waLink ? ` | 💬 <a href="${waLink}">WhatsApp Chat</a>` : ""}
`.trim();
}

/**
 * Formats a live user interaction click alert for Telegram
 */
export function buildClickEventTelegramMessage(data: UserClickEventData): string {
  const timestampIST = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  let icon = "⚡";
  let actionTitle = "User Interaction";

  switch (data.eventType) {
    case "CALL_CLICK":
      icon = "📞";
      actionTitle = "CALL BUTTON CLICKED";
      break;
    case "WHATSAPP_CLICK":
      icon = "💬";
      actionTitle = "WHATSAPP BUTTON CLICKED";
      break;
    case "MODAL_OPEN":
      icon = "📝";
      actionTitle = "BOOKING FORM OPENED";
      break;
    case "RATE_CARD_CLICK":
      icon = "🏷️";
      actionTitle = "RATE CARD BOOK NOW CLICKED";
      break;
    default:
      icon = "🔍";
      actionTitle = "ACTION TRACKED";
      break;
  }

  return `
${icon} <b>LIVE TRACKING: ${actionTitle}</b>
━━━━━━━━━━━━━━━━━━━━
🔘 <b>Clicked Button:</b> <b>${escapeHtml(data.buttonLabel || "Action Button")}</b>
🌐 <b>Page:</b> <code>${escapeHtml(data.pageUrl || data.pagePath || "/")}</code>
🧭 <b>Referrer:</b> <code>${escapeHtml(data.referrer || "Direct")}</code>
📱 <b>Device:</b> ${escapeHtml(data.device || "Unknown")}
${data.service ? `🔨 <b>Category:</b> ${escapeHtml(data.service)}\n` : ""}${data.subService ? `📦 <b>Target SKU:</b> ${escapeHtml(data.subService)}\n` : ""}${data.price ? `💰 <b>Price:</b> ${escapeHtml(data.price)}\n` : ""}${data.area ? `📍 <b>Area:</b> ${escapeHtml(data.area)}\n` : ""}${data.additionalInfo ? `ℹ️ <b>Info:</b> ${escapeHtml(data.additionalInfo)}\n` : ""}⏱ <b>Time:</b> ${timestampIST}
`.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
