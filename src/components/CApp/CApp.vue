<script>
export default {
    name: 'c-app',
    render () {
        console.log(this)
        const children = this.$slots.default
        return (
            <div class='c-app'>
                { children }
            </div>
        )
    }
}
</script>
