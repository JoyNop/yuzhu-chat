<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-17 15:26:38
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-19 18:25:44
 * @Description: file content 
 * @FilePath: /yuzhu-client/src/components/friends/FriendsList.vue
-->
<template>
  <div class="user-list-container">
    <div class="friends-search">
      <ElInput
        size="mini"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchText"
      />
    </div>
    <div class="friends-list">
      <ul v-for="(user, index) in state.userList" :key="index">
        <li
          @click="getUserInfo(user, index)"
          :style="index === selection ? 'background-color: #E7E7E7;' : null"
        >
          <FriendCard :user="user" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from "vue";
import FriendCard from "./FriendCard.vue";
import { User } from "./friends";
import { ElInput } from "element-plus";

interface ReactiveState {
  userList: User[];
}

export default defineComponent( {
  name: "FriendsList",
  components: {
    FriendCard,
    ElInput,
  },
  setup(props, context) {
    const internalInstance = getCurrentInstance();
    const http = internalInstance?.appContext.app.axios;

    const state = reactive<ReactiveState>({
      userList: [],
    });

    const selection = ref(-1);

    const searchText = ref("");

    const getUserList = async () => {
      const res = await http?.get("/api/user/list");
      console.log(res?.data);

      state.userList = res?.data;
    };

    const getUserInfo = (user: User, selectIndex: number) => {
       selection.value = selectIndex;
       context.emit("handleUserData", user);
    };

    onMounted(async () => {
      await getUserList();
    });

    return {
      state,
      getUserInfo,
      selection,
      searchText,
    };
  },
  // data() {},

  // mounted() {},
});
</script>
<style lang="scss" scoped>
.user-list-container {
  width: 260px;
  // background-color: bisque;

  li {
    display: flex;
    align-items: center;
    height: 50px;
    // border-bottom: #EEEEEE solid 1px;
    background-color: #fbfbfb;
    padding-left: 15px;
  }
}
.friends-list {
  overflow-y: auto;
  height: 94vh;
  // height: calc(100vh - 4px);
}
.friends-search {
  background-color: #fbfbfb;
  padding: 10px;
}
</style>