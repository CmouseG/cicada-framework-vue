<script>
export default {
    name: 'c-tabs',
    methods: {
        // selectTab (name) {
        //     //
        // }
    },
    render () {
        return (
            <div staticClass='c-tabs flex'>
                <div staticClass='c-tabs-head row'>{ this.$slots.title }</div>
            </div>
        )
    }
}
</script>
