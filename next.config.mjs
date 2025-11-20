/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Still needed for Cloudflare Pages
  },

  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
