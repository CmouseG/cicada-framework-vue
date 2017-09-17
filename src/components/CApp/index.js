import CApp from './CApp'

CApp.install = function install (Vue) {
    Vue.component(CApp.name, CApp)
}

export default CApp
