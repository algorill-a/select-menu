const path = require('path');

const SRC_DIR = path.join(__dirname, './client/src');
const OUT_DIR = path.join(__dirname, './client/dist');

module.exports = {
  mode: 'performance',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }, {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      }],
  },
<<<<<<< HEAD

  mode: 'performance',
=======
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
>>>>>>> 65e25887d14d66e9b6902232624abe5fba3443da
};
