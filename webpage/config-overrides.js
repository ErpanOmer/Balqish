const { overrideDevServer, addWebpackAlias, addLessLoader, watchAll, override, fixBabelImports } = require("customize-cra")
const path = require("path")

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, "src")
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#1DA57A'
      }
    })
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};
