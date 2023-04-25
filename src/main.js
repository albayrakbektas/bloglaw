import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.css";
import { inject } from "@vercel/analytics";
inject();

import Toasted from "vue-toasted";
import * as VueGoogleMaps from "vue2-google-maps";
import Toast from "@/components/VueToast.vue";

Vue.component("VueToast", Toast);
Vue.use(Toasted);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_KEY,
    libraries: "places",
  },
});

require("./bootstrap");

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
