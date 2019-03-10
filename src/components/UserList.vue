<template>
  <div class="user-list">
    <user-list-item class="user-list__item"
                    v-for="user in filteredUsers"
                    :key="user.name"
                    :user="user"
                    @click.native="setActiveMobileWindow('chat')"></user-list-item>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import UserListItem from './UserListItem.vue';

export default {
  components: {
    UserListItem,
  },
  computed: {
    ...mapGetters([
      'filteredUsers',
    ]),
  },
  methods: {
    ...mapMutations([
      'setActiveMobileWindow',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  height: 100%;

  &__item {
    height: 10%;
    background-color: #42b983;
    border: 1px solid #2c3e50;
  }
}
</style>
