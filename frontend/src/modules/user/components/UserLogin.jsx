import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Card, message } from "antd";
import "../User.css";
import axios from "axios";

const UserLogin = () => {
  const onFinish = (values) => {
    axios.post('/auth/login', values)
    .then(function (response) {
      localStorage.setItem("token", response.data.access_token);
      window.location.href = "/";
    })
    .catch(function (error) {
      console.log(error);
      message.error(error.response.data.message);
    });
  };
  return (
    <div id="login-module">
      <Row justify={"center"}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Card>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default UserLogin;
