/** @type {import('next').NextConfig} */
import withExportImages from "next-export-optimize-images";

const nextConfig = withExportImages({
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    // unoptimized: true,
  },

  pageExtensions: ["js", "jsx", "ts", "tsx"],
});

export default nextConfig;
