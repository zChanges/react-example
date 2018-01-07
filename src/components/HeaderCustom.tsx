/** Import React */
import * as React from 'react';
import { Layout, Icon } from 'antd';
// import { connect } from 'react-redux';

const { Header } = Layout;

interface Props {
  collapsed?: boolean;
  toggle():void;
}

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

export default HeaderCustom;
