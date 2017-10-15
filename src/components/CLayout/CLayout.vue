<template>
    <div class="c-layout">
        <div
            v-if="$slots.right"
            ref="backdrop"
            class="fullscreen c-layout-backdrop transition-generic"
            :class="{
                'no-pointer-events': hideBackdrop
            }"
            :style="{
                opacity: backdrop.percentage,
                hidden: hideBackdrop
            }"
            @click="__hide">
        </div>
        <aside
            class="c-layout-aside c-layout-aside-right transition-generic"
            :class="computedRightClass"
            :style="computedRightStyle"
            v-if="$slots.right">
            <slot name="right"></slot>
            <c-resize-observable @resize="onRightAsideResize"></c-resize-observable>
        </aside>

        <header
            ref="header"
            class="c-layout-header fixed-top"
            :style="computedRightOnLayoutStyle"
            >
            <slot name="header"></slot>
        </header>

        <div
            ref="main"
            class="c-layout-page-container"
            :style="computedRightOnLayoutStyle">
            <main class="c-layout-page">
                <slot></slot>
            </main>
        </div>

        <footer
            ref="footer"
            class="c-layout-footer"
            :class="computedFooterClass"
            :style="computedRightOnLayoutStyle">
            <slot name="footer"></slot>
        </footer>

        <c-window-resize-observable @resize="onWindowResize"></c-window-resize-observable>
    </div>
</template>

<script>
import extend from '../../utils/extend'
import { cssTransform } from '../../utils/dom'
import CSideMixin from '../../mixins/CSide.mixin'

export default {
    name: 'c-layout',
    mixins: [CSideMixin],
    provide () {
        return {
            layout: this
        }
    },
    data () {
        return {
            layout: { h: 0, w: 0 },
            right: { h: 0, w: 0 },
            backdrop: {
                inTransit: false,
                touchEvent: false,
                percentage: 0
            },
            rightState: {
                position: 0,
                inTransit: false,
                openedSmall: false,
                openedBig: this.sides.right
            },
            leftState: {
                position: 0,
                inTransit: false,
                openedSmall: false,
                openedBig: this.sides.left
            }
        }
    },
    props: {
        view: {
            type: String,
            default: 'hhh lpr fff',
            validator: v => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
        },
        footerClass: Object,
        sides: {
            type: Object,
            validator: v => 'left' in v && 'right' in v,
            default () {
                return {
                    left: true,
                    right: true
                }
            }
        },
        rightBreakpoint: {
            type: Number,
            default: 992
        }
    },
    computed: {
        fixed () {
            return {
                footer: this.view.indexOf('F') > -1
            }
        },
        rightOnLayout () {
            return this.rightOverBreakpoint && this.rightState.openedBig
        },
        rightOverBreakpoint () {
            return !this.rightState.openedSmall && this.rightBreakPoint !== 0 && this.layout.w >= this.rightBreakpoint
        },
        computedFooterClass () {
            const classes = { 'fixed-bottom': this.fixed.footer }
            return this.footerClass
                ? extend({}, this.footerClass, classes)
                : classes
        },
        computedRightStyle () {
            if (!this.rightOnLayout) {
                const style = this.rightState.inTransit
                    ? cssTransform(`translateX(${this.rightState.position}px)`)
                    : cssTransform(`translateX(${this.rightState.openedSmall ? 0 : '100%'})`)

                return this.rightStyle
                    ? extend({}, this.rightStyle, style)
                    : style
            }
        },
        hideBackdrop () {
            return !this.backdrop.inTransit && !this.rightState.openedSmall
        },
        computedRightClass () {
            const classes = {
                'on-layout': this.rightOnLayout,
                'fixed': this.fixed.right || !this.rightOnLayout,
                'on-top': !this.rightOverBreakpoint || this.rightState.inTransit
            }

            return this.rightClass
                ? extend({}, this.rightClass, classes)
                : classes
        },
        computedRightOnLayoutStyle () {
            const view = this.rows
            const css = {}

            if (view.top[2] === 'r' && this.rightOnLayout ||
                view.middle[2] !== 'p' && this.rightOnLayout ||
                view.bottom[2] === 'r' && this.rightOnLayout) {
                css.marginRight = this.right.w + 'px'
            }

            return css
        },
        rows () {
            const rows = this.view.toLowerCase().split(' ')
            return {
                top: rows[0].split(''),
                middle: rows[1].split(''),
                bottom: rows[2].split('')
            }
        }
    },
    methods: {
        onWindowResize (size) {
            updateSize(this.layout, size)
        },
        onRightAsideResize (size) {
            updateSize(this.right, size)
        }
    }
}

function updateSize (obj, size) {
    if (obj.w !== size.width) {
        obj.w = size.width
    }
    if (obj.h !== size.height) {
        obj.h = size.height
    }
}
</script>
