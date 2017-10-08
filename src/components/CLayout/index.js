import CLayout from './CLayout'
import CSideLink from './CSideLink'

CLayout.install = function install (Vue) {
    Vue.component(CLayout.name, CLayout)
}
CSideLink.install = function install (Vue) {
    Vue.component(CSideLink.name, CSideLink)
}

export {
    CLayout,
    CSideLink
}
