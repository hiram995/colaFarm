const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')  //代码块一
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {   //代码块二
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify")
      }
    },
    plugins: [new NodePolyfillPlugin()],
  },
})
