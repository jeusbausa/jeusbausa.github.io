/** @type {import('next').NextConfig} */
const repo =
  "https://raw.githubusercontent.com/jeusbausa/jeusbausa.github.io/refs/heads/gh-pages";
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
  assetPrefix: `${repo}/`,
};
export default nextConfig;
