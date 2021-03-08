require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    optionalCatchAll: true,
    env: {
        'BACKEND_API': 'https://nestjs-suraboy.herokuapp.com'
    },
    async rewrites() {
        return [
            {
                source: '/v1/:path*',
                destination: 'https://nestjs-suraboy.herokuapp.com/v1/:path*' // Proxy to Backend
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