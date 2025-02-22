import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  generateBuildId: () => "constant_build_id",
};

export default nextConfig;
