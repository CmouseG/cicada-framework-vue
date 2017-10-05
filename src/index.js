import { version } from '../package.json'
import C from './cicada'
import * as components from './components'

function Cicada (Vue) {
    Vue.use(C, {
        components
    })
}

Cicada.version = version

export default Cicada
