import CToolbar from './CToolbar'
import CToolbarTitle from './CToolbarTitle'

CToolbar.install = function install (Vue) {
    Vue.component(CToolbar.name, CToolbar)
}
CToolbarTitle.install = function install (Vue) {
    Vue.component(CToolbarTitle.name, CToolbarTitle)
}

export {
    CToolbar,
    CToolbarTitle
}
