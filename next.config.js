require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    optionalCatchAll: true,
    env: {
        'BACKEND_API': process.env.BACKEND_API ? process.env.BACKEND_API : 'http://localhost:6319'
    },
    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination: process.env.BACKEND_API ? process.env.BACKEND_API : "http://localhost:6319" + '/v1/:path*' // Proxy to Backend
            }
        ]
    },
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env)
        )
        return config
    }
}