<script>
import { RouterLinkMixin } from '../../mixins/CRouterLink.mixin'
import CTabMinxin from '../../mixins/CTab.mixin'
// import { CIcon } from '../CIcon'

export default {
    name: 'c-tab-route',
    // functional: true, // ctx
    // components: {
    //     CIcon
    // },
    mixins: [CTabMinxin, RouterLinkMixin],
    watch: {
        $route () {
            this.checkIfSelected()
        }
    },
    methods: {
        select () {
            // this.$emit('click', this.name)
            // this.$el.dispatchEvent(routerLinkEvent)
            this.selectTab(this.name)
        },
        checkIfSelected () {
            this.$nextTick(() => {
                if (this.$el.classList.contains('router-link-active') || this.$el.classList.contains('router-link-exact-active')) {
                    this.selectTab(this.name)
                }
            })
        }
    },
    created () {
        this.checkIfSelected()
    },
    render () {
        return (
            <router-link
                tag='div'
                staticClass='c-tab flex-center column'
                class={ this.classes }
                to={ this.to }
                nativeOnClick={ this.select }>
                {this.icon
                    ? <c-icon name={ this.icon } class='c-tab-icon'></c-icon>
                    : null
                }
                {this.label
                    ? <span class='c-tab-label'>{ this.label }</span>
                    : null
                }
            </router-link>
        )
    }
}
</script>
