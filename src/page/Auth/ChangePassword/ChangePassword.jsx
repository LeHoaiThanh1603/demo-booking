import { Button, Checkbox, Col, Form, Input, Radio, Row, Select } from 'antd';
import React, { useState } from 'react';
import '../Register/Register.scss';
import { Link } from 'react-router-dom';
const ChangePassword = () => {
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
                        src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
                        alt="Login"
                    />
                </div>
                <Form
                    className="form-changepw"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">Đổi mật khẩu</p>

                    <Form.Item
                        className="label"
                        label="Mật khẩu hiện tại"
                        name="passwordold"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        className="label"
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu mới!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        className="label"
                        name="confirm"
                        label="Nhập lại mật khẩu mới"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập lại mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu mới không khớp'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item className="btn-submit">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            style={{ width: '100%' }}
                        >
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ChangePassword;
