import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      include: path.resolve("inline-scripts"),
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
