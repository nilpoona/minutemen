const path = require('path');
const webpack = require('webpack');

let destPath = 'dest';

let config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(destPath),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }
        })
    ],
    devServer: {
        contentBase: 'dest',
        port: 8091,
        host: "0.0.0.0",
        inline: true,
    }
};

module.exports = config
