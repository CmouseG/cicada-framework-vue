<script>
export default {
    data: () => ({
        test: 1
    }),
    render () {
        return (
            <c-app>
                <router-view></router-view>
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

