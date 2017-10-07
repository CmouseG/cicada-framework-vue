<script>
export default {
    name: 'c-icon',
    functional: true,
    props: {
        name: String,
        color: String,
        size: String
    },
    render (h, ctx) {
        let name, text
        const prop = ctx.props
        const data = ctx.data
        const staticClass = data.staticClass
        const icon = prop.name
        if (!icon) {
            name = ''
        } else if (icon.startsWith('mdi-')) {
            name = `mdi ${icon}`
        } else {
            name = 'material-icons'
            text = icon.replace(/ /g, '_')
        }

        data.staticClass = `${staticClass ? staticClass + ' ' : ''}c-icon${name.length ? ` ${name}` : ''}${prop.color ? ` text-${prop.color}` : ''}`

        if (prop.size) {
            const style = `font-size: ${prop.size}`
            data.size = data.style ? [data.style, style] : style
        }

        return (
            <i
                {...data}>
                {text}
            </i>
        )
    }
}
</script>
