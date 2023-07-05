import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../form.scss';
const Register = () => {
    const [value, setValue] = useState(null);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img
                        src="https://lp-cms-production.imgix.net/2021-02/Saud_Beach_G.jpg?auto=format&q=75&w=1920"
                        alt="register"
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
                    <p className="form-title">Đăng kí tài khoản</p>
                    {/* <Form.Item
                        name="use"
                        rules={[{ required: true, message: 'Vui lòng chọn loại thành viên!' }]}
                    >
                        <div className="">
                            Loại thành viên <span style={{ color: 'red' }}>*</span>
                        </div>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Cá nhân</Radio>
                            <Radio value={2}>Doanh nghiệp</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Vui lòng nhập Email hoặc số điện thoại!' }]}
                    >
                        <div className="">
                            Email/Số điện thoại <span style={{ color: 'red' }}>*</span>
                        </div>

                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <div className="">
                            Mật khẩu <span style={{ color: 'red' }}>*</span>
                        </div>

                        <Input.Password placeholder="Password" />
                    </Form.Item> */}
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                        // {...tailFormItemLayout}
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Cá nhân</Radio>
                            <Radio value={2}>Doanh nghiệp</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        className="label"
                        name="email"
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Vui lòng nhập đúng Email!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập Email!',
                            },
                        ]}
                    >
                        <Input placeholder="email" />
                    </Form.Item>
                    {/* <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Vui lòng nhập đúng Email!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập Email!',
                            },
                        ]}
                    >
                        <div className="">
                            Email/Số điện thoại <span style={{ color: 'red' }}>*</span>
                        </div>

                        <Input placeholder="Username" />
                    </Form.Item> */}
                    {/* <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <div className="">
                            Mật khẩu <span style={{ color: 'red' }}>*</span>
                        </div>

                        <Input.Password placeholder="Password" />
                    </Form.Item> */}
                    <Form.Item
                        className="label"
                        name="password"
                        label="Mật khẩu"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    {/* 

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords that you entered do not match!')
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item> */}

                    <Form.Item className="btn-submit">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '100%' }}
                        >
                            Đăng kí
                        </Button>
                    </Form.Item>
                    <Form.Item name="Register">
                        <span>
                            Bạn đã có tài khoản? <Link to={'/user/login'}>Đăng nhập</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;
