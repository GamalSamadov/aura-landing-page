import { ImageResponse } from "next/og";

export const alt = "Aura — AI money management that budgets for you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// One branded social image, shared across locales.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #06080b 0%, #0c211c 100%)",
          color: "#eef3f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 36 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              display: "flex",
              background: "linear-gradient(135deg, #10b981, #14b8a6)",
            }}
          />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>Aura</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 920,
            letterSpacing: "-0.02em",
          }}
        >
          Your money, finally on autopilot.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 30,
            color: "#9aa6af",
            maxWidth: 840,
          }}
        >
          AI categorizes every transaction and builds a budget that adapts to you.
        </div>
      </div>
    ),
    { ...size },
  );
}
