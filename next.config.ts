import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/foo-Bar",
        destination: "/foo-bar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
