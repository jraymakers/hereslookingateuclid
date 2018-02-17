var path = require('path');

module.exports = {
  entry: './src/root/root.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              silent: true,
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'out')
  },
  resolve: {
    extensions: ['.tsx', '.js']
  },
  stats: {
    assets: false,
    hash: false,
    timings: false,
    version: false
  }
};