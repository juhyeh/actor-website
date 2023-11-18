/** @type {import('next').NextConfig} */
// const withImages = require("next-images"); // Import next-images plugin

const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  images: { unoptimized: true },

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

// module.exports = withImages(nextConfig);
module.exports = nextConfig;
