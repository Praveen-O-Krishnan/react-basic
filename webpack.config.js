module.exports = {
  entry: ["./app/index.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  mode: "none",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + "/build",
    inline: true
  }
};

// loaders: [
//   { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
//   { test: /\.css$/, loader: "style!css" },
//   { test: /\.jsx?$/, loader: "babel?stage=0", exclude: /node_modules/ }
// ];
//
//
//
// rules: [
//   {
//     loader: "babel-loader",
//     test: /\.js$/,
//     exclude: /node_modules/
//   }
// ]
