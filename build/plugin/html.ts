/** vite-plugin-html 能够对 index.html 进行压缩和注入动态数据，例如替换网站标题和cdn */
import html from 'vite-plugin-html'

export function configHtmlPlugin(viteEnv, isBuild) {
    const { VITE_APP_TITLE } = viteEnv
    const htmlPlugin = html({
        minify: isBuild,
        inject: {
            data: {
                title: VITE_APP_TITLE,
            },
        },
    })
    return htmlPlugin
}
