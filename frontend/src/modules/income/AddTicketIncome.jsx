import React from "react";
import { Form, Button, Input, InputNumber, DatePicker } from "antd";
const AddTicketIncome = () => {

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const onFinish = (values) => {
        console.log(values);
    };
    const validateMessages = {
        required: "${label} is required!",
    };
    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item label="Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={['source']}
                    label="Source"
                    rules={[
                        {
                            type: 'text',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'amount']}
                    label="Amount"
                    rules={[
                        {
                            type: 'number',
                            required: true,

                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'detail']} label="Detail">
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>


        </div >
    )
}
export default AddTicketIncome;
