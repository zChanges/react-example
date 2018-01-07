import * as React from 'react';
import { Layout, Breadcrumb, } from 'antd';
// import { connect } from 'react-redux';
const { Content } = Layout;

// 头
import HeaderCustom from './components/HeaderCustom';
// 左侧导航
import SiderCustom from './components/Siders/SiderCustom';
// Router
import Router from './routes';
import './App.less';
interface Props {
  collapsed: boolean;
  toggle: () => void;
}

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
    <Layout className="app">
      <SiderCustom collapsed={this.state.collapsed} />
      <Layout>
        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
    );
  }
}

export default App;