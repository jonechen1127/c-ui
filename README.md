# C-UI 库

自建的 VUE UI 库，支持按需导入()，支持自定义主题

## 安装

在你的 Vue 项目中安装 C-UI：

```bash
npm install c-ui
```

## 使用方法

### 全局使用

可以在项目中全局引入 C-UI 组件库和样式：

```javascript
import { createApp } from 'vue';
import CUI from 'c-ui';
import 'c-ui/lib/css/index.css';

createApp(App).use(CUI).mount('#app');
```

### 按需引入组件（推荐）

如果你只想引入某些组件，按需加载可以有效减少打包体积。首先，需要安装 babel-plugin-import 插件：

```bash
npm install babel-plugin-import -D
```

然后，在 babel.config.js 中配置按需加载：

```javascript
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'c-ui', // 指定要按需加载的组件库名称
        libraryDirectory: 'lib', // 指定组件库的目录
        customStyleName: name => `c-ui/lib/css/${name}.css`, // 动态加载组件样式
      },
      'c-ui'
    ]
  ]
};
```

接着，按需引入组件，样式会自动导入：

```javascript
import { Aside, Button } from 'c-ui';
createApp(App).use(Aside).use(Button).mount('#app');
```

在模板中使用 C-UI 组件：

```javascript
<template>
  <c-aside>侧边栏</c-aside>
  <c-button type="primary">按钮</c-button>
</template>
```

### 按需引入组件的一种简便方式

这种方法是按需引入组件的一种简便方式，适合在不使用 babel-plugin-import 时直接手动引入组件和样式。具体步骤如下：

* 按需引入组件：只需从 c-ui 中导入需要的组件，例如 Button。
* 手动引入样式：从 c-ui/dist/index.css 中引入完整的样式。

```javascript
import { Button } from 'c-ui';
import 'c-ui/lib/button.css';

export default {
  components: {
    Button
  }
};
```
 