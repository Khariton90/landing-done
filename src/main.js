import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./assets/style.css')
Vue.config.productionTip = false

Vue.config.productionTip = false
var VueScrollTo = require('vue-scrollto');
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)
Vue.use(Vuelidate)
Vue.use(VueScrollTo, {
     container: "body",
     duration: 200,
     easing: "ease",
     offset: -10,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


new Vue({
  router,
  render: h => h(App), store
}).$mount('#app')
