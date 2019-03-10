<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ChatSocketService from '@/services/ChatSocketService';

export default {
  methods: {
    ...mapMutations([
      'setDeviceType',
      'setChatSocketService',
    ]),
  },
  created() {
    this.setDeviceType();
    this.setChatSocketService(ChatSocketService);
  },
};
</script>


<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
}
#nav {
  height: 5%;
  a {
    font-weight: bold;
    color: black;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view {
  height: 95%;
  width: 100%;
}

@media screen and (min-width: 1080px) {
  .router-view {
    width: 50%;
  }
}
</style>
