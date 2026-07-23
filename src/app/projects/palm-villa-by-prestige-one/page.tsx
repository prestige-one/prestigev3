import type { Metadata } from "next";
import SiteHeader from "@/layouts/SiteHeader";
import SiteFooterBlock from "@/layouts/SiteFooterBlock";

export const metadata: Metadata = {
  title: "Palm Villa by Prestige One",
  description: "Palm Villa by Prestige One — full project details coming soon.",
};

export default function PalmVillaProjectPage() {
  return (
    <>
      <SiteHeader />
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8rem 1.5rem",
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <p style={{ letterSpacing: "0.28em", textTransform: "uppercase", fontSize: "0.8rem", opacity: 0.65 }}>
          Palm Jumeirah
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0.75rem 0" }}>Palm Villa</h1>
        <p style={{ opacity: 0.75, maxWidth: 560 }}>
          Full project details for Palm Villa by Prestige One are coming soon.
        </p>
      </section>
      <SiteFooterBlock />
    </>
  );
}
