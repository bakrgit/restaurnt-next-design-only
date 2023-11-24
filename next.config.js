/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "images.unsplash.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
