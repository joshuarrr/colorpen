var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');
// PostCSS
var cssimport = require('postcss-import');
var autoprefixer = require('autoprefixer-core');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');
var cssVariables = require('postcss-css-variables');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');
var discardComments = require('postcss-discard-comments');
var mediaMinMax = require('postcss-media-minmax');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simpleExtend = require('postcss-simple-extend');
var simpleVars = require('postcss-simple-vars');
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
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(path);
    },
    context: __dirname,
    entry: {
        app: process.env.NODE_ENV === 'production' ?
            ['./app/main.js'] :
            ['webpack/hot/dev-server?http://localhost:8080', './app/main.js']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [node_modules_dir]
        }, {
            test: /\.jsx$/,
            loader: 'react-hot-loader!babel-loader',
            exclude: [node_modules_dir]
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded&' +
            'includePaths[]=' +
                (path.resolve(__dirname, './node_modules', './app/scss'))
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.(png|jpeg|woff|woff2|eot|ttf)$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.(svg)$/,
            loader: 'file-loader'
        }]
    },
    postcss: function () {
        // The context of this function is the webpack loader-context
        // see: http://webpack.github.io/docs/loaders.html#loader-context
        return [
            cssimport({
                // see postcss-import docs to learn about onImport callback
                // https://github.com/postcss/postcss-import
                onImport: function (files) {
                    files.forEach(this.addDependency);
                }.bind(this)
            }),
            discardComments,
            colorFunction,
            mixins,
            simpleExtend,
            customProperties,
            cssVariables,
            simpleVars,
            customMedia,
            mediaMinMax,
            nested,
            calc,
            autoprefixer(AUTOPREFIXER_BROWSERS)
        ];
    }
};

module.exports = config;