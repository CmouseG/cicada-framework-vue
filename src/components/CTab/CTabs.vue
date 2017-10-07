<script>
export default {
    name: 'c-tabs',
    render () {
        return (
            <div staticClass='c-tabs flex'>
                <div staticClass='c-tabs-head row'>{ this.$slots.title }</div>
            </div>
        )
    }
}
</script>
