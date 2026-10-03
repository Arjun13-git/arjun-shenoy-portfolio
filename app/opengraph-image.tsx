import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A plain card in the site's dark palette: name, role, URL. No illustrations.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#090B10",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: "#F1F5F9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            border: "2px solid rgba(34,211,238,0.45)",
            background: "rgba(34,211,238,0.08)",
            color: "#22D3EE",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          AS
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#22D3EE", letterSpacing: 2, textTransform: "uppercase" }}>
            {siteConfig.role}
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#8B95A7", marginTop: 20, maxWidth: 900 }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#8B95A7" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
