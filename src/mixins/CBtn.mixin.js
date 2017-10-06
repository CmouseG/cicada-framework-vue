import { CIcon } from '../components/CIcon'

export default {
    components: {
        CIcon
    },
    props: {
        label: String,
        icon: String,
        flat: Boolean,
        small: Boolean,
        big: Boolean,
        color: String
    },
    computed: {
        classes () {
            const cls = []

            if (this.flat) {
                cls.push('c-button-flat')
            }

            return cls
        }
    }
}
