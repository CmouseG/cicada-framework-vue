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
            class="c-layout-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'c-layout',
    data () {
        console.log(this)
        return {}
    }
}
</script>
