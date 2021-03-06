module.exports = {
    root: true,
    extends: 'vue',
    plugins: [
        'vue'
    ],
    parser: 'babel-eslint',
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // set maximum line characters
        'max-len': [2, 140, 4, {'ignoreUrls': true, 'ignoreTemplateLiterals': true, 'ignoreStrings': true}],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-return-assign': 0,
        // disallow indentation using both tabs and spaces
        'no-mixed-spaces-and-tabs': 2,
        // ensure consistent 4 space indentation and indent cases under switch
        'indent': [2, 4, {'SwitchCase': 1}],
        'object-curly-spacing': [2, 'always'],
        // 'max-statements': [2, 24]
    }
}