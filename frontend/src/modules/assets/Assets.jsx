import React from "react";
import { Table ,Button, Popconfirm, message } from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import axios from "axios";

const AssetList= () => {

    const [data,setData] = React.useState([]);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get("/assets")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleDelete = (record) => {
        axios
            .delete(`/assets/${record.id}`)
            .then((response) => {
                console.log("Deleted:", response);
                message.success("Asset deleted successfully");
                // After deletion, refetch the data to update the table
                fetchData();
            })
            .catch((error) => {
                console.log("Error deleting asset:", error);
            });
    };
    const columns = [
        // {
        //     title: "ID",
        //     dataIndex: "id",
        //     key: "id",
        // },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Quantity",
            dataIndex: "detail",
            key: "detail",
        },
        // {
        //     title: "Identity Number",
        //     dataIndex: "identity_number",
        //     key: "identityNumber",
        // },
        // {
        //     title: "Location",
        //     dataIndex: "location",
        //     key: "location",
        // },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Popconfirm
                    title="Are you sure delete this asset?"
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
        <div>
        <h3 style={{color:"#318CE7"}}>Assets in Chandpur River Port:</h3>
        <Table
            dataSource={data}
            columns={columns}
            bordered
            rowKey={(record) => record.id}
            pagination={{ pageSize: 10 }}
        />
    </div>
    );
};

export default AssetList;
