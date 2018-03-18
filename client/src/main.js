/* eslint-disable */
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import App from './App.vue';

// setup socket io connection
Vue.use(VueSocketio, 'http://micaelpersson.asuscomm.com');

new Vue({
  el: '#app',
  render: h => h(App)
});
