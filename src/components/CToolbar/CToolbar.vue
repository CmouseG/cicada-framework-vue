<script>
export default {
    name: 'c-toolbar',
    functional: true,
    render (h, ctx) {
        const staticClass = ctx.data.staticClass

        ctx.data.staticClass = `c-toolbar row item-center ${staticClass ? ` ${staticClass}` : ''}`

        return (
            <div { ...ctx.data }>{ ctx.children }</div>
        )
    }
}
</script>
