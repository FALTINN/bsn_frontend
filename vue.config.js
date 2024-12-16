module.exports = {
  publicPath: 'http://localhost:8080',
  outputDir: '../BSN_project/static/dist',
  indexPath: '../BSN_project/../../templates/base_vue.html',

  configureWebpack: {
    devServer: {
      devMiddleware: {
        writeToDisk: true
      }
    }
  }
}