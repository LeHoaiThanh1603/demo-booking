import React, { useState } from 'react';
import './RoomHotel.scss';
import { Button, Tooltip, Popconfirm, Form, Input, Checkbox } from 'antd';
import { Space, Table, Tag } from 'antd';
import { IoMdTrash } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';
// import Modal from '../../components/common/Modal';
import { Modal } from 'antd';

const RoomHotel = () => {
    const [open, setOpen] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [method, setMethod] = useState('add');
    console.log('method: ', method);
    console.log('dataUpdate: ', dataUpdate);
    const [data, setData] = useState([
        {
            key: '1',
            name: 'Phòng Vip 1',
            acreage: '10 m²',
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            isOpen: false, // add isOpen property
        },
        // add isOpen property to other records
        {
            key: '2',
            name: 'Phòng Vip 2',
            acreage: '20 m²',
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
            isOpen: false,
        },
        {
            key: '3',
            name: 'Phòng Vip 3',
            acreage: '10 m²',
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
            isOpen: false,
        },
    ]);

    const [dataService, setDataService] = useState([
        {
            key: '1',
            name: 'Phòng Vip 1',
            bed: '3 giường đơn',
            policy: 'New York No. 1 Lake Park',
            isOpen: false, // add isOpen property
        },
        // add isOpen property to other records
        {
            key: '2',
            name: 'Phòng Vip 2',
            bed: '2 giường',
            policy: 'London No. 1 Lake Park',
            isOpen: false,
        },
        {
            key: '3',
            name: 'Phòng Vip 3',
            bed: '2 giường đơn / 1 giường đôi',
            policy: 'Sydney No. 1 Lake Park',
            isOpen: false,
        },
    ]);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [valueAcreageRoomPhysics, setValueAcreageRoomPhysics] = useState(0);
    const [valueNameRoomPhysics, setValueRoomNamePhysics] = useState('');

    const showPopconfirm = (record) => {
        const updatedData = data.map((item) => (item.key === record.key ? { ...item, isOpen: true } : item));
        setData(updatedData);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const openModal = (value, dataUpdate) => {
        console.log('value: ', value);
        if (value === 'update') {
            setDataUpdate(dataUpdate);
            setMethod('update');
        } else {
            setMethod('add');
        }

        setVisibleModal(true);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'stt',
        },
        {
            title: 'Tên Phòng',
            dataIndex: 'name',
            key: 'name',
            width: '50%',
        },
        {
            title: 'Diện tích',
            dataIndex: 'acreage',
            key: 'acreage',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Xóa phòng"
                        description={`Bạn chắc chắn muốn xóa ${record.name}?`}
                        open={open}
                        onConfirm={handleOk}
                        okButtonProps={{
                            loading: confirmLoading,
                        }}
                        onCancel={handleCancel}
                    >
                        <div className="btn-action" onClick={() => showPopconfirm(record)}>
                            <IoMdTrash size={22} />
                        </div>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleSubmitPhysicsRoom = () => {
        setData((prev) => [
            ...prev,
            {
                key: prev.length + 1,
                name: valueNameRoomPhysics,
                acreage: valueAcreageRoomPhysics + 'm²',
                isOpen: false, // add isOpen property
            },
        ]);
        setVisibleModal(false);
    };

    const columnsService = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'stt',
        },
        {
            title: 'Tên Phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số giường',
            dataIndex: 'bed',
            key: 'bed',
        },
        {
            title: 'Chính sách',
            dataIndex: 'policy',
            key: 'policy',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm
                        title="Xóa phòng"
                        description={`Bạn chắc chắn muốn xóa ${record.name}?`}
                        open={open}
                        onConfirm={handleOk}
                        okButtonProps={{
                            loading: confirmLoading,
                        }}
                        onCancel={handleCancel}
                    >
                        <IoMdTrash size={22} />
                    </Popconfirm>
                    <AiTwotoneEdit size={22} />
                </Space>
            ),
        },
    ];

    return (
        <div className="room">
            <div className="room-container">
                <h2>Phòng vật lý</h2>
                <div className="room-container__btn-add">
                    <Button onClick={() => openModal('add')}>Thêm phòng vật lý</Button>
                </div>
                <div className="">
                    <Table
                        columns={columns}
                        dataSource={data}
                        onRow={(record) => ({
                            onClick: () => openModal('update', record),
                        })}
                    />
                </div>
                <Modal
                    width={1000}
                    title={method !== 'update' ? 'Thêm phòng' : 'Sửa phòng'}
                    open={visibleModal}
                    onCancel={() => setVisibleModal(false)}
                    onOk={handleSubmitPhysicsRoom}
                >
                    <div className="form-physicsroom">
                        <div className="form-physicsroom__item">
                            <span>Tên phòng</span>
                            <Input
                                value={dataUpdate.name}
                                onChange={(e) => setValueRoomNamePhysics(e.target.value)}
                            />
                        </div>
                        <div className="form-physicsroom__item">
                            <span>Diện tích (m²)</span>
                            <Input
                                type="Number"
                                addonAfter="m²"
                                value={valueAcreageRoomPhysics}
                                onChange={(e) => setValueAcreageRoomPhysics(e.target.value)}
                            />
                        </div>
                        <Checkbox>sửa có ẩn thêm không có</Checkbox>
                    </div>
                    <div className="room-container">
                        <h2>Phòng dịch vụ</h2>
                        <div className="room-container__btn-add">
                            <Button onClick={() => setVisibleModal(true)}>Thêm phòng dịch vụ</Button>
                        </div>
                        <div className="">
                            <Table columns={columnsService} dataSource={dataService} />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default RoomHotel;
