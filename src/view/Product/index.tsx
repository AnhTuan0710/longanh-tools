import { DeleteOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Popconfirm } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { CategoryType } from '../../dataType/category';
import { ProductType } from '../../dataType/product';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableListProduct from '../../components/TableListProduct';
import ModalProductDetail from './ModalProductDetail';
export default function Product() {
  const navigate = useNavigate()
  const [loadingTable, setloadingTable] = useState(false)
  const [productName, setProductName] = useState('')
  const [showModalAddProduct, setShowModalAddProduct] = useState(false)
  const [showModalDetailProduct, setShowModalDetailProduct] = useState(false)
  const handleRemoveCategory = (e: any, record: CategoryType) => {
    e.stopPropagation()
    console.log(record, 'keytest')
  }
  const _renderButtonDelete = (text: any, record: CategoryType, index: number) => {
    return (
      <Popconfirm
        title="Bạn có chắc chắn xóa sản phẩm?"
        onConfirm={(e) => handleRemoveCategory(e, record)}
        onCancel={(e: any) => e.stopPropagation()}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined onClick={(e) => e.stopPropagation()} />
      </Popconfirm>
    )
  }
  const columns: ColumnsType<CategoryType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text: any, record: CategoryType, index: number) => <a>{index + 1}</a>,
    },
    {
      title: 'Mã danh mục',
      dataIndex: 'category_cd',
      key: 'category_cd',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'category_name',
      key: 'category_name',
    },
    {
      title: 'Số lượng mặt hàng',
      dataIndex: 'list_product',
      key: 'list_product',
      render: (text: ProductType[]) => <div>{text.length}</div>,
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      key: 'delete',
      render: _renderButtonDelete,
    },

  ];

  const handleOnRowTable = (record: CategoryType) => {
    navigate(`/category/${record.category_cd}`, { state: record })
  }
  const onchangeNameSearch = (e: any) => {
    setProductName(e.target.value)
    console.log(e.target.value, 'name')
  }
  const handleAddCategory = () => {
    console.log('Thêm danh mục mới')
  }
  const _renderHeaderCategory = () => {
    return (
      <div className='header-category'>
        <div className='title-category'>
          <h4>Sản phẩm</h4>
          <Button className='button' onClick={() => setShowModalAddProduct(true)}>
            <PlusCircleOutlined />
            Thêm mới
          </Button>
        </div>
        <Input
          className="header-search"
          placeholder="Nhập tên sản phẩm..."
          value={productName}
          onChange={onchangeNameSearch}
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
    )
  }
  const _renderTableCategory = () => {
    return (
      <div className='list-category-container'>
        <TableListProduct
          listProduct={[]}
          loadingTable={false}
          onrowTable={() => { }}
        />
      </div>
    )
  }
  return (
    <div className='category-container'>
      {_renderHeaderCategory()}
      {_renderTableCategory()}
      {showModalAddProduct &&
        <ModalProductDetail
          title='Thêm sản phẩm mới'
          handleCancel={() => setShowModalAddProduct(false)}
          handleOk={() => { }}
        />
      }
      {showModalDetailProduct &&
        <ModalProductDetail
          title='Chi tiết sản phẩm'
          handleCancel={() => setShowModalDetailProduct(false)}
          handleOk={() => { }}
        />
      }
    </div>
  )
}