/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/actor-website",
};

module.exports = nextConfig;
