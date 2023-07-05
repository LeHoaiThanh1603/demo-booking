import React, { useEffect, useState } from 'react'
import './index.scss'
import { Breadcrumb, Button, Col, DatePicker, Form, Input, Row, Space, message } from 'antd'
import { ADULT } from '../../../constant/common'
import CountBooking from '../CountBooking/CountBooking';

export default function Sidebar() {



    const [form] = Form.useForm();
    const onFinish = () => {
        message.success('Submit success!');
    };
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };






    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div >

                    <div className="main">
                        <div>
                            <div className="main__sidebar">
                                <div className="main__sidebar-boxSearch">
                                    <h4>Tìm kiếm</h4>
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            name="Tên chõ nghỉ / điểm đến"
                                            label="Tên chõ nghỉ / điểm đến"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                                {
                                                    type: 'url',
                                                    warningOnly: true,
                                                },
                                                {
                                                    type: 'string',
                                                    min: 6,
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item
                                            name="Ngày nhận phòng"
                                            label="Ngày nhận phòng"

                                        >
                                            <DatePicker style={{ width: '100%' }} onChange={onChange} />
                                        </Form.Item>

                                        <Form.Item
                                            name="Ngày trả phòng"
                                            label="Ngày trả phòng"

                                        >
                                            <DatePicker style={{ width: '100%' }} onChange={onChange} />
                                        </Form.Item>

                                        <CountBooking />

                                        <Form.Item>
                                            <Space>
                                                <Button className='submit-btn' type="primary" >
                                                    Tìm
                                                </Button>
                                            </Space>
                                        </Form.Item>
                                    </Form>
                                </div>

                            </div>
                            <div className="main__sidebar"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='sidebar__map' style={{ height: '100%' }}>
                <iframe
                    title='Google Maps'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2215015459!2d108.44011261187913!3d11.95916048822197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112db28936b91%3A0xfd62f3a195e4a387!2zNDggxJDGsOG7nW5nIFBow7kgxJDhu5VuZyBUaGnDqm4gVsawxqFuZywgUGjGsOG7nW5nIDgsIFRow6BuaCBwaOG7kSDEkMOgIEzhuqF0LCBMw6JtIMSQ4buTbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681443219503!5m2!1svi!2s'
                    width='100%'
                    height='100%'
                    frameBorder='0'
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div> */}

        </div>
    )
}
