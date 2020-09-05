module.exports = {
    runtimeCompiler: true,
    publicPath: './',  
    devServer: {
      port: 8080
    },
    transpileDependencies: process.env.NODE_ENV === "development" ? ["*"] : [],
    productionSourceMap: false,
  }