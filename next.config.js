/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@react-pdf/renderer'],
  webpack: (config, { isServer }) => {
    // Handle ESM packages
    config.externals = config.externals || [];
    
    if (!isServer) {
      config.externals.push({
        '@react-pdf/renderer': 'commonjs @react-pdf/renderer',
      });
    }
    
    // Handle Three.js and related packages
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': require.resolve('three'),
      'three/examples/jsm/controls/OrbitControls': require.resolve('three/examples/jsm/controls/OrbitControls.js'),
    };
    
    // Handle Three.js examples
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'three/examples/jsm/controls/OrbitControls': require.resolve('three/examples/jsm/controls/OrbitControls.js'),
    };
    
    return config;
  },
}

module.exports = nextConfig