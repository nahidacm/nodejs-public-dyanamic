import React, { useState } from "react";
import { Button, Form, Input, message, Upload } from "antd";
import axios from "axios";

const CreateGhatForm = () => {

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [uploading, setUploading] = useState(false);

    const onFinish = (values) => {
        axios
        .post("/ghat", values)
        .then(function (response) {
            message.success("Ghat Created");
            form.resetFields();
        })
        .catch(function (error) {
            if (error.response) {
                // Server responded with an error
                message.error(error.response.data.message);
            } else {
                // An error occurred in making the request
                message.error("Failed to create ghat. Please try again later.");
            }
        });
    };

    return (
        <>
            {contextHolder}
            <Form
                {...formItemLayout}
                form={form}
                name="create_ghat"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please input the name of the ghat!" }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name="lease_status"
                    label="Lease Status"
                    rules={[{ required: true, message: "Please input the lease status of the ghat!" }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    name="leaser"
                    label="Leaser"
                    rules={[{ required: true, message: "Please input the leaser of the ghat!" }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name="geolocation_of_ghat"
                    label="Geolocation of Ghat"
                    rules={[{ required: true, message: "Please input the geolocation of the ghat!" }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                    name="lease_amount_23"
                    label="Lease Amount(2022-23)"
                    // rules={[{ required: true, message: "Please input the lease amount for 2022-23!" }]}
                >
                    <Input type="string" />
                </Form.Item>
                <Form.Item
                    name="lease_amount_24"
                    label="Lease Amount (2023-24)"
                    // rules={[{ required: true, message: "Please input the lease amount for 2023-2024!" }]}
                >
                    <Input type="string" />
                </Form.Item>
                {/* <Form.Item name="portId" label="Port ID">
                    <Input />
                </Form.Item> */}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={uploading}>
                        Create Ghat
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateGhatForm;
