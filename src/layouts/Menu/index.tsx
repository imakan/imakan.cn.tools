import { Menu as AntMenu } from 'antd';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';
import React from 'react';
import { Link } from 'react-router-dom';
import IconFont from '../../components/IconFont';

interface MenuItem {
  path: string;
  title: string;
  icon: string;
  hidden?: boolean;
  redirect?: string;
  subMenu?: MenuItem[];
}

type MenuProps = {
  menu: MenuItem[];
} & AntMenuProps;

const renderMenuItem = (item: MenuItem) => {
  return (
    <AntMenu.Item key={item.path}>
      <Link to={item.redirect || item.path}>
        {item.icon && <IconFont type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </Link>
    </AntMenu.Item>
  );
};

const renderSubMenu = (item: MenuItem) => {
  return (
    <AntMenu.SubMenu
      key={item.path}
      title={
        <span>
          {item.icon && <IconFont type={item.icon} />}
          <span className="nav-text">{item.title}</span>
        </span>
      }
    >
      {item.subMenu!.map((item) => {
        if (!item.hidden) {
          return renderMenuItem(item);
        }
      })}
    </AntMenu.SubMenu>
  );
};

export const BaseMenu = ({ menu, ...props }: MenuProps) => {
  return (
    <AntMenu {...props}>
      {menu.map((item) => {
        if (!item.hidden) {
          return item.subMenu ? renderSubMenu(item) : renderMenuItem(item);
        }
      })}
    </AntMenu>
  );
};
