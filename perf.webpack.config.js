const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prod = require('./prod.webpack.config');

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
