<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-14 13:56:46
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-14 14:20:41
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/siderbar/SiderMenu.vue
-->


<template>
  <ElMenu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <ElSubmenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <ElMenuItemGroup>
        <template #title>分组一</template>
        <ElMenuItem index="1-1">选项1</ElMenuItem>
        <ElMenuItem index="1-2">选项2</ElMenuItem>
      </ElMenuItemGroup>
      <ElMenuItemGroup title="分组2">
        <ElMenuItem index="1-3">选项3</ElMenuItem>
      </ElMenuItemGroup>
      <ElSubmenu index="1-4">
        <template #title>选项4</template>
        <ElMenuItem index="1-4-1">选项1</ElMenuItem>
      </ElSubmenu>
    </ElSubmenu>
    <ElMenuItem index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </ElMenuItem>
    <ElMenuItem index="3" disabled>
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </ElMenuItem>
    <ElMenuItem index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </ElMenuItem>
  </ElMenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from "element-plus";

export default defineComponent({
  name: "SiderMenu",
  components: {
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>