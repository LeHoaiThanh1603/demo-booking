import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);

        if (values.password && values.username) {
            navigate('/');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img
                        src="https://lp-cms-production.imgix.net/2021-02/Saud_Beach_G.jpg?auto=format&q=75&w=1920"
                        alt="Login"
                    />
                </div>
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">Đăng nhập</p>
                    <p>Login to the Dashboard</p>
                    <Form.Item
                        className="label"
                        label="Email"
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        className="label"
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item className="btn-submit">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item name="Register">
                        <span>
                            Bạn chưa có tài khoản? <Link to={'/user/register'}>Tạo tài khoản</Link>
                        </span>
                    </Form.Item>
                </Form>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Login;
