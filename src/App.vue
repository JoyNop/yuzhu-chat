<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 17:08:19
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
    <ElAside width="60px">Aside</ElAside>
    <ElMain><router-view /></ElMain>
  </ElContainer>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ElContainer, ElAside, ElHeader, ElMain } from "element-plus";

export default {
  name: "App",
  components: {
    ElContainer,
    ElAside,
    // ElHeader,
    ElMain,
  },
};
</script>

<style>
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
</style>
