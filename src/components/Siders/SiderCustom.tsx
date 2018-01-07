/** Import React */
import * as React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
import SiderMent from './SiderMenu';
import { menus } from './menus'

interface Props {
  collapsed: boolean;
}

class SiderCustom extends React.Component<Props> {

  constructor(public props: Props) {
    super(props);
  }

  render() {
    return (
      <Sider 
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
      <div className="logo" />
      <SiderMent 
          menus={menus} 
          mode="inline"
          theme='dark'
        />
      </Sider>
    );
  }
}

export default SiderCustom;
