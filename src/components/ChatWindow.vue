<template>
  <div class="chat-window">
    <chat-window-message-list v-show="true"
                              class="chat-window__message-list"></chat-window-message-list>
    <chat-window-input v-model="ownChatMessage"
                       @keyup.enter.native="sendMessage"
                       class="chat-window__input"></chat-window-input>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ChatWindowMessageList from './ChatWindow/ChatWindowMessageList.vue';
import ChatWindowInput from './ChatWindow/ChatWindowInput.vue';

export default {
  components: {
    ChatWindowMessageList,
    ChatWindowInput,
  },
  data() {
    return {
      ownChatMessage: '',
    };
  },
  computed: {
    ...mapState([
      'chatSocketService',
    ]),
  },
  methods: {
    ...mapMutations([
      'setUserId',
      'addChatMessage',
    ]),
    sendMessage() {
      this.chatSocketService.sendMessage(this.ownChatMessage);
      this.ownChatMessage = '';
    },
  },
  created() {
    this.chatSocketService.addListener('message', (mes) => {
      const mesParsedData = JSON.parse(mes.data);
      if (mesParsedData.type === 'newMessage') {
        this.addChatMessage(mesParsedData);
      }

      if (mesParsedData.type === 'userConnection') {
        this.setUserId(mesParsedData.userId);
      }
    });
  },
};
</script>

<style lang="scss">
.chat-window {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1080px) {

}
</style>
