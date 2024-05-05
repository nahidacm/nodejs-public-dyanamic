

import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm , message} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const HumanResourceList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/human-resouces')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (record) => {
    axios
      .delete(`/human-resouces/${record.id}`)
      .then((response) => {
        message.success('Human resource deleted successfully');
        console.log('Deleted:', response);

        // After deletion, refetch the data to update the table
        fetchData();
      })
      .catch((error) => {
        console.log('Error deleting human resource:', error);
      });
  };

  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    // },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Office Name',
      dataIndex: 'office_name',
      key: 'officeName',
    },
    {
      title: 'Contact No',
      dataIndex: 'contact_number',
      key: 'contactNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure delete this human resource?"
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
      rowKey={(record) => record.id}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default HumanResourceList;
