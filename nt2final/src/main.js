import Vue from 'vue'
import App from './App.vue'

import './globalFilters'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
