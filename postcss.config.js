const autoprefixer = require('autoprefixer')

module.exports = (ctx) => ({
    plugins: [
        autoprefixer({
            browsers: ['ie >= 11', 'safari >= 9', 'last 2 versions', '> 1%']
        })
    ]
})
