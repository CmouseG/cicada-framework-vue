import {version} from '../package.json'

class Cicada {
    constructor() {
        this._version = version
    }
    get version() {
        return this._version
    }
}

export default Cicada