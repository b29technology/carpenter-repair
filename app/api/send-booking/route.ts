import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { 
  buildBookingTelegramMessage, 
  sendTelegramNotification, 
  BookingEventData 
} from "@/lib/telegram";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data: BookingEventData = await request.json();

    const {
      name = "Customer",
      phone = "Not provided",
      area = "Hyderabad",
      service = "General Carpentry",
      subService = "Standard Doorstep Inspection",
      price = "",
      preferredDate = "Today (Express)",
      preferredSlot = "Immediate / Flexible",
      propertyType = "Gated Apartment / House",
      notes = "None",
      source = "Website Form",
      pageUrl = "",
      pagePath = "",
      referrer = "",
      device = "",
    } = data;

    // 1. Dispatch Telegram Alert Asynchronously
    let telegramSent = false;
    try {
      const telegramMsg = buildBookingTelegramMessage(data);
      telegramSent = await sendTelegramNotification(telegramMsg);
    } catch (tgErr) {
      console.error("[send-booking Telegram Error]:", tgErr);
    }

    // Sanitize phone for tel/wa links
    const cleanPhone = phone.replace(/\D/g, "");
    const waLink = cleanPhone ? `https://wa.me/91${cleanPhone.slice(-10)}` : "";
    const callLink = cleanPhone ? `tel:+91${cleanPhone.slice(-10)}` : "";

    const timestampIST = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    }).format(new Date());

    const recipient = process.env.NOTIFICATION_RECIPIENT_EMAIL || "vb034248@gmail.com";
    const smtpUser = process.env.SMTP_USER || "vb034248@gmail.com";
    const smtpPass = (process.env.SMTP_PASS || "").trim().replace(/\s+/g, "");

    // Graceful handling if App Password is not yet filled in .env.local
    if (!smtpPass) {
      console.warn(
        `[Booking Email Alert] SMTP_PASS not set in environment. Booking recorded for ${name} (${phone}) in ${area}. Telegram status: ${telegramSent}`
      );

      return NextResponse.json({
        success: true,
        emailDelivered: false,
        telegramDelivered: telegramSent,
        pendingAppPassword: true,
        message: "Booking received. Email credentials pending configuration.",
      });
    }

    // Configure Nodemailer Gmail Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false", // true for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `🔨 New Booking: ${name} (${area}) - ${subService || service}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Carpenter Booking</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4efe6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1F1B18;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4efe6; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #EFE8DD; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #1F1B18; padding: 24px 28px; text-align: left;">
              <div style="color: #C59B63; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px;">
                Verified Hyderabad Carpentry Network
              </div>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
                🚨 New Booking Received!
              </h1>
              <p style="color: #c9b9a6; font-size: 13px; margin: 6px 0 0 0;">
                Received on ${timestampIST}
              </p>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding: 20px 28px; background-color: #FAF6EF; border-bottom: 1px solid #EFE8DD;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  ${
                    callLink
                      ? `<td align="left" style="padding-right: 8px;">
                          <a href="${callLink}" style="display: inline-block; background-color: #1F1B18; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 13px;">
                            📞 Call: +91 ${cleanPhone.slice(-10)}
                          </a>
                        </td>`
                      : ""
                  }
                  ${
                    waLink
                      ? `<td align="left">
                          <a href="${waLink}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-weight: 700; font-size: 13px;">
                            💬 WhatsApp Customer
                          </a>
                        </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>

          <!-- Booking Details Table -->
          <tr>
            <td style="padding: 24px 28px;">
              <h2 style="font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #8A7D71; margin: 0 0 16px 0; border-bottom: 1px solid #F0EAE1; padding-bottom: 8px;">
                Customer & Job Details
              </h2>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px; line-height: 1.6;">
                <tr>
                  <td width="35%" style="padding: 8px 0; color: #73675C; font-weight: 600;">Customer Name:</td>
                  <td width="65%" style="padding: 8px 0; color: #1F1B18; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Mobile Number:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 700;">
                    <a href="${callLink}" style="color: #C59B63; text-decoration: none;">+91 ${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Area / Locality:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 700;">📍 ${area} (Hyderabad)</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Service Category:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 700;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Required Service:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 700; background-color: #F8F5EE; padding-left: 8px; border-radius: 4px;">${subService}</td>
                </tr>
                ${
                  price
                    ? `<tr>
                        <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Estimated Rate:</td>
                        <td style="padding: 8px 0; color: #16A34A; font-weight: 700;">${price}</td>
                      </tr>`
                    : ""
                }
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Preferred Date:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 600;">📅 ${preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Preferred Time Slot:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 600;">⏰ ${preferredSlot}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Property Type:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-weight: 600;">🏠 ${propertyType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Customer Notes:</td>
                  <td style="padding: 8px 0; color: #1F1B18; font-style: italic;">"${notes || "None"}"</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Source:</td>
                  <td style="padding: 8px 0; color: #8A7D71; font-size: 12px;">${source}</td>
                </tr>
                ${
                  pageUrl
                    ? `<tr>
                        <td style="padding: 8px 0; color: #73675C; font-weight: 600;">Page URL:</td>
                        <td style="padding: 8px 0; color: #1F1B18; font-size: 12px; word-break: break-all;">${pageUrl}</td>
                      </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          <!-- Footer Notice -->
          <tr>
            <td style="background-color: #FAF6EF; padding: 18px 28px; border-top: 1px solid #EFE8DD; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #8A7D71;">
                Dispatched automatically to <strong>${recipient}</strong> via Hyderabad Carpenter Portal.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const textContent = `
NEW CARPENTER BOOKING RECEIVED (HYDERABAD)
=========================================
Time: ${timestampIST}
Customer: ${name}
Phone: +91 ${phone}
Locality: ${area}
Category: ${service}
Required Service: ${subService}
${price ? `Estimated Rate: ${price}\n` : ""}Preferred Date: ${preferredDate}
Time Slot: ${preferredSlot}
Property Type: ${propertyType}
Notes: ${notes}
Source: ${source}
Page URL: ${pageUrl || pagePath || "N/A"}

Quick WhatsApp: ${waLink || "N/A"}
Quick Call: ${callLink || "N/A"}
    `.trim();

    await transporter.sendMail({
      from: `"Carpenter Repair Hyderabad" <${smtpUser}>`,
      to: recipient,
      replyTo: smtpUser,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      emailDelivered: true,
      telegramDelivered: telegramSent,
      message: "Booking notification processed successfully.",
    });
  } catch (error: any) {
    console.error("[send-booking error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process booking",
      },
      { status: 500 }
    );
  }
}
