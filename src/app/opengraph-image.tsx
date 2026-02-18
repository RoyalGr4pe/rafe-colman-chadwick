import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rafe Colman-Chadwick";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1C2D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
        }}
      >
        <div
          style={{
            color: "#C9A227",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          Ultra-Endurance &middot; Charity &middot; Film
        </div>
        <div
          style={{
            color: "#FAFAFA",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Rafe Colman-Chadwick
        </div>
        <div
          style={{
            color: "rgba(250,250,250,0.7)",
            fontSize: 24,
            marginTop: 16,
            maxWidth: 700,
          }}
        >
          Running the length of Britain for those who need it most.
        </div>
      </div>
    ),
    { ...size }
  );
}
