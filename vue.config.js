module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        // '@':'src',//这是默认的已经配置好的就不需要我们写了
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        // 'router':'@/router',
        // 'store':'@/store',
        'views':'@/views'
      }
    }
  }
}