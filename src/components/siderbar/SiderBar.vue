<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 17:17:07
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-14 14:41:28
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/siderbar/SiderBar.vue
-->


<template>
  <div >
    <div>
      <ElAvatar src="https://i.loli.net/2021/01/13/RInzHLkJGaFfS1B.jpg" />
    </div>
    <div><SiderMenu /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElAvatar } from "element-plus";

import SiderMenu from "@/components/siderbar/SiderMenu.vue";

export default defineComponent({
  name: "SiderBar",
  components: {
    ElAvatar,
    SiderMenu,
  },
});
</script>

<style>
</style>