<script>
export default {
    name: 'c-resize-observable',
    mounted () {
        this.$nextTick(() => {
            this.size = {}
            this.onResize()
        })
    },
    beforeDestroy () {
        window.cancelAnimationFrame(this.timer)
        this.$emit('resize', { width: 0, height: 0 })
    },
    methods: {
        onResize () {
            const size = getSize(this.$el.parentNode)

            if (size.width === this.size.width && size.height === this.size.height) {
                return
            }
            if (!this.timer) {
                this.timer = window.requestAnimationFrame(this.emit)
            }
            this.size = size
        },
        emit () {
            this.timer = null
            this.$emit('resize', this.size)
        }
    },
    render () {}
}

function getSize (el) {
    return {
        width: el.offsetWidth,
        height: el.offsetHeight
    }
}
</script>
