import type { NextConfig } from "next";

export default {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
} satisfies NextConfig;
