import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@playcanvas/react", "playcanvas", "drift-slider"],
  async headers() {
    return [
      {
        // Static media under public/assets never changes in place (edits ship
        // under a new filename), so let browsers/CDN cache it long-term instead
        // of re-validating or re-fetching byte ranges on every visit.
        source: "/assets/:path*.:ext(mp4|webm|mov|jpg|jpeg|png|webp|gif|svg|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/mortgage-calculator", destination: "/tools/mortgage-calculator", permanent: true },
      { source: "/commission-split-calculator", destination: "/tools/commission-split-calculator", permanent: true },
      { source: "/lead-roi-calculator", destination: "/tools/lead-roi-calculator", permanent: true },
      { source: "/rent-vs-buy", destination: "/tools/rent-vs-buy", permanent: true },
      { source: "/projects/place-by-prestige-one", destination: "/projects/golf-residences-by-prestige-one", permanent: true },
      {
        source: "/construction-update-place-by-prestige-one",
        destination: "/construction-update-golf-residences-by-prestige-one",
        permanent: true,
      },
      {
        source: "/about-us/vision-values",
        destination: "/about-us/vision-and-values",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
