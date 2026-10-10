import { NextResponse } from "next/server";
import { 
  UserClickEventData, 
  buildClickEventTelegramMessage, 
  sendTelegramNotification 
} from "@/lib/telegram";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data: UserClickEventData = await request.json();

    if (!data.eventType) {
      return NextResponse.json({ success: false, error: "Missing eventType" }, { status: 400 });
    }

    // Build Telegram HTML message
    const msg = buildClickEventTelegramMessage(data);

    // Asynchronously dispatch to Telegram (non-blocking)
    const delivered = await sendTelegramNotification(msg);

    return NextResponse.json({
      success: true,
      delivered,
    });
  } catch (error: any) {
    console.error("[track-event error]:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Tracking error" },
      { status: 500 }
    );
  }
}
