const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// import appPaths from 'app-paths'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const dev = process.env.NODE_ENV === 'development'
const cssLoader = 'css!sass'

const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  filename: 'common-[hash].js',
  minChunks: 2
})

const appPath = path.resolve(__dirname, 'app')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  context: appPath,
  resolve: {
    modules: [appPath, 'node_modules'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  entry: { index: path.resolve(appPath, 'index.js') },
  output: {
    path: outputPath,
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  plugins: (
      // DEV plugins
      dev ? [
        new webpack.NoErrorsPlugin()
      ]
      // PROD/TEST plugins
      : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { screw_ie8: true, warnings: false },
          mangle: { screw_ie8: true },
          output: { comments: false },
          sourceMap: false
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({ 'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }}),
        new ExtractTextPlugin('[name]-[hash].css')
      ]
    ).concat([
      // COMMON plugins
      commonsChunkPlugin,
      new HtmlWebpackPlugin({
        // Required
        inject: false,
        template: require('html-webpack-template'),
        // template: 'node_modules/html-webpack-template/index.ejs',

        // Optional
        appMountId: 'app',
        // baseHref: 'http://example.com/awesome',
        // devServer: 3001,
        filename: 'index.html', // path.resolve(outputPath, 'index.html'),
        title: 'Yalani!',
        mobile: true,
        window: {
          env: {
            apiHost: 'http://myapi.com/api/v1'
          }
        }
        // and any other config options from html-webpack-plugin
        // https://github.com/ampedandwired/html-webpack-plugin#configuration
      })
    ]),
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
        include: [appPath]
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'node_modules'), appPath],
        loader: dev ? 'style!' + cssLoader : ExtractTextPlugin.extract('style-loader', cssLoader)
      },
      { test: /\.(ttf|eot|svg|woff2?)$/, loader: 'file-loader' },
      { test: /\.html$/, loader: 'html' },
      // { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
