/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // produces /out for static hosting
  images: { unoptimized: true } // allow plain <img> tags
  // If you ever deploy to a subfolder (e.g., /app), set: basePath: '/app'
};
module.exports = nextConfig;
