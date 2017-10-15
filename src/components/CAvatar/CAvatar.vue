<script>
import { stackBlurCanvasRGBA } from './dynamically-blur'

export default {
    name: 'c-avatar',
    props: {
        img: String
    },
    mounted () {
        const BLUR_RADIUS = 40
        const sourceImages = this.$refs.sourceImage.getAttribute('src')

        const drawBlur = function (canvas, image) {
            const w = canvas.width
            const h = canvas.height
            const canvasContext = canvas.getContext('2d')

            canvasContext.drawImage(image, 0, 0, w, h)
            stackBlurCanvasRGBA(canvas, 0, 0, w, h, BLUR_RADIUS)
        }

        const canvas = this.$refs.canvas
        const image = new window.Image()
        image.src = sourceImages
        image.onload = function () {
            drawBlur(canvas, image)
        }
    },
    render () {
        return (
            <div class='c-avatar flex flex-center column'>
                <canvas ref='canvas' class='c-avatar-canvas'></canvas>
                <div class='c-avatar-img'>
                    <img ref='sourceImage' src={ this.img } alt='' />
                </div>
                <div class='c-avatar-intro'></div>
            </div>
        )
    }
}
</script>
