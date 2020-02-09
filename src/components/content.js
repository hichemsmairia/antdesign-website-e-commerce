import React from 'react' ;
import {Component} from 'react' ;
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Carousel } from 'antd';
import img1 from '../img/81oe1xMMZJL._AC_SY879_.jpg' ;
import img2 from '../img/000000068592.jpg' ;
import img3 from '../img/boitier.jpeg' ;
import img4 from '../img/keyboard.jpg' ;
import likebutton from '../img/likebutton.png'
import PopOver from '../fctcomponents/popover.js'


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const MyContent = () => {
  return (
    <Content >
    <Carousel autoplay  >
        <div>
        <div className="container">
  <img  src={img1} />

  <div className="overlay">
  <strong > chaise gamer : offert par MSI , 2019 last model  </strong>
  </div>
  <img src={likebutton} className="button"   />

</div>
  </div>
        <div className="container">
        <img src={img2} />
        <div className="overlay">
        <strong className="text"> Intel i9 : le processeur qui boulverse tout  </strong>
</div>
        <img src={likebutton} className="button" />


        </div>
        <div className="container">
          <img  src={img3} />
          <div className="overlay">
          <strong  > Boitier pour pc gamer   </strong>
          </div>
          <img src={likebutton} onClick={()=>alert('')} className="button" />

        </div>
        <div className="container">
          <img  src={img4} />
          <div className="overlay">
          <strong > clavier gamer avec les couleurs RGB , changer votre gameplay  </strong>
          </div>
          <img src={likebutton} className="button" />

        </div>
      </Carousel>
    </Content>
  )
}
export default MyContent ;
