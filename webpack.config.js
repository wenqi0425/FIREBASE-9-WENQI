// path module is a core node module to use the below path
const path = require('path')    

// Process:
// 1) run the webpack
// 2) take the source file index.js and any imports inside the file
// 3) bundle all those above together 
// 4) spit it inside the dist folder into a file called bundle.js
// 5) every changes in index.js will be watched and re-bundled in the bundle.js
// 6) package.json --> build --> to bundle a webpack
module.exports = {
    mode: 'development',
    entry: './src/index.js',

    // output property, an object
    output:{
        // the path to put the output file into
        // resolve method is used to resolve a new path
        // ____dirname to get the current directory of this file and then go into the dist folder from here
        // we need an absolute path 

        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'   // filename of the output file
    },

    // true: when we run webpack, it's going to watch index.js file for any new changes 
    // and then bundle up the new code into the bundle.js file
    watch: true
}