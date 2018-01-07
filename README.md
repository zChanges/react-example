# react-example

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


## React 基础
>**`react`的模式:数据流总是单向从顶层向下分发。子组件也是通过回调函数来回到`state`的顶层来改变数据的**
### State
> `state`是组件内部状态，即用户状态，一般存在父组件或自身需要。

### Props
>`props`是组件对外的接口，一般在子组件中，是父组件`state`状态改变传递给子组件作为`props`来更新视图，就是父组件state会变成子组件的props

**state和props改变都会触发`render`**

### example
>1.父组件的`state.collapsed`即是子组件的`props.collapsed`，父的`state`是子的`props`;
2.需要改变子组件的`props`必须更新父组件中`state`；
3.子组件如何改变组件状态，这就要通过子组件的事件和父组件的回调。子组件暴露一个`toggle`事件名称，父组件会订阅这个`toggle`事件。当子组件触发了`toggle`，父组件及监听到执行父组件中的`toggle`，执行`setState`。



```
// 父组件
class App extends React.Component<Props> {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
    );
  }
}

// 子组件
class HeaderCustom extends React.Component<Props> {
  constructor(public props: Props) {
    super(props);
  }
 
  render() {
    return (
      <Header  style={{ background: '#fff', padding: 0 }}>
          <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
          />
      </Header>
    );
  }
}
```


## 问自己几个问题
### 什么场景下使用redux
>1.多个组件同时用到一个state，组件和组件并没有任何关联
2.多级组件时（两层以上），最顶层组件想传递props给最底层组件，但是中间层组件并不需要这个props。
只能通过：父->中间->底层 一层一层传递给底层，这样就产生了强耦合。
**举个例子：**
应用初始化时需根据用户权限来显示相应的界面（比如某个按钮、页面等等）。这些相应的状态可能散落在各个组件中，如何统一管理这些状态，通常情况下都在各个组价中判断相应的逻辑，但是一旦应用较大，管理状态较多，就不便于后期的维护。

## redux的state树太大会不会有性能问题



