import React from 'react';
import './Hotel.scss';
import { Col, Collapse, Row } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { Panel } = Collapse;
const Hotel = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
    ];
    return (
        <div className="hotel">
            <div className="hotel-heading">
                <h3>Thông tin chung</h3>
                <span>Sửa</span>
            </div>
            <div className="hotel-info">
                <div className="hotel-info__desciptions">
                    <div>Tên khách sạn: </div>
                    <span>Tulip Hotel</span>
                </div>
                <div className="hotel-info__desciptions">
                    <div>Địa chỉ: </div>
                    <span>8 Đường Thi Sách, Vũng Tàu, Việt Nam </span>
                </div>
                <div className="hotel-info__desciptions">
                    <div>Số điện thoại: </div>
                    <span>0932557304</span>
                </div>
                <div className="hotel-info__desciptions">
                    <div>Tên khách sạn: </div>
                    <span>Tulip Hotel</span>
                </div>
                <div className="hotel-info__desciptions">
                    <div>Tên khách sạn: </div>
                    <span>Tulip Hotel</span>
                </div>
            </div>
            <div className="hotel-heading">
                <h3>Tiện ích</h3>
                <span>Sửa</span>
            </div>
            <div className="hotel-collapse">
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                    <Panel header="Nhóm tiện ích 1" key="1">
                        <div className="hotel-collapse__item">
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                        </div>
                    </Panel>
                    <Panel header="Nhóm tiện ích 2" key="2">
                        <div className="hotel-collapse__item">
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                        </div>
                    </Panel>
                    <Panel header="Nhóm tiện ích 3" key="3">
                        <div className="hotel-collapse__item">
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                            <span>Tiện ích 1</span>
                        </div>
                    </Panel>
                </Collapse>
            </div>

            <div className="hotel-heading">
                <h3>Phòng</h3>
                <span>Sửa</span>
            </div>
            <div className="hotel-room">
                <Row>
                    {images.map((image) => (
                        <Col span={6}>
                            <div className="hotel-room__images">
                                <Row>
                                    <Col span={24}>
                                        <LazyLoadImage
                                            alt={'ghj'}
                                            height={'100%'}
                                            src={image} // use normal <img> attributes as props
                                            width={'100%'}
                                            effect="blur"
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <LazyLoadImage
                                            alt={'ghj'}
                                            height={'100%'}
                                            src={image} // use normal <img> attributes as props
                                            width={'100%'}
                                            effect="blur"
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <LazyLoadImage
                                            alt={'ghj'}
                                            height={'100%'}
                                            src={image} // use normal <img> attributes as props
                                            width={'100%'}
                                            effect="blur"
                                        />
                                    </Col>
                                    <Col span={8}>
                                        <LazyLoadImage
                                            alt={'ghj'}
                                            height={'100%'}
                                            src={image} // use normal <img> attributes as props
                                            width={'100%'}
                                            effect="blur"
                                        />
                                    </Col>
                                    <Col span={24}>
                                        <div className="hotel-room__images--roomname">Phòng khách</div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Hotel;
