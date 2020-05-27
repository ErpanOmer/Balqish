const { disableEsLint, overrideDevServer, addWebpackAlias, watchAll, override } = require("customize-cra")
const path = require("path");

console.log(1111)

module.exports = {
  webpack: override(
    // usual webpack plugin
    disableEsLint(),
    addWebpackAlias({
      '@ag': path.resolve(__dirname, "src/ag")
    })
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
