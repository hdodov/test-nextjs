/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheHandler: import.meta.resolve("./cache-handler.js"),
  cacheMaxMemorySize: 0,
};

export default nextConfig;
