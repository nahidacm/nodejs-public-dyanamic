import React from "react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
    },
};

const CreatePlan = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values:", values);
    };

    const uploadProps = {
        name: "file",
        headers: {
            authorization: "authorization-token",
        },
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="create_plan"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input the title!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: "Please input the description!" }]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item name="image" label="Image">
                <Upload {...uploadProps}>
                <Button> <UploadOutlined /> Upload </Button>
                </Upload>
            </Form.Item>

            <Form.Item name="file" label="File">
                <Upload {...uploadProps}>
                    <Button> <UploadOutlined /> Upload </Button>
                </Upload>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Create Plan
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreatePlan;
