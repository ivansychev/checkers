module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            browsers:['ie >= 8', 'last 4 version']
        })
    ]
}