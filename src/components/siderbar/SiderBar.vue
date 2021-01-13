<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 17:17:07
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-13 18:01:10
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/siderbar/SiderBar.vue
-->


<template>
  <div>
    <div><ElAvatar src="https://i.loli.net/2021/01/13/RInzHLkJGaFfS1B.jpg"/></div>
    <div>applis</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {ElAvatar  } from "element-plus";

export default defineComponent({
  name: "SiderBar",
  components:{
    ElAvatar
  }
});
</script>

<style>
</style>