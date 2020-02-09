import React from 'react' ;
import {Component} from 'react' ;
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logo from '../img/logo.png' ;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const MyFooter = () => {
  return (
<Footer style={{ textAlign: 'center' }}>souk w dallel - copyrights 2020 Hichem Smairia
<img src={logo} style={{height:50,width:80}} />
</Footer> )
}
export default MyFooter ;
