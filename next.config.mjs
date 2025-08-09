/** @type {import('next').NextConfig} */

const isProjectSite = false; // set to false if deploying to jeusbausa.github.io root
const repo = "jeusbausa.github.io"; // or your project repo name

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  output: "export", // <-- static export
  images: { unoptimized: true }, // GH Pages doesn't do Next Image optimize
  trailingSlash: true, // nicer URLs on static hosts
  // For **project** pages like github.com/<you>/<repo> enable these:
  basePath: isProjectSite ? `/${repo}` : undefined,
  assetPrefix: isProjectSite ? `/${repo}/` : undefined,
};
export default nextConfig;
