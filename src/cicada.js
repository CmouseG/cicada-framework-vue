const Cicada = {
    install (Vue, opts = {}) {
        console.log(Vue)
        console.log(opts)

        if (opts.components) {
            Object.keys(opts.components).forEach(key => {
                const component = opts.components[key]
                Vue.use(component)
            })
        }
    }
}

export default Cicada
