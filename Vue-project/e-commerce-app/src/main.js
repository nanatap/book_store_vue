import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Help from "./Help.vue";
import Library from "./Library.vue";
import Pdp from "./PDP";
import axios from "axios";
import cart from "./ShoppingCart";
import VueCookies from "vue-cookies";
import MyProfile from "./MyProfile";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
const routes = {
  "/": App,
  "/help": Help,
  "/library": Library,
  "/pdp": Pdp,
  "/cart": cart,
  "/profile": MyProfile,
};
// require
Vue.use(require("vue-cookies"));

// es2015 module

Vue.use(VueCookies);

// set default config
VueCookies.config("40d");

// set global cookie
VueCookies.set("theme", "default");
VueCookies.set("hover-time", "1s");

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
