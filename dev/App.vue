<template>
    <div class="title" @click="clickMe()">Message: {{msg}}</div>
</template>

<script>
export default {
    data: function () {
        return {
            msg: 'Hello hh Vue.js'
        }
    },
    methods: {
        clickMe: function () {
            console.log(333)
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

