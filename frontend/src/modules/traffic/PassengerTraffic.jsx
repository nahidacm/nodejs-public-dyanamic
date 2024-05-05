import React from 'react';
import { Table } from 'antd';

const PassengerTraffic = () => {
  const columns = [
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      width: 150,
    },
    {
      title: 'Passengers',
      dataIndex: 'passengerCount',
      key: 'passengerCount',
      width: 150,
    },
  ];

  const data = [
    {
      key: '1',
      duration: 'July/22 - June/23',
      passengerCount: '59,44,600',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Table
      columns={columns}
      dataSource={data}
     
      bordered
    
      style={{width: '800px'}}
      
    />
  </div>
   
  );
};

export default PassengerTraffic;

