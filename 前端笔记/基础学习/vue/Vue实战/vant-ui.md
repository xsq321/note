#### 1. 快速上手

- 安装：npm i vant -S

- 下载一款babel插件，实现自动按需引入：npm i babel-plugin-import -D

  ​	在babel.config.js中配置：

  ```javascript
  module.exports = {
    plugins: [
      ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }, 'vant']
    ]
  };
  ```

  引入只需要：import { button } from 'vant'

