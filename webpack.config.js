module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  devtool: "inline-source-map",
  externals: {
    "react": 'React',
    "react-dom": "ReactDOM",
    "lodash": "_"
  }
};
