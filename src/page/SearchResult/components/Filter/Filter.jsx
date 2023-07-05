import { Checkbox } from 'antd';
import React, { useState } from 'react';
import './Filter.scss';
import { nanoid } from 'nanoid';

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
const Filter = () => {
    const [showAllFiler, setShowAllFiler] = useState(false);

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const filter = [
        'Căn hộ',
        'Khách sạn',
        'Biệt thự',
        'Chỗ nghỉ ',
        'Nhà nghỉ ',
        'Nhà khách',
        'Nhà nghỉ ',
        'Resort',
        'Nhà nghỉ ',
        'Nhà trọ',
        'Nhà nghỉ ',
        'Khách sạn ',
        'Khách sạn ',
    ];

    const sliceFilter = showAllFiler ? [...filter] : [...filter].slice(0, 5);
    return (
        <div className="filter">
            <div className="filter-container">
                <h3>Chọc lọc theo:</h3>
                <div className="filter-container__item">
                    <h4>Xếp hạng sao</h4>
                    <div className="filter-container__item--check">
                        <div className="">
                            <Checkbox onChange={onChange}>1 Sao</Checkbox>
                            <span>163</span>
                        </div>
                        <div className="">
                            <Checkbox onChange={onChange}>2 Sao</Checkbox>
                            <span>163</span>
                        </div>
                        <div className="">
                            <Checkbox onChange={onChange}>3 Sao</Checkbox>
                            <span>163</span>
                        </div>
                        <div className="">
                            <Checkbox onChange={onChange}>4 Sao</Checkbox>
                            <span>163</span>
                        </div>
                        <div className="">
                            <Checkbox onChange={onChange}>5 Sao</Checkbox>
                            <span>163</span>
                        </div>
                        <div className="">
                            <Checkbox onChange={onChange}>Không xếp hạng</Checkbox>
                            <span>1603</span>
                        </div>
                    </div>
                </div>
                <div className="filter-container__item">
                    <h4>Loại chỗ ở</h4>
                    <div className="filter-container__item--check">
                        {sliceFilter.map((item) => (
                            <div className="" key={nanoid}>
                                <Checkbox onChange={onChange}>{item}</Checkbox>
                                <span>163</span>
                            </div>
                        ))}

                        <div
                            className="filter-container__item--btn"
                            onClick={() => setShowAllFiler(!showAllFiler)}
                        >
                            {showAllFiler ? 'Hiển thị ít đi ' : `Hiển thị tất cả ${13} loại `}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
