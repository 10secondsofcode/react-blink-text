var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactBlinkText.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactBlinkText.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}