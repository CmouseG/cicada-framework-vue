<script>
export default {
    name: 'c-tabs',
    data () {
        return {
            data: {
                tabName: ''
            }
        }
    },
    methods: {
        selectTab (name) {
            if (this.data.tabName === name) {
                return
            }

            this.data.tabName = name
        }
    },
    provide () {
        return {
            data: this.data,
            selectTab: this.selectTab
        }
    },
    render () {
        return (
            <div staticClass='c-tabs flex c-tabs-normal'>
                <div staticClass='c-tabs-head row'>{ this.$slots.title }</div>
            </div>
        )
    }
}
</script>
