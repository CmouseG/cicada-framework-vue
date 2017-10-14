<script>
export default {
    methods: {
        toggleRight () {
            this.$refs.layout.toggleRight()
        }
    },
    render () {
        return (
            <c-layout ref='layout' view='hHr LpR lFf'>
                <c-toolbar slot='header'>
                    <c-button flat icon='mdi-chevron-left mdi-24px'></c-button>
                    <c-toolbar-title>Home</c-toolbar-title>
                    <c-button flat icon='mdi-menu mdi-24px' nativeOnClick={ this.toggleRight }></c-button>
                </c-toolbar>

                <div slot='right'>
                    <c-avatar img='/statics/images/avatar.jpg'></c-avatar>
                    <ul>
                        <c-side-link tag='li' to='/home'>
                            <i class='mdi mdi-home mdi-24px'></i>Home
                        </c-side-link >
                        <c-side-link tag='li' to='/blog'>
                            <i class='mdi mdi-blogger mdi-24px'></i>Blog
                        </c-side-link >
                        <c-side-link tag='li' to='/mine'>
                            <i class='mdi mdi-account mdi-24px'></i>Mine
                        </c-side-link >
                    </ul>
                </div>

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
