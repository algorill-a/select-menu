const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var OUT_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },

  mode: 'development'
}