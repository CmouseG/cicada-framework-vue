import { CIcon } from '../components/CIcon'
import uid from '../utils/uid'

export default {
    components: {
        CIcon
    },
    props: {
        label: String,
        icon: String,
        name: {
            type: String,
            default () {
                return uid()
            }
        }
    },
    inject: ['data', 'selectTab'],
    computed: {
        active () {
            const sel = this.data.tabName === this.name

            return sel
        },
        classes () {
            const cls = {
                active: this.active
            }

            return cls
        }
    }
}
