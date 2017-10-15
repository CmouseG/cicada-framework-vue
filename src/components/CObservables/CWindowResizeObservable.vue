<script>
import { viewport } from '../../utils/dom'

export default {
    name: 'c-window-resize-observable',
    render () {},
    mounted () {
        this.emit()
        window.addEventListener('resize', this.trigger)
    },
    berforeDestroy () {
        window.removeEventListener('resize', this.triggertrigger)
    },
    methods: {
        trigger () {
            if (!this.timer) {
                this.timer = window.requestAnimationFrame(this.emit)
            }
        },
        emit () {
            this.timer = null
            this.$emit('resize', viewport())
        }
    }
}
</script>
