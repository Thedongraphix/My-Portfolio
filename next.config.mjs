import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        net: false,
      }
    }
    return config
  },
}

export default withMDX(nextConfig)