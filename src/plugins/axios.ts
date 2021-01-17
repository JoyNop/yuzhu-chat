/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-17 10:39:08
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-17 11:49:33
 * @Description: file content
 * @FilePath: /yuzhu-client/src/plugins/axios.ts
 */

 import axios from "axios";
 
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    console.log(config);
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.log(response);
    
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

 
export default _axios