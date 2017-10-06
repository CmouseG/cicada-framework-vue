<script>
import BtnMixin from '../../mixins/CBtn.mixin'

export default {
    name: 'c-button',
    mixins: [BtnMixin],
    render () {
        console.log(this)
        return (
            <button
                staticClass='c-button'
                class={ this.classes }>
                <span class='row flex-center'>
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
