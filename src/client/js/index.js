require('./../style/main.pcss');
import Vue from 'vue';

// Define a new component called todo-item
Vue.component('company', {
  template: `
    <div class="m-img-legend m-company">
      <img src="img/exictos.png" class="a-img"/>
      <span class="a-legend a-text-xl">Exictos</span>
    </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    message: `You loaded this page on ${new Date()}`,
  }
});
