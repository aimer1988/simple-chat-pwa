<template>
  <div class="user-message-wrapper"
       :class="{ 'user-message-wrapper_own': own }">
    <div class="user-message"
         :class="{ 'user-message_own': own }">
      <p class="user-message__user">{{ userName }}</p>
      <p class="user-message__text">{{ messageInfo.message }}</p>
      <p class="user-message__time">{{ new Date(messageInfo.time).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageInfo: Object,
    own: Boolean,
  },
  computed: {
    userName() {
      return this.own ? 'Я' : this.messageInfo.userId;
    },
  },
};
</script>

<style lang="scss">
.user-message-wrapper {
  display: flex;
  justify-content: flex-start;

  &_own {
    justify-content: flex-end;
  }
}
.user-message {
  flex: 0 0 60%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;

  &_own {
    background-color: #36e998;
  }

  &__user {
    font-weight: bold;
    font-size: 0.7rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  &__text {
    text-align: left;
  }
  &__time {
    font-weight: bold;
    font-style: italic;
    font-size: 0.7rem;
    text-align: right;
  }
}
</style>
