import { Layout } from "antd";
import React, { useState } from "react";
import tools from "../../assets/images/tools.png";
import { Menus } from "../../routes/config";
import { BaseRouters } from "../../routes/index";
import { BaseLayoutProps } from "../../typings/baseLayout";
import { urlToList } from "../../util/urlToList";
import { BaseMenu } from "../Menu";
import styles from './index.module.scss';
const { Sider, Content } = Layout;

const Mylayout = (props: BaseLayoutProps) => {
  // 获取用户信息
  let [collapsed] = useState(false);
  const {
    location: { pathname }
  } = props;
  const openKeys = urlToList(pathname)[0];
  let defaultSelectedKeys = [pathname];
  let defaultOpenKeys = [openKeys];
  if (openKeys !== pathname) {
    defaultOpenKeys = [openKeys];
  }
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        theme='light'
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh"
        }}
      >
        <div className={styles.logo}>
          <img src={tools} alt="" />
          {!collapsed && <span>小工具平台</span>}
        </div>
        <BaseMenu
          menu={Menus}
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
        />
      </Sider>
      <Layout>
        <Content className={styles.content}>
          <BaseRouters />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mylayout;
