/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
