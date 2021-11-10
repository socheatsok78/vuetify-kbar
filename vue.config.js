/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: process.env.BUILD_ENV === 'docs'
    ? '/vuetify-kbar/'
    : '/',
  css: {
    extract: false
  },
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.s[ac]ss$/,
          include: /node_modules[/\\]vuetify[/\\]/,
          issuer: /node_modules[/\\]vuetify[/\\]/,
          loader: 'null-loader'
        }
      ]
    }
  },
  transpileDependencies: [
    // 'vuetify'
  ]
}
