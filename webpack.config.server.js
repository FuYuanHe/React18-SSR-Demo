const path = require('path')
const {merge} = require('webpack-merge')
const base = require('./webpack.config.base')
const webpackNodeExternals = require('webpack-node-externals')
module.exports = merge(base,{
    target:'node',
    entry:'./src/server/index.js',
    externals:[webpackNodeExternals()],
    output:{
        path:path.resolve('build'),
        filename:'server.js'
    }
})