import CWindowResizeObservable from './CWindowResizeObservable'
import CResizeObservable from './CResizeObservable'

CWindowResizeObservable.install = function install (Vue) {
    Vue.component(CWindowResizeObservable.name, CWindowResizeObservable)
}
CResizeObservable.install = function install (Vue) {
    Vue.component(CResizeObservable.name, CResizeObservable)
}

export {
    CWindowResizeObservable,
    CResizeObservable
}
