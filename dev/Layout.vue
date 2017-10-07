<script>
export default {
    render () {
        return (
            <c-layout view='hHr LpR lFf'>
                <c-toolbar slot='header'>
                    <c-button flat icon='mdi-chevron-left mdi-24px'></c-button>
                    <c-toolbar-title>Home</c-toolbar-title>
                    <c-button flat icon='mdi-menu mdi-24px'></c-button>
                </c-toolbar>

                <router-view></router-view>

                <c-tabs slot='footer'>
                    <c-tab-route slot='title' icon='mdi-home mdi-24px' label='home' to='/home'></c-tab-route>
                    <c-tab-route slot='title' icon='mdi-blogger mdi-24px' label='blog' to='/blog'></c-tab-route>
                    <c-tab-route slot='title' icon='mdi-account mdi-24px' label='mine' to='/mine'></c-tab-route>
                </c-tabs>
            </c-layout>
        )
    }
}
</script>
