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
    render () {
        return (
            <router-link
                tag='div'
                staticClass='c-tab flex-center column'
                to={ this.to }>
                {this.icon
                    ? <c-icon name={ this.icon }></c-icon>
                    : null
                }
                {this.label
                    ? <span>{ this.label }</span>
                    : null
                }
            </router-link>
        )
    }
}
</script>
