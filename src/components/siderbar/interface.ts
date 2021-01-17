/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-15 11:32:06
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-15 11:53:06
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/siderbar/interface.ts
 */


 export interface SiderMenuData{
  isCollapse:boolean,
  isRouter:boolean,
  navBarList:NavBar[],

 }

  interface NavBar{
  title:string,
  icon:string,
  link:string,
  
}