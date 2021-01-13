<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 17:58:49
 * @Description: file content
 * @FilePath: /yuzhu-client/src/App.vue
-->
<template>
  <!-- <ElContainer id="app"  >
    <ElAside width="200px">Aside</ElAside>
    <ElContainer>
      <ElHeader>Header</ElHeader>
      <ElMain><router-view /></ElMain>
    </ElContainer>
  </ElContainer> -->

 <ElContainer id="app">
    <ElAside class="yz-common-sider-bar" width="4rem" ><SiderBar/></ElAside>
    <ElMain><router-view /></ElMain>
  </ElContainer>
  
</template>

<script>
import SiderBar from './components/siderbar/SiderBar'
import { ElContainer, ElAside, ElHeader, ElMain } from "element-plus";

export default {
  name: "App",
  components: {
    SiderBar,
    ElContainer,
    ElAside,
    // ElHeader,
    ElMain,
  },
};
</script>

<style lang="scss" scoped>

 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: bisque;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

.yz-common-sider-bar{
  padding: 0.5rem;
  text-align: center;
   
}
</style>
