const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
      '#assets': path.resolve('assets')
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx?)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Big Rice',
      template: 'src/index.html',
      favicon: 'assets/favicon.ico'
    })
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/dist/'),
    port: 3000
  }
};
