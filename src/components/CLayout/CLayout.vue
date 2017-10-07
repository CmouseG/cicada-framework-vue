<template>
    <div class="c-layout">
        <header
            ref="header"
            class="c-layout-header"
            >
            <slot name="header"></slot>
        </header>

        <div
            ref="main"
            class="c-layout-page-container">
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

export default {
    name: 'c-layout',
    data () {
        return {}
    },
    props: {
        view: {
            type: String,
            default: 'hhh lpr fff',
            validator: v => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
        },
        footerClass: Object
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
        }
    }
}
</script>
