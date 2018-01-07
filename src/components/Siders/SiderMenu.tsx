/** Import React */
import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Menus } from './menus';

const renderMenuItem = ({ key, title, icon, ...props }: Menus) => (
  <Menu.Item key={key} {...props}>
    <Link to={key}>
      {icon && <Icon type={icon} />}
      <span className="nav-text">{title}</span>
    </Link>
  </Menu.Item>
);


const renderSubMenu = ({ key, title, icon, sub, ...props }: Menus) => (
  <Menu.SubMenu
    key={key}
    title={
      <span>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{title}</span>
      </span>
    }
    {...props}
  >
    {sub && sub.map((item: Menus) => renderMenuItem(item))}
  </Menu.SubMenu>
);

export default ({ menus, ...props }: {menus: Array<Menus>, mode: any, theme?: any}) => (
  <Menu {...props}>
    {menus &&
      menus.map(
        (item: Menus) =>
          item.sub && item.sub.length
            ? renderSubMenu(item)
            : renderMenuItem(item)
      )}
  </Menu>
);
