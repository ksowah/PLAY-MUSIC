/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ksets.netlify.app"]
  }
}

module.exports = nextConfig
