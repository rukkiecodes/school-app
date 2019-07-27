import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
