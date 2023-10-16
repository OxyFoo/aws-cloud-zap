/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'output',
    assetPrefix: './',
    images: {
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig
  