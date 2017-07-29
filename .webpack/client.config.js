var path = require('path');

module.exports = {
  entry: './app/scripts/home.js',
  output: {
    filename: 'home.js',
    path: path.resolve('./public/scripts')
  },
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
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["app/"]
            }
          }
        ]
      }
    ]
  }
};