import React from "react";
import { Button, Form, Input,message } from "antd";
import axios from "axios";
const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};

const AddAssetForm = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        console.log("Received values:", values);

        axios
        .post("/assets/create", values)
        .then(function (response) {
            message.success("Asset Added");
            form.resetFields();
        })
        .catch(function (error) {
            message.error(error.response.data.message);
        });
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="add_asset"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input the name!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="detail"
                label="Quantity"
                rules={[{ required: true, message: "Please input the details!" }]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
                name="identity_number"
                label="Identity Number"
                // rules={[{ required: true, message: "Please input the identity number!" }]}
            >
                <Input />
            </Form.Item>

             <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true, message: "Please input the location!" }]}
            >
                <Input />
            </Form.Item> 

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Add Asset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddAssetForm;
