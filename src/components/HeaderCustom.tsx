/** Import React */
import * as React from 'react';
import { Layout, Icon } from 'antd';
// import { connect } from 'react-redux';

const { Header } = Layout;

interface Props {
  children?: React.ReactNode;
}

interface State {
  collapsed: boolean;
}

class HeaderCustom extends React.Component<Props> {
  state: State = {
    collapsed: false
  };
  constructor(public props: Props) {
    super(props);
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Header className="header">
          <div className="logo" />
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
          />
      </Header>
    );
  }
}

export default HeaderCustom;
