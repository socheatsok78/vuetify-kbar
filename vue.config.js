/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: process.env.BUILD_ENV === 'docs'
    ? '/vuetify-kbar/'
    : '/',
  css: {
    extract: false
  },
  transpileDependencies: [
    // 'vuetify'
  ]
}
