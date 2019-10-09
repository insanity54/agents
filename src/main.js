import Vue from 'vue'
import App from './App.vue'
import * as termly from 'termly.js'

Object.defineProperty(Vue.prototype, '$termly', { value: termly });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
