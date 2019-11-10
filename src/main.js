import Vue from 'vue'
import App from './App.vue'
import * as termly from 'termly.js'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Object.defineProperty(Vue.prototype, '$termly', { value: termly });
Vue.use(VuePlyr)
Vue.config.productionTip = false;
Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
