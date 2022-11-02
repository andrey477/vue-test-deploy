import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './reset.scss';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.filter('capitalize', (value: string) => {
  return value.toUpperCase();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
