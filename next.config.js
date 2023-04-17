/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이게 뭐지?
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
