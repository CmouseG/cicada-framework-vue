<script>
import CTabMinxin from '../../mixins/CTab.mixin'
// import { CIcon } from '../CIcon'

export default {
    name: 'c-tab-route',
    // functional: true, // ctx
    // components: {
    //     CIcon
    // },
    mixins: [CTabMinxin],
    render () {
        return (
            <div
                staticClass='c-tab flex-center column'>
                {this.icon
                    ? <c-icon name={ this.icon }></c-icon>
                    : null
                }
                {this.label
                    ? <span>{ this.label }</span>
                    : null
                }
            </div>
        )
    }
}
</script>
