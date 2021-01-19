<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-17 16:51:29
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-18 09:19:08
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/friends/FriendCard.vue
-->

<template>
  <div class="user-card">
    <ElAvatar
      class="user-avatar"
      shape="square"
      :size="30"
      :src="user.avatar"
    ></ElAvatar>
    <div>{{ user.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElAvatar } from "element-plus";
import { User } from "./friends";

export default defineComponent({
  name: "FriendCard",
  props: {
    user: Object,
  },
  components: {
    ElAvatar,
  },
  setup(props, { emit }) {
    // console.log(props);
  },
});
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .user-avatar{
    margin-left: 5px;
    margin-right: 3px;
  }
}
</style>>
 