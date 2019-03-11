<template>
  <div class="message-list">
    <chat-window-message-item v-for="messageInfo in chatMessages"
                              :key="messageInfo.message"
                              :message-info="messageInfo"
                              :own="messageInfo.userId === userId">
    </chat-window-message-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChatWindowMessageItem from './ChatWindowMessageItem.vue';

export default {
  components: {
    ChatWindowMessageItem,
  },
  computed: {
    ...mapState([
      'chatMessages',
      'userId',
    ]),
  },
};
</script>

<style lang="scss">
.message-list {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 1rem;
  background-color: #42b983;
  height: 90%;
}
</style>
