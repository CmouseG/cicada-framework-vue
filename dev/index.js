require('../src/stylus/mat.styl')

import Vue from 'vue'
import Cicada from 'cicada'
import App from './APP'
console.dir(Cicada)
Vue.use(Cicada)
new Vue({
    el: '#app',
    render: h => h(App)
})
