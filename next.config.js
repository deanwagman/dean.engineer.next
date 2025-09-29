/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's now stable in Next.js 15
  transpilePackages: ['@react-pdf/renderer'],
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      '@react-pdf/renderer': 'commonjs @react-pdf/renderer',
    });
    return config;
  },
}

module.exports = nextConfig