<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-19 17:23:59
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-25 18:02:17
 * @Description: file content
 * @FilePath: /yuzhu-client/src/components/friends/FriendBoard.vue
-->
<template>
  <!-- <div>{{props.user.id}}</div> -->
  <div class="friends-board">
    <ElCard class="friend-card">
      <div class="box-container">
        <div class="friend-title">
          <div>
            <div class="friend-name">{{ user.name }}</div>
            <div class="friend-description">我是一个个性签名</div>
          </div>

          <div class="friend-avatar">
            <ElAvatar shape="square" :size="80" :src="user.avatar"></ElAvatar>
          </div>
        </div>
        <ElDivider />
        <div class="friend-info">
          <ul>
            <li>邮 箱：{{ user.email }}</li>
            <li>账 户：{{ user.id }}</li>
          </ul>
        </div>
        <div class="friend-chat">
          <ElButton type="primary" @click="sendMessage">发送消息</ElButton>
        </div>
      </div>
    </ElCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { User } from "./friends";
import { ElCard, ElAvatar, ElDivider, ElButton } from "element-plus";
// import { ipcRenderer } from "electron";
const { ipcRenderer } = window.require("electron");

export default defineComponent({
  name: "FriendBoard",
  components: { ElCard, ElAvatar, ElDivider, ElButton },
  props: {
    user: Object,
  },
  methods: {
    sendMessage: async () => {
      try {
        console.log(window);
        console.log(ipcRenderer.sendSync("synchronous-message", "ping")); // prints "pong"

                ipcRenderer.on('asynchronous-reply', ( ) => {
          // console.log(arg) // prints "pong"
        })
        ipcRenderer.send("asynchronous-message", "ping");
      } catch (error) {
        console.log(error);
      }
    },
  },
  // setup(props) {
  //   console.log(props.user);

  //   const text = () => {
  //     console.log(props.user);
  //   };
  //   const sendMessage = async () => {
  //     try {
  //         console.log(window);

  //       if (window.require) {

  //         console.log(window.require);

  //   // const ipc = window.require('electron').ipcRenderer
  //   // ipc.send("login")
  // }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   return { text,  };
  // },
});
</script>

<style lang="scss" scoped>
.friend-card {
  padding: 50px;
}
.friends-board {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  // align-items: center
  padding: 10px;
}
.friend-title {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.friend-info {
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.friend-name {
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;
}
.text {
  font-size: 14px;
}

.box-container {
  height: 400px;
}

.friend-chat {
  display: flex;
  justify-content: center;
  button {
    font-weight: bold;
  }
}
</style>