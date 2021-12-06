/**
 * @type {import('next').NextConfig}
 */
const webpack = require('webpack');
const nextConfig = {
  distDir: 'build',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.spec.(tsx|ts)$/,
      loader: 'ignore-loader'
    });
    return config;
  }
};

module.exports = nextConfig;
