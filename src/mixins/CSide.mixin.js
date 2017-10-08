export default {
    methods: {
        toggleRight () {
            this.__toggle('right')
        },
        __toggle (side) {
            const state = this[side + 'State']

            if (state.openedSmall || (this[side + 'OverBreakpoint'] && state.openedBig)) {
                this.__hide(side)
            } else {
                this.__show(side)
            }
        },
        __show (side) {
            const state = this[side + 'State']

            if (this[side + 'OverBreakpoint']) {
                state.openedBig = true
                return
            }

            document.body.classList.add('with-layout-side-opened')
            state.openedSmall = true
            this.backdrop.percentage = 1
        },
        __hide (side) {
            if (typeof side !== 'string') {
                if (this.backdrop.touchEvent) {
                    this.backdrop.touchEvent = false
                    return
                }
                side = this.leftState.openedSmall ? 'left' : 'right'
            }
            const state = this[side + 'State']
            if (!state.openedSmall) {
                state.openedBig = false
                return
            }

            document.body.classList.remove('with-layout-side-opened')
            this.__hideSmall()
        },
        __hideSmall (fn) {
            this.rightState.openedSmall = false
            this.leftState.openedSmall = false
            this.backdrop.percentage = 0
            // if (typeof fn === 'function') {
            //     setTimeout(fn, 310)
            // }
        },
        hideCurrentSide (fn) {
            if (this.leftState.openedSmall) {
                this.hideLeft(fn)
            } else if (this.rightState.openedSmall) {
                this.hideRight(fn)
            } else if (typeof fn === 'function') {
                fn()
            }
        },
        hideRight (fn) {
            this.__hide('right', fn)
        }
    }
}
