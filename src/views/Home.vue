<template>
  <div class="home">
    <div class="user-list-wrapper"
         v-show="isMobile &&
                 activeMobileWindow === 'userList' ||
                 !isMobile">
      <user-list></user-list>
    </div>
    <div class="chat-window-wrapper"
         v-show="isMobile &&
                 activeMobileWindow === 'chat' ||
                 !isMobile">
      <chat-window></chat-window>
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { mapState } from 'vuex';

export default {
  components: {
    UserList,
    ChatWindow,
  },
  computed: {
    ...mapState([
      'isMobile',
      'activeMobileWindow',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
}
.user-list-wrapper {
  flex: 1 1 100%;
}
.chat-window-wrapper {
  flex: 1 1 100%;
}

@media screen and (min-width: 1080px) {
  .chat-window-wrapper {
    height: 80%;
  }
}
</style>
