/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-17 14:58:16
 * @Description: file content
 * @FilePath: /yuzhu-client/src/main.ts
 */
// import installAxios from "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
require("./mock");

const app = createApp(App);
installElementPlus(app);
// installAxios(app);
app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
