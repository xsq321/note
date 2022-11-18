#### 1. 创建

- 在 src 文件下建立 store 文件夹，里面新建 index.js 文件：

  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  import dict from './modules/dict'
  
  Vue.use(Vuex)
  
  const store = new Vuex.Store({
    modules: {
      dict,
    },
    getters // 有需要也可以设置 getters ，但需要在src文件夹下新建一个getters.js文件
  })
  
  export default store
  ```

  

- 在 src 文件夹下新建 modules 文件夹，里面是各个模块的 js 文件，以 dict.js 为例：

  ```js
  const state = {
    dict: new Array()，
    title: '',
    ...
  }
  const mutations = {
    SET_DICT: (state, { key, value }) => {
      ...
    },
    REMOVE_DICT: (state, key) => {
      ...
    },
    CLEAN_DICT: (state) => {
      state.dict = new Array()
    }
  }
  
  const actions = {
    // 设置字典
    setDict({ commit }, data) {
      commit('SET_DICT', data)
    },
    // 删除字典
    removeDict({ commit }, key) {
      commit('REMOVE_DICT', key)
    },
    // 清空字典
    cleanDict({ commit }) {
      commit('CLEAN_DICT')
    }
  }
  
  export default {
    namespaced: true, // 使模块成为一个命名空间模块，便于（ 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的，这样使得多个模块能够对同一 mutation 或 action 作出响应。）
    state,
    mutations,
    actions
  }
  
  
  ```
  
  ==记得加 namespaced: true,==

#### 2. 使用

##### 2.1. 获取数据

写在计算属性 computed 中：

```js
import { mapState } from "vuex";

computed:{
	...mapState(['dict','settings'])
}
```

然后可直接通过 dict.xxx 的方式获取到该模块内 state 的具体数据

- 当然也可以通过对象形式写（个人不太建议）：

  ```js
  ...mapState({
    theme: (state) => state.settings.theme,
    sideTheme: (state) => state.settings.sideTheme,
    sidebar: (state) => state.app.sidebar,
    device: (state) => state.app.device,
    needTagsView: (state) => state.settings.tagsView,
    fixedHeader: (state) => state.settings.fixedHeader,
  }),
  ```


##### 2.2. 操作数据

```js
this.$store.dispatch('dict/removeDict', this.queryParams.dictType);
```

