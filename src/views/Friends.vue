<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-13 11:20:50
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-19 18:08:21
 * @Description: file content
 * @FilePath: /yuzhu-client/src/views/Friends.vue
-->
<template>
 <div class="friend-container">
   <FriendsList/>
   <FriendBoard/>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FriendsList from "@/components/friends/FriendsList.vue";
import FriendBoard from "@/components/friends/FriendBoard.vue";
 
export default defineComponent({
  name: 'Friends',
  components:{
    FriendsList,
    // FriendBoard
  }
  
});
</script>
<style lang="scss" scoped>
.friend-container{
  display: flex;
  flex-wrap: nowrap;
}
</style>
