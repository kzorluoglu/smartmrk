import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.css";
import EditWidget from "@/components/EditWidget";
import Homepage from "@/components/Homepage";
import NewWidget from "@/components/NewWidget";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Homepage },
  { path: '/editwidget/:id', component: EditWidget },
  { path: '/newwidget', component: NewWidget }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
