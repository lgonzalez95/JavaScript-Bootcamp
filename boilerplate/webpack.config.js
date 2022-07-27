const path = require('path')

module.exports = {
    entry: './src/index.js',//where the code is
    output: {
        path: path.resolve(__dirname, 'public/scripts'),//where the compiled code will be sent
        filename: 'bundle.js'
    },
    module: { //webpack property to configure our webpack mudule system
        rules: [
            {
                test: /\.js$/, //applying the rules to all JS files
                exclude: /node_modes/, //excluding the node modules since if we don't do it then babel will be so slow
                use: {
                    loader: 'babel-loader', //Making webpack to use babel
                    options: {
                        presets: ['@babel/env'] //set the presets
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        devMiddleware: {
            publicPath: '/scripts/' //path to virtual files -> They don't exist on the file system, only virtually. That's why scripts folder is empty
        },
        compress: true,
        port: 9000
    },
    devtool: 'source-map'
}

