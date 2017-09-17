const Cicada = {
    install (Vue, opts = {}) {
        if (opts.components) {
            Object.keys(opts.components).forEach(key => {
                const component = opts.components[key]
                Vue.use(component)
            })
        }
    }
}

export default Cicada
