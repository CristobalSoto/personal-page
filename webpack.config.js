const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ruleForStyles = 
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}

const ruleForJavascript = 
{
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic'
          }
        ]
      ]
    }
}

const rulesForfiles = {
  test: /\.(png|jpg|gif)$/,
  use: [{
      loader: 'file-loader',
      options: {}
  }]
}

const rules = [ruleForJavascript, ruleForStyles, rulesForfiles]

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      favicon: './src/assets/favicon.ico'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
  }
}