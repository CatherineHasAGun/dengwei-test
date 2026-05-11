import { ImageResponse } from "next/og";

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
          alignItems: "center",
          background: "linear-gradient(135deg, #FF6B9D 0%, #FFD166 100%)",
          borderRadius: "50%",
          color: "#FFFFFF",
          display: "flex",
          fontSize: 22,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        D
      </div>
    ),
    size,
  );
}
