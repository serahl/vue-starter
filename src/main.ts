import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerBasicComponents";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";

import "./styles/main.stylus";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
