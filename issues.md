# Issues

## 采用 ts+less 创建项目

参考https://ant.design/docs/react/use-in-typescript-cn地址

### 使用 yarn 创建

`yarn create react-app antd-demo-ts --scripts-version=react-scripts-ts`

载入 antd 组件使用后`react-app-rewired`来阻止全部加载所有 antd 的组件样式
`yarn add react-app-rewired --dev`

```javascript
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start --scripts-version react-scripts-ts",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build --scripts-version react-scripts-ts",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",
}
```

### 使用 ts

`yarn add ts-import-plugin --dev`

```javascript
/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require('react-app-rewired');
module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );
  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        })
      ]
    })
  };

  return config;
};
```

### 使用 less

安装
`yarn add react-app-rewire-less --dev`
修改

```javascript
const tsImportPluginFactory = require('ts-import-plugin')
  const { getLoader } = require("react-app-rewired");
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config) {
    const tsLoader = getLoader(
      config.module.rules,
      rule =>
        rule.loader &&
        typeof rule.loader === 'string' &&
        rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
      getCustomTransformers: () => ({
        before: [ tsImportPluginFactory({
          libraryName: 'antd',
          libraryDirectory: 'es',
-         style: 'css',
+         style: true,
        }) ]
      })
    };

+   config = rewireLess.withLoaderOptions({
+     modifyVars: { "@primary-color": "#1DA57A" },
+   })(config, env);

    return config;
  }
```

## React 采用 Typescript 

### ts定义interface
```typescript
interface Menus {
  key: string;
  title: string;
  icon: string;
  link?: string;
  sub?: Array<Menus>;
}
const renderMenuItem = ({ key, title, icon, ...props }: Menus) => (

);

```

``` typescript
<SiderMent 
  menus={menus} 
  mode="inline"
/>
export default ({ menus, ...props }: {menus: Array<Menus>, mode: any}) => (
  <Menu {...props}>
    {
      menus.map(
        (item: Menus) =>
        …………
      )
    }
  </Menu>
);
```
