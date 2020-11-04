const { path } = require('@vuepress/shared-utils')

module.exports = (pluginOptions, ctx) => ({
    define() {
        return {
            COMMENTS_OPTIONS: pluginOptions || {}
        }
    },
    name: '@saintic/vuepress-plugin-utterances',
    enhanceAppFiles: [
        path.resolve(__dirname, './utterances/enhanceAppFile.js')
    ]
})
