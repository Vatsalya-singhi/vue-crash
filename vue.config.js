const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        proxy: {
            "^/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/api': '/'
                }
            },
            "^/dashboard/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/dashboard/api': '/'
                }
            }
        }
    },

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    }
})
