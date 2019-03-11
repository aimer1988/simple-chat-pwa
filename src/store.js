import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable no-param-reassign
export default new Vuex.Store({
  state: {
    isMobile: false,
    activeMobileWindow: 'userList',
    chatSocketService: null,
    userId: null,
    chosenUser: null,
    users: [
      {
        name: 'User 1',
      },
      {
        name: 'User 2',
      },
      {
        name: 'User 3',
      },
    ],
    chatMessages: [],
  },
  getters: {
    filteredUsers(state) {
      return state.users;
    },
  },
  mutations: {
    // setting if device type is mobile or not
    setDeviceType(state) {
      let check = false;
      if (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)) {
        check = true;
      }
      state.isMobile = check;
    },
    // setting active window name on mobile
    setActiveMobileWindow(state, windowName) {
      state.activeMobileWindow = windowName;
    },
    // setting chat socket service
    setChatSocketService(state, service) {
      state.chatSocketService = service;
    },
    // setting current user id
    setUserId(state, userId) {
      state.userId = userId;
    },
    // add chat message
    addChatMessage(state, message) {
      state.chatMessages.push(message);
    },
  },
  actions: {

  },
});
