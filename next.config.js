/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  compiler: {
    styledComponents:
      true |
      {
        displayName: true,
        ssr: true
      }
  }
};
module.exports = nextConfig;
