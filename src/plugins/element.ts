/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:28:54
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 11:32:15
 * @Description: file content
 * @FilePath: /yuzhu-client/src/plugins/element.ts
 */
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

export default (app: any) => {
  app.use(ElementPlus);
};
