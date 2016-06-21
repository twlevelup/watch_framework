'use strict';

var path = require('path'),
  webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'sass?sourceMap']
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-template-loader'
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      // FIXME this is lazy, do something better with backbone and underscore
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery',
      Backbone: 'backbone',
      _: 'underscore'
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
