/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
export default nextConfig;
