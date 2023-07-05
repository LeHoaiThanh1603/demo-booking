import { Button, Col, Rate, Row, Select } from 'antd';
import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Filter from './components/Filter/Filter';
import './SearchResult.scss';
import Label from '../../components/common/Label/Label';
import useToggle from '../../hooks/useToggle';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ListHotel from './components/ListHotel/ListHotel';

const SearchResult = () => {
    const [valueFilter, setValieFilter] = useState('Hạn sao cao nhất');

    const handleChange = (value) => {
        setValieFilter(value);
    };

    const options = [
        {
            label: 'Lựa chọn hàng đầu của chúng tôi',
            value: 'Lựa chọn hàng đầu của chúng tôi',
        },
        {
            label: 'Ưu tiên nhà & căn hộ',
            value: 'Ưu tiên nhà & căn hộ',
        },
        {
            label: 'Hạng sao (ưu tiên cao nhất)',
            value: 'Hạng sao (ưu tiên cao nhất)',
        },
        {
            label: 'Hạng sao (ưu tiên thấp nhất)',
            value: 'Hạng sao (ưu tiên thấp nhất)',
        },
        {
            label: 'Được đánh giá hàng đầu',
            value: 'Được đánh giá hàng đầu',
        },
    ];
    return (
        <>
            <Row>
                <Col span={6}>
                    <Sidebar />
                    <Filter />
                </Col>
                <Col span={18}>
                    <div className="searchresult-header">
                        <h2>Vũng tàu : {1.642} chỗ nghỉ</h2>
                        <div className="searchresult-header__suggest">
                            <strong>Những bãi biển gần đó: </strong>
                            <p>Back Beach • Bãi Dứa • Bãi Trước</p>
                        </div>
                        <Select
                            defaultValue={`Sắp xếp theo : ${valueFilter}`}
                            style={{
                                width: 'fit-content',
                            }}
                            onChange={handleChange}
                            options={options}
                        />
                    </div>
                    <ListHotel />
                    <ListHotel />
                    <ListHotel />
                    <ListHotel />
                    <ListHotel />
                </Col>
            </Row>
        </>
    );
};

export default SearchResult;
