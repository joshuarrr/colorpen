var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

// PostCSS
var cssimport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');
var conditionals = require('postcss-conditionals');
var cssVariables = require('postcss-css-variables');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');
var discardComments = require('postcss-discard-comments');
var functions = require('postcss-functions');
var mediaMinMax = require('postcss-media-minmax');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var browserReporter = require('postcss-browser-reporter');
var reporter = require('postcss-reporter')
var responsiveType = require('postcss-responsive-type');
var simpleExtend = require('postcss-simple-extend');
var simpleVars = require('postcss-simple-vars');
var stylelint = require('stylelint');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];

var config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpeg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },
      {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  postcss: function () {
    return [
      cssimport({
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      stylelint,
      discardComments,
      colorFunction,
      mixins({
        // mixinsFiles: path.join(__dirname, 'app/styles/mixins', '*.css')
         mixinsDir: path.join(__dirname, 'app/styles/mixins')
      }),
      responsiveType,
      simpleExtend,
      customProperties,
      cssVariables,
      simpleVars,
      customMedia,
      mediaMinMax,
      nested,
      calc,
      conditionals,
      autoprefixer(AUTOPREFIXER_BROWSERS),
      functions({
        glob: path.join(__dirname, 'app/styles/functions', '*.js')
      }),
      browserReporter({
        selector: 'body:before'
      }),
      reporter({
        clearMessages: true,
        noPlugin: true
      }),
    ];
  }
};

module.exports = config;
