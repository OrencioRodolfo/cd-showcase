require('./../style/main.pcss');
import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    message: `You loaded this page on ${new Date()}`,
  }
});
