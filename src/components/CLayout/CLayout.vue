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
        </aside>

        <header
            ref="header"
            class="c-layout-header fixed-top"
            >
            <slot name="header"></slot>
        </header>

        <div
            ref="main"
            class="c-layout-page-container"
            style="position: absolute;top: 50px">
            <main class="c-layout-page">
                <slot></slot>
            </main>
        </div>

        <footer
            ref="footer"
            class="c-layout-footer"
            :class="computedFooterClass">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
import extend from '../../utils/extend'
import { cssTransform } from '../../utils/dom'
import CSideMixin from '../../mixins/CSide.mixin'

export default {
    name: 'c-layout',
    mixins: [CSideMixin],
    data () {
        return {
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
        }
    },
    computed: {
        fixed () {
            return {
                footer: this.view.indexOf('F') > -1
            }
        },
        computedFooterClass () {
            const classes = { 'fixed-bottom': this.fixed.footer }
            return this.footerClass
                ? extend({}, this.footerClass, classes)
                : classes
        },
        computedRightStyle () {
            const style = this.rightState.inTransit
                ? cssTransform(`translateX(${this.rightState.position}px)`)
                : cssTransform(`translateX(${this.rightState.openedSmall ? 0 : '100%'})`)

            return this.rightStyle
                ? extend({}, this.rightStyle, style)
                : style
        },
        hideBackdrop () {
            return !this.backdrop.inTransit && !this.rightState.openedSmall
        },
        computedRightClass () {
            const classes = {
                'fixed': this.fixed.right || !this.rightOnLayout,
                'on-top': !this.rightOverBreakpoint || this.rightState.inTransit
            }

            return this.rightClass
                ? extend({}, this.rightClass, classes)
                : classes
        }
    }
}
</script>
