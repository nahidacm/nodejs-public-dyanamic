// import React,{useState,useEffect} from 'react';
// import { Table } from 'antd';
// import axios from 'axios';
// const columns = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     width: '10%',
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     width: '20%',
//   },
//   {
//     title: 'Location',
//     dataIndex: 'location',
//     width: '20%',
//   },
// //   {
// //     title: 'Hydrographic Chart',
// //     dataIndex: 'hydrographicChart',
// //     width: '20%',
// //   },
//   {
//     title: 'River Area',
//     dataIndex: 'river_area',
//     width: '20%',
//   },
//   {
//     title: 'Land Area',
//     dataIndex: 'land_area',
//     width: '20%',
//   },
 
// ];


// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const PortList = () =>{
//   const [data, setData] = useState([]);
//   const fetchData = () => {
//     axios
//       .get("/port")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//    fetchData();
  
   
//   }, [data])
  

//  return(<Table columns={columns} dataSource={data} onChange={onChange} />);
// }

// export default PortList;

import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const PortList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/port')
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
      .delete(`/port/${record.id}`)
      .then(() => {
        message.success('Port deleted successfully');
        // After deletion, refetch the data to update the table
        fetchData();
      })
      .catch((error) => {
        console.log('Error deleting port:', error);
        message.error('Failed to delete port');
      });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
  
    },
    {
      title: 'Name',
      dataIndex: 'name',
      
    },
    {
      title: 'Location',
      dataIndex: 'location',
  
    },
    {
      title: 'River Area(km sqr)',
      dataIndex: 'river_area',

    },
    {
      title: 'Land Area (km sqr)',
      dataIndex: 'land_area',
  
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure delete this port?"
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

export default PortList;
