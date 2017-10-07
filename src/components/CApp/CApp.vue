<script>
export default {
    name: 'c-app',
    render () {
        const children = this.$slots.default
        return (
            <div class='c-app'>
                { children }
            </div>
        )
    }
}
</script>
