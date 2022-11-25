import { Button, Form, Input, Modal } from 'antd'
import { ProductType } from '../../dataType/product'
type Props = {
  title: string,
  productInfo?: ProductType;
  handleOk: () => void,
  handleCancel: () => void,
}
export default function ModalProductDetail(props: Props) {
  const { title, productInfo, handleOk, handleCancel } = props
  return (
    <Modal
      title={title}
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        [
          <Button onClick={handleCancel}>Hủy</Button>,
          title === 'Thêm sản phẩm mới'
            ? <Button className='button'>Thêm</Button>
            : <Button className='button'>Chỉnh sửa, Lưu</Button>
        ]
      } >
      <div>
      </div>
    </Modal>
  )
}
