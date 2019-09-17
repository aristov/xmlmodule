const path = require('path')

module.exports = {
    mode : 'none',
    entry : './docs/example.js',
    output : {
        path : path.join(__dirname, 'docs', 'build'),
        filename : 'build.example.js',
    }
}
