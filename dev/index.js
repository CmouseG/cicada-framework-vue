import Vue from 'vue'
import Cicada from 'cicada'
import App from './APP.vue'

Vue.use(new Cicada)
new Vue(App).$mount('#app')