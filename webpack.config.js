 var path = require('path');
 var webpack = require('webpack');


 const PATH={
     app:path.join(__dirname,'js'),
     dist:path.join(__dirname,'Build')
 }

 module.exports={
     entry:PATH.app+'/app.js',
     output:{
         path:PATH.dist+"/",
         filename:"main.js"
     },
     module:{
         loaders:[
             {//jsx loader in webpack
                 test: /.jsx?$/,
                 loader: 'babel-loader',
                 exclude: /node_modules/,
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     }
 };