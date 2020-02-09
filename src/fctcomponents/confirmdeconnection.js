import { Modal, Button } from 'antd';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Deconnection ',
    content: 'voulez vous vraiment se deconnecter ?',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}
export default showConfirm ;
