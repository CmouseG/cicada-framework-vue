<script>
import { RouterLinkMixin } from '../../mixins/CRouterLink.mixin'

export default {
    name: 'c-side-link',
    inject: ['layout'],
    mixins: [RouterLinkMixin],
    props: {
        tag: {
            type: String,
            default: 'div'
        }
    },
    methods: {
        trigger () {
            this.layout.hideCurrentSide()
        }
    },
    render () {
        return (
            <router-link
                tag={ this.tag }
                to={ this.to }
                nativeOnClick={ this.trigger }>
                { this.$slots.default }
            </router-link>
        )
    }
}
</script>
