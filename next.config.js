/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: import.meta
    .resolve("./cache-handler.cjs")
    .replace("file://", ""),
  cacheMaxMemorySize: 0,
};

export default nextConfig;
