import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Next.js internal property for dev server
  allowedDevOrigins: ["192.168.0.100", "0.0.0.0", "localhost"]
};

export default nextConfig;
