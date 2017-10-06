<script>
export default {
    name: 'c-toolbar-title',
    functional: true,
    render (h, ctx) {
        const data = ctx.data
        const staticClass = data.staticClass
        const slots = ctx.slots()

        data.staticClass = `c-toolbar-title${staticClass ? ` ${staticClass}` : ''}`

        return (
            <div { ...data }>
                {slots.subtitle
                    ? <div class='c-toolbar-subtitle'>{ slots.subtitle }</div>
                    : slots.default
                }
            </div>
        )
    }
}
</script>
