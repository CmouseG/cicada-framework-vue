<script>
import BtnMixin from '../../mixins/CBtn.mixin'

export default {
    name: 'c-button',
    mixins: [BtnMixin],
    render () {
        console.log(this)
        return (
            <button
                class='c-button'>
                <span>
                    { this.icon
                        ? <c-icon name={ this.icon }></c-icon>
                        : null
                    }
                    { this.label
                        ? <span>{ this.label }</span>
                        : null
                    }
                </span>
            </button>
        )
    }
}
</script>
