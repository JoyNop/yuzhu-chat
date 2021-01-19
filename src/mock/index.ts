/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-17 11:32:40
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-17 15:53:33
 * @Description: file content
 * @FilePath: /yuzhu-client/src/mock/index.ts
 */
import Mock from 'mockjs'
import * as  userService from "./user";

const Random = Mock.Random

 
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('/api/user/list', 'get', userService.getUserList())