<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-20 10:28:11
 * @Description: file content
 * @FilePath: /yuzhu-client/src/views/Friends.vue
-->
<template>
  <div class="friend-container">
    <FriendsList @handleUserData="getUserData($event)" />
    <FriendBoard :user="user" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import FriendsList from "@/components/friends/FriendsList.vue";
import FriendBoard from "@/components/friends/FriendBoard.vue";
import { User } from "@/components/friends/friends";

interface Data {
  user: User;
}
export default defineComponent({
  name: "Friends",
  components: {
    FriendsList,
    FriendBoard,
  },
  setup() {
    const data: Data = reactive({
      user: {
        id: "",
        email: "",
        avatar: "",
        name: "",
        createDate: "",
      },
    });
    const getUserData = (userData: User) => {
      data.user = userData;
    };


//  const activeUserResource = computed(() => {
//       return (
//         selectedResource.value ||
//         (getResourcesLength > 0 && data.resources[0]) ||
//         null
//       );
//     });



    return {
      ...toRefs(data),
      getUserData,
    };
  },
});
</script>
<style lang="scss" scoped>
.friend-container {
  display: flex;
  flex-wrap: nowrap;
}
</style>
