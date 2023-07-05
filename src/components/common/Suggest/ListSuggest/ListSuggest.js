import React, { useState } from 'react'
import './ListSuggest.scss'
import { Button, Col, Modal, Row, Skeleton, Tooltip } from 'antd'

import { BiBed, BiHelpCircle } from 'react-icons/bi';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineWifi } from 'react-icons/ai';
import ImageGallery from 'react-image-gallery';

function ListSuggest({ isCardView, loading }) {


    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
    ]

    const titleTooltip = () => {
        return (
            <div className='tooltip-element'>
                <h4>Giá cho 1 phòng 1 đêm</h4>
                <div className="tooltip-element__list">
                    <div className="tooltip-element__item">
                        <div className="tooltip-element__value">
                            <span>1 Đêm: </span>
                            <span>2.161.999đ</span>
                        </div>
                    </div>
                    <div className="tooltip-element__item tooltip-element__border">
                        <div className="tooltip-element__value">
                            <span>Giá phòng: </span>
                            <span>2.161.999đ</span>
                        </div>
                        <div className="tooltip-element__value">
                            <span>Thuế và phí: </span>
                            <span>335.110đ</span>
                        </div>
                    </div>
                    <div className="tooltip-element__item">
                        <div className="tooltip-element__value">
                            <span>Thành tiền: </span>
                            <span>2.497.109đ</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const carosel = [
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },

    ];


    return (

        <div className={`list ${isCardView && 'iscard'}`}>
            <div className="list-container">
                <Row>
                    <Col span={24}>
                        {loading ?
                            <Skeleton.Input active style={{ width: '100%' }}></Skeleton.Input>
                            :
                            <h3 className='list-container__heading'>Deluxe</h3>
                        }

                    </Col>
                    <Col span={isCardView ? 24 : 8} style={{ padding: '4px' }}>
                        <div className="list-container__box">
                            <div className="list-container__box--images">
                                {loading ? (
                                    <Row>
                                        <Col span={24} >
                                            <Skeleton.Image active style={{ width: '100%', height: '250px' }} />
                                        </Col>
                                        <Col span={8} className="list-container__box--images__img" >
                                            <Skeleton.Image active style={{ width: '100%' }} />
                                        </Col>
                                        <Col span={8} className="list-container__box--images__img" >
                                            <Skeleton.Image active style={{ width: '100%' }} />
                                        </Col>
                                        <Col span={8} className="list-container__box--images__img" >
                                            <Skeleton.Image active style={{ width: '100%' }} />
                                        </Col>
                                    </Row>
                                ) : (
                                    <Row>
                                        <Col span={24}>
                                            <img style={{ cursor: 'pointer' }} src={images[0]} alt="" onClick={showModal} />
                                        </Col>
                                        <Col className="list-container__box--images__img" span={8}>
                                            <img style={{ cursor: 'pointer' }} src={images[1]} alt="" onClick={showModal} />
                                        </Col>
                                        <Col className="list-container__box--images__img" span={8}>
                                            <img style={{ cursor: 'pointer' }} src={images[2]} alt="" onClick={showModal} />
                                        </Col>
                                        <Col className="list-container__box--images__img" span={8}>
                                            <img style={{ cursor: 'pointer' }} src={images[3]} alt="" onClick={showModal} />
                                        </Col>
                                    </Row>
                                )}


                                <div className="list-container__box--description">
                                    <Skeleton active loading={loading}>
                                        <Row>
                                            <Col span={24}>
                                                <div className="list-container__box--description__wrapperspacious">
                                                    <div className="list-container__box--description__spacious">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcHotelRoomMeasure"><path d="M12 21H7L21 7V21H18M12 21V20M12 21H15M15 21V20M15 21H18M18 21V20M15 17H17V15" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L9 9M8 8L5 11M8 8L11 5M5 11L6 12M5 11L2 14L5 17L17 5L14 2L11 5M11 5L12 6" stroke="#03121A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                        40.0 m2
                                                    </div>
                                                    {isCardView &&
                                                        <>

                                                            <div className="list-container__box--description__spacious">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcHotelRoomMeasure"><path d="M12 21H7L21 7V21H18M12 21V20M12 21H15M15 21V20M15 21H18M18 21V20M15 17H17V15" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L9 9M8 8L5 11M8 8L11 5M5 11L6 12M5 11L2 14L5 17L17 5L14 2L11 5M11 5L12 6" stroke="#03121A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                                2 Giường
                                                            </div>

                                                            <div className="list-container__box--description__spacious">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcHotelRoomMeasure"><path d="M12 21H7L21 7V21H18M12 21V20M12 21H15M15 21V20M15 21H18M18 21V20M15 17H17V15" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L9 9M8 8L5 11M8 8L11 5M5 11L6 12M5 11L2 14L5 17L17 5L14 2L11 5M11 5L12 6" stroke="#03121A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                                2 Khách
                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                <div className="list-container__box--description__convenient">máy lạnh</div>
                                                <div className="list-container__box--description__convenient">Wifi miễn phí</div>

                                            </Col>
                                            <Col span={24}>
                                                <Button className='list-container__box--description__btn' onClick={showModal}>Xem chi tiết</Button>
                                            </Col>
                                        </Row>
                                    </Skeleton>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={isCardView ? 0 : 16} style={{ padding: '4px' }}>
                        <div className="list-container__descriptions">
                            <Skeleton active loading={loading}>
                                <Row>
                                    <Col span={24}>
                                        <h3>Deluxe Twin Room Only</h3>
                                    </Col>
                                    <Col span={24}>
                                        <div className="list-container__descriptions--describe">
                                            <div className="">
                                                <BiBed />
                                                <p>2 giường đơn</p>
                                            </div>
                                            <div className="">
                                                <HiOutlineUsers />
                                                <p>2 Khách</p>
                                            </div>
                                            <div className="list-container__descriptions--describe__room">
                                                <p>{`(Trống 1 phòng)`}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable">
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/812d6f19a9d1ceb30728acbce11f709a.svg" alt="" />
                                                        <p>Không bao gồm bửa sáng</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item active-green">
                                                        <AiOutlineWifi />
                                                        <p>WIFI miễn phí</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable">
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ac4257c709f6621e4c315f641f60202f.svg" alt="" />
                                                        <p>Không hoàn tiền</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ac4257c709f6621e4c315f641f60202f.svg" alt="" />
                                                        <p>Không đổi lịch</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item active-blue">
                                                        <img style={{ width: '18px' }} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2223d318ab3b068d350a71254495c6e4.svg" alt="" />
                                                        <Tooltip title='Đặt phòng này không thể hoàn tiền và không thể đổi lịch'>
                                                            <p>Xem Chính sách huỷ phòng</p>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable__item flex-end">
                                                    <div className="list-container__descriptions--lable__old">3.618.999  VND</div>
                                                    <div className="list-container__descriptions--lable__new">
                                                        <strong>2.497.109  VND</strong>
                                                        <div className="">/  phòng /  đêm</div>
                                                    </div>
                                                    <Tooltip title={titleTooltip} placement='bottom'>
                                                        <div className="list-container__descriptions--lable__price">Giá cuối cùng
                                                        </div>
                                                    </Tooltip>

                                                    <Button className='list-container__descriptions--lable__btn'> Đặt ngay</Button>
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                <div className="list-container__descriptions--lable__item border-top">
                                                    <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/04/03/1522754232742-552d078378e134fb3df3b659a7d527f4.png?tr=q-75" alt="" />
                                                    <p>Tiết kiệm 31%!</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Skeleton>

                        </div>
                        <div className="list-container__descriptions">
                            <Skeleton active loading={loading}>
                                <Row>
                                    <Col span={24}>
                                        <h3>Deluxe Twin Room Only</h3>
                                    </Col>
                                    <Col span={24}>
                                        <div className="list-container__descriptions--describe">
                                            <div className="">
                                                <BiBed />
                                                <p>2 giường đơn</p>
                                            </div>
                                            <div className="">
                                                <HiOutlineUsers />
                                                <p>2 Khách</p>
                                            </div>
                                            <div className="list-container__descriptions--describe__room">
                                                <p>{`(Trống 1 phòng)`}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable">
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/812d6f19a9d1ceb30728acbce11f709a.svg" alt="" />
                                                        <p>Không bao gồm bửa sáng</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item active-green">
                                                        <AiOutlineWifi />
                                                        <p>WIFI miễn phí</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable">
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ac4257c709f6621e4c315f641f60202f.svg" alt="" />
                                                        <p>Không hoàn tiền</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item">
                                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ac4257c709f6621e4c315f641f60202f.svg" alt="" />
                                                        <p>Không đổi lịch</p>
                                                    </div>
                                                    <div className="list-container__descriptions--lable__item active-blue">
                                                        <img style={{ width: '18px' }} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2223d318ab3b068d350a71254495c6e4.svg" alt="" />
                                                        <Tooltip title='Đặt phòng này không thể hoàn tiền và không thể đổi lịch'>
                                                            <p>Xem Chính sách huỷ phòng</p>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="list-container__descriptions--lable__item flex-end">
                                                    <div className="list-container__descriptions--lable__old">3.618.999  VND</div>
                                                    <div className="list-container__descriptions--lable__new">
                                                        <strong>2.497.109  VND</strong>
                                                        <div className="">/  phòng /  đêm</div>
                                                    </div>
                                                    <Tooltip title={titleTooltip} placement='bottom'>
                                                        <div className="list-container__descriptions--lable__price">Giá cuối cùng
                                                        </div>
                                                    </Tooltip>

                                                    <Button className='list-container__descriptions--lable__btn'> Đặt ngay</Button>
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                <div className="list-container__descriptions--lable__item border-top">
                                                    <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/04/03/1522754232742-552d078378e134fb3df3b659a7d527f4.png?tr=q-75" alt="" />
                                                    <p>Tiết kiệm 31%!</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Skeleton>

                        </div>
                    </Col>
                </Row>
            </div>
            <Modal className='modalView' footer={null} title="Deluxe Hotel - tên phòng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'70%'} style={{ top: 50, }}>
                <div className="view">
                    <div className="view-images">
                        <ImageGallery items={carosel} showFullscreenButton={false} showPlayButton={false} height='300px' />
                    </div>
                    <div className="view-des">
                        <div>
                            <div className="view-des__content">
                                <h4>Thông tin phòng</h4>
                                <div className="view-des__content--lable">

                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcHotelRoomMeasure"><path d="M12 21H7L21 7V21H18M12 21V20M12 21H15M15 21V20M15 21H18M18 21V20M15 17H17V15" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L9 9M8 8L5 11M8 8L11 5M5 11L6 12M5 11L2 14L5 17L17 5L14 2L11 5M11 5L12 6" stroke="#03121A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    40.0 m2
                                </div>
                                <div className="view-des__content--lable">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" data-id="IcSystemGuestPassenger"><g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><path stroke="#03121A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,21 L13,21 L13,19.5 C13,16.4624339 10.5375661,14 7.5,14 L7.5,14 C4.46243388,14 2,16.4624339 2,19.5 L2,21 Z M7,4 L8,4 C9.65685425,4 11,5.34314575 11,7 L11,8.5 C11,10.4329966 9.43299662,12 7.5,12 L7.5,12 C5.56700338,12 4,10.4329966 4,8.5 L4,7 C4,5.34314575 5.34314575,4 7,4 Z"></path><path stroke="#0194F3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,19 L22,19 L22,18 C22,14.4624339 19.5581561,12 17,12 C15.6264236,12 14.7600111,12.2294943 14,13 M16,2 L16.3162278,2.9486833 C16.7245699,4.17370972 17.8709864,5 19.1622777,5 L21,5"></path><path stroke="#0194F3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,6.5 C20,8.43299662 18.4329966,10 16.5,10 L16.5,10 C14.5670034,10 13,8.43299662 13,6.5 L13,5 C13,3.34314575 14.3431458,2 16,2 Z"></path></g></svg>
                                    2 Khách
                                </div>
                                <div className="view-des__content--lable">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" data-id="IcSystemGuestPassenger"><g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><path stroke="#03121A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,21 L13,21 L13,19.5 C13,16.4624339 10.5375661,14 7.5,14 L7.5,14 C4.46243388,14 2,16.4624339 2,19.5 L2,21 Z M7,4 L8,4 C9.65685425,4 11,5.34314575 11,7 L11,8.5 C11,10.4329966 9.43299662,12 7.5,12 L7.5,12 C5.56700338,12 4,10.4329966 4,8.5 L4,7 C4,5.34314575 5.34314575,4 7,4 Z"></path><path stroke="#0194F3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,19 L22,19 L22,18 C22,14.4624339 19.5581561,12 17,12 C15.6264236,12 14.7600111,12.2294943 14,13 M16,2 L16.3162278,2.9486833 C16.7245699,4.17370972 17.8709864,5 19.1622777,5 L21,5"></path><path stroke="#0194F3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,6.5 C20,8.43299662 18.4329966,10 16.5,10 L16.5,10 C14.5670034,10 13,8.43299662 13,6.5 L13,5 C13,3.34314575 14.3431458,2 16,2 Z"></path></g></svg>
                                    2 giường - 1 đôi - 1 đơn
                                </div>
                            </div>
                            <div className="view-des__content">
                                <h4>Tính năng phòng bạn thích</h4>
                                <div className="view-des__content--lable">
                                    <img style={{ width: '30px' }} src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2018/08/13/1534147303404-6f86a86f6f3621d3c9954aeb5b87aa7a.png" alt="" />
                                    Máy lạnh
                                </div>
                            </div>

                            <div className="view-des__content">
                                <h4>Tiện nghi phòng</h4>
                                <ul>
                                    <li>Máy lạnh</li>
                                    <li>Quầy bar mini</li>
                                    <li>Bàn làm việc</li>
                                    <li>Nước đóng chai miễn phí</li>
                                    <li>TV</li>
                                    <li>Rèm cửa / màn che</li>
                                </ul>

                            </div>
                            <div className="view-des__content">
                                <h4>Tiện nghi phòng tắm</h4>
                                <ul>
                                    <li>Phòng tắm riêng</li>
                                    <li>Bộ vệ sinh cá nhân</li>
                                    <li>Vòi tắm đứng</li>
                                    <li>Máy sấy tóc</li>
                                </ul>

                            </div>
                        </div>
                        <div className="view-des__footer">
                            <h4>Khời điểm từ</h4>
                            <div className='view-des__footer--price' >
                                <strong>2.497.109  VND</strong>
                                / phòng / đêm
                            </div>
                            <Button type='primary'>Thêm lựa chọn phòng</Button>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ListSuggest