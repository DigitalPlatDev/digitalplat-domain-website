import type { NextConfig } from "next";

export default {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  experimental: {
    cpus: 1,
  },
  images: {
    unoptimized: true,
  },
} satisfies NextConfig;
