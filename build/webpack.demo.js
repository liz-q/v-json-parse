const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './examples/entry.js',
  output: {
    filename: 'demo.js',
    path: path.resolve(process.cwd(), './examples/lib'),
    publicPath: '/'
  },
  devServer: {
    client: {
      overlay: true
    },
    static: {
      directory: path.resolve(process.cwd(), './examples/lib'),
      publicPath: '/'
    },
    port: 8086,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      main: path.resolve(__dirname, '../src'),
      examples: path.resolve(__dirname, '../examples')
    },
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|jsx?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/template.html',
      filename: './index.html'
    })
  ]
}
