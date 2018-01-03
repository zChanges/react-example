/** Import React */
import * as React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
import SiderMent from './SiderMenu';
import { menus } from './menus'

interface Props {
  children?: React.ReactNode;
}

interface State {
  collapsed: boolean;
}

class SiderCustom extends React.Component<Props> {
  state: State = {
    collapsed: false
  };

  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  }

  constructor(public props: Props) {
    super(props);
  }

  render() {
    return (
      <Sider 
        width={200} 
        style={{ background: '#fff' }}
        breakpoint="lg"
        collapsedWidth="200"
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <SiderMent 
          menus={menus} 
          mode="inline"
        />
      </Sider>
    );
  }
}

export default SiderCustom;
