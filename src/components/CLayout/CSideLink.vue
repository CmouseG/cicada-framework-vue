<script>
import { RouterLinkMixin } from '../../mixins/CRouterLink.mixin'

export default {
    name: 'c-side-link',
    inject: ['layout'],
    mixins: [RouterLinkMixin],
    methods: {
        trigger () {
            this.layout.hideCurrentSide()
        }
    },
    render () {
        return (
            <router-link
                tag='div'
                to={ this.to }
                nativeOnClick={ this.trigger }>
                { this.$slots.default }
            </router-link>
        )
    }
}
</script>
