const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  assetPrefix: !debug ? '/uwvexu.ca/' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
};

module.exports = withSass(nextConfig);
