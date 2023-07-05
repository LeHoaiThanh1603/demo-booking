import React, { useState } from 'react';
import { Input, DatePicker, Radio, Select, Button } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import './InfoCustomer.scss';
import dayjs from 'dayjs';

const { Option } = Select;

const Field = ({ label, editing, children }) => {
    return (
        <div className="field">
            <label>{label}</label>
            {editing ? <div style={{ flex: '1' }}>{children}</div> : <span>{children}</span>}
        </div>
    );
};

const InfoCustomer = () => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('Lê Hoài Thanh');
    const [birthdate, setBirthdate] = useState(dayjs('2001-03-16'));
    const [gender, setGender] = useState('male');
    const [nationality, setNationality] = useState('USA');
    const [phone, setPhone] = useState('0932557304');
    const [email, setEmail] = useState('lehoaithanhcd003@gmail.com');

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    const handleSave = () => {
        setEditing(false);
    };

    return (
        <div className="user-info">
            <div className="user-info-header">
                <h2>Thông tin cá nhân</h2>
                <Button icon={<EditOutlined />} onClick={handleEdit} />
            </div>
            <div className="user-info-content">
                <Field label="Họ tên:" editing={editing}>
                    {editing ? (
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    ) : (
                        <span>{name}</span>
                    )}
                </Field>
                <Field label="Ngày sinh:" editing={editing}>
                    {editing ? (
                        <DatePicker
                            placeholder="Ngày sinh"
                            value={birthdate}
                            onChange={(date) => setBirthdate(date)}
                        />
                    ) : (
                        <span>{birthdate?.format('DD-MM-YYYY')}</span>
                    )}
                </Field>
                <Field label="Giới tính:" editing={editing}>
                    {editing ? (
                        <Radio.Group value={gender} onChange={(e) => setGender(e.target.value)}>
                            <Radio value="male">Nam</Radio>
                            <Radio value="female">Nữ</Radio>
                        </Radio.Group>
                    ) : (
                        <span>{gender}</span>
                    )}
                </Field>
                <Field label="Quốc tịch:" editing={editing}>
                    {editing ? (
                        <Select value={nationality} onChange={(value) => setNationality(value)}>
                            <Option value="USA">USA</Option>
                            <Option value="UK">UK</Option>
                            <Option value="Vietnam">Vietnam</Option>
                        </Select>
                    ) : (
                        <span>{nationality}</span>
                    )}
                </Field>
                <Field label="Số điện thoại:" editing={editing}>
                    {editing ? (
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    ) : (
                        <span>{phone}</span>
                    )}
                </Field>
                <Field label="Email:" editing={editing}>
                    {editing ? (
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    ) : (
                        <span>{email}</span>
                    )}
                </Field>
            </div>
            {editing && (
                <div className="action-buttons">
                    <Button onClick={handleCancel}>Hủy</Button>
                    <Button type="primary" onClick={handleSave}>
                        Cập nhật
                    </Button>
                </div>
            )}
        </div>
    );
};
export default InfoCustomer;
