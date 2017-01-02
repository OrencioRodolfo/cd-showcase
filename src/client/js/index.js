import style from './../style/main.pcss';
import Vue from 'vue';
import routes from './routes';
import { CompanyLogo, NotFound } from './components';

/**
 * Components
 */
Vue.component('company-logo', CompanyLogo);

/**
 * Application
 */
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});
