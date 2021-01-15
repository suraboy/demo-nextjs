require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    env: {
        'BACKEND_API' : 'http://localhost:6319'
    },
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env)
        )
        return config
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:6319/v1/:path*',
            },
        ]
    },
}