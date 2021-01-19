/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-17 15:48:56
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-18 09:15:17
 * @Description: file content
 * @FilePath: /yuzhu-client/src/mock/user.ts
 */
import Mock from "mockjs";

const Random = Mock.Random;

export const getUserList = () => {
  const _data = [];
  for (let i = 0; i < 20; i++) {
    const cname=Random.cname()
    const newItem = {
      // 详细 规则 参照mockjs官网
      id:Random.id(),
      email:Random.email(),
      avatar: Random.dataImage("40x40",  cname ), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
      name: cname, // Random.cname() 随机生成中文名
      createDate: Random.date() + " " + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    _data.push(newItem);
  }
  return _data;
};
