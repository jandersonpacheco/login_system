const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const path = require ('path')
module.exports = {
    devServer: {
        static: {
            directory: path.resolve (__dirname, 'dist')
        }
    },
    entry: {
        login_script: './src/script.js',
        users_management_script: './src/users_management.js',
        user_data_script: './src/users.js'
    },
    mode: 'production',
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']

        },{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}