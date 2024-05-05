import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const LaunchSchedules = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/launch-schedule/list')
      .then(response => {
        const processedData = response.data.map(item => ({
          ...item,
          date: new Date(item.time).toLocaleDateString(),
          time: new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }));
        setData(processedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (record) => {
    axios.delete(`/launch-schedule/${record.id}`)
      .then(response => {
        message.success('Launch schedule deleted successfully');
        fetchData();
      })
      .catch(error => {
        console.error('Error deleting launch schedule:', error);
        message.error('Failed to delete launch schedule');
      });
  };

  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   width: '10%',
    // },
    {
      title: 'Launch Name',
      dataIndex: 'launch_name',
      width: '20%',
    },
    {
      title: 'From Ghat',
      dataIndex: 'from_ghat',
      width: '20%',
    },
    {
      title: 'To Ghat',
      dataIndex: 'to_ghat',
      width: '20%',
    },
    // {
    //   title: 'Date',
    //   dataIndex: 'date', 
    //   width: '10%',
    // },
    {
      title: 'Time',
      dataIndex: 'time',
      width: '10%',
    },
    {
      title: 'Launch Number',
      dataIndex: 'launch_number',
      width: '10%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this launch schedule?"
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default LaunchSchedules;

