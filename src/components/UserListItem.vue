<template>
  <div class="user-list__item">
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style>

</style>
