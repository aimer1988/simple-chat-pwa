<template>
  <div class="message-list">
    <div v-for="messageInfo in chatMessages"
         :key="messageInfo.message"
         class="message-list__item user-message">
      <p class="user-message__user">{{ messageInfo.userId }}</p>
      <p class="user-message__text">{{ messageInfo.message }}</p>
      <p class="user-message__time">{{ new Date(messageInfo.time).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'chatMessages',
    ]),
  },
};
</script>

<style lang="scss">
.message-list {
  padding: 1rem;
  background-color: #42b983;
  height: 95%;
  width: 100%;

  &__item {
    width: 20%;
    background-color: white;
    border-radius: 10px;
  }
}
</style>
