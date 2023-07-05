import { Button, Input, Space, Table } from 'antd';
import { useState } from 'react';
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FaTrash } from 'react-icons/fa';
import './QuestionHotel.scss';
import { MdModeEditOutline } from 'react-icons/md';
import CsModal from '../../../components/common/Modal';

const QuestionHotel = () => {
    const [openModal, setOpenModal] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [method, setMethod] = useState();
    console.log('dataUpdate: ', dataUpdate);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            question: 'Khách sạn này có tốt không?',
        },
        {
            key: '2',
            name: 'John',
            question: 'Bên khách sạn có dịch vụ đưa đón ở sân bay hay không?',
        },
        {
            key: '3',
            name: 'John',
            question: 'Bên khách sạn Những tiện ích miễn phí khi đặt Biệt thự (The Level) Beach Resort??',
        },
        {
            key: '4',
            name: 'John',
            question: 'Bên khách sạn cung cấp những dịch vụ tiện ích nào?',
        },
    ];

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'key',
            key: 'key',
            className: 'col-center',
        },
        {
            title: 'Câu hỏi',
            dataIndex: 'question',
            key: 'question',
            className: 'col-center',
            with: '100px',
        },
        {
            title: 'Hàng động',
            key: 'action',
            className: 'col-center',
            render: (_, record) => (
                <Space size="middle">
                    {/* <div className="">
                        <MdModeEditOutline size={18} />
                    </div> */}
                    <div className="">
                        <FaTrash />
                    </div>
                </Space>
            ),
        },
    ];

    const handleAddorUpdate = (method, dataUpdate) => {
        if (method === 'update') {
            setDataUpdate(dataUpdate);
            setMethod('update');
        }
        setOpenModal(true);
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        // console.log(data);
    };

    const handleCancelModal = () => {
        setDataUpdate({});
        setOpenModal(false);
    };
    return (
        <div className="question">
            <h2>Câu hỏi thường gặp</h2>
            <div className="btn-create">
                <Button type="primary" onClick={() => handleAddorUpdate('add')}>
                    Thêm câu hỏi
                </Button>
            </div>
            <div className="table">
                <Table
                    className="custom-table"
                    rowClassName="custom-table-row"
                    dataSource={dataSource}
                    columns={columns}
                    onRow={(record) => ({
                        onClick: () => handleAddorUpdate('update', record),
                    })}
                />
            </div>
            <div className="modal">
                <CsModal
                    okText={method !== 'update' ? 'Thêm' : 'Cập nhật'}
                    width={'50vw'}
                    title={method !== 'update' ? 'Thêm câu hỏi' : 'Sửa câu hỏi'}
                    open={openModal}
                    handleCancel={handleCancelModal}
                >
                    <div className="modal__item">
                        <span>Cầu hỏi</span>
                        <Input value={dataUpdate.question} />
                    </div>
                    <div className="modal__item">
                        <span>Trả lời</span>
                        <CKEditor editor={ClassicEditor} data="" onChange={handleEditorChange} />
                    </div>
                </CsModal>
            </div>
            <div className=""></div>
        </div>
    );
};

export default QuestionHotel;
