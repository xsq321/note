#### 1. webpack简单使用

- Webpack是一种前端资源构建工具，是一个静态模块打包器

- npm init

  npm i webpack webpack-cli -g

  npm i webpack webpack-cli -D		//本地安装，开发依赖；可以安装在最外面，因为找不到包会去上一级找

  webpack ./src/index.js -o ./build/built.js --mode=development		//配置开发环境下的输出位置

- webpack能处理js/json资源，不能处理css/img等其他资源

  webpack能将es6模块化编译成浏览器能识别的模块化（如 import, export 等）

  生产环境比开发环境多一个压缩js代码功能



#### 2. 打包资源

##### 2.1. 打包样式资源

使用loader配置

在项目根文件目录下建一个配置文件webpack.config.js:

```javascript
module.exports = {
    entry: './src/index.js',	//入口
    output: {
        filename: 'built.js',  //写成'js/built.js'可以将所有js文件放在一起
        path: resolve(__dirname,'build')	//需使用绝对路径
    },
    module: {	//loader(翻译)的配置
        rules:[	
            {
                test: /\.css$/,	//以 .css 结尾
                use: [	// use 数组中 loader 执行顺序是从后到前的
                    'style-loader',	//创建style标签，将js中的样式资源插入到head中生效
                    'css-loader' //将css文件变成commonjs模块加载到js中，里面的内容是样式字符串
                ]
            }
        ]
    },
    plugins: [],		//插件
    mode: 'development'	//开发环境，production表示生产模式
}
```

配置了之后直接在控制台使用webpack 就可以打包了

##### 2.2. 打包html资源

使用插件

```javascript
npm i html-webpack-plugin -D	//下载插件
const HtmlWebpackPlugin = require('html-webpack-plugin')	//引入插件
在plugins里面使用：
new HtmlWebpackPluginew({
	template:'./src/index.html' //以该文件为模板，在其基础上自动引入打包输出的所有资源
})
```

##### 2.3. 打包图片资源

```javascript
{	//处理图片资源，但处理不了html中的img图片
	test:/\.(jpg|png|gif)$/,
    loader:'url-loader',  //只需一个loader时可以这样写，多个得写成use数组方式；需下载两个包:url-loader和其所依赖的file-loader
    options:{
        limit: 8 *1024,  //图片小于8kb，就会被base64处理，减少请求数量
        esModule:false,  //关闭url-loader的es6模块化，使用commonjs解析
        name:'[hash:10].[ext]',	//给图片进行重命名，取图片的hash值的前10位，ext为原本的后缀
        outputPath:'imgs'  //使所有图片都放在一个文件夹里
    }
}

{
    test:/\.html$/,   //专门用来处理html文件中img的引入，使其能被url-loader处理
    loader:'html-loader',
}
```

##### 2.4. 打包其他资源

```javascript
{
	exclude:/\.(css|js|html)$/,  //除了这些资源的其他资源都用file-loader打包
    loader: 'file-loader'
}
```



#### 3. devServer

开发服务器，用来自动编译，自动打开浏览器，自动刷新浏览器

不会有任何输出，只会在内存中编译打包

npm i webpack-dev-server -D

npx webpack-dev-server   //因为没有全局安装，所以需使用npx运行

```javascript
devServer: {
	contenBase:resolve(__dirname,'build'),  //运行构建后的
    compress:true,  //启动gzip压缩
    port:3000,  //端口号；使用localhost:3000观看页面
    open:true,  //自动打开浏览器
}
```



#### 4. css处理

##### 4.1. 提取css文件

下载一个插件：npm i mini-css-extract-plugin -D

在plugins中使用：new MiniCssExtractPlugin({ filename:'css/built.css' })

用MiniCssExtractPlugin.loader代替'style-loader'

这样就可以将css提取成一个单独文件

##### 4.2. css兼容性处理

使用postcss-loader和插件postcss-preset-env

使用对象方式在use中写loader:

```javascript
{
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: ()=>[
            require('postcss-preset-env')()
        ]
    }
}
```

在package.json中配置：

```javascript
"production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
]
```

默认是看开生产环境，若要改成开发环境，则需设置nodejs环境变量：

process.env.NODE_ENV = 'development'

##### 4.3. 压缩css

下载插件：optimize-css-assets-webpack-plugin

在plugins中直接new调用即可



#### 5. js处理

##### 5.1. js语法检查

- 下载eslint-loader和其所依赖的eslint

- 在rules里面写：

```javascript
{
    test: /\.js$/,
    exclude: /node_modules/,  //注意：只检查自己写的源代码，第三方库是不用也不能检查的
    loader: 'eslint-loader',
    options: {
        fix: true  //自动修复检查到的错误
    }
}
```

- 在package.json中的eslintConfig中设置检查规则，推荐使用airbnb规则

  ```javascript
  "eslintConfig": {
      "extends": "airbnb-base"
  }
  ```

  需下载三个库：`eslint-config-airbnb-base eslint eslint-plugin-import` 

##### 5.2. js兼容性处理
