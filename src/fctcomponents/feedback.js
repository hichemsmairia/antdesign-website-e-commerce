import React from 'react' ;
import { Drawer, Button } from 'antd';

class FeedBack extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div
        style={{
          height: 200,
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid #ebedf0',
          borderRadius: 2,
          padding: 48,
          textAlign: 'center',
          background: '#fafafa',
        }}
      >
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            a props Souk & Dallel
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>souk w dallel est site e-commerce .. construit avec ReactJs et ant design ... donne une experience rapide et fluide </p>
        </Drawer>
      </div>
    );
  }
}
export default FeedBack ;
