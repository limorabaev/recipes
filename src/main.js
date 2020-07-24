import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/css/main.css';
import '../src/assets/fonts/fontawesome/css/all.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
