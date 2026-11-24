import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
};

export default nextConfig;
