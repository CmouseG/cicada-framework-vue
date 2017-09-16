import {version} from '../package.json'

class Cicada {
    static _version // stage-2
    constructor() {
        Cicada._version = version
    }
    get version() {
        return Cicada._version
    }
}

export default Cicada