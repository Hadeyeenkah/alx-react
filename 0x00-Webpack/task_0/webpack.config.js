const path = require('path');

module.exports = {
  entry: './src/index.js', // your main JavaScript file
  output: {
    filename: 'bundle.js', // the output file
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

