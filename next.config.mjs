/** @type {import('next').NextConfig} */
import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages({
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  pageExtensions: ["js", "jsx", "ts", "tsx"],
});

export default nextConfig;
