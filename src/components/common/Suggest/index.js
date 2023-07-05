import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { Affix, Button, Checkbox, Col, Radio, Row, Select } from 'antd'
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons'
import { AiOutlineMenuUnfold, AiOutlineSearch } from 'react-icons/ai'
import { CgMenuGridO, CgTag } from 'react-icons/cg'
import { iconDate, iconGuestRoom, iconMenuList, iconMenucard, iconNight } from '../../../asset/svg'
import { DatePicker } from 'antd';
import CountBooking from '../CountBooking/CountBooking'
import useToggle from '../../../hooks/useToggle'
import ListSuggest from './ListSuggest/ListSuggest'
import { CARD, LIST } from '../../../constant/common'
const { RangePicker } = DatePicker;


export default function Suggest() {
    const [showSelectPrice, setShowSelectPrice] = useState(false)
    const [valueSelectPrice, setValueSelectPrice] = useState('1 Đêm')
    const [toggleSuggest, setToggleSuggest] = useToggle()
    const [isCardView, setIsCardView] = useState(true)
    const [displaySuggest, setDisplaySuggest] = useState(3)


    const subSelectRef = useRef(null);
    const suggestRef = useRef(null);
    const fakedata = [1, 2, 3, 4, 5, 6, 7]

    useEffect(() => {
        function handleClickOutside(event) {
            if (subSelectRef.current && !subSelectRef.current.contains(event.target) && !suggestRef.current.contains(event.target)) {
                setShowSelectPrice(false);
            } else if (suggestRef.current && suggestRef.current.contains(event.target)) {
                setShowSelectPrice(true)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [valueSelectPrice]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        if (scrollPosition !== pageHeight) {
            setToggleSuggest(false);
        }
    };
    const handleLoadMore = () => {
        if (displaySuggest >= fakedata.length) {
            setDisplaySuggest(3)
        } else {
            setDisplaySuggest(prev => prev + 3)

        }
    }

    const onSubmitValuePrice = (value, e) => {
        const items = document.querySelectorAll('.suggestWrapper-filter__right--item');

        switch (value) {
            case 0:
                setValueSelectPrice('Thành tiền')
                break
            case 1:
                setValueSelectPrice('1 Đêm')
                break
            default:
        }

        // Remove class "active" from all items
        items.forEach(item => {
            item.classList.remove('active');
        });

        const clickedItem = e.target;
        clickedItem.classList.add('active');
        setShowSelectPrice(false)
    }

    const handleToggleSuggest = () => {
        setToggleSuggest()
    }

    const options = [
        {
            value: '1',
            label: '1 Đêm',
        },
        {
            value: '2',
            label: '2 Đêm',
        },
        {
            value: '3',
            label: '3 Đêm',
        },
        {
            value: '4',
            label: '4 Đêm',
        },
        {
            value: '5',
            label: '5 Đêm',
        },
        {
            value: '6',
            label: '6 Đêm',
        },
        {
            value: '7',
            label: '7 Đêm',
        },
        {
            value: '8',
            label: '8 Đêm',
        },
        {
            value: '9',
            label: '9 Đêm',
        },
        {
            value: '10',
            label: '10 Đêm',
        },
        {
            value: '11',
            label: '11 Đêm',
        },
        {
            value: '12',
            label: '12 Đêm',
        },
        {
            value: '13',
            label: '13 Đêm',
        },
        {
            value: '14',
            label: '14 Đêm',
        },
        {
            value: '15',
            label: '15 Đêm',
        },
        {
            value: '16',
            label: '16 Đêm',
        },
        {
            value: '17',
            label: '17 Đêm',
        },
        {
            value: '18',
            label: '18 Đêm',
        },
        {
            value: '19',
            label: '19 Đêm',
        },
        {
            value: '20',
            label: '20 Đêm',
        },
        {
            value: '21',
            label: '21 Đêm',
        },
        {
            value: '22',
            label: '22 Đêm',
        },
        {
            value: '23',
            label: '23 Đêm',
        },
        {
            value: '24',
            label: '24 Đêm',
        },
        {
            value: '25',
            label: '25 Đêm',
        },
        {
            value: '26',
            label: '26 Đêm',
        },
        {
            value: '27',
            label: '27 Đêm',
        },
        {
            value: '28',
            label: '28 Đêm',
        },
        {
            value: '29',
            label: '29 Đêm',
        },
        {
            value: '30',
            label: '30 Đêm',
        },
    ]
    const [top, setTop] = useState(10);
    const icon = toggleSuggest ? <CloseCircleFilled /> : <AiOutlineSearch />
    const [loading, setLoading] = useState(false);

    const handleViewStyle = (value) => {
        switch (value) {
            case LIST:
                setLoading(true)
                setIsCardView(false);
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                break;
            case CARD:
                setLoading(true)
                setIsCardView(true);
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
                break;
            default:
                setIsCardView(false);

        }
    }
    return (
        <div className='suggestWrapper'>
            <Row>
                <Col span={24}>

                    <h2>Những phòng còn trống tại Khách sạn Imperial</h2>
                </Col>
            </Row>
            <div className='suggestContent'>
                <Row>
                    <Col span={20}>
                        <div className="suggestWrapper-filter">
                            <div className="suggestWrapper-filter__left">
                                <h4>Tìm kiếm nhanh hơn bằng cách chọn những tiện nghi bạn cần</h4>
                                <div className="suggestWrapper-filter__select">
                                    <Checkbox>Miễn phí hủy phòng</Checkbox>
                                    <Checkbox>Miễn phí bữa sáng</Checkbox>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="suggestWrapper-filter">
                            <div ref={suggestRef} className="suggestWrapper-filter__right">
                                {showSelectPrice &&
                                    <ul ref={subSelectRef} className="suggestWrapper-filter__right--sub">
                                        <li className='suggestWrapper-filter__right--item' onClick={(e) => onSubmitValuePrice(0, e)}>
                                            Thành Tiền
                                        </li>
                                        <li className='suggestWrapper-filter__right--item' onClick={(e) => onSubmitValuePrice(1, e)}>
                                            1 Đêm
                                        </li>
                                    </ul>}
                                <div >
                                    <h4>Hiển thị giá</h4>
                                    <div className="suggestWrapper-filter__price">{valueSelectPrice}</div>
                                </div>


                                <DownOutlined style={{ color: 'rgba(1,148,243,1.00)' }} />
                            </div>

                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="suggestWrapper__border"></div>
                    </Col>

                </Row>


            </div>
            <Affix offsetTop={0} style={{ position: 'relative' }}>
                <div className='suggestWrapper-footer'>
                    <p>Kết quả cho {<strong>1 phòng</strong>}, {<strong>1 khách</strong>}, ở từ {<strong>14 Apr 2023</strong>} trong {<strong>2 đêm</strong>}. Có 17 lựa chọn phòng trống.

                    </p>
                    <div className='suggestWrapper-footer__wrap'>
                        <div className='suggestWrapper-footer__btnSearch'>
                            <Button icon={icon} onClick={handleToggleSuggest}>{toggleSuggest ? 'Ẩn' : 'Thay đổi tìm kiếm'}</Button>
                        </div>
                        <div className='suggestWrapper-footer__btnTag'>
                            <CgTag />
                        </div>
                    </div>
                </div>
                <div className={`subChangeSearch ${toggleSuggest && 'active'}`}>
                    <div style={{ padding: '20px' }}>
                        <Row>
                            <Col span={24}>
                                <h3 className='subChangeSearch-heading'>Bạn chưa chắc chắn? Thay đổi chi tiết kỳ nghỉ tại đây</h3>
                            </Col>
                            <Col span={8}>
                                <div className="subChangeSearch-item">
                                    <img src={iconDate} alt="" />
                                    <div className="subChangeSearch-item__select">
                                        <p>Nhận phòng</p>
                                        <RangePicker
                                            style={{ width: '100%' }}
                                            size={'lagre'}
                                            format={'DD-MM-YYYY'} />
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="subChangeSearch-item">
                                    <img src={iconNight} alt="" />
                                    <div className="subChangeSearch-item__select">
                                        <p>Số đêm nghỉ</p>
                                        <Select
                                            showSearch
                                            style={{
                                                width: 200,
                                            }}
                                            placeholder="Search to Select"
                                            optionFilterProp="children"

                                            options={options}
                                        />

                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="subChangeSearch-item">
                                    <img src={iconGuestRoom} alt="" />
                                    <div className="subChangeSearch-item__select">
                                        <p>Khách và Phòng</p>
                                        <CountBooking />

                                    </div>


                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Affix>
            <Row>
                <Col span={24}>
                    <div className="style-view">
                        <div title='Hiện thị dạng danh sách' className="style-view__btn" onClick={() => handleViewStyle(LIST)} >
                            <AiOutlineMenuUnfold color={!isCardView && 'red'} />
                        </div>
                        <div title='Hiện thị dạng thẻ' className="style-view__btn" onClick={() => handleViewStyle(CARD)} >
                            <CgMenuGridO color={isCardView && 'red'} />
                        </div>
                    </div>
                </Col>
                {
                    fakedata.slice(0, displaySuggest).map((item, i) => (

                        <Col span={isCardView ? 8 : 24}>
                            <ListSuggest loading={loading} isCardView={isCardView} />

                        </Col>
                    ))
                }

            </Row>
            <div className="btn-display" onClick={handleLoadMore}>{displaySuggest >= fakedata.length ? 'Ẩn bớt đi' : 'Hiện thị thêm'}</div>
        </div>
    )
}
