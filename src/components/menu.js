import React from 'react' ;
import {Component} from 'react' ;
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const MyMenu = () =>  {

    return(<div className="logo" >
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">Produit de la semaine </Menu.Item>
      <Menu.Item key="2">les meilleures achats </Menu.Item>
      <Menu.Item key="3">Tous les produits</Menu.Item>
    </Menu>
    </div> )

}

export default MyMenu
