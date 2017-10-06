<script>
export default {
    data: () => ({
        test: 1
    }),
    render () {
        console.log(this)
        return (
            <c-app>
                <c-layout>
                    <c-toolbar slot='header'>
                        <c-button flat icon='mdi-chevron-left mdi-24px' label='返回'></c-button>
                        <c-toolbar-title>Home</c-toolbar-title>
                        <c-button flat icon='mdi-menu mdi-24px' label='menu'></c-button>
                    </c-toolbar>
                </c-layout>
            </c-app>
        )
    },
    methods: {
        clickHandler (e) {
            console.log(e)
            console.log(this.test++)
        }
    }
}
</script>

<style lang="stylus">
    .title
        background #333
        color #f3f
        display flex
</style>

