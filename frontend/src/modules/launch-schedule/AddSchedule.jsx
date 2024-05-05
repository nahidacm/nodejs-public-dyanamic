import { Button, Form, Input, message, DatePicker,TimePicker } from "antd";
import axios from "axios";
import dayjs from 'dayjs';

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

const CreateLaunchSchedule = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        axios
        .post("/launch-schedule/create", values)
        .then(function (response) {
            message.success("Schedule Created");
            form.resetFields();
        })
        console.log(values);
    };

    // const today = new Date();

    return (
        <>
            {contextHolder}
            {/* <h2>Create Launch Schedule</h2> */}
            <Form
                {...formItemLayout}
                form={form}
                name="create_human"
                title="Create Launch Schedule"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="time"
                    label="Time"
                    rules={[
                        {
                            required: true,
                            message: "Please input the time!",
                        },
                    ]}
                >
                    {/* <DatePicker /> */}
                    <TimePicker defaultValue={dayjs('12:00:00', 'HH:mm:ss')} />
                </Form.Item>
                <Form.Item
                    name="from_ghat"
                    label="From Ghat"
                    rules={[
                        {
                            required: true,
                            message: "Please input the ghat name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="to_ghat"
                    label="To Ghat"
                    rules={[
                        {
                            required: true,
                            message: "Please input the ghat name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="launch_name"
                    label="Launch Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input the launch name!",
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="launch_number"
                    label="Launch Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input the launch number!",
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Add Launch Schedule
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
export default CreateLaunchSchedule;
