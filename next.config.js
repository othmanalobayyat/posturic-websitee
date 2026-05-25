/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable output file tracing (avoids Windows ENOENT issues with nft.json)
  outputFileTracingExcludes: {
    '*': ['**'],
  },
}

module.exports = nextConfig
