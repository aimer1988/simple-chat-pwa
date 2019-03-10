<template>
  <div class="message-input">
    <input :value="value"
           @input="$emit('input', $event.target.value)"
           type="text"
           placeholder="Сообщение"
           class="message-input__text" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
.message-input {
  background-color: white;
  height: 5%;

  &__text {
    display: inline-block;
    width: 90%;
    height: 100%;
    border: none;
  }
  &__text:focus {
    outline: none;
  }
}
</style>
