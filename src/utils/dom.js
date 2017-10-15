const prefix = ['-webkit-', '-moz-', '-ms-', '-o-']
export function cssTransform (val) {
    const o = { transform: val }
    prefix.forEach(p => {
        o[p + 'transform'] = val
    })
    return o
}

export function viewport () {
    let e = window
    let a = 'inner'

    if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
    }

    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
}
