const path = require('path')

module.exports = {
    entry : './docs/example.js',
    output : {
        path : path.join(__dirname, 'docs', 'build'),
        filename : 'build.example.js',
    }
}
