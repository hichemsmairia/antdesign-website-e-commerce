import React from 'react' ;
import {Component } from 'react' ;
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyMenu from './menu.js'
import MyFooter from './Footer.js'
import MySider from './sider.js'
import MyContent from './content.js'
import SearchBox from './searchbox.js'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Home =  () => {
  return (


    <Layout>
          <SearchBox />
        <Header className="header">

      <MyMenu />
    </Header>
    <Content style={{ padding: '0 50px' }}>

      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <MySider />
        <MyContent />
      </Layout>
    </Content>
    <MyFooter />
  </Layout>

)

}

export default Home ;
