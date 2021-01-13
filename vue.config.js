/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 17:21:08
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 17:21:38
 * @Description: file content
 * @FilePath: /yuzhu-client/vue.config.js
 */

 
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: './',
  // devServer: {
  //   // can be overwritten by process.env.HOST
  //   host: '0.0.0.0',
  //   port: 8080
  // },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': '#4268b9',
  //         'link-color': '#4268b9',
  //         'border-radius-base': '2px'
  //       },
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));

      config.plugin("html").tap(args => {
        args[0].title = "语竹";
        return args;
      });
  }
};

