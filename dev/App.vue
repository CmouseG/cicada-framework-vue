<script>
export default {
    data: () => ({
        test: 1
    }),
    render () {
        console.log(this)
        return (
            <c-app>
                <c-header fixed>
                    <c-button slot='left' icon='mdi-arrow-left' label='Block'></c-button>
                    <span>Home</span>
                    <c-button slot='right'></c-button>
                </c-header>
                <c-footer></c-footer>
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

