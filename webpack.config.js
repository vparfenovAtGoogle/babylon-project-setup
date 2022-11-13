const path = require ('path')
module.exports = {
    devtool: 'source-map',
    // devtool: 'eval-source-map',
    entry: './src/index.ts',
    // mode: 'production',
    mode: 'development',
    // watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
                // include: [path.resolve (__dirname, 'src')]
            }
        ]
    },
    output: {
        // publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'public')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // liveReload: true
    }
}