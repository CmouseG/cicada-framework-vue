<script>
export default {
    render () {
        return (
            <div class='title' onClick={this.clickHandler}>
                <c-app></c-app>
            </div>
        )
    },
    methods: {
        clickHandler (e) {
            console.log(e)
            console.log('33')
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

