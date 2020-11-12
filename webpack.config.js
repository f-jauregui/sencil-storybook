module.exports = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins = []
}
