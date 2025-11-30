/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ["png", "avif"],
    ["jpg", "avif"],
    ["webp", "avif"],
    ["jpeg", "avif"],
  ],
  generateFormats: ["avif"], // comment if you also want webp for compatibility
};

module.exports = config;
