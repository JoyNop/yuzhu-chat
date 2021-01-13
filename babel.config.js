/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 16:54:13
 * @Description: file content
 * @FilePath: /yuzhu-client/babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
