var path = require('path');

module.exports = {
  entry: './app/pages/home.js',
  output: {
    filename: 'home.js',
    path: path.resolve('./build/app/pages'),
    libraryTarget: "commonjs2" // allow exporting React classes to outside
  },
  // don't expose these libraries outside, let it be the job of the consumer of this module to install those
  // libs as dependencies
  externals: ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /(app)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-react-jsx'],
            presets: ['es2015']
          }
        }
      }
    ]
  }
};