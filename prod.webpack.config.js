const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./base.webpack.config');

module.exports = merge(base, {
  mode: 'production',
  output: {
    publicPath: '/codeko-jobtest/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: './media/[name].[hash].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
  ],
});
