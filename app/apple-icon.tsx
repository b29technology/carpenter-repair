import { ImageResponse } from "next/og";
import { LuHammer } from "react-icons/lu";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C59B63",
          borderRadius: 36,
          padding: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: "#1F1B18",
            marginBottom: 10,
            color: "#C59B63",
          }}
        >
          <LuHammer size={52} strokeWidth={2.5} />
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: 2,
            color: "#1F1B18",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          CARPENTER
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
