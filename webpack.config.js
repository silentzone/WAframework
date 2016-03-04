// //var webpack = require('webpack');
// //var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
 

// //定义了一些文件夹的路径
// // var root_path = path.resolve(__dirname);
// var app_path =  "src/js/app";
// // var build_path = path.resolve(root_path, 'dist/src/js/app');
// var commonsPlugin = []; 
// //commonsPlugin.push(new webpack.optimize.CommonsChunkPlugin(app_path + 'angular/angular.js'));
// module.exports = {
//     //插件项
//     plugins: [commonsPlugin],
//     //页面入口文件配置
//     entry:{  
//         filename: "src/js/app/main.js"
//     },
//     //入口文件输出配置
//     output: {
//         path: '/dist/src/js/app',
//         filename: '[name].js'
//     },
//     // module: {
//     //     //加载器配置
//     //     loaders: [
//     //         // { test: /\.css$/, loader: 'style-loader!css-loader' },
//     //         // { test: /\.js$/, loader: 'jsx-loader?harmony' },
//     //         // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
//     //         // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
//     //     ]
//     // }
//     //其它解决方案配置
//     // resolve: {
//     //     root: 'E:/github/flux-example/src', //绝对路径
//     //     extensions: ['', '.js', '.json', '.scss'],
//     //     alias: {
//     //         AppStore : 'js/stores/AppStores.js',
//     //         ActionType : 'js/actions/ActionType.js',
//     //         AppAction : 'js/actions/AppAction.js'
//     //     }
//     // }
// };


var path = require("path");
var webpack = require("webpack");
var app_path = path.join(__dirname, "src/js");
 
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('src/js/angular/angular.js'); // 指定为全局

module.exports = {
  cache: true,
  entry: {
    //  angular: path.join(app_path, "/angular/angular.js"),
    // bootstrap: ["!bootstrap-webpack!./app/bootstrap/bootstrap.config.js", "./app/bootstrap"],
    main:  path.join(app_path, "/app/main")
  },
  output: {
    path: path.join(__dirname, "dist/src/js/app"),
    publicPath: "dist/public",
    filename: "[name].js" ,
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/,    loader: "style-loader!css-loader" },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

      // required for react jsx 
      // { test: /\.js$/,    loader: "jsx-loader" },
      // { test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
    ]
  },
  externals : {
    "angular" : "window.angular",
     "jquery" : "window.jquery"
  },
  // // 现在可以写 require('file') 代替 require('file.coffee')
  //   extensions: ['', '.js', '.json', '.coffee'] 
  // 依赖设置 
  resolve: {
    root : __dirname,
    extensions: ['', '.js', '.json', '.html' ],
    alias : { 
       config : path.join(app_path,"/app/config"), 
       ngModule : path.join(app_path,"/app/app.js"),
       toastr :  path.join(app_path,"plugins/toastr/toastr.js")  
    }
  }
 // plugins: [commonsPlugin]
};