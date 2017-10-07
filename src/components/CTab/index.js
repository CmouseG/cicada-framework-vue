import CTabs from './CTabs'
import CTabRoute from './CTabRoute'

CTabs.install = function install (Vue) {
    Vue.component(CTabs.name, CTabs)
}
CTabRoute.install = function install (Vue) {
    Vue.component(CTabRoute.name, CTabRoute)
}

export {
    CTabs,
    CTabRoute
}
