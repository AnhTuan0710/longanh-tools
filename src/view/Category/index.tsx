import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { Input, Popconfirm } from 'antd'
import ButtonAdd from '../../elements/ButtonAdd/ButtonAdd'
import './category.scss'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CategoryType } from '../../dataType/category';
import { ProductType } from '../../dataType/product';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Category() {
  const navigate = useNavigate()
  const [loadingTable, setloadingTable] = useState(false)
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
        <DeleteOutlined onClick={(e) => e.stopPropagation()}/>
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
  const data: CategoryType[] = [
    {
      category_cd: 'DM00001',
      category_name: 'Bua',
      list_product: []
    },
    {
      category_cd: 'DM00002',
      category_name: 'Kim',
      list_product: []
    },
    {
      category_cd: 'DM00003',
      category_name: 'Keo',
      list_product: []
    }
  ];

  const handleOnRowTable = (record: CategoryType) => {
    console.log(record, 'keytest')
    navigate(`/category/${record.category_cd}`, {state: record})
  }
  return (
    <div className='category-container'>
      <div className='header-category'>
        <div className='title-category'>
          <h4>Danh mục sản phẩm</h4>
          <ButtonAdd />
        </div>
        <Input
          className="header-search"
          placeholder="Nhập mã danh mục..."
          prefix={<SearchOutlined />}
          style={{ width: '300px' }}
        />
      </div>
      <div className='list-category-container'>
        <Table
          rowKey={'table-category'}
          columns={columns}
          dataSource={data}
          loading={loadingTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => { handleOnRowTable(record) },
            };
          }}
        />
      </div>
    </div>
  )
}
