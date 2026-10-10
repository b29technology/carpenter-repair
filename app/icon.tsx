import { ImageResponse } from "next/og";
import { LuHammer } from "react-icons/lu";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C59B63",
          borderRadius: 8,
          color: "#FFFFFF",
        }}
      >
        <LuHammer size={20} strokeWidth={2.5} />
      </div>
    ),
    {
      ...size,
    }
  );
}
