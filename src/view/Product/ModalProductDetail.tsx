import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd'
import { ProductType } from '../../dataType/product'
type Props = {
  title: string,
  productInfo?: ProductType;
  handleOk: () => void,
  handleCancel: () => void,
}
const { Option } = Select
export default function ModalProductDetail(props: Props) {
  const { title, productInfo, handleOk, handleCancel } = props
  const onFinish = (e: any) => {
    console.log(e, 'key')
  }
  const onFinishFailed = (e: any) => {
    console.log(e, 'key')
  }
  return (
    <Modal
      title={title}
      open={true}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      style={{ minWidth: '830px' }}
    >
      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row gutter={24}>
            <Col xs={24} lg={4} style={{ display: 'flex', justifyContent: "flex-end" , alignItems: 'center' }}>
              <Form.Item label="" valuePropName="fileList">
                <Upload
                  action="/upload.do"
                  listType="picture-card"
                  maxCount={1}
                  accept="image/png, image/jpeg, image/svg"
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Tải lên</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col xs={24} lg={20}>
              <Row gutter={24}>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    label="Tên sản phẩm"
                    name="product_name"
                    rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    name="category_cd"
                    label="Loại danh mục"
                    rules={[{ required: true, message: 'Nhập loại danh mục!' }]}
                  >
                    <Select placeholder="Nhập loại danh mục">
                      <Option value="male" >Male</Option>
                      <Option value="female" >Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    label="Giá bán"
                    name="price"
                    rules={[{ required: true, message: 'Nhập giá bán sản phẩm!' }]}
                  >
                    <InputNumber
                      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                      style={{ minWidth: '190px', margin: '0px' }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    label="Giá nhập"
                    name="price_import"
                    rules={[{ required: true, message: 'Nhập giá nhập sản phẩm!' }]}
                  >
                    <InputNumber
                      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                      style={{ minWidth: '190px', margin: '0px' }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    label="Số lượng"
                    name="amount"
                    rules={[{ required: true, message: 'Nhập số lượng sản phẩm!' }]}
                  >
                    <InputNumber style={{ minWidth: '190px', margin: '0px' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Form.Item
                    label="Đơn vị"
                    name="unit"
                    rules={[{ required: false, message: 'Nhập đơn vị sản phẩm!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} sm={24} lg={12}> </Col>
                <Col xs={24} sm={24} lg={12} style={{ display: 'flex', justifyContent: "flex-end" }}>
                  <Button onClick={handleCancel}>Hủy</Button>
                  {title === 'Thêm sản phẩm mới'
                    ? <Button className='button' htmlType='submit'>Thêm</Button>
                    : <Button className='button'>Chỉnh sửa, Lưu</Button>}
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  )
}
