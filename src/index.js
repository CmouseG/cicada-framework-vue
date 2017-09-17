require('./stylus/main.styl')

import { version } from '../package.json'
import C from './cicada'
import * as components from './components'

export default function Cicada (Vue) {
    Vue.use(C, {
        components
    })
}

Cicada.version = version
