import CApp from './CApp.vue'

CApp.install = function install (Vue) {
    console.log(99)
    Vue.component(CApp.name, CApp)
}

export default CApp
