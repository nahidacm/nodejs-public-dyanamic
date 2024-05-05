import { Table, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    filters: [
      {
        text: 'Admin',
        value: 'admin',
      },
      {
        text: 'User',
        value: 'user',
      }
    ],
    width: '20%',
  }, 
];
const getTableParam = (params) => ({
  take: params.pagination?.pageSize,
  skip: params.pagination?.current,
  ...params,
});

const UserList = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    axios.get("/user", getTableParam(tableParams)).then((response) => {
      setData(response.data);
      setLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: response.data.length,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    }).catch(function (error) {
      messageApi.open({
        type: "error",
        content: error.response.data.message,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <>
    {contextHolder}
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
    </>
  );
};
export default UserList;