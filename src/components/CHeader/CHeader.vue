<script>
export default {
    name: 'c-header',
    props: {
        fixed: Boolean,
        title: String
    },
    render () {
        const leftSlot = this.$slots.left
        const rightSlot = this.$slots.right
        const defaultSlot = this.$slots.default
        return (
            <header
                staticClass='c-header row'
                class={{ fixed: this.fixed }}>
                <div
                    class='c-header-button c-header-left col-4'>
                    { leftSlot }
                    {/* <slot name='left'></slot> */}
                </div>
                <h1
                    class='c-header-title col-4'>
                    { defaultSlot }
                </h1>
                <div
                    class='c-header-button c-header-right col-4'>
                    { rightSlot }
                    {/* <slot name='right'></slot> */}
                </div>
            </header>
        )
    }
}
</script>
