const path = require('path')

const CracoLessPlugin = require("craco-less");
const {
    getThemeVariables
} = require("antd/dist/theme");
module.exports = {
    // webpack 配置
    webpack: {
        // 配置别名
        alias: {
            // 使用 @ 表示 src 文件所在路径
            '@': path.resolve(__dirname, 'src'),
            "@components": path.resolve("src/components"),
            "@views": path.resolve("src/views"),
            "@apis": path.resolve("src/apis"),
            "@plugins": path.resolve("src/plugins"),
        },
    },
    babel: {
        //按需加载样式
        plugins: [
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: true, //设置为true即是less
                },
            ],
        ],
    },
    //自定义主题
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};