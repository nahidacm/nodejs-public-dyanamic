import { useState } from "react";
import { Button, Form, Input, message, Upload } from "antd";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';

const CreatePort = () => {

  
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
        values={...values, hydrographic_chart:"http://127.0.0.1:8000/media/hydrographic_chart/2022-12-06T17:50:55.675Z.png"}
        axios
        .post("/port", values)
        .then(function (response) {
            message.success("Port Created");
            form.resetFields();
        })
        .catch(function (error) {
            if (error.response) {
                // Server responded with an error
                message.error(error.response.data.message);
            } else {
                // An error occurred in making the request
                message.error("Failed to create port. Please try again later.");
            }
        });
    };

    const onFileChange = (info) => {
        // if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        // } else if (info.file.status === "error") {
        //     message.error(`${info.file.name} file upload failed.`);
        // }
    };

    return (
        <>
            {contextHolder}
            <Form
                {...formItemLayout}
                form={form}
                name="create_port"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please input your Name!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="location"
                    label="Location"
                    rules={[{ required: true, message: "Please input your Location" }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item label="Hydrographic Chart" name="file"> */}
                    {/* <Upload name="file" multiple={false} onChange={onFileChange}>
                        <Button icon={<UploadOutlined />} disabled={uploading}>
                            Click to Upload
                        </Button>
                    </Upload> */}
                    {/* <Upload
                        name="hydrographic_chart"
                        onChange={onFileChange}
                    >
                        <Button icon={<UploadOutlined />} disabled={uploading}>
                            Click to Upload
                        </Button>
                    </Upload> */}
                {/* </Form.Item> */}
                <Form.Item name="river_area" label="River Area">
                    <Input />
                </Form.Item>
                <Form.Item name="land_area" label="Land Area">
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={uploading}>
                        Create Port
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreatePort;
