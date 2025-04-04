import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "grateful-labrador-1.convex.cloud", protocol: "https" },
      { hostname: "friendly-bobcat-420.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
