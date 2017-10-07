<script>
export default {
    data: () => ({
        test: 1
    }),
    render () {
        return (
            <c-app>
                <c-layout view='hHr LpR lFf'>
                    <c-toolbar slot='header'>
                        <c-button flat icon='mdi-chevron-left mdi-24px' label='返回'></c-button>
                        <c-toolbar-title>Home</c-toolbar-title>
                        <c-button flat icon='mdi-menu mdi-24px'></c-button>
                    </c-toolbar>

                    <c-tabs slot='footer'>
                        <c-tab-route slot='title' icon='mdi-home mdi-24px' label='home'></c-tab-route>
                        <c-tab-route slot='title' icon='mdi-blogger mdi-24px' label='blog'></c-tab-route>
                        <c-tab-route slot='title' icon='mdi-account mdi-24px' label='mine'></c-tab-route>
                    </c-tabs>
                </c-layout>
            </c-app>
        )
    },
    methods: {
        clickHandler (e) {
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

