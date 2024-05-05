import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const GhatList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/ghat')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (record) => {
    axios
      .delete(`/ghat/${record.id}`)
      .then(() => {
        message.success('Ghat deleted successfully');
        // After deletion, refetch the data to update the table
        fetchData();
      })
      .catch((error) => {
        console.log('Error deleting ghat:', error);
        message.error('Failed to delete ghat');
      });
  };

  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    // },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Leaser',
      dataIndex: 'leaser',
    },
    
    {
      title: 'Lease Amount(2022-23)',
      dataIndex: 'lease_amount_23',
    },
    {
      title: 'Lease Amount(2023-24)',
      dataIndex: 'lease_amount_24',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure delete this ghat?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      bordered
      rowKey={(record) => record.id}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default GhatList;
