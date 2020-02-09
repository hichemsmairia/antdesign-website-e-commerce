import React from 'react' ;
import { Layout, Menu, Icon } from 'antd';
import { Modal, Button } from 'antd';
import showConfirm from '../fctcomponents/confirmdeconnection.js'
import FeedBack from '../fctcomponents/feedback.js'

const { confirm } = Modal;
const { SubMenu } = Menu;
const {  Sider } = Layout;

const MySider = () => {
  return (
    <Sider width={300} style={{ background: '#fff' }}>
      <Menu
        mode="inline"


        style={{ height: '100%' }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              Mon espace
            </span>
          }
        >
          <Menu.Item onClick={showConfirm} key="1">se deconnecter  </Menu.Item>
          <Menu.Item key="2">mes achats </Menu.Item>
          <Menu.Item key="3">recharger mon solde </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              mes articles favoris
            </span>
          }
        >
          <Menu.Item key="4">voir tous mes articles favoris </Menu.Item>

        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="notification" />
              abonner vous :
            </span>
          }
        >
          <Menu.Item key="5">par email : souk.w.dallel@gmail.com </Menu.Item>
          <Menu.Item key="6">par SMS : +216 56 711 601 </Menu.Item>

        </SubMenu>
      </Menu>
      <FeedBack />
    </Sider>
  )
}
export default MySider ;
