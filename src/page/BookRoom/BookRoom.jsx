import React, { useState } from 'react';
import './BookRoom.scss';
import { Form, Button, Col, Input, Row, Select, DatePicker, Checkbox } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { BiTime } from 'react-icons/bi';
import { IoIosWarning } from 'react-icons/io';
import { FaIdCard } from 'react-icons/fa';
import CsModal from '../../components/common/Modal';
const { Option } = Select;
const { RangePicker } = DatePicker;

const BookRoom = () => {
    const [openPolicy, setOpenPolicy] = useState(false);
    const [night, setNight] = useState(1);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const options = [];
    for (let i = 1; i < 36; i++) {
        options.push({
            value: i,
            label: i,
        });
    }
    const optionsRoom = [];
    for (let value = 0; value <= 10; value++) {
        optionsRoom.push({
            value: value,
            label: value,
        });
    }

    //select night
    const handleChangeNight = (method, value) => {
        if (method === 'setNight') {
            setNight(value);
        } else if (method === 'selectNight') {
            console.log('2');
            setNight(value);
            const newEndDate = dayjs(startDate).add(value, 'day');
            console.log('newEndDate: ', newEndDate);
            setEndDate(newEndDate);
        }
    };

    //disabel thời gian quá khứ
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().startOf('day');
    };

    //chọn ngày nhận trả phòng
    const handleOptionsDate = (value, dateString) => {
        const startDate = dayjs(dateString[0], 'DD-MM-YYYY');
        const endDate = dayjs(dateString[1], 'DD-MM-YYYY');
        console.log('endDate: ', endDate);
        const numDays = endDate.diff(startDate, 'day');
        setStartDate(startDate);
        setEndDate(endDate);
        handleChangeNight('setNight', numDays);
    };

    return (
        <div>
            <Row gutter={20}>
                <Col span={24}></Col>
                <Col span={14}>
                    <div className="form-book">
                        <div className="form-book__heading">
                            <h3>Thông tin liên hệ</h3>
                        </div>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                padding: '40px',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Ngày nhận/trả phòng"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn ngày!',
                                    },
                                ]}
                            >
                                <RangePicker
                                    format={'DD-MM-YYYY'}
                                    disabledDate={disabledDate}
                                    style={{ width: '100%' }}
                                    onChange={handleOptionsDate}
                                    value={[startDate, endDate]}
                                />
                            </Form.Item>
                            <Form.Item name="nights" label="Số đêm">
                                {console.log(night)}
                                <Select
                                    defaultValue={1}
                                    value={night}
                                    onChange={(value) => handleChangeNight('selectNight', value)}
                                    options={options}
                                />
                            </Form.Item>
                            {/* <Form.Item label="Ngày trả phòng" name="checkout">
                                <span>16/03/2023</span>
                            </Form.Item> */}
                            <Form.Item name="room" label="Số lượng phòng">
                                <Select
                                    defaultValue="0"
                                    // onChange={handleChange}
                                    options={optionsRoom}
                                />
                            </Form.Item>
                            <Form.Item name="subBed" label="Số giường phụ">
                                <Select defaultValue="0">
                                    <Option>1</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Họ Tên"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ tên',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Di động"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại',
                                    },
                                    {
                                        pattern: /^\d{10,11}$/,
                                        message: 'Số điện thoại không hợp lệ',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập Email',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Ghi chú" name="note">
                                <TextArea
                                    // value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                    autoSize={{
                                        minRows: 3,
                                        maxRows: 5,
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                style={{ width: '100%', paddingLeft: '20px' }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(
                                                      new Error('Vui lòng chọn chính sách quyền riêng tư')
                                                  ),
                                    },
                                ]}
                                // {...tailFormItemLayout}
                            >
                                <Checkbox style={{ width: '100%' }}>
                                    Tôi đã đọc và chấp nhận các{' '}
                                    <span className="" style={{ width: '100%' }}>
                                        <a href="#" onClick={() => setOpenPolicy(true)}>
                                            chính sách của khách sạn
                                        </a>
                                        , <a href="#">điều khoản & điều kiện</a>, và{' '}
                                        <a href="#">chính sách quyền riêng tư</a>.
                                    </span>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                className="btn-submit"
                                style={{ textAlign: 'center', width: '100%' }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Đặt ngay
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="form-book">
                        <div className="form-book__heading">
                            <h3>Thông tin phòng</h3>
                        </div>
                        <div className="form-book__brand">
                            <img
                                src="https://du-lich.chudu24.com/f/m/2205/25/mikazuki-japanese-resorts-spa.png"
                                alt=""
                            />
                            <div className="form-book__brand__name">
                                <h4>Mikazuki Japanese Resorts & Spa Da Nang</h4>
                                <div className=""> 198 Đánh giá</div>
                            </div>
                        </div>
                        <div className="form-book__date">
                            <div className="form-book__date-days">
                                <div className="label">NGÀY NHẬN PHÒNG</div>
                                <div className="label">15/05/2023</div>
                            </div>
                            <div className="form-book__date-icon">
                                <BiTime size={25} />
                                {night} đêm
                            </div>
                            <div className="form-book__date-days">
                                <div className="label">NGÀY TRẢ PHÒNG</div>
                                <div className="label">16/05/2023</div>
                            </div>
                        </div>
                        <div className="form-book__descriptions">
                            <strong>{1}</strong> phòng Hinode Villa - Ưu đãi cuối tuần tháng 05 | Ăn sáng dành
                            cho 2 người
                        </div>
                        <div className="form-book__title">Chi tiết giá phòng</div>
                        <div className="form-book__content">
                            <div className="label">
                                <span>Loại phòng</span>
                                <p>Hinode Villa - Ưu đãi cuối tuần tháng 05 | Ăn sáng</p>
                            </div>
                            <div className="label">
                                <span>1 phòng x 1 đêm:</span>
                                <p>2.420.000</p>
                            </div>
                        </div>
                        <div className="form-book__total">
                            <div className="label">
                                <span>Tổng giá</span>
                                <p>2.420.000</p>
                            </div>
                            <div className="discount">
                                <span>Nhập mã giảm giá</span>
                                <div>
                                    <Input />
                                    <Button>Áp dụng</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <CsModal open={openPolicy} handleCancel={() => setOpenPolicy(false)}>
                <div className="policy">
                    <div className="policy-heading">
                        <IoIosWarning size={20} />
                        Phải đọc trước khi nhận phòng
                    </div>
                    <div className="policy-content">
                        <div className="policy-content__label">
                            <FaIdCard size={30} />
                            <div className="policy-content__label-content">
                                <strong>Giấy Tờ Bắt Buộc</strong>
                                <p>
                                    Khi nhận phòng, bạn cần cung cấp CMND/CCCD. Vui lòng mang theo các giấy tờ
                                    cần thiết dưới dạng bản cứng.
                                </p>
                            </div>
                        </div>
                        <div className="policy-content__label">
                            <FaIdCard size={30} />
                            <div className="policy-content__label-content">
                                <strong>Tiền cọc</strong>
                                <p>
                                    Bạn phải đóng tiền cọc VND 1,000,000 khi nhận phòng. Cơ sở lưu trú chấp
                                    nhận tiền mặt, thẻ ghi nợ hoặc thẻ tín dụng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CsModal>
        </div>
    );
};

export default BookRoom;
