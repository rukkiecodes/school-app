import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VeeValidate from 'vee-validate';
import {fb} from './firebase'

Vue.use(VeeValidate);
Vue.use(VeeValidate, {
  inject: false
});
Vue.use(VueParticles);
Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
})