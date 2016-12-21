import style from './../style/main.pcss';
import Vue from 'vue';
import { company } from './components';

/**
 * Components
 */
Vue.component('company-logo', company);


/**
 * Application
 */
const app = new Vue({
  el: '#app',
  data: {
  }
});
