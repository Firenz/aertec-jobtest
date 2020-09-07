const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      core: path.resolve(__dirname, './src/core/'),
      common: path.resolve(__dirname, './src/common/'),
      'common-app': path.resolve(__dirname, './src/common-app/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
      pods: path.resolve(__dirname, './src/pods/'),
      scenes: path.resolve(__dirname, './src/scenes/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './main.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true,
          babelCore: '@babel/core',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
              name: './media/[hash].[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new CheckerPlugin(),
  ],
};
