const path = require("path");

module.exports = {
    module:{
        rules:[{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use:{
                loader: "babel-loader"
            }
        },
        { test: /\.svg$/, use: 'svg-inline-loader' },
        { test: /\.css$/, use: [ "style-loader", { loader: "css-loader", options: { modules: true } } ] },
    ]
    }
}

// module.exports = {
//   entry: './frontend/src/index.js',
//   module: {
//     rules: [

//       { test: /\.(js)$/, use: 'babel-loader' }
//     ]
//   }
// }