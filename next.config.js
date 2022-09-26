const WindiCSS = require('windicss-webpack-plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // @ts-ignore
    config.plugins.push(new WindiCSS());
    return config;
  },
};

module.exports = nextConfig;
