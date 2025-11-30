/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ["png", "avif"],
    ["jpg", "avif"],
    ["webp", "avif"],
  ],
};

module.exports = config;
