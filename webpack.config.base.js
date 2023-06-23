const path = require('path')

module.exports = {
    mode:'development',
    devtool:false,
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                enforce: 'pre',
                use: {
                    loader:'source-map-loader'
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'isomorphic-style-loader-react18'
                    },
                    "css-loader?modules&localIdentName=[name]__[local]--[hash:base64:5]",
                    // {
                    //     loader:'css-loader',
                    //     options:{
                    //         modules:true
                    //     }
                    // }
                ]
            }
        ]
    }
}