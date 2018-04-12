const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    extractSass
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        'presets': ['react', 'es2015', 'stage-0', 'react-hmre']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'react-svg-loader', // 'react-svg'
        query: {
          svgo: {
            pretty: true,
            plugins: [{removeStyleElement: true}]
          }
        }
      }
      ]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /flexboxgrid/
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader?importLoaders=1'
        }, {
          loader: 'resolve-url-loader'
        }, {
          loader: 'sass-loader?sourceMap'
        }],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }, {
      test: /\.(jpg|png|otf|ico)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    }]
  }
};
