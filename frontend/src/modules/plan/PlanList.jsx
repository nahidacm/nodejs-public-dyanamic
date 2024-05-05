import React from "react";
import { Table } from "antd";

const PlanListTable = ({ planList }) => {
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image) => (
                <img src={image} alt="Plan Image" style={{ maxWidth: 100 }} />
            ),
        },
        {
            title: "File",
            dataIndex: "file",
            key: "file",
            render: (file) => <a href={file}>Download</a>,
        },
    ];

    return (
        <Table
            dataSource={planList}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={{ pageSize: 10 }}
        />
    );
};

export default PlanListTable;
