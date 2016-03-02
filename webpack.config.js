/**
 *
 * @file
 * @author jinguangguo
 * @date 2016/2/18
 */

var path = require('path');

var webpack = require('webpack');

var publicPath = '/build/';

module.exports = {

    devtool: "source-map",

    entry: {
        index: './src/js/index.js',
        pageA: './src/js/pageA.js',
        pageB: './src/js/pageB.js',
        es6: './src/js/es6.js'
    },

    output: {
        path: path.resolve('build'),
        filename: "[name].bundle.js",
        chunkFilename: "[chunkhash:8].chunk.js",
        publicPath: publicPath
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.js",
            name: "commons"
        })
    ],

    resolve: {
        //root: [
        //    __dirname + '/src',
        //    __dirname + '/node_modules'
        //],
        // 现在可以写 require('file') 代替 require('file.coffee')
        //extensions: ['', '', '.js', '.json', '.coffee', 'png']
    },

    module: {
        loaders: [
            {
                test: /\.(tpl)$/,
                loader: 'html'
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader'   // 直接使用url链接进图片
                //loader: 'url-loader?limit=10240'  // 内联 base64 URLs, 限定 <= 10k 的图片, 其他的用 URL
            }
        ]
    },

    assets: {

        // display no info to console (only warnings and errors)
        noInfo: true,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: true,

        // watch options (only lazy: false)
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: publicPath,

        // custom headers
        headers: { "X-Custom-Header": "yes" },

        stats: {
            colors: true
        }
    }

};