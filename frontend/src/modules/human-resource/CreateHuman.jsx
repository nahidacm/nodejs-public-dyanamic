import { Button, Form, Input, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
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

const CreateHumanResource = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        values = { ...values, photo: "http://127.0.0.1:8000/media/human-resource/2022-12-06T17:50:55.675Z.png" }
        axios
            .post("/human-resouces", values)
            .then(function (response) {
                messageApi.open({
                    type: 'success',
                    content: 'Person is added successfully!',
                });
                form.resetFields();
            })
            .catch(function (error) {
                messageApi.open({
                    type: 'error',
                    content: error.response.data.message,
                });
            });


    };



    const props = {
        name: "file",
        headers: {
            authorization: "authorization-token",
        },
    }
    return (
        <>
            {contextHolder}
            <Form
                {...formItemLayout}
                form={form}
                name="create_human"
                onFinish={onFinish}
                // initialValues={{ role: "user" }}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            // required: true,
                            // message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item name="photo" label="Photo">
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item> */}


                <Form.Item
                    name="designation"
                    label="Designation"
                    rules={[{ required: true, message: "Please input your Designation" }]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Office Name" name="office_name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="contact_number"
                    label="Contact Number"
                    rules={[{ required: true, message: "Please input your Contact Number" }]}
                >
                    <Input />
                </Form.Item>




                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Create Human Resource
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
export default CreateHumanResource;